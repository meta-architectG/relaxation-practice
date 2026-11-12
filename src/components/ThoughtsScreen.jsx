import React, { useState } from "react";

const ThoughtsScreen = ({ onFinish, onBack }) => {
  const [thought, setThought] = useState("");
  const [status, setStatus] = useState("idle");

  const handleRelease = () => {
    if (!thought.trim()) return;
    setStatus("burning");

    setTimeout(() => {
      setThought("");
      onFinish();
    }, 3500);
  };

  return (
    <div className="thoughts-screen">
      <button className="back-btn" onClick={onBack}>
        ← В меню
      </button>

      <h2 className="technique-title">Отпустить мысль</h2>

      <p className="technique-desc">
        Запиши то, что тебя беспокоит. <br />
        Когда ты переносишь мысль на экран, она теряет свою силу.
      </p>

      <div className="thoughts-card">
        <textarea
          className={`thoughts-textarea ${status === "burning" ? "burning" : ""}`}
          placeholder="Например: Я боюсь не сдать экзамен..."
          value={thought}
          onChange={(e) => setThought(e.target.value)}
          disabled={status === "burning"}
        />
      </div>

      {status === "idle" ? (
        <button
          className="start-btn-small"
          onClick={handleRelease}
          disabled={!thought.trim()}
        >
          Отпустить
        </button>
      ) : (
        <p className="dissolving-text">Мысль растворяется...</p>
      )}

      {status === "idle" && (
        <button className="safety-link" onClick={onBack}>
          Завершить
        </button>
      )}
    </div>
  );
};

export default ThoughtsScreen;
