<div id="top" align="center">

<h1><a href="https://github.com/ThePywon/https-handler">https</a></h1>
 
[![npm version](https://img.shields.io/npm/v/@protagonists/https)](https://npmjs.com/package/@protagonists/https)
[![npm downloads](https://img.shields.io/npm/dt/@protagonists/https)](https://npmjs.com/package/@protagonists/https)
[![discord server](https://img.shields.io/discord/937758194736955443?logo=discord&logoColor=white)](https://discord.gg/cwhj3EgqGP)
[![last commit](https://img.shields.io/github/last-commit/ThePywon/https-handler)](https://github.com/ThePywon/https-handler)
 
</div>



# About

A package that handles GET and POST requests

---

<br/><br/><br/>



# Get [![Async](https://shields.io/badge/-Async-magenta)](https://javascript.info/async-await)

A function that handles any GET request

<br/>

**Syntax:** &nbsp; `Get(options)`

|**Parameters**|**Types**|
|-|-|
|`options`|[**GetOptions**](https://github.com/ThePywon/https-handler/blob/main/documentation/GetOptions.md)|

<br/>

**Returns:** &nbsp; [**Object**](https://javascript.info/object)

<br/>

### **Example**

**Code:**

```js
const { Get } = require("@protagonists/https");

Get({
  host: "picsum.photos",
  path: "200"
}).then(console.log);
```

**Output:**

```
{
  path: '/200',
  method: 'GET',
  content: '',
  headers: {
    date: 'Fri, 10 Jun 2022 19:01:07 GMT',
    'content-length': '0',
    connection: 'close',
    location: 'https://i.picsum.photos/id/785/200/200.jpg?hmac=vvHnS4TgoGTRqwI2soaIhbOxE7Q-hhoZTTDe75h_fz4',
    'strict-transport-security': 'max-age=15552000',
    'access-control-allow-origin': '*',
    'cache-control': 'no-cache, no-store, must-revalidate',
    'cf-cache-status': 'DYNAMIC',
    'expect-ct': 'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    'report-to': '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=bdpx8Ct1DIv4Xv%2B7iEdtRNy%2FaSMEhwqkZgm6BN3gYAJtOqoR8AJJqb5iVFxbNIv3MNUrvmrH0yW%2BSju8FflTNnY%2B4maTQ5pm1I9X8pMqY5P32XA20Fg0pObh47WWQnI%3D"}],"group":"cf-nel","max_age":604800}',
    nel: '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
    'x-content-type-options': 'nosniff',
    server: 'cloudflare',
    'cf-ray': '71945a8f4b7decea-YUL',
    'alt-svc': 'h3=":443"; ma=86400, h3-29=":443"; ma=86400'
  },
  status: { code: 302, message: 'Found' }
}
```

<br/>

**Code:**

```js
const { Get } = require("@protagonists/https");

Get({
  host: "cry-vs.herokuapp.com",
  path: "api/v0/login"
}).then(console.log);
```

**Output:**

```
{
  path: '/api/v0/login',
  method: 'GET',
  content: "path '/api/v0/login' should always be requested with method 'POST'.",
  headers: {
    server: 'Cowboy',
    connection: 'close',
    date: 'Fri, 10 Jun 2022 19:10:17 GMT',
    'content-length': '67',
    via: '1.1 vegur'
  },
  status: { code: 405, message: 'Unexpected method.' }
}
```

---



<br/><br/><br/><br/><br/>

<h1 align="center">This is the bottom, there is nothing more.<br/>
Go <a href="#top">back up?</a></h1>
