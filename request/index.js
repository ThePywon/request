"use strict";

const { GetOptions, PostOptions } = require("./Options");

function RequestHandler(secure) {
  const handler = secure === undefined || secure ?
    require("https") : require("http");

  // Handle get requests
  async function Get(options) {
    options = GetOptions(options);

    if(options === undefined)
      throw new Error("https: Invalid options for GET request.");

    return await request({...options, method: "GET"});
  }

  // Handle post requests
  async function Post(options, data) {
    options = PostOptions(options);

    if(options === undefined)
      throw new Error("https: Invalid options for POST request.");

    return await request({...options, method: "POST"}, JSON.stringify(data));
  }

  // Receive request responses and call callback function
  function request(options, data) {
    return new Promise((resolve, reject) => {
      let result = "";
    
      const req = handler.request(options, res => {
    
        res.on('data', d => {
          // Push data onto the final result
          result += d.toString();
        });
        
        res.on('end', ()=> {
          try {
            try {
              // Try to parse response as JSON
              result = JSON.parse(result);
              resolve({
                path: options.path,
                method: data ? "POST" : "GET",
                content: result,
                headers: res.headers,
                status: {
                  code: res.statusCode,
                  message: res.statusMessage
                }
              })
            }
            // Try to send response as is
            catch(e){resolve({
              path: options.path,
              method: data ? "POST" : "GET",
              content: result,
              headers: res.headers,
              status: {
                code: res.statusCode,
                message: res.statusMessage
              }
            })}
          }
          // Send error if nothing was successfull
          catch(err) {resolve({err})}
        });
      });
    
      // Send error on resquest error
      req.on('error', err => {resolve({err})});
    
      // Write data if any
      data ? req.write(data) : null;
      // Send the request
      req.end();
    });
  }

  return { Get, Post };
}

module.exports = RequestHandler;
