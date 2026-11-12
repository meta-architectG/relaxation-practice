import React, { useState, useEffect, useRef } from "react";

const MUSCLES = [
  {
    part: "Кисти и руки",
    tense: "Сожми руки в кулаки, почувствуй напряжение",
    relax: "Разожми и почувствуй приятное тепло",
  },
  {
    part: "Плечи и шея",
    tense: "Подними плечи высоко к ушам",
    relax: "Опусти и выдохни всё напряжение",
  },
  {
    part: "Ноги и стопы",
    tense: "Подожми пальцы ног и напряги икры",
    relax: "Полностью расслабь ноги",
  },
];

const RelaxationScreen = ({ onFinish, onBack }) => {
  const [selectedMuscle, setSelectedMuscle] = useState(null);
  const [mode, setMode] = useState("full");
  const [phase, setPhase] = useState("idle");
  const [remainingTime, setRemainingTime] = useState(5);
  const timerRef = useRef(null);

  useEffect(() => {
    if (phase !== "tense" && phase !== "relax") return;

    if (remainingTime <= 0) {
      if (phase === "tense") {
        setPhase("relax");
        setRemainingTime(15);
      } else if (phase === "relax") {
        const nextIndex = selectedMuscle.index + 1;
        const shouldContinue = mode === "full" && nextIndex < MUSCLES.length;

        if (shouldContinue) {
          setSelectedMuscle({ index: nextIndex });
          setPhase("tense");
          setRemainingTime(5);
        } else {
          onFinish();
        }
      }
      return;
    }

    timerRef.current = setTimeout(() => {
      setRemainingTime((t) => t - 1);
    }, 1000);

    return () => clearTimeout(timerRef.current);
  }, [remainingTime, phase, selectedMuscle, onFinish, mode]);

  const selectMuscle = (index, type) => {
    setMode(type);
    setSelectedMuscle({ index });
    setPhase("ready");
  };

  if (selectedMuscle === null) {
    return (
      <div className="relaxation-screen">
        <button className="back-btn" onClick={onBack}>
          ← В меню
        </button>
        <h2 className="technique-title relaxation-select-title">
          Выбери группу мышц
        </h2>

        <button
          className="full-body-card"
          onClick={() => selectMuscle(0, "full")}
        >
          <h3 className="full-body-title">Все тело</h3>
          <p className="full-body-desc">Пройти полный круг</p>
        </button>

        <div className="muscle-grid">
          <button
            className="muscle-card"
            onClick={() => selectMuscle(0, "single")}
          >
            <h3 className="muscle-card-title">Кисти и руки</h3>
          </button>

          <button
            className="muscle-card"
            onClick={() => selectMuscle(2, "single")}
          >
            <h3 className="muscle-card-title">Ноги и стопы</h3>
          </button>
        </div>
      </div>
    );
  }

  const current = MUSCLES[selectedMuscle.index];

  return (
    <div className="relaxation-screen">
      <div className="relaxation-top-bar">
        <button className="back-btn" onClick={() => setSelectedMuscle(null)}>
          ← Назад
        </button>
      </div>

      <p className="relaxation-part">{current.part}</p>

      <div className="relaxation-aura-container">
        <span className="relaxation-time-large">{remainingTime}</span>
      </div>

      <p className="relaxation-instruction">
        {phase === "relax" ? current.relax : current.tense}
      </p>

      {phase === "ready" && (
        <button
          className="start-btn-small relaxation-start-btn"
          onClick={() => {
            setPhase("tense");
            setRemainingTime(5);
          }}
        >
          Начать
        </button>
      )}

      <button className="finish-btn-static" onClick={onFinish}>
        <span>Завершить практику</span>
      </button>
    </div>
  );
};

export default RelaxationScreen;
