import { describe, it, expect } from "vitest";
import { filterByProp } from "../src/filterByProp.js";

describe("filterByProp", () => {
  const myObject = {
    name: "Carlos",
    surname: "Other",
    location: "Spain",
  };
  const secondObject = {
    name: "John",
    surname: "Wick",
    location: "US",
  };
  const filterProp = "location";

  it("should filter object with correct prop and value", () => {
    const filterValue = "Spain";
    expect(filterByProp([myObject], filterProp, filterValue)).toEqual([
      myObject,
    ]);
  });

  it("should filter multiple object with correct prop and value", () => {
    const filterValue = "Spain";
    expect(
      filterByProp([myObject, secondObject], filterProp, filterValue)
    ).toEqual([myObject]);
  });

  it("should not get any filtered object if no match", () => {
    const filterValue = "Spain";
    expect(filterByProp([secondObject], filterProp, filterValue)).toEqual([]);
  });
});
