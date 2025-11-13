import { expect } from "chai";
import filter from "../../src/filter.js";

/**
 * Iterates over elements of `array`, returning an array of all elements
 * `predicate` returns truthy for. The predicate is invoked with three
 * arguments: (value, index, array).
 *
 * **Note:** Unlike `remove`, this method returns a new array.
 *
 * @since 5.0.0
 * @category Array
 * @param {Array} array The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 * @see pull, pullAll, pullAllBy, pullAllWith, pullAt, remove, reject
 * @example
 *
 * const users = [
 *   { 'user': 'barney', 'active': true },
 *   { 'user': 'fred',   'active': false }
 * ]
 *
 * filter(users, ({ active }) => active)
 * // => objects for ['barney']
 */
describe("Tests for filter.js", () => {
  it("Should return empty array for empty input", () => {
    expect(filter([], n => n)).to.deep.equal([]);
  });
  it("Should filter active users", () => {
    const users = [
      { user: "Pekka", active: true },
      { user: "Kalle", active: false },
      { user: "Veikko", active: true }
    ];
    const result = filter(users, ({ active }) => active);
    expect(result).to.deep.equal([
      { user: "Pekka", active: true },
      { user: "Veikko", active: true }
    ]);
  });
  it("Should return numbers bigger than 2", () => {
    const result = filter([1, 2, 3, 4, 5, 6], n => n > 2);
    expect(result).to.deep.equal([3, 4, 5, 6]);
  });
  it("Should return empty array if predicate always false", () => {
    const result = filter([1, 2, 3], () => false);
    expect(result).to.deep.equal([]);
  });
  it("Should return full array if predicate always true", () => {
    const arr = [1, 2, 3];
    expect(filter(arr, () => true)).to.deep.equal(arr);
  });
  it("Should throw TypeError if predicate is null or undefined", () => {
    const arr = [1, 2, 3];
    expect(() => filter(arr, null)).to.throw(TypeError);
    expect(() => filter(arr, undefined)).to.throw(TypeError)
  });
  it("Should return empty array for null or undefined array", () => {
    expect(filter(null, n => n)).to.deep.equal([]);
    expect(filter(undefined, n => n)).to.deep.equal([]);
  });
  it("Should not mutate original array", () => {
    const arr = [1, 2, 3];
    const copy = [...arr];
    filter(arr, n => n > 1);
    expect(arr).to.deep.equal(copy);
  });
  it("Should treat string as array-like", () => {
    expect(filter("abcd", c => c > "b")).to.deep.equal(["c", "d"]);
  });
  it("Should work with array that has arrays inside", () => {
    expect(filter([[1,2],[3,4],[4,5]], c => c.indexOf(2) == -1)).to.deep.equal([[3,4],[4,5]]);
  });
  it("Should filter out falsy values", () => {
    const arr = [0, 1, false, 2, "", 3, null];
    const result = filter(arr, Boolean);
    expect(result).to.deep.equal([1, 2, 3]);
  });
});