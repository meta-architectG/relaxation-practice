import React from "react";

const MainMenu = ({
  onFinishDay,
  onSelectBreathing,
  onSelectGrounding,
  onSelectRelaxation,
  onSelectThoughts,
}) => {
  return (
    <div className="main-menu">
      <h1 className="menu-title">Практики саморегуляции</h1>
      <p className="menu-subtitle">Выбери то, что поможет тебе сейчас</p>

      <div className="menu-cards">
        <button className="menu-card" onClick={onSelectBreathing}>
          <div className="menu-card-icon">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 8h12a4 4 0 1 0-4-4" />
              <path d="M4 12h16a4 4 0 1 1-4 4" />
              <path d="M4 16h10" />
            </svg>
          </div>
          <h3 className="menu-card-title">Дыхание</h3>
          <p className="menu-card-desc">Успокоить пульс и снять напряжение</p>
        </button>

        <button className="menu-card" onClick={onSelectGrounding}>
          <div className="menu-card-icon">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z"></path>
              <circle cx="12" cy="12" r="3"></circle>
            </svg>
          </div>
          <h3 className="menu-card-title">Заземление</h3>
          <p className="menu-card-desc">Переключить внимание на предметы</p>
        </button>

        <button className="menu-card" onClick={onSelectRelaxation}>
          <div className="menu-card-icon">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 16.5c-1.5-1.5-2.5-3.5-2.5-5.5 0-2 1.5-4 2.5-4s2.5 2 2.5 4c0 2-1 4-2.5 5.5z" />
              <path d="M12 16.5c-3-1-5.5-3.5-5.5-6.5 0 0 2.5 1 5.5 3.5" />
              <path d="M12 16.5c3-1 5.5-3.5 5.5-6.5 0 0-2.5 1-5.5 3.5" />
              <path d="M4 16.5c2.5 2.5 5 3.5 8 3.5s5.5-1 8-3.5" />
            </svg>
          </div>
          <h3 className="menu-card-title">Расслабление</h3>
          <p className="menu-card-desc">Снять физическое напряжение в теле</p>
        </button>

        <button className="menu-card" onClick={onSelectThoughts}>
          <div className="menu-card-icon">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20 4c-3.5 0-8 2-11 5S4 16 4 20c4 0 8.5-1 11.5-4S20 7.5 20 4z" />
              <path d="M3 21l9-9" />
            </svg>
          </div>
          <h3 className="menu-card-title">Отпустить мысль</h3>
          <p className="menu-card-desc">Избавиться от навязчивых мыслей</p>
        </button>
      </div>

      <button className="finish-day-btn" onClick={onFinishDay}>
        <span>На сегодня всё</span>
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      </button>
    </div>
  );
};

export default MainMenu;
