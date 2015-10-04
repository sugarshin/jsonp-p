/*!
 * @license jsonp-p
 * (c) sugarshin
 * License: MIT
 */

'use strict';

import jsonp from 'jsonp';

/**
 * jsonpP
 *
 * @param {String} url  request url
 * @param {Object} config  for jsonp opts
 * https://github.com/webmodules/jsonp#jsonpurl-opts-fn
 *   param: 'callback',
 *   timeout: 60000,
 *   prefix: '__jp',
 *   name: prefix + Incremented counter
 * @returns {Promise}
 */
export default function jsonpP(url, config) {
  return new Promise((resolve, reject) => {
    jsonp(url, config, (err, res) => {
      if (err) reject(err);
      resolve(res);
    });
  });
}
