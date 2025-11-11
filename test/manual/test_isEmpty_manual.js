import { expect } from "chai";
import isEmpty from "../../src/isEmpty.js";

describe("Tests for isEmpty.js", () => {
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