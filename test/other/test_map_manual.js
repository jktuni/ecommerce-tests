import { expect } from "chai";
import add from "../../src/map.js";

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
  it("Both zero (0 + 0), should return zero (0)", () => {
    expect(add(0,0)).to.equal(0);
  });
});