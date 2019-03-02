const getAll = require('./second');

describe('all cases', () => {
  it('first test', () => {
    const result = getAll(6);
    expect(result).toBe(9);
  })
})