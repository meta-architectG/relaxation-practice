import React, { useState } from "react";

const COLORS = [
  { name: "синего", hex: "#5A9BD4" },
  { name: "желтого", hex: "#D4B872" },
  { name: "красного", hex: "#800020" },
];

const GroundingScreen = ({ onFinish, onBack }) => {
  const [itemsFound, setItemsFound] = useState(0);
  const [currentColor, setCurrentColor] = useState(
    COLORS[Math.floor(Math.random() * COLORS.length)],
  );

  const changeColor = () => {
    let newColor;
    do {
      newColor = COLORS[Math.floor(Math.random() * COLORS.length)];
    } while (newColor.name === currentColor.name);
    setCurrentColor(newColor);
    setItemsFound(0);
  };

  const handleFound = () => {
    if (itemsFound + 1 === 5) {
      onFinish();
    } else {
      setItemsFound((prev) => prev + 1);
    }
  };

  return (
    <div className="grounding-screen">
      <button className="back-btn" onClick={onBack}>
        ← В меню
      </button>

      <div className="grounding-text-container">
        <h2 className="grounding-title">
          Оглянись вокруг: найди 5 предметов{" "}
          <span style={{ color: currentColor.hex, whiteSpace: "nowrap" }}>
            {currentColor.name} цвета
          </span>{" "}
          <button
            onClick={changeColor}
            className="refresh-color-btn"
            title="Сменить цвет"
          >
            ↻
          </button>
        </h2>

        <p className="grounding-examples">Например: кружка, книга, одежда...</p>
      </div>

      <div className="grounding-circle-wrapper">
        <button
          className="grounding-btn"
          onClick={handleFound}
          style={{
            borderColor: currentColor.hex,
            boxShadow: `0 0 40px ${currentColor.hex}40`,
          }}
        >
          <span className="grounding-count">{5 - itemsFound}</span>
        </button>
      </div>

      <p className="grounding-hint">
        Нажимай на круг каждый раз, когда замечаешь
      </p>

      <button className="finish-btn-static" onClick={onFinish}>
        <span>Завершить практику</span>
      </button>
    </div>
  );
};

export default GroundingScreen;
