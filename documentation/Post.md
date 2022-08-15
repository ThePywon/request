<div id="top" align="center">

<h1><a href="https://github.com/ThePywon/request">request</a></h1>
 
[![npm version](https://img.shields.io/npm/v/@protagonists/request)](https://npmjs.com/package/@protagonists/request)
[![npm downloads](https://img.shields.io/npm/dt/@protagonists/request)](https://npmjs.com/package/@protagonists/request)
[![discord server](https://img.shields.io/discord/937758194736955443?logo=discord&logoColor=white)](https://discord.gg/cwhj3EgqGP)
[![last commit](https://img.shields.io/github/last-commit/ThePywon/request)](https://github.com/ThePywon/request)
 
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
const { Post } = require("@protagonists/request")();

Post({
  host: "google.com"
}, {some: "invalid data"}).then(console.log);
```

**Output:**

```
{
  path: '/',
  method: 'POST',
  content: '<!DOCTYPE html>\n' +
    '<html lang=en>\n' +
    '  <meta charset=utf-8>\n' +
    '  <meta name=viewport content="initial-scale=1, minimum-scale=1, width=device-width">\n' +
    '  <title>Error 405 (Method Not Allowed)!!1</title>\n' +
    '  <style>\n' +
    '    *{margin:0;padding:0}html,code{font:15px/22px arial,sans-serif}html{background:#fff;color:#222;padding:15px}body{margin:7% auto 0;max-width:390px;min-height:180px;padding:30px 0 15px}* > body{background:url(//www.google.com/images/errors/robot.png) 100% 5px no-repeat;padding-right:205px}p{margin:11px 0 22px;overflow:hidden}ins{color:#777;text-decoration:none}a img{border:0}@media screen and (max-width:772px){body{background:none;margin-top:0;max-width:none;padding-right:0}}#logo{background:url(//www.google.com/images/branding/googlelogo/1x/googlelogo_color_150x54dp.png) no-repeat;margin-left:-5px}@media only screen and (min-resolution:192dpi){#logo{background:url(//www.google.com/images/branding/googlelogo/2x/googlelogo_color_150x54dp.png) no-repeat 0% 0%/100% 100%;-moz-border-image:url(//www.google.com/images/branding/googlelogo/2x/googlelogo_color_150x54dp.png) 0}}@media only screen and (-webkit-min-device-pixel-ratio:2){#logo{background:url(//www.google.com/images/branding/googlelogo/2x/googlelogo_color_150x54dp.png) no-repeat;-webkit-background-size:100% 100%}}#logo{display:inline-block;height:54px;width:150px}\n' +
    '  </style>\n' +
    '  <a href=//www.google.com/><span id=logo aria-label=Google></span></a>\n' +
    '  <p><b>405.</b> <ins>That’s an error.</ins>\n' +
    '  <p>The request method <code>POST</code> is inappropriate for the URL <code>/</code>.  <ins>That’s all we know.</ins>\n',
  headers: {
    allow: 'GET, HEAD',
    date: 'Sat, 06 Aug 2022 22:47:16 GMT',
    'content-type': 'text/html; charset=UTF-8',
    server: 'gws',
    'content-length': '1589',
    'x-xss-protection': '0',
    'x-frame-options': 'SAMEORIGIN',
    'alt-svc': 'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
    connection: 'close'
  },
  status: { code: 405, message: 'Method Not Allowed' }
}
```

---



<br/><br/><br/><br/><br/>

<h1 align="center">This is the bottom, there is nothing more.<br/>
Go <a href="#top">back up?</a></h1>
