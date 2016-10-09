/* eslint-disable max-nested-callbacks */

import assert from 'assert';
import jsonpP from '../src/jsonp-p';

describe('jsonpP', () => {
  describe('200', () => {
    it('ok', () => {
      const expected = {
        jsonpP: 'ok'
      };
      return jsonpP('http://www.mocky.io/v2/5611517d1200002c23953036')
        .then(res => assert.deepEqual(res, expected, 'ok'));
    });
  });
});
