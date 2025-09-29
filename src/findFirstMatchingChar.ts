export function findFirstMatchingChar(
  stringA: string,
  stringB: string
): string {
  const setA = new Set(stringA.toUpperCase());
  const setB = new Set(stringB.toUpperCase());
  for (let current of setA) {
    if (setB.has(current)) {
      return current;
    }
  }
  return "";
}
