import { useState, useRef } from "react";
import { useBreathingTimer } from "../hooks/useBreathingTimer";

const BreathingScreen = ({ phases, onFinish, onBack }) => {
  const { phaseName, phaseClass, secondsLeft, offset, restart, start } =
    useBreathingTimer(phases);
  const [isStarted, setIsStarted] = useState(false);
  const [isSpinning, setIsSpinning] = useState(false);
  const spinTimerRef = useRef(null);

  const handleStart = () => {
    start();
    setIsStarted(true);
  };

  const handleRestart = () => {
    restart();
    setIsSpinning(true);
    if (spinTimerRef.current) clearTimeout(spinTimerRef.current);
    spinTimerRef.current = setTimeout(() => setIsSpinning(false), 800);
  };

  const phasesHint = phases
    .map((p) => `${p.name} ${p.duration} сек`)
    .join(" - ");

  return (
    <div className="breathing-screen">
      <button className="back-btn" onClick={onBack}>
        ← В меню
      </button>

      <p className="phase">{isStarted ? phaseName : "Приготовься..."}</p>

      <div className={`circle-wrapper ${!isStarted ? "paused" : ""}`}>
        <svg
          className="progress-ring"
          width="320"
          height="320"
          viewBox="0 0 320 320"
        >
          <circle className="ring-bg" cx="160" cy="160" r="140" />
          <circle
            className="ring-progress"
            cx="160"
            cy="160"
            r="140"
            style={{ strokeDashoffset: offset }}
          />
        </svg>

        <div className={`circle ${isStarted ? phaseClass : ""}`}>
          <span className="counter">{`00:${String(secondsLeft).padStart(2, "0")}`}</span>
        </div>
      </div>

      <p className="hint">{phasesHint}</p>

      {!isStarted ? (
        <button className="start-btn-small" onClick={handleStart}>
          <span>Начать дыхание</span>
        </button>
      ) : (
        <button className="restart-btn" onClick={handleRestart}>
          <span>Начать заново</span>
          <span className={`restart-arrow ${isSpinning ? "spinning" : ""}`}>
            ↻
          </span>
        </button>
      )}

      <button className="finish-btn-static" onClick={onFinish}>
        <span>Завершить практику</span>
      </button>
    </div>
  );
};

export default BreathingScreen;
