export function findFirstMatchingChar(
  stringA: string,
  stringB: string
): string {
  const setA = new Set(stringA.toUpperCase());
  const setB = new Set(stringB.toUpperCase());
  for (let current of setA) {
    console.log(current, setB, setB.has(current));
    if (setB.has(current)) {
      return current;
    }
  }
  return "";
}
