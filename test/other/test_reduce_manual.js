import { expect } from "chai";
import reduce from "../../src/reduce.js";

/**
 * Reduces `collection` to a value which is the accumulated result of running
 * each element in `collection` thru `iteratee`, where each successive
 * invocation is supplied the return value of the previous. If `accumulator`
 * is not given, the first element of `collection` is used as the initial
 * value. The iteratee is invoked with four arguments:
 * (accumulator, value, index|key, collection).
 *
 * Many lodash methods are guarded to work as iteratees for methods like
 * `reduce`, `reduceRight`, and `transform`.
 *
 * The guarded methods are:
 * `assign`, `defaults`, `defaultsDeep`, `includes`, `merge`, `orderBy`,
 * and `sortBy`
 *
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @returns {*} Returns the accumulated value.
 * @see reduceRight, transform
 * @example
 *
 * reduce([1, 2], (sum, n) => sum + n, 0)
 * // => 3
 *
 * reduce({ 'a': 1, 'b': 2, 'c': 1 }, (result, value, key) => {
 *   (result[value] || (result[value] = [])).push(key)
 *   return result
 * }, {})
 * // => { '1': ['a', 'c'], '2': ['b'] } (iteration order is not guaranteed)
 */
describe("Tests for reduce.js", () => {

  it("Should sum numbers with initial value", () => {
    const result = reduce([1, 2, 3], (sum, n) => sum + n, 0);
    expect(result).to.equal(6);
  });
  it("Should sum numbers without explicit initial value", () => {
    const result = reduce([1, 2, 3], (sum, n) => sum + n);
    expect(result).to.equal(6);
  });
  it("Should use 0 as initial value when provided", () => {
    const result = reduce([1, 2, 3], (sum, n) => sum + n, 0);
    expect(result).to.equal(6);
  });
  it("Should return undefined for empty array without initial value", () => {
    const result = reduce([], (sum, n) => sum + n);
    expect(result).to.equal(undefined);
  });
  it("Should return initial value for empty array with initial value", () => {
    const result = reduce([], (sum, n) => sum + n, 10);
    expect(result).to.equal(10);
  });
  it("Should reduce over object values", () => {
    const obj = { a: 1, b: 2, c: 3 };
    const result = reduce(obj, (sum, value) => sum + value, 0);
    expect(result).to.equal(6);
  });
  it("Should reduce object without explicit initial value", () => {
    const obj = { a: 1, b: 2, c: 3 };
    const result = reduce(obj, (sum, value) => sum + value);
    expect(result).to.equal(6);
  });
  it("Should throw TypeError if iteratee is not a function", () => {
    expect(() => reduce([1, 2, 3], null)).to.throw(TypeError);
  });
  it("Should not mutate original array", () => {
    const arr = [1, 2, 3];
    const copy = [...arr];
    reduce(arr, (sum, n) => sum + n, 0);
    expect(arr).to.deep.equal(copy);
  });
  it("Should return initial value when collection is null or undefined", () => {
    expect(reduce(null, (sum, n) => sum + n, 5)).to.equal(5);
    expect(reduce(undefined, (sum, n) => sum + n, 5)).to.equal(5);
  });
  it("Should iterate over string as array of chars", () => {
    const result = reduce("abc", (acc, c) => acc + c.toUpperCase(), "");
    expect(result).to.equal("ABC");
  });
  it("Should handle falsy initial values correctly", () => {
    const result = reduce([true, false, true], (acc, val) => acc && val, false);
    expect(result).to.equal(false);
  });
  it("Should build object from array using reduce", () => {
    const arr = ["a", "b", "c"];
    const result = reduce(arr, (acc, value, index) => {
      acc[index] = value;
      return acc;
    }, {});
    expect(result).to.deep.equal({ 0: "a", 1: "b", 2: "c" });
  });


});