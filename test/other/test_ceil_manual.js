import { expect } from "chai";
import ceil from "../../src/ceil.js";

/**
 * Computes `number` rounded up to `precision`. (Round up: the smallest integer greater than or equal to a given number.)
 *
 * @since 3.10.0
 * @category Math
 * @param {number} number The number to round up.
 * @param {number} [precision=0] The precision to round up to.
 * @returns {number} Returns the rounded up number.
 * @example
 *
 * ceil(4.006)
 * // => 5
 *
 * ceil(6.004, 2)
 * // => 6.01
 *
 * ceil(6040, -2)
 * // => 6100
 */
describe("Tests for ceil.js", () => {
  it("ceil(2.1), should return 3", () => {
    expect(ceil(2.1)).to.equal(3);
  });
  it("ceil(4.001, 2), should return 4.01", () => {
    expect(ceil(4.001, 2)).to.equal(4.01);
  });
  it("ceil(4001, -2), should return 4100", () => {
    expect(ceil(4001, -2)).to.equal(4100);
  });
  it("ceil(-2.1), should return -2", () => {
    expect(ceil(-2.1)).to.equal(-2);
  });
  it("ceil(-2.345, 2), should return -2.34", () => {
    expect(ceil(-2.345, 2)).to.equal(-2.34);
  });
  it("ceil(4.9, 0), should return 5", () => {
    expect(ceil(4.9, 0)).to.equal(5);
  });
  it("ceil(5), should return 5", () => {
    expect(ceil(5)).to.equal(5);
  });
  it("ceil(0), should return 0", () => {
    expect(ceil(0)).to.equal(0);
  });
  it("ceil(NaN), should return NaN", () => {
    expect(Number.isNaN(ceil(NaN))).to.be.true;
  });

});

