import assert from 'assert';
import jsonpP from '../src';

describe('jsonpP', () => {
  it('OK', () => {
    const expected = {
      jsonpP: 'ok'
    };
    return jsonpP('http://www.mocky.io/v2/5611517d1200002c23953036').promise
      .then(res => assert.deepEqual(res, expected, 'ok'));
  });
  it('Cancel', () => {
    const { cancel, promise } = jsonpP('http://www.mocky.io/v2/5611517d1200002c23953036');
    assert(typeof cancel, 'function');
    cancel();
    return promise.catch(error => assert(error instanceof Error));
  });
});
