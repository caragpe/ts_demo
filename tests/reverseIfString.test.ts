import { describe, it, expect } from "vitest";
import { reverseIfString } from "../src/reverseIfString.js";

describe("reverseIfString", () => {
  it("should return the same number as passed as input", () => {
    const inputValue = 5;
    expect(reverseIfString(inputValue)).toEqual(inputValue);
  });

  it("should return a string of 1 character without changes", () => {
    const inputValue = "b";
    expect(reverseIfString(inputValue)).toEqual(inputValue);
  });

  it("should revert a string of 2 characters", () => {
    const inputValue = "cd";
    const expectedValue = "dc";
    expect(reverseIfString(inputValue)).toEqual(expectedValue);
  });

  it("should revert a string of 3 characters", () => {
    const inputValue = "cde";
    const expectedValue = "edc";
    expect(reverseIfString(inputValue)).toEqual(expectedValue);
  });

  it("should revert an empty string", () => {
    const inputValue = "";
    expect(reverseIfString(inputValue)).toEqual(inputValue);
  });

  it("should revert a string with numbers", () => {
    const inputValue = "12345";
    const expectedValue = "54321";
    expect(reverseIfString(inputValue)).toEqual(expectedValue);
  });
});
