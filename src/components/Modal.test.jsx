import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Modal } from "./Modal";

describe("Modal", () => {
  it("не рендерит контент, если isOpen=false", () => {
    render(
      <Modal isOpen={false} onClose={() => {}}>
        <div>Контент</div>
      </Modal>,
    );
    expect(screen.queryByText("Контент")).not.toBeInTheDocument();
  });

  it("рендерит контент и вызывает onClose по клику на оверлей", () => {
    const handleClose = vi.fn();
    render(
      <Modal isOpen={true} onClose={handleClose}>
        <div>Контент</div>
      </Modal>,
    );
    expect(screen.getByText("Контент")).toBeInTheDocument();
    const overlay = screen.getByText("Контент").parentElement?.parentElement;
    if (overlay) {
      fireEvent.mouseDown(overlay);
    }
    expect(handleClose).toHaveBeenCalled();
  });

  it("вызывает onClose при нажатии Escape", () => {
    const handleClose = vi.fn();
    render(
      <Modal isOpen={true} onClose={handleClose}>
        <div>Контент</div>
      </Modal>,
    );
    const dialog = screen.getByRole("dialog");
    fireEvent.keyDown(dialog, { key: "Escape" });
    expect(handleClose).toHaveBeenCalled();
  });
});
