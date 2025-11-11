import { expect } from "chai";
import clamp from "../../src/clamp.js";

describe("Tests for clamp.js", () => {
  it("returns lower when number is below lower", () => {
    expect(clamp(-10, -5, 5)).to.equal(-5);
  });
});


