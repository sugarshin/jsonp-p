# jsonp-p

[![Build Status][travis-image]][travis-url]
[![Dependency Status][david-image]][david-url]
[![Devdependency Status][david-dev-image]][david-dev-url]
[![GitHub version][github-ver-image]][github-ver-url]
[![License][license-image]][license-url]

[jsonp](https://github.com/webmodules/jsonp) promisify wrapper.

## Getting started

```
npm i jsonp-p
```

## Usage

```js
import jsonpP from 'jsonp-p';

jsonpP(url, jsonpOpts)
  .then(response => {})
  .catch(error => {});
```

**Promise is required**

### `jsonpOpts`

[https://github.com/webmodules/jsonp#jsonpurl-opts-fn](https://github.com/webmodules/jsonp#jsonpurl-opts-fn)

opts

## Contributing

1. Fork it!
2. Create your feature branch: git checkout -b my-new-feature
3. Commit your changes: git commit -am 'Add some feature'
4. Push to the branch: git push origin my-new-feature
5. Submit a pull request :D

## License

[MIT][license-url]

© sugarshin

[npm-image]: http://img.shields.io/npm/v/jsonp-p.svg
[npm-url]: https://www.npmjs.org/package/jsonp-p
[david-image]: https://david-dm.org/sugarshin/jsonp-p.svg
[david-url]: https://david-dm.org/sugarshin/jsonp-p
[david-dev-image]: https://david-dm.org/sugarshin/jsonp-p/dev-status.svg
[david-dev-url]: https://david-dm.org/sugarshin/jsonp-p#info=devDependencies
[travis-image]: http://img.shields.io/travis/sugarshin/jsonp-p/master.svg?branch=master
[travis-url]: https://travis-ci.org/sugarshin/jsonp-p
[github-ver-image]: https://badge.fury.io/gh/sugarshin%2Fjsonp-p.svg
[github-ver-url]: http://badge.fury.io/gh/sugarshin%2Fjsonp-p
[license-image]: http://img.shields.io/:license-mit-blue.svg
[license-url]: http://sugarshin.mit-license.org/
