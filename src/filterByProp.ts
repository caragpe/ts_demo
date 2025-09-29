export function filterByProp<T>(
  items: T[],
  prop: keyof T,
  value: T[keyof T]
): T[] {
  return items.filter((item) => {
    return item[prop] === value;
  });
}
