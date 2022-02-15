"use strict";

const https = require('https');

// Handle get requests
function Get(info, callback) {
  const options = {
    host: info.host,
    port: info.port || 443,
    path: "/" + info.path || "/",
    method: 'GET'
  }

  request(options, callback);
}

// Handle post requests
function Post(info, data, callback) {
  const options = {
    host: info.host,
    port: info.port || 443,
    path: info.path || "/",
    method: 'POST',
    headers: info.header || {}
  }

  request(options, callback, JSON.stringify(data));
}

// Receive request responses and call callback function
function request(options, callback, data) {
  let result = "";

  const req = https.request(options, res => {

    res.on('data', d => {
      // Push data onto the final result
      result += d.toString();
    });
    
    res.on('end', ()=> {
      try {
        try {
          // Try to parse response as JSON
          result = JSON.parse(result);
          callback({
            url:options.path,
            content:result,
            headers:res.headers,
            status:{
              code:res.statusCode,
              message:res.statusMessage
            }
        });
        }
        // Try to send response as is
        catch(e){callback({
          url:options.path,
          content:result,
          headers:res.headers,
          status:{
            code:res.statusCode,
            message:res.statusMessage
          }
        })}
      }
      // Send error if nothing was successfull
      catch(err) {callback({err});return}
    });
  });

  // Send error on resquest error
  req.on('error', err => {callback({err})});

  // Write data if any
  data ? req.write(data) : null;
  // Send the request
  req.end();
}
module.exports = { Get, Post };
