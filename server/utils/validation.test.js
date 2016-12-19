const expect = require('expect');

const {isRealString} = require('./validation');

//isRealString
describe('isRealString', () => {
  it('should reject non-string values', () => {
    var num = 1;
    expect(isRealString(num)).toBe(false);
  });
  it('should reject string with only spaces', () => {
    var space = '      ';
    expect(isRealString(space)).toBe(false);
  });
  it('should allow string with non-space value', () => {
    var valid = ' Developer  ';
    expect(isRealString(valid)).toBe(true);
  });
});
