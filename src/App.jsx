import { useState } from "react";
import MainMenu from "./components/MainMenu";
import StartScreen from "./components/StartScreen";
import BreathingScreen from "./components/BreathingScreen";
import SafetyModal from "./components/SafetyModal";
import ThanksModal from "./components/ThanksModal";
import GroundingScreen from "./components/GroundingScreen";
import RelaxationScreen from "./components/RelaxationScreen";
import ThoughtsScreen from "./components/ThoughtsScreen";
import { PATTERNS } from "./config/patterns";

const App = () => {
  const [screen, setScreen] = useState("menu");
  const [isSafetyOpen, setIsSafetyOpen] = useState(false);
  const [isThanksOpen, setIsThanksOpen] = useState(false);
  const [isSessionFinished, setIsSessionFinished] = useState(false);
  const [patternId, setPatternId] = useState("55");

  const handleExit = () => setScreen("menu");
  const handleFinishDay = () => setIsThanksOpen(true);

  const handleCloseThanks = () => {
    setIsThanksOpen(false);
    setIsSessionFinished(true);
  };

  return (
    <div className="App">
      <div className="comets" aria-hidden="true">
        <div className="comet" />
        <div className="comet" />
        <div className="comet" />
      </div>

      {isSessionFinished ? (
        <div className="container">
          <div className="relaxation-screen day-finished">
            <div className="modal-icon-svg">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
            </div>

            <h2 className="finish-title">Забота о себе</h2>
            <p className="finish-text">
              Сделай паузу... Отдохни и возвращайся, когда будет нужно.
            </p>

            <button
              type="button"
              className="finish-btn-static"
              onClick={() => {
                setIsSessionFinished(false);
                setScreen("menu");
              }}
            >
              В меню
            </button>
          </div>
        </div>
      ) : (
        <div className="container">
          {screen === "menu" && (
            <MainMenu
              onFinishDay={handleFinishDay}
              onSelectBreathing={() => setScreen("settings")}
              onSelectGrounding={() => setScreen("grounding")}
              onSelectRelaxation={() => setScreen("relaxation")}
              onSelectThoughts={() => setScreen("thoughts")}
            />
          )}

          {screen === "settings" && (
            <StartScreen
              patternId={patternId}
              setPatternId={setPatternId}
              onStart={() => setScreen("breathing")}
              onOpenSafety={() => setIsSafetyOpen(true)}
              onBack={handleExit}
            />
          )}

          {screen === "breathing" && (
            <BreathingScreen
              phases={PATTERNS[patternId].phases}
              onFinish={handleExit}
              onBack={handleExit}
            />
          )}

          {screen === "grounding" && (
            <GroundingScreen onFinish={handleExit} onBack={handleExit} />
          )}

          {screen === "relaxation" && (
            <RelaxationScreen onFinish={handleExit} onBack={handleExit} />
          )}

          {screen === "thoughts" && (
            <ThoughtsScreen onFinish={handleExit} onBack={handleExit} />
          )}
        </div>
      )}

      <ThanksModal isOpen={isThanksOpen} onClose={handleCloseThanks} />
      <SafetyModal
        isOpen={isSafetyOpen}
        onClose={() => setIsSafetyOpen(false)}
        patternName={PATTERNS[patternId].name}
        patternId={patternId}
      />
    </div>
  );
};

export default App;
