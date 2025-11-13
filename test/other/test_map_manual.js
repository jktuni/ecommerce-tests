import { expect } from "chai";
import map from "../../src/map.js";

/**
 * Creates an array of values by running each element of `array` thru `iteratee`.
 * The iteratee is invoked with three arguments: (value, index, array).
 *
 * @since 5.0.0
 * @category Array
 * @param {Array} array The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 * @example
 *
 * function square(n) {
 *   return n * n
 * }
 *
 * map([4, 8], square)
 * // => [16, 64]
 */
describe("Tests for map.js", () => {
  it("Should map values using a square function", () => {
    const result = map([4, 8], (n) => n * n);
    expect(result).to.deep.equal([16, 64]);
  });
  it("Should handle array of objects and extract property", () => {
    const users = [{ name: "Veikko" }, { name: "Pentti" }];
    expect(map(users, (u) => u.name)).to.deep.equal(["Veikko", "Pentti"]);
  });
  it("Should return empty array for empty input", () => {
    expect(map([], (n) => n)).to.deep.equal([]);
  });
  it("Should return empty array when input is null or undefined", () => {
    expect(map(null, (n) => n)).to.deep.equal([]);
    expect(map(undefined, (n) => n)).to.deep.equal([]);
  });
  it("Should throw TypeError if predicate is null or undefined", () => {
    const arr = [1, 2, 3];
    expect(() => map(arr, null)).to.throw(TypeError);
    expect(() => map(arr, undefined)).to.throw(TypeError)
  });
  it("Should treat string as array", () => {
    expect(map("abcd", (n) => n.toUpperCase())).to.deep.equal(['A','B','C','D']);
  });
  it("Should not mutate the original array", () => {
    const arr = [1, 2, 3];
    const copy = [...arr];
    map(arr, n => n * 2);
    expect(arr).to.deep.equal(copy);
  });
  it("Should handle nulls and undefined inside array", () => {
    const result = map([null, undefined, 2], v => (v == null ? 0 : v * 2));
    expect(result).to.deep.equal([0, 0, 4]);
  });
});
