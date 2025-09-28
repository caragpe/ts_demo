import { describe, it, expect } from "vitest";
import { Cache } from "../src/cache";

describe("Cache", () => {
  it("should save a Cache object", () => {
    const cacheObject = { key: "pass", value: "1234" };
    const cache = new Cache();
    cache.set(cacheObject.key, cacheObject.value);
    expect(cache.get(cacheObject.key)).toEqual(cacheObject.value);
  });
});
