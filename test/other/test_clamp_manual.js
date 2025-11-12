import { expect } from "chai";
import clamp from "../../src/clamp.js";

/**
 * Clamps `number` within the inclusive `lower` and `upper` bounds.
 *
 * @since 4.0.0
 * @category Number
 * @param {number} number The number to clamp.
 * @param {number} lower The lower bound.
 * @param {number} upper The upper bound.
 * @returns {number} Returns the clamped number.
 * @example
 *
 * clamp(-10, -5, 5)
 * // => -5
 *
 * clamp(10, -5, 5)
 * // => 5
 */
describe("Tests for clamp.js", () => {
  it("returns lower when number is below lower", () => {
    expect(clamp(-10, -5, 5)).to.equal(-5);
  });
});


