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
  it("Decimal 3.2, should return 3.2", () => {
    expect(toNumber(3.2)).to.equal(3.2);
  });
  it("Decimal -3.2, should return -3.2", () => {
    expect(toNumber(-3.2)).to.equal(-3.2);
  });
  it("Zero, should return 0", () => {
    expect(toNumber(-3.2)).to.equal(-3.2);
  });
  it("Decimal with comma 3,2, should return 3.2", () => {
    expect(toNumber(3,2)).to.equal(3.2);
  });
  it("Number.MIN_VALUE, should return 5e-324", () => {
    expect(toNumber(Number.MIN_VALUE)).to.equal(5e-324);
  });
  it("Infinity, should return Infinity", () => {
    expect(toNumber(Infinity)).to.equal(Infinity);
  });
  it("String '3.2', should return 3.2", () => {
    expect(toNumber('3.2')).to.equal(3.2);
  });
  it("String '3,2', should return 3.2", () => {
    expect(toNumber('3,2')).to.equal(3.2);
  });
  it("String 'Cat', should return NaN", () => {
    expect(toNumber('Cat')).to.be.NaN;
  });
  it("Boolean true, should return 1", () => {
    expect(toNumber(true)).to.equal(1);
  });
  it("Boolean false, should return 0", () => {
    expect(toNumber(false)).to.equal(0);
  });
  it("Null, should return 0", () => {
    expect(toNumber(null)).to.equal(0);
  });
  it("Undefined, should return NaN", () => {
    expect(toNumber(undefined)).to.be.NaN;
  });
  it("Empty string '', should return 0", () => {
    expect(toNumber("")).to.equal(0);
  });
  it("String with whitespace '  42  ', should return 42", () => {
    expect(toNumber("  42  ")).to.equal(42);
  });
  it("String '-10', should return -10", () => {
    expect(toNumber("-10")).to.equal(-10);
  });
  it("Plain object {}, should return NaN", () => {
    expect(toNumber({})).to.be.NaN;
  });
  it("Array [5], should return 5", () => {
    expect(toNumber([5])).to.equal(5);
  });
  it("Array [1,2], should return NaN", () => {
    expect(toNumber([1,2])).to.be.NaN;
  });
});