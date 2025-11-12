import { expect } from 'chai'
import isEmpty from "../../../src/isEmpty.js";

describe('AI (ChatGPT-5) generated tests forisEmpty', () => {

  it('should return true for null and undefined', () => {
    expect(isEmpty(null)).to.be.true
    expect(isEmpty(undefined)).to.be.true
  })

  it('should return true for booleans', () => {
    expect(isEmpty(true)).to.be.true
    expect(isEmpty(false)).to.be.true
  })

  it('should return true for numbers', () => {
    expect(isEmpty(0)).to.be.true
    expect(isEmpty(123)).to.be.true
    expect(isEmpty(NaN)).to.be.true
  })

  it('should return true for empty strings', () => {
    expect(isEmpty('')).to.be.true
  })

  it('should return false for non-empty strings', () => {
    expect(isEmpty('a')).to.be.false
    expect(isEmpty('abc')).to.be.false
  })

  it('should return true for empty arrays', () => {
    expect(isEmpty([])).to.be.true
  })

  it('should return false for non-empty arrays', () => {
    expect(isEmpty([1])).to.be.false
    expect(isEmpty([1, 2, 3])).to.be.false
  })

  it('should return true for empty objects', () => {
    expect(isEmpty({})).to.be.true
  })

  it('should return false for objects with own properties', () => {
    expect(isEmpty({ a: 1 })).to.be.false
  })

  it('should ignore inherited properties', () => {
    function Foo() {}
    Foo.prototype.a = 1
    expect(isEmpty(new Foo())).to.be.true
  })

  it('should return true for empty Map and Set', () => {
    expect(isEmpty(new Map())).to.be.true
    expect(isEmpty(new Set())).to.be.true
  })

  it('should return false for non-empty Map and Set', () => {
    const map = new Map()
    map.set('key', 'value')
    const set = new Set()
    set.add(42)
    expect(isEmpty(map)).to.be.false
    expect(isEmpty(set)).to.be.false
  })

  it('should return true for empty arguments object', function() {
    function fn() {
      return isEmpty(arguments)
    }
    expect(fn()).to.be.true
  })

  it('should return false for non-empty arguments object', function() {
    function fn() {
      return isEmpty(arguments)
    }
    expect(fn(1, 2, 3)).to.be.false
  })

  it('should return true for empty typed arrays', () => {
    expect(isEmpty(new Int8Array())).to.be.true
    expect(isEmpty(new Uint8Array(0))).to.be.true
  })

  it('should return false for non-empty typed arrays', () => {
    expect(isEmpty(new Int8Array([1, 2, 3]))).to.be.false
  })

  it('should return true for empty buffers', () => {
    const buf = Buffer.alloc(0)
    expect(isEmpty(buf)).to.be.true
  })

  it('should return false for non-empty buffers', () => {
    const buf = Buffer.from([1, 2, 3])
    expect(isEmpty(buf)).to.be.false
  })

  it('should return true for prototype objects with no own properties', () => {
    function Foo() {}
    expect(isEmpty(Foo.prototype)).to.be.true
  })

  it('should return false for prototype objects with own properties', () => {
    function Foo() {}
    Foo.prototype.a = 1
    const proto = Object.create(Foo.prototype)
    proto.b = 2
    expect(isEmpty(proto)).to.be.false
  })
})
