const sum = require('../sum');

var expect = require('chai').expect;

describe('add test', function() {
  it('adds 1 + 2 to equal 3', function() {
    expect(sum(1, 1)).to.be.equal(2);
  });
});