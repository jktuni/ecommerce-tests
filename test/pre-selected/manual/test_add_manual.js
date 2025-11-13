import { expect } from "chai";
import add from "../../../src/add.js";

/**
 * Adds two numbers.
 *
 * @since 3.4.0
 * @category Math
 * @param {number} augend The first number in an addition.
 * @param {number} addend The second number in an addition.
 * @returns {number} Returns the total.
 * @example
 *
 * add(6, 4)
 * // => 10
 */
describe("Human generated (From test plan) tests for add.js", () => {
  it("Should return zero (0) when Both zero (0 + 0)", () => {
    expect(add(0,0)).to.equal(0);
  });
  it("Should return positive (1) when Zero and positive (0 + 1)", () => {
    expect(add(0,1)).to.equal(1);
  });
  it("Should return negative (-1) when Zero and negative (0 + -1)", () => {
    expect(add(0,-1)).to.equal(-1);
  });
  it("Should return positive (4) when Both positive (2 + 2)", () => {
    expect(add(2,2)).to.equal(4);
  });
  it("Should return negative (-4) when Both negative (-2 + -2)", () => {
    expect(add(-2,-2)).to.equal(-4);
  });
  it("Should return zero (0) when Negative and positive (-2 + 2)", () => {
    expect(add(-2,2)).to.equal(0);
  });
  it("Should return decimal (2.15) when The other has decimal (1.15 + 1)", () => {
    expect(add(-2,2)).to.equal(0);
  });
  it("Should return decimal (2.3) when Both have decimals (1.15 + 1.15)", () => {
    expect(add(-2,2)).to.equal(0);
  });
  it("Should return string ('Cat0') when Not a number and zero ('Cat' + 0)", () => {
    expect(add("Cat",0)).to.equal("Cat0");
  });
  it("Should return zero (0) when Undefined and zero (undefined + 0)", () => {
    expect(add(undefined,0)).to.equal(0);
  });
  it("Should return zero (0) when Null and zero  (null + 0)", () => {
    expect(add(null,0)).to.equal(0);
  });
  it("Should return string ('CatDog') when Both not numbers ('Cat' + 'Dog')", () => {
    expect(add("Cat","Dog")).to.equal("CatDog");
  });
});