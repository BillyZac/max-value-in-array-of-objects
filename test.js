const assert = require('chai').assert;
const findMax = require('./');

describe('Max finder', () => {
  it('is a function', () => {
    assert.equal(typeof findMax, 'function');
  });
});
