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



# Post [![Async](https://shields.io/badge/-Async-magenta)](https://javascript.info/async-await)

A function that handles any POST request

<br/>

**Syntax:** &nbsp; `Post(options)`

|**Parameters**|**Types**|
|-|-|
|`options`|[**PostOptions**](https://github.com/ThePywon/https-handler/blob/main/documentation/PostOptions.md)|

<br/>

**Returns:** &nbsp; [**Object**](https://javascript.info/object)

<br/>

### **Example**

**Code:**

```js
const { Post } = require("@protagonists/https");

Post({
  host: "cry-vs.herokuapp.com",
  path: "api/v0/login"
}, {
  username: "test",
  password: "test"
}).then(console.log);
```

**Output:**

```
{
  path: '/api/v0/login',
  method: 'POST',
  content: 'nJ9DAyC61T-ZS992-KpY-zxCbbFkqYP',
  headers: {
    server: 'Cowboy',
    connection: 'close',
    user: 'test',
    expire: '600000',
    key: 'false',
    date: 'Fri, 10 Jun 2022 19:26:25 GMT',
    'content-length': '31',
    via: '1.1 vegur'
  },
  status: { code: 200, message: 'OK' }
}
```

---



<br/><br/><br/><br/><br/>

<h1 align="center">This is the bottom, there is nothing more.<br/>
Go <a href="#top">back up?</a></h1>
