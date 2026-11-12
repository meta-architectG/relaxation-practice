import { renderHook, act } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { useBreathingTimer } from "./useBreathingTimer";

const MOCK_PHASES = [
  { name: "Вдох", duration: 2, className: "inhale", ringMode: "grow" },
  { name: "Выдох", duration: 2, className: "exhale", ringMode: "shrink" },
];

describe("useBreathingTimer", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("должен инициализироваться с первой фазой", () => {
    const { result } = renderHook(() => useBreathingTimer(MOCK_PHASES));
    expect(result.current.phaseName).toBe("Вдох");
    expect(result.current.secondsLeft).toBe(2);
    expect(result.current.isActive).toBe(false);
  });

  it("должен переключать фазы при старте", () => {
    const { result } = renderHook(() => useBreathingTimer(MOCK_PHASES));

    act(() => {
      result.current.start();
    });

    expect(result.current.isActive).toBe(true);

    act(() => {
      vi.advanceTimersByTime(2000);
    });

    expect(result.current.phaseName).toBe("Выдох");
    expect(result.current.secondsLeft).toBe(2);
  });
});
