import { expect } from "chai";
import defaultTo from "../../src/defaultTo.js";

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
  it("Should return value if value is number", () => {
    expect(defaultTo(1, 10)).to.equal(1);
  });
  it("Should return defaultValue if value is undefined", () => {
    expect(defaultTo(undefined, 10)).to.equal(10);
  });
  it("Should return defaultValue if value is NaN", () => {
    expect(defaultTo(NaN, 10)).to.equal(10);
  });
  it("Should return defaultValue if value is null", () => {
    expect(defaultTo(null, 10)).to.equal(10);
  });
  it("Should return defaultValue (null) if value is undefined", () => {
    expect(defaultTo(undefined, null)).to.equal(null);
  });
  it("Should return value if value is string", () => {
    expect(defaultTo("Cat",10)).to.equal("Cat");
  });
  it("Should return value if value is array", () => {
    expect(defaultTo(["Cat","Dog"],10)).to.deep.equal(["Cat","Dog"]);
  });
  it("Should return value if value is object", () => {
    expect(defaultTo({name:"John"},10)).to.deep.equal({name:"John"});
  });
  it("Should return 0 if value is 0", () => {
    expect(defaultTo(0, 10)).to.equal(0);
  });
  it("Should return false if value is false", () => {
    expect(defaultTo(false, true)).to.equal(false);
  });
  it("Should return empty string if value is ''", () => {
    expect(defaultTo('', 'default')).to.equal('');
  });
  it("Should return undefined if both value and defaultValue are undefined", () => {
    expect(defaultTo(undefined, undefined)).to.equal(undefined);
  });
  it("Should return NaN if both value and defaultValue are NaN", () => {
    expect(Number.isNaN(defaultTo(NaN, NaN))).to.be.true;
  });
});