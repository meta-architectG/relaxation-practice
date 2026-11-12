import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import ThoughtsScreen from "./ThoughtsScreen";

describe("ThoughtsScreen", () => {
  it("блокирует кнопку, если поле пустое", () => {
    render(<ThoughtsScreen onFinish={() => {}} onBack={() => {}} />);
    const button = screen.getByText("Отпустить");
    expect(button).toBeDisabled();
  });

  it("разблокирует кнопку при вводе текста", () => {
    render(<ThoughtsScreen onFinish={() => {}} onBack={() => {}} />);
    const textarea = screen.getByPlaceholderText(/Например/i);
    fireEvent.change(textarea, { target: { value: "Я боюсь" } });
    const button = screen.getByText("Отпустить");
    expect(button).not.toBeDisabled();
  });
});
