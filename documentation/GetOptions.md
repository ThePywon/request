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



# GetOptions

## Description

A parsing function used to parse/validate properties of the parameter `options` of the [**`Get`**](https://github.com/ThePywon/https-handler/blob/main/documentation/Get.md) function  
Learn more about [Schema](https://github.com/ThePywon/coerce/blob/main/documentation/Schema.md)?

<br/><br/>

## Model

<br/>

```js
{
  host: String,
  port: SchemaTypes.IntRange(0, Number.MAX_SAFE_INTEGER),
  path: Path
}
```

> `Path` is a custom [SchemaType](https://github.com/ThePywon/coerce/blob/main/documentation/SchemaType.md) which basically parses and converts everthing into a [**String**](https://javascript.info/string), as well as prefixing it with a slash if not already starting with one

<br/><br/>

## Default values

<br/>

```js
{
  port: 443,
  path: '/'
}
```


<br/><br/><br/><br/><br/>

<h1 align="center">This is the bottom, there is nothing more.<br/>
Go <a href="#top">back up?</a></h1>
