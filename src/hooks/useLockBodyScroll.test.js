import { renderHook } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { useLockBodyScroll } from "./useLockBodyScroll";

describe("useLockBodyScroll", () => {
  it("должен блокировать скролл при locked=true", () => {
    const { unmount } = renderHook(() => useLockBodyScroll(true));

    expect(document.body.style.overflow).toBe("hidden");
    expect(document.body.style.position).toBe("fixed");

    unmount();

    expect(document.body.style.overflow).toBe("");
    expect(document.body.style.position).toBe("");
  });

  it("не должен блокировать скролл при locked=false", () => {
    renderHook(() => useLockBodyScroll(false));

    expect(document.body.style.overflow).not.toBe("hidden");
  });
});
