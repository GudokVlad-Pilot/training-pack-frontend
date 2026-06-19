import { describe, expect, it } from "vitest";
import { calculatePercentage } from "./calculatePercentage";

describe("calculatePercentage", () => {
  it("should calculate percentage correctly", () => {
    expect(calculatePercentage(25, 100)).toBe(25);
    expect(calculatePercentage(50, 200)).toBe(25);
    expect(calculatePercentage(1, 4)).toBe(25);
  });

  it("should return 0 when value is 0", () => {
    expect(calculatePercentage(0, 100)).toBe(0);
  });

  it("should return 100 when value equals total", () => {
    expect(calculatePercentage(100, 100)).toBe(100);
  });

  it("should handle decimal percentages", () => {
    expect(calculatePercentage(1, 3)).toBeCloseTo(33.3333, 4);
  });
});