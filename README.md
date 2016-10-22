# jsonp-p

[![npm version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Dependency Status][david-image]][david-url]
[![Devdependency Status][david-dev-image]][david-dev-url]
[![License][license-image]][license-url]

[jsonp](https://github.com/webmodules/jsonp) promisify wrapper.

## Getting started

```
npm i jsonp-p
```

## Usage

```js
import jsonpP from 'jsonp-p';

jsonpP(url, jsonpOpts).promise
  .then(response => {})
  .catch(error => {});
```

**Promise is required**

### `jsonpOpts`

[https://github.com/webmodules/jsonp#jsonpurl-opts-fn](https://github.com/webmodules/jsonp#jsonpurl-opts-fn)

### Cancel

```js
const { cancel } = jsonpP(url);
cancel(); // Canceled
```

## Contributing

1. Fork it!
2. Create your feature branch: git checkout -b my-new-feature
3. Commit your changes: git commit -am 'Add some feature'
4. Push to the branch: git push origin my-new-feature
5. Submit a pull request :D

## License

[MIT][license-url]

© sugarshin

[npm-image]: https://img.shields.io/npm/v/jsonp-p.svg?style=flat-square
[npm-url]: https://www.npmjs.org/package/jsonp-p
[david-image]: https://david-dm.org/sugarshin/jsonp-p.svg?style=flat-square
[david-url]: https://david-dm.org/sugarshin/jsonp-p
[david-dev-image]: https://david-dm.org/sugarshin/jsonp-p/dev-status.svg?style=flat-square
[david-dev-url]: https://david-dm.org/sugarshin/jsonp-p#info=devDependencies
[travis-image]: https://img.shields.io/travis/sugarshin/jsonp-p/master.svg?branch=master&style=flat-square
[travis-url]: https://travis-ci.org/sugarshin/jsonp-p
[license-image]: https://img.shields.io/:license-mit-blue.svg?style=flat-square
[license-url]: https://sugarshin.mit-license.org/
