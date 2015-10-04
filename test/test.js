import { jsdom } from 'jsdom';
import assert from 'power-assert';

import jsonpP from '..';

global.document = jsdom('<html><head></head><body></body></html>');
global.window = document.defaultView;
global.navigator = window.navigator;

describe('jsonpP', () => {

  describe('200', () => {
    it('case 1', () => {
      const expected = {
        jsonpP: 'ok'
      };
      return jsonpP('http://www.mocky.io/v2/5611517d1200002c23953036')
        .then(res => {
          assert.deepEqual(res, expected, 'case 1');
        })
        .catch(err => console.log(err));
    });
  });

});
