/*!
 * @license jsonp-p
 * (c) sugarshin
 * License: MIT
 */

import jsonp from 'jsonp';

/**
 * jsonpP
 *
 * @param {String} url Request url.
 * @param {Object} config jsonp config options.
 *   https://github.com/webmodules/jsonp#jsonpurl-opts-fn
 *     param: 'callback',
 *     timeout: 60000,
 *     prefix: '__jp',
 *     name: prefix + Incremented counter
 * @returns {Object} { promise, cancel }
 */
export default function jsonpP(url, config) {
  let cancel;
  const promise = new Promise((resolve, reject) => {
    const originalCancel = jsonp(url, config, (err, res) => {
      if (err) { reject(err); }
      resolve(res);
    });
    cancel = () => {
      originalCancel();
      reject(new Error('Canceled'));
    };
  });
  return { promise, cancel };
}
