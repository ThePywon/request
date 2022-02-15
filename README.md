# Https Handler

A simple package that handles https requests so you don't have to!

# Table of content

* [How to use?](#how-to-use)
* [Functions](#functions)
  * [`Handler.Get`](#handlerget)
  * [`Handler.Post`](#handlerpost)
* [Data Objects](#data-objects)
  * [`Info`](#info)
  * [`Response`](#response)

# How to use?

First up, lets install it

`npm i @protagonists/https`

```js
const Handler = require("@protagonists/https");
```

You can then use it to send `GET` or `POST` requests to apis like so:

```js
Handler.Get({
  host:"MyApi.com",
  path:"TheEndpointINeed"
}, res=>{
  if(res.status.code === 200)
    console.log(`We just got some data: ${res.content}`);
});
```

You can quickly see why it is so useful

It is even used in other packages such as [`@protagonists/cry_vs`](https://www.npmjs.com/package/@protagonists/cry_vs) and in the [**`Crypto Versus`**](https://github.com/ProtagonistsWasTaken/crypto_versus) api itself!

# Functions

## Handler.Get

### Description

This function sends a `GET` request to the specified domain endpoint

### Syntax

```js
Handler.Get(info: Any, callback: Any)
```

*info is expected to follow the [`Info`] object format

### Example

#### Code:

```js
Handler.Get({
  host:"SomeDomain",
  path:"Endpoint", // Defaults to "/"
  port:443, // Defaults to 443
}, function myCallback(res) {
  if(res.status.code === 200) {
    // Success
  }
  else {
    // Error
  }
});
```

*res will be returned in this [`Response`](#response) object format

## Handler.Post

### Description

This function sends a `Post` request to the specified domain endpoint

### Syntax

```js
Handler.Post(info: Any, data: Any, callback: Any)
```

*data can be any value, not only objects

*info is expected to follow the [`Info`](#info) object format

### Example

#### Code:

```js
Handler.Post({
  host:"SomeDomain",
  path:"Endpoint", // Defaults to "/"
  port:443, // Defaults to 443
}, {
  name:"my data object"
}, function myCallback(res) {
  if(res.status.code === 200) {
    // Success
  }
  else {
    // Error
  }
});
```

*res will be returned in this [`Response`](#response) object format

# Data Objects

## Info

### Description

This is the expected format whenever you want to make a request

### Properties

`host` *String*  
Determines the domain the handler will request to

`path?` *String*  
Determines the endpoint the handler will request to

`port?` *Number*  
Determines the port the handler will use to send the request

## Response

### Description

This is the format of the passed response object in the callback

### Properties

`url` *String*  
Holds the requested endpoint

`content` *String*  
Holds the response's stringified content

`headers` *Object*  
Holds an object containing all the response's headers as properties

`status.code` *Number*  
Holds the response's status code  
for a list of http status codes, check the link right below:  
[Wikipedia - List of HTTP status codes](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes)

`status.message` *String*  
Holds the response's status message, corresponding to the status code

# Github

<https://github.com/ThePywon/https-handler>
