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
  it("string 'cat', should return false", () => {
    expect(isEmpty("cat")).to.equal(false);
  });
  it("number 1, should return true", () => {
    expect(isEmpty(1)).to.equal(true);
  });
  it("bigInt 123n, should return true", () => {
    expect(isEmpty(123n)).to.equal(true);
  });
  it("bigInt 123n, should return true", () => {
    expect(isEmpty(123n)).to.equal(true);
  });
  it("boolean true, should return true", () => {
    expect(isEmpty(true)).to.equal(true);
  });
  it("undefined, should return true", () => {
    expect(isEmpty(undefined)).to.equal(true);
  });
  it("symbol Symbol(“id”), should return true", () => {
    expect(isEmpty(Symbol("id"))).to.equal(true);
  });
  it("0 , should return true", () => {
    expect(isEmpty(0)).to.equal(true);
  });
  it("array [1,2,3], should return false", () => {
    expect(isEmpty([1,2,3])).to.equal(false);
  });
  it("object {Name:”John”}, should return false", () => {
    expect(isEmpty({Name:"John"})).to.equal(false);
  });
  it("function () => {console.log('Hello')} , should return true", () => {
    expect(isEmpty(() => {console.log("Hello")})).to.equal(true);
  });
  it("date new Date(), should return true", () => {
    expect(isEmpty(new Date())).to.equal(true);
  });
});