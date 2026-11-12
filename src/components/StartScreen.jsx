import React from "react";
import { PATTERNS } from "../config/patterns";

const StartScreen = ({
  patternId,
  setPatternId,
  onStart,
  onOpenSafety,
  onBack,
}) => {
  const currentPattern = PATTERNS[patternId];

  return (
    <div className="start-screen">
      <button className="back-btn" onClick={onBack}>
        ← В меню
      </button>

      <div className="technique-block">
        <h2 className="technique-title">Дыхательные практики</h2>

        <select
          className="pattern-select"
          value={patternId}
          onChange={(e) => setPatternId(e.target.value)}
        >
          {Object.values(PATTERNS).map((p) => (
            <option key={p.id} value={p.id}>
              {p.name}
            </option>
          ))}
        </select>

        <div className="relaxation-card">
          <p className="technique-desc">{currentPattern.description}</p>
          <p className="technique-desc mt-15">
            Начни с 4 циклов, это займёт пару минут.
          </p>
        </div>
      </div>

      <button className="start-btn-small" onClick={onStart}>
        Приступить к практике
      </button>

      <button className="safety-link mt-20" onClick={onOpenSafety}>
        Важно знать перед началом →
      </button>
    </div>
  );
};

export default StartScreen;
