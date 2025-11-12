import { expect } from "chai";
import add from "../../src/defaultTo.js";

/**
 * Checks `value` to determine whether a default value should be returned in
 * its place. The `defaultValue` is returned if `value` is `NaN`, `null`,
 * or `undefined`.
 *
 * @since 4.14.0
 * @category Util
 * @param {*} value The value to check.
 * @param {*} defaultValue The default value.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * defaultTo(1, 10)
 * // => 1
 *
 * defaultTo(undefined, 10)
 * // => 10
 */
describe("Tests for defaultTo.js", () => {
  it("Both zero (0 + 0), should return zero (0)", () => {
    expect(add(0,0)).to.equal(0);
  });
});