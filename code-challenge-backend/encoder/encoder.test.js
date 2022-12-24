const encoder = require("./encoder");

describe("encoder", () => {
  it("should handle empty strings", () => {
    expect(encoder("")).toEqual("");
  });

  it("should handle strings with only one character", () => {
    expect(encoder("a")).toEqual("a1");
  });

  it("should handle strings with multiple repeated characters", () => {
    expect(encoder("aaa")).toEqual("a3");
    expect(encoder("bbbbbbbbb")).toEqual("b9");
  });

  it("should handle strings with mixed characters", () => {
    expect(encoder("null")).toEqual("n1u1l2");
    expect(encoder("abcdefghijklmnopqrstuvwxyz")).toEqual(
      "a1b1c1d1e1f1g1h1i1j1k1l1m1n1o1p1q1r1s1t1u1v1w1x1y1z1"
    );
    expect(encoder("bbbbbbbbbaaa")).toEqual("b9a3");
  });

  it("should throw an error if the input is not a string", () => {
    expect(() => encoder(123)).toThrow(Error, "Input must be a string");
    expect(() => encoder(true)).toThrow(Error, "Input must be a string");
    expect(() => encoder([1, 2, 3])).toThrow(Error, "Input must be a string");
    expect(() => encoder({ a: 1 })).toThrow(Error, "Input must be a string");
    expect(() => encoder(null)).toThrow(Error, "Input must be a string");
    expect(() => encoder(undefined)).toThrow(Error, "Input must be a string");
    expect(() => encoder(Symbol("foo"))).toThrow(
      Error,
      "Input must be a string"
    );
  });

  it("should throw an error if the input string contains non-alphabetic characters", () => {
    expect(() => encoder("abc123")).toThrow(
      Error,
      "Input string must contain only alphabetic characters"
    );
    expect(() => encoder("abcč")).toThrow(
      Error,
      "Input string must contain only alphabetic characters"
    );
    expect(() => encoder("a!b@c#")).toThrow(
      Error,
      "Input string must contain only alphabetic characters"
    );
  });

  it("should treat upper and lower case letters as different characters", () => {
    expect(encoder("ABCDEFGHIJKLMNOPQRSTUVWXYZ")).not.toEqual(
      encoder("abcdefghijklmnopqrstuvwxyz")
    );
  });

  it("should split consecutive characters into multiple pairs when the count exceeds single digits", () => {
    expect(encoder("AAAAAAAAAAAAAAA")).toEqual("A9A6");
  });
});
