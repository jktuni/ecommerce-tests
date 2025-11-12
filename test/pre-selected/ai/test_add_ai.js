import { expect } from 'chai'
import add from "../../../src/add.js";

describe('AI (ChatGPT-5) generated tests for add.js', () => {
  it('should add two positive numbers', () => {
    expect(add(6, 4)).to.equal(10)
    expect(add(0, 5)).to.equal(5)
  })

  it('should add two negative numbers', () => {
    expect(add(-3, -7)).to.equal(-10)
  })

  it('should add a positive and a negative number', () => {
    expect(add(10, -3)).to.equal(7)
    expect(add(-5, 2)).to.equal(-3)
  })

  it('should return the same number if one argument is 0', () => {
    expect(add(5, 0)).to.equal(5)
    expect(add(0, 8)).to.equal(8)
  })

  it('should handle floating point numbers accurately', () => {
    expect(add(0.1, 0.2)).to.be.closeTo(0.3, 0.0000001)
    expect(add(-0.5, 1.2)).to.be.closeTo(0.7, 0.0000001)
  })

  it('should treat undefined second argument as 0', () => {
    expect(add(5)).to.equal(5)
  })

  it('should treat undefined first argument as 0', () => {
    expect(add(undefined, 5)).to.equal(5)
  })

  it('should coerce string numbers to numeric values', () => {
    expect(add('4', '6')).to.equal(10)
    expect(add('3.5', 2)).to.equal(5.5)
  })

  it('should return NaN when non-numeric strings are provided', () => {
    expect(add('abc', 5)).to.be.NaN
    expect(add(3, 'xyz')).to.be.NaN
  })

  it('should handle large numbers correctly', () => {
    expect(add(1e12, 1e12)).to.equal(2e12)
  })

  it('should handle null values as 0', () => {
    expect(add(null, 5)).to.equal(5)
    expect(add(7, null)).to.equal(7)
  })
})
