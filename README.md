<div id="top" align="center">

<h1><a href="https://github.com/ThePywon/request">request</a></h1>
 
[![npm version](https://img.shields.io/npm/v/@protagonists/request)](https://npmjs.com/package/@protagonists/request)
[![npm downloads](https://img.shields.io/npm/dt/@protagonists/request)](https://npmjs.com/package/@protagonists/request)
[![discord server](https://img.shields.io/discord/937758194736955443?logo=discord&logoColor=white)](https://discord.gg/cwhj3EgqGP)
[![last commit](https://img.shields.io/github/last-commit/ThePywon/request)](https://github.com/ThePywon/request)
 
</div>



# About

A package that handles GET and POST requests

> Now works with version `1.1.2` of `@protagonists/coerce`

---

<br/><br/><br/>



# Table of content

* [**How to use?**](#how-to-use)

> The content may not correspond to the object structure of the objects

* <details open><summary><a href="https://github.com/ThePywon/https-handler/blob/main/documentation/RequestHandler.md"><b>RequestHandler</b></a> &nbsp; <img src="https://img.shields.io/badge/-Exported-cyan"/></summary>
  <p>

  * [**Get**](https://github.com/ThePywon/https-handler/blob/main/documentation/Get.md)
  * [**GetOptions**](https://github.com/ThePywon/https-handler/blob/main/documentation/GetOptions.md)
  * [**Post**](https://github.com/ThePywon/https-handler/blob/main/documentation/Post.md)
  * [**PostOptions**](https://github.com/ThePywon/https-handler/blob/main/documentation/PostOptions.md)
    
  </p>
</details>

---

<br/><br/><br/>



# How to use?

## Description

This package makes it easier to use and handle basic web requests

## Import

### Terminal

> ```sh
> npm install @protagonists/request
> ```

### Node.js

> ```js
> const { Get, Post } = require("@protagonists/request")();
> ```

---



<br/>

## Example

### Code:

```js
const { Get, Post } = require("@protagonists/https")();

Get({
  host: "csrng.net",
  path: "csrng/csrng.php?min=0&max=100"
}).then(console.log);
```

<br/>

### Output:

```
{
  path: '/csrng/csrng.php?min=0&max=100',
  method: 'GET',
  content: [ { status: 'success', min: 0, max: 100, random: 33 } ],
  headers: {
    date: 'Fri, 10 Jun 2022 18:51:27 GMT',
    server: 'Apache/2.4.37 (Red Hat Enterprise Linux) OpenSSL/1.1.1k',
    'x-powered-by': 'PHP/7.4.29',
    connection: 'close',
    'transfer-encoding': 'chunked',
    'content-type': 'application/json; charset=utf-8'
  },
  status: { code: 200, message: 'OK' }
}
```

<br/><br/><br/><br/><br/>

<h1 align="center">This is the bottom, there is nothing more.<br/>
Go <a href="#top">back up?</a></h1>
