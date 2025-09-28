/**
 * Validates an EAN-13 (GTIN-13) barcode using the standard checksum algorithm.
 * @param ean The EAN-13 string to validate.
 * @returns true if valid, false otherwise.
 */
export function isValidEAN13(ean: string): boolean {
  // only accept strings
  if (typeof ean !== "string") {
    return false;
  }

  // Trim and reject if empty
  const trimmed = ean.trim();
  if (trimmed.length !== 13 || !/^\d{13}$/.test(trimmed)) {
    return false;
  }

  const digits = trimmed.split("").map(Number);
  const checkDigit = digits[12];
  const payload = digits.slice(0, 12);

  const sum = payload.reduce((acc, digit, index) => {
    // EAN-13: positions 1,3,5,... (index 0,2,4,...) → weight 1
    //         positions 2,4,6,... (index 1,3,5,...) → weight 3
    const weight = index % 2 === 0 ? 1 : 3;
    return acc + digit * weight;
  }, 0);

  const computedCheck = (10 - (sum % 10)) % 10;
  return computedCheck === checkDigit;
}
