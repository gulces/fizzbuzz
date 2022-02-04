const {fizzbuzz} = require("./fizzbuzz.js")

describe("fizzbuzz", () => {
  it("returns 1 when given 1", () => {
    expect(fizzbuzz(1)).toEqual(1)
  })
  it("returns 2 when given 2", () => {
    expect(fizzbuzz(2)).toEqual(2)
  })
  it("returns fizz when given 3", () => {
    expect(fizzbuzz(3)).toEqual("fizz")
  })
  it("returns fizz when given 6", () => {
    expect(fizzbuzz(6)).toEqual("fizz")
  })
  it("returns buzz when given 5", () => {
    expect(fizzbuzz(5)).toEqual("buzz")
  })
  it("returns buzz when given 10", () => {
    expect(fizzbuzz(10)).toEqual("buzz")
  })
  it("returns fizzbuzz when given 15", () => {
    expect(fizzbuzz(15)).toEqual("fizzbuzz")
  })
  it("returns fizzbuzz when given 45", () => {
    expect(fizzbuzz(45)).toEqual("fizzbuzz")
  })
})
