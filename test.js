const assert = require('assert');

Object.freeze(assert);

const sumOfOther = require('./src/sumOfOther.js');

describe('sumOfOther function', () => {
  it('should return sum of integers except current', () => {
    assert.deepEqual(sumOfOther([2, 3, 4, 1]), [8, 7, 6, 9]);
  });
  it('should return sum of integers except current', () => {
    assert.deepEqual(sumOfOther([5, 4, 4, 11]), [19, 20, 20, 13]);
  });
  it('should return sum of integers except current also for negative', () => {
    assert.deepEqual(sumOfOther([-2, 0, 14, 8, -10, 23]), [35, 33, 19, 25, 43, 10]);
  });
  it('should return sum of integers except current also for negative', () => {
    assert.deepEqual(sumOfOther([-2, 0, -5, 1, -10, 13]), [-1, -3, 2, -4, 7, -16]);
  });
  it('should return empty if array is empty', () => {
    assert.deepEqual(sumOfOther([]), []);
  });
  it('should return zero if array has length 1', () => {
    assert.deepEqual(sumOfOther([8]), [0]);
  });
});


const make = require('./src/make.js');

describe('make function', () => {
  it('should count value from arguments(add)', () => {
    const sum = (a, b) => a + b;
    assert.deepEqual(make(15)(34, 21, 666)(41)(sum), 777);
  });
  it('should count value from arguments(add)', () => {
    const sum = (a, b) => a + b;
    assert.deepEqual(make(-10)(721, 4)(2)(0, 11)(sum), 728);
  });
  it('should count value from arguments(substract)', () => {
    const sub = (a, b) => a - b;
    assert.deepEqual(make(2)(2, 13)(7, 11)(sub), -31, 'substract arguments');
  });
  it('should count value from arguments(divide)', () => {
    const div = (a, b) => Math.floor(a / b);
    assert.deepEqual(make(100)(4, 5)(2)(div), 2, 'divide arguments');
  });
  it('should count value from arguments(multiply and increase)', () => {
    const mult = (a, b) => (a * b) + 1;
    assert.deepEqual(make(265)(0, 8)(12)(mult), 109, 'multiply and increase');
  });
  it('should count value from arguments', () => {
    const count = (a, b) => (a * 2) + b;
    assert.deepEqual(make(5, 7)(11, -8, 3)(40)(count), 374);
  });
});

const recursion = require('./src/recursion.js');

describe('recursion function', () => {
  it('should return array from an object tree', () => {
    const tree = {
      value: 100,
      left: {
        value: 90,
        left: { value: 70 },
        right: { value: 99 },
      },
      right: { value: 120, left: { value: 110 }, right: { value: 130 } },
    };
    assert.deepEqual(recursion(tree), [[100], [90, 120], [70, 99, 110, 130]]);
  });
  it('should return array from an object tree', () => {
    const tree = {
      value: 25,
      left: {
        value: 16,
        left: { value: 10, left: 5, right: 11 },
        right: { value: 27, left: 24, right: 28 },
      },
      right: { value: 30, left: { value: 29 }, right: { value: 45 } },
    };
    assert.deepEqual(recursion(tree), [[25], [16, 30], [10, 27, 29, 45], [5, 11, 24, 28]]);
  });
});
