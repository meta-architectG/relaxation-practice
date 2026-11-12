import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import App from "./App";

vi.mock("./components/Modal", () => ({
  Modal: () => null,
}));

describe("App навигация", () => {
  it("переходит на экран дыхания при клике на карточку", () => {
    render(<App />);
    const breathingCard = screen.getByText("Дыхание");
    fireEvent.click(breathingCard);
    expect(screen.getByText(/Приступить к практике/i)).toBeInTheDocument();
  });

  it("возвращает в меню по кнопке Назад", () => {
    render(<App />);
    fireEvent.click(screen.getByText("Дыхание"));
    const backButton = screen.getByText(/В меню/i);
    fireEvent.click(backButton);
    expect(screen.getByText("Практики саморегуляции")).toBeInTheDocument();
  });
});
