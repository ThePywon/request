<div id="top" align="center">

<h1><a href="https://github.com/ThePywon/request">request</a></h1>
 
[![npm version](https://img.shields.io/npm/v/@protagonists/request)](https://npmjs.com/package/@protagonists/request)
[![npm downloads](https://img.shields.io/npm/dt/@protagonists/request)](https://npmjs.com/package/@protagonists/request)
[![discord server](https://img.shields.io/discord/937758194736955443?logo=discord&logoColor=white)](https://discord.gg/cwhj3EgqGP)
[![last commit](https://img.shields.io/github/last-commit/ThePywon/request)](https://github.com/ThePywon/request)
 
</div>



# About

A package that handles GET and POST requests

> Now works with version `1.0.8` of `@protagonists/coerce`

---

<br/><br/><br/>


# RequestHandler

A function that returns a [**Get**](https://github.com/ThePywon/https-handler/blob/main/documentation/Get.md) and [**Post**](https://github.com/ThePywon/https-handler/blob/main/documentation/Post.md) method for web requests

<br/>

**Syntax:** &nbsp; `RequestHandler(secure)`

|**Parameters**|**Types**|
|-|-|
|`secure`|[**Boolean**](https://javascript.info/types#boolean-logical-type)|

<br/>

**Returns:** &nbsp; [**Object**](https://javascript.info/object)

<br/>

### **Example**

**Code:**

```js
// Import set to "not secure"
const { Get, Post } = require("@protagonists/request")(false);

// Get http domain
Get({
  host: "somehttpdomain"
});
```

**Code:**

```js
// Import set to "secure"
const { Get, Post } = require("@protagonists/request")(true);

// Get https domain
Get({
  host: "somehttpsdomain"
});
```

---

<br/><br/><br/>

