/*!
 * @license jsonp-p
 * (c) sugarshin
 * License: MIT
 */

'use strict';

import jsonp from 'jsonp';
import assign from 'object-assign';
import qs from 'qs';

const qsStringifyOpts = {
  arrayFormat: 'repeat',
  strictNullHandling: true
};

/**
 * jsonpP
 *
 * @param {String} url  request url
 * @param {Object} config  for jsonp config
 *   timeout: 60000
 *   prefix: '__jp'
 *   name: prefix + incremented counter
 * @param {Object} queryParams  rest params
 * @returns {Promise}
 */
export default function jsonpP(url, config, ...queryParams) {
  return new Promise((resolve, reject) => {
    const opts = assign({}, config, {
      param: qs.stringify(assign({}, ...queryParams), qsStringifyOpts)
    });

    jsonp(url, opts, (err, res) => {
      if (err) reject(err);
      resolve(res);
    });
  });
}
