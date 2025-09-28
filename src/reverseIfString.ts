export function reverseIfString(input: string | number): string | number {
  if (typeof input === "number") {
    return input;
  }
  let index = 1;
  let result: string[] = [];
  const inputArray = input.split("");
  const inputLength = inputArray.length;
  inputArray.forEach((element) => {
    result[inputLength - index] = element;
    index += 1;
  });
  return result.join("");
  //return input.split("").reverse().join();
}
