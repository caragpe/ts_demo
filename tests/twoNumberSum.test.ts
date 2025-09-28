import { describe, it, expect } from "vitest";
import { addUniqueNumbers } from "../src/twoNumberSum.js";

describe("addUniqueNumbers", () => {
  it("shoult return a valid number", () => {
    const input = [1, 2, 3];
    const target = 0;
    const res = addUniqueNumbers(input);
    expect(res).toBeTypeOf("number");
  });

  it("shoult return a zero if empty input", () => {
    const input = [];
    const target = 0;
    const res = addUniqueNumbers(input);
    expect(res).toBeTypeOf("number");
  });

  it("should return the addition of all numbers", () => {
    const input = [1, 2, 3];
    const res = addUniqueNumbers(input);
    expect(res).toBe(6);
  });

  it("should return the addition of all unique numbers", () => {
    const input = [1, 2, 2, 3];
    const res = addUniqueNumbers(input);
    expect(res).toBe(6);
  });

  it("should skip any string value", () => {
    const input = [1, "2", 2, 3];
    const res = addUniqueNumbers(input);
    expect(res).toBe(6);
  });

  it("should skip any array value", () => {
    const input = [1, [1, 2], 2, 3];
    const res = addUniqueNumbers(input);
    expect(res).toBe(6);
  });

  it("should skip any empty value", () => {
    const input = [1, , 2, 3];
    const res = addUniqueNumbers(input);
    expect(res).toBe(6);
  });
});
