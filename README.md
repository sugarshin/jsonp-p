# jsonp-p

[![Build Status][travis-image]][travis-url]
[![GitHub version][github-ver-image]][github-ver-url]
[![License][license-image]][license-url]

[jsonp](https://github.com/webmodules/jsonp) promisify wrapper.

## Getting started

```
npm i jsonp-p
```

## Usage

### `jsonpP(url, config, ...queryParams);`

```js
import jsonpP from 'jsonp-p';

jsonpP(url, jsonpOpts)
  .then(response => {})
  .catch(error => {});
```

**Promise is required**

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
[bower-image]: http://img.shields.io/bower/v/jsonp-p.svg
[bower-url]: http://bower.io/search/?q=jsonp-p
[travis-image]: http://img.shields.io/travis/sugarshin/jsonp-p/master.svg?branch=master
[travis-url]: https://travis-ci.org/sugarshin/jsonp-p
[gratipay-image]: http://img.shields.io/gratipay/sugarshin.svg
[gratipay-url]: https://gratipay.com/sugarshin/
[coveralls-image]: https://coveralls.io/repos/sugarshin/jsonp-p/badge.svg
[coveralls-url]: https://coveralls.io/r/sugarshin/jsonp-p
[github-ver-image]: https://badge.fury.io/gh/sugarshin%2Fjsonp-p.svg
[github-ver-url]: http://badge.fury.io/gh/sugarshin%2Fjsonp-p
[license-image]: http://img.shields.io/:license-mit-blue.svg
[license-url]: http://sugarshin.mit-license.org/
[downloads-image]: http://img.shields.io/npm/dm/jsonp-p.svg
[dependencies-image]: http://img.shields.io/david/sugarshin/jsonp-p.svg
