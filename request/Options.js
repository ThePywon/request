const { Schema, SchemaType } = require("@protagonists/coerce");
const { StringType, IntRange } = require("@protagonists/coerce-basics");

class Path extends StringType {
  constructor() { super() }

  call(val) {
    val = super.call(val);

    if(val === undefined) return;

    return val.startsWith('/') ? val : '/' + val;
  }
}
class Headers extends SchemaType {
  constructor() { super() }

  call(val) {
    if(typeof val !== "object") return;

    const props = Object.getOwnPropertyNames(val);
    for(let i = 0; i < props.length; i++)
      if(typeof val[props[i]] !== "string") return;

    return val;
  }
}

const UnsignedInt = IntRange(0, Number.MAX_SAFE_INTEGER)

const GetOptions = new Schema({
  host: StringType,
  port: UnsignedInt,
  path: Path
});
GetOptions.setDefaults({
  port: 443,
  path: '/'
});

const PostOptions = new Schema({
  host: StringType,
  port: UnsignedInt,
  path: Path,
  headers: Headers
});
PostOptions.setDefaults({
  port: 443,
  path: '/',
  headers: {}
});

module.exports = { GetOptions, PostOptions }
