import { describe, expect, it } from "vitest";

describe("something truthy and falsy", function () {
  it("true to be true", () => {
    expect(true).toBe(true);
  });

  it("false to be false", () => {
    expect(false).toBe(false);
  });
});
