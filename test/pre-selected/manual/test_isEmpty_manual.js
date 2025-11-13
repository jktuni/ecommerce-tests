import { expect } from "chai";
import isEmpty from "../../../src/isEmpty.js";

/**
 * Checks if `value` is an empty object, collection, map, or set.
 *
 * Objects are considered empty if they have no own enumerable string keyed
 * properties.
 *
 * Array-like values such as `arguments` objects, arrays, buffers, strings, or
 * jQuery-like collections are considered empty if they have a `length` of `0`.
 * Similarly, maps and sets are considered empty if they have a `size` of `0`.
 *
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is empty, else `false`.
 * @example
 *
 * isEmpty(null)
 * // => true
 *
 * isEmpty(true)
 * // => true
 *
 * isEmpty(1)
 * // => true
 *
 * isEmpty([1, 2, 3])
 * // => false
 *
 * isEmpty('abc')
 * // => false
 *
 * isEmpty({ 'a': 1 })
 * // => false
 */
describe("Human generated tests (From test plan) for isEmpty.js", () => {
  it("Should return false when string 'cat'", () => {
    expect(isEmpty("cat")).to.equal(false);
  });
  it("Should return true when number 1", () => {
    expect(isEmpty(1)).to.equal(true);
  });
  it("Should return true when bigInt 123n", () => {
    expect(isEmpty(123n)).to.equal(true);
  });
  it("Should return true when bigInt 123n", () => {
    expect(isEmpty(123n)).to.equal(true);
  });
  it("Should return true when boolean true", () => {
    expect(isEmpty(true)).to.equal(true);
  });
  it("Should return true when undefined ", () => {
    expect(isEmpty(undefined)).to.equal(true);
  });
  it("Should return true when symbol Symbol(“id”)", () => {
    expect(isEmpty(Symbol("id"))).to.equal(true);
  });
  it("Should return true when 0", () => {
    expect(isEmpty(0)).to.equal(true);
  });
  it("Should return false when array [1,2,3]", () => {
    expect(isEmpty([1,2,3])).to.equal(false);
  });
  it("Should return false when object {Name:”John”}", () => {
    expect(isEmpty({Name:"John"})).to.equal(false);
  });
  it("Should return true when function () => {console.log('Hello')}", () => {
    expect(isEmpty(() => {console.log("Hello")})).to.equal(true);
  });
  it("Should return true when date new Date()", () => {
    expect(isEmpty(new Date())).to.equal(true);
  });
});