import { expect } from "chai";
import toNumber from "../../src/toNumber.js";

/**
 * Converts `value` to a number.
 *
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @see isInteger, toInteger, isNumber
 * @example
 *
 * toNumber(3.2)
 * // => 3.2
 *
 * toNumber(Number.MIN_VALUE)
 * // => 5e-324
 *
 * toNumber(Infinity)
 * // => Infinity
 *
 * toNumber('3.2')
 * // => 3.2
 */
describe("Tests for toNumber.js", () => {
  it("Should return 3.2 when Decimal 3.2", () => {
    expect(toNumber(3.2)).to.equal(3.2);
  });
  it("Should return -3.2 when Decimal -3.2", () => {
    expect(toNumber(-3.2)).to.equal(-3.2);
  });
  it("Should return 0 when 0", () => {
    expect(toNumber(0)).to.equal(0);
  });
  it("Should return 3.2 when Decimal with comma 3,2", () => {
    expect(toNumber(3,2)).to.equal(3.2);
  });
  it("Should return 5e-324 when Number.MIN_VALUE", () => {
    expect(toNumber(Number.MIN_VALUE)).to.equal(5e-324);
  });
  it("Should return Infinity when Infinity", () => {
    expect(toNumber(Infinity)).to.equal(Infinity);
  });
  it("Should return 3.2 when String '3.2'", () => {
    expect(toNumber('3.2')).to.equal(3.2);
  });
  it("Should return 3.2 when String '3,2'", () => {
    expect(toNumber('3,2')).to.equal(3.2);
  });
  it("Should return NaN when String 'Cat'", () => {
    expect(toNumber('Cat')).to.be.NaN;
  });
  it("Should return 1 when Boolean true", () => {
    expect(toNumber(true)).to.equal(1);
  });
  it("Should return 0 when Boolean false", () => {
    expect(toNumber(false)).to.equal(0);
  });
  it("Should return 0 when Null", () => {
    expect(toNumber(null)).to.equal(0);
  });
  it("Should return NaN when Undefined", () => {
    expect(toNumber(undefined)).to.be.NaN;
  });
  it("Should return 0 when Empty string ''", () => {
    expect(toNumber("")).to.equal(0);
  });
  it("Should return 42 when String with whitespace '  42  '", () => {
    expect(toNumber("  42  ")).to.equal(42);
  });
  it("Should return -10 when String '-10'", () => {
    expect(toNumber("-10")).to.equal(-10);
  });
  it("Should return NaN when Plain object {}", () => {
    expect(toNumber({})).to.be.NaN;
  });
  it("Should return 5 when Array [5]", () => {
    expect(toNumber([5])).to.equal(5);
  });
  it("Should return NaN when Array [1,2]", () => {
    expect(toNumber([1,2])).to.be.NaN;
  });
});