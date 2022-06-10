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



# Options

## Description

A schema object used to parse/validate properties of the parameter `options` of the [**`Get`**](https://github.com/ThePywon/https-handler/blob/main/documentation/Get.md) function  
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

> `Path` is a custom [SchemaType](https://github.com/ThePywon/coerce/blob/main/documentation/SchemaType.md) which basically parses and converts everthing into a string, as well as prefixing it with a slash if not already starting with one

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
