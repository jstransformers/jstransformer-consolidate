# jstransformer-consolidate

[Consolidate.js](https://github.com/tj/consolidate.js) support for [JSTransformers](http://github.com/jstransformers).

[![Build Status](https://img.shields.io/travis/jstransformers/jstransformer-foo/master.svg)](https://travis-ci.org/jstransformers/jstransformer-foo)
[![Coverage Status](https://img.shields.io/codecov/c/github/jstransformers/jstransformer-foo/master.svg)](https://codecov.io/gh/jstransformers/jstransformer-foo)
[![Dependency Status](https://img.shields.io/david/jstransformers/jstransformer-foo/master.svg)](http://david-dm.org/jstransformers/jstransformer-foo)
[![NPM version](https://img.shields.io/npm/v/jstransformer-foo.svg)](https://www.npmjs.org/package/jstransformer-foo)

## Installation

    npm install jstransformer-consolidate

## API

```js
var consolidate = require('jstransformer')(require('jstransformer-consolidate'))

var options = {
  engine: 'handlebars'
};
var locals = {
  title: 'Hello World!'
};
consolidate.renderAsync('<h1>{{title}}</h1>', options, locals, function (err, result) {
  result.body
  //=> '<h1>Hello World!</h1>'
});
```

## License

MIT
