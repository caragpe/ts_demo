import { describe, it, expect } from "vitest";
import { isValidEAN13 } from "../src/isValidEAN13.js";

describe("isValidEAN13", () => {
  // ✅ Valid EAN-13 examples (real or generated)
  it("should return true for valid EAN-13 codes", () => {
    expect(isValidEAN13("5901234123457")).toBe(true); // real Polish product
    expect(isValidEAN13("4006381333931")).toBe(true); // real German product
    expect(isValidEAN13("0123456789012")).toBe(true); // valid checksum
  });

  // ❌ Invalid: wrong length
  it("should return false for strings that are not 13 characters long", () => {
    expect(isValidEAN13("123")).toBe(false);
    expect(isValidEAN13("123456789012")).toBe(false); // 12 digits
    expect(isValidEAN13("12345678901234")).toBe(false); // 14 digits
  });

  // ❌ Invalid: non-numeric characters
  it("should return false for strings containing non-digit characters", () => {
    expect(isValidEAN13("123456789012a")).toBe(false);
    expect(isValidEAN13("123 456789012")).toBe(false);
    expect(isValidEAN13("123-456-78901")).toBe(false);
  });

  // ❌ Invalid: correct length and digits, but wrong checksum
  it("should return false for 13-digit numeric strings with invalid checksum", () => {
    expect(isValidEAN13("5901234123450")).toBe(false); // changed last digit
    //expect(isValidEAN13("0000000000000")).toBe(false); // invalid checksum
  });

  // 🧹 Edge cases
  it("should return false for empty or whitespace-only strings", () => {
    expect(isValidEAN13("")).toBe(false);
    expect(isValidEAN13("   ")).toBe(false);
  });

  it("should return false for null, undefined, or non-string inputs", () => {
    // @ts-expect-error — testing runtime behavior
    expect(isValidEAN13(null)).toBe(false);
    // @ts-expect-error
    expect(isValidEAN13(undefined)).toBe(false);
    expect(isValidEAN13(123 as any)).toBe(false);
  });

  // ✅ Should handle leading/trailing whitespace (if you decide to trim)
  it("should accept valid EAN-13 with surrounding whitespace", () => {
    expect(isValidEAN13(" 5901234123457 ")).toBe(true);
  });
});
