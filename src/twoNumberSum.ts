export function addUniqueNumbers(inputArray: number[]): number {
  const uniqueNumbers = Array.from(new Set(inputArray));
  return uniqueNumbers.reduce((acc, current) => {
    if (typeof current === "number") {
      acc += current;
    }
    return acc;
  }, 0);
}
