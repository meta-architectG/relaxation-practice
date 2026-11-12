export const PATTERNS = {
  55: {
    id: "55",
    name: "5-5 (Когерентное)",
    description:
      "Самое безопасное. Без задержек. Синхронизирует сердцебиение и успокаивает.",
    phases: [
      { name: "Вдох", duration: 5, className: "inhale", ringMode: "grow" },
      { name: "Выдох", duration: 5, className: "exhale", ringMode: "shrink" },
    ],
  },
  478: {
    id: "478",
    name: "4-7-8 (Вейла)",
    description:
      "Классическая техника для глубокого расслабления (требует привыкания).",
    phases: [
      { name: "Вдох", duration: 4, className: "inhale", ringMode: "grow" },
      { name: "Задержка", duration: 7, className: "hold", ringMode: "hold" },
      { name: "Выдох", duration: 8, className: "exhale", ringMode: "shrink" },
    ],
  },
};
