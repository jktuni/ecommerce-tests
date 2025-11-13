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
  it("Should return lower when number is below lower", () => {
    expect(clamp(-10, -5, 5)).to.equal(-5);
  });
  it("Should return upper when number is over upper", () => {
    expect(clamp(10, -5, 5)).to.equal(5);
  });
  it("Should return actual number when in range", () => {
    expect(clamp(3, 0, 5)).to.equal(3);
  });
  it("Should handle lower bound undefined as zero", () => {
    expect(clamp(3, undefined, 5)).to.equal(3);
  });
  it("Should handle upper bound undefined as zero", () => {
    expect(clamp(3, 0, undefined)).to.equal(3);
  });
  it("Should return actual number when on boundary (upper)", () => {
    expect(clamp(5, -5, 5)).to.equal(5);
  });
  it("Should return actual number when on boundary (lower)", () => {
    expect(clamp(-5, -5, 5)).to.equal(-5);
  });
  it("Should return upper boundary for positive infinity", () => {
    expect(clamp(Infinity, -5, 5)).to.equal(5);
  });
  it("Should return lower boundary for negative infinity", () => {
    expect(clamp(-Infinity, -5, 5)).to.equal(-5);
  });
  it("Should return actual number with infinity boundaries", () => {
    expect(clamp(5, -Infinity, Infinity)).to.equal(5);
  });
  it("Should handle null as zero", () => {
    expect(clamp(null, -5, 5)).to.equal(0);
  });
  it("Should handle null as zero as lower boundary", () => {
    expect(clamp(3, null, 5)).to.equal(3);
  });
  it("Should return NaN if number is NaN", () => {
    expect(clamp(NaN, -5, 5)).to.be.NaN;
  });
});
