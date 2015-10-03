import { jsdom } from 'jsdom';
import assert from 'power-assert';

import jsonpP from '..';

global.document = jsdom('<html><head></head><body></body></html>');
global.window = document.defaultView;
global.navigator = window.navigator;

describe('jsonpP', () => {

  describe('.test()', () => {
    it('case 1', () => {
      assert(true);
    });
  });

});
