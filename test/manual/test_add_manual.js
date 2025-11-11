import { expect } from "chai";
import clamp from "../../src/add.js";

describe("Tests for add.js", () => {
  it("Both zero, should return zero", () => {
    expect(add(0,0)).to.equal(0);
  });
});


/* augend addend Case Expected result 
0 0 Both zero 0 
0 1 Zero and positive 1 
0 -1 Zero and negative -1 
2 2 Both positive 4 -2 -2 Both negative -4 -2 2 Negative and positive 0 
1.15 1 The other has decimals 2.15 
1.15 1.15 Both have decimals 2.3 
“Cat” 0 Not a number and zero Error (or “Cat0”) 
undefined 0 Undefined and zero Error (or 0) 
null 0 Null and zero Error (or 0) 
“Cat” “Dog” Both not numbers Error (or “CatDog”)
 */