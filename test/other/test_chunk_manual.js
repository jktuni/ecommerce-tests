import { expect } from "chai";
import chunk from "../../src/chunk.js";

/**
 * Creates an array of elements split into groups the length of `size`.
 * If `array` can't be split evenly, the final chunk will be the remaining
 * elements.
 *
 * @since 3.0.0
 * @category Array
 * @param {Array} array The array to process.
 * @param {number} [size=1] The length of each chunk
 * @returns {Array} Returns the new array of chunks.
 * @example
 *
 * chunk(['a', 'b', 'c', 'd'], 2)
 * // => [['a', 'b'], ['c', 'd']]
 *
 * chunk(['a', 'b', 'c', 'd'], 3)
 * // => [['a', 'b', 'c'], ['d']]
 */
describe("Tests for chunk.js", () => {
  it("Should split an array (['a','b','c','d']) into chunks of specified size 2", () => {
    expect(chunk(['a','b','c','d'],2)).to.deep.equal([['a','b'],['c','d']]);
  });
  it("Should handle arrays ([1,2,3,4,5]) that cannot be split evenly", () => {
    expect(chunk([1,2,3,4,5],2)).to.deep.equal([[1,2],[3,4],[5]]);
  });
  it("Should handle array of lenght < chunk size ([1,2,3],4)", () => {
    expect(chunk([1,2,3],4)).to.deep.equal([[1,2,3]]);
  });
  it("Should return each element in its own array when chunk size = 1", () => {
    expect(chunk([1, 2, 3], 1)).to.deep.equal([[1], [2], [3]]);
  });
  it("Should return an empty array when input is empty", () => {
    expect(chunk([], 2)).to.deep.equal([]);
  });
  it("Should treat string input as array-like and split into chunks", () => {
    expect(chunk('abcd', 2)).to.deep.equal([['a', 'b'], ['c', 'd']]);
  });
  it("Should return an empty array when chunk size is 0", () => {
    expect(chunk([1, 2, 3], 0)).to.deep.equal([]);
  });
  it("Should return an empty array when chunk size is negative", () => {
    expect(chunk([1, 2, 3], -1)).to.deep.equal([]);
  });
  it("Should handle non-integer chunk sizes by coercing to integer", () => {
    expect(chunk([1, 2, 3, 4], 1.9)).to.deep.equal([[1], [2], [3], [4]]);
  });
  it("Should chunk arrays containing sub-arrays correctly", () => {
    expect(chunk([[1,2],[3,4],[5,6],[7,8]], 2)).to.deep.equal([
      [[1,2],[3,4]], 
      [[5,6],[7,8]]
    ]);
  });
});