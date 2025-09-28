import { describe, it, expect } from "vitest";
import { findFirstMatchingChar } from "../src/findFirstMatchingChar";

describe("findFirstMatchingChar", () => {
  it("should return empty string if inputs are empty", () => {
    expect(findFirstMatchingChar("", "")).toEqual("");
  });

  it("should return single matching character", () => {
    const input = "A";
    expect(findFirstMatchingChar(input, input)).toEqual(input);
  });

  it("should return first matching character when all same case", () => {
    const stringA = "ABCD";
    const stringB = "BCDE";
    expect(findFirstMatchingChar(stringA, stringB)).toEqual("B");
  });

  it("should show match in uppercase", () => {
    const stringA = "abcd";
    const stringB = "defg";
    expect(findFirstMatchingChar(stringA, stringB)).toEqual("D");
  });

  it("should show match if duplicates", () => {
    const stringA = "abcddht";
    const stringB = "mpccodedfg";
    expect(findFirstMatchingChar(stringA, stringB)).toEqual("C");
  });
});
