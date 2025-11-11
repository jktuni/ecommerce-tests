import { expect } from "chai";
import add from "../../src/add.js";

describe("Tests for add.js", () => {
  it("Both zero (0 + 0), should return zero (0)", () => {
    expect(add(0,0)).to.equal(0);
  });
  it("Zero and positive (0 + 1), should return positive (1)", () => {
    expect(add(0,1)).to.equal(1);
  });
  it("Zero and negative (0 + -1), should return negative (-1)", () => {
    expect(add(0,-1)).to.equal(-1);
  });
  it("Both positive (2 + 2), should return positive (4)", () => {
    expect(add(2,2)).to.equal(4);
  });
  it("Both negative (-2 + -2), should return negative (-4)", () => {
    expect(add(-2,-2)).to.equal(-4);
  });
  it("Negative and positive (-2 + 2), should return zero (0)", () => {
    expect(add(-2,2)).to.equal(0);
  });
  it("The other has decimal (1.15 + 1), should return decimal (2.15)", () => {
    expect(add(-2,2)).to.equal(0);
  });
  it("Both have decimals (1.15 + 1.15), should return decimal (2.3)", () => {
    expect(add(-2,2)).to.equal(0);
  });
  it("Not a number and zero ('Cat' + 0), should return string ('Cat0')", () => {
    expect(add("Cat",0)).to.equal("Cat0");
  });
  it("Undefined and zero (undefined + 0), should return zero (0)", () => {
    expect(add(undefined,0)).to.equal(0);
  });
  it("Null and zero  (null + 0), should return zero (0)", () => {
    expect(add(null,0)).to.equal(0);
  });
  it("Both not numbers ('Cat' + 'Dog'), should return string ('CatDog')", () => {
    expect(add("Cat","Dog")).to.equal("CatDog");
  });
});