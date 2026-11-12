import { Modal } from "./Modal";
import { PATTERNS } from "../config/patterns";

const HeartIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className="modal-heart"
  >
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
);

export const SafetyModal = ({ isOpen, onClose, patternName, patternId }) => {
  const hasHolds = PATTERNS[patternId]?.phases.some(
    (phase) => phase.ringMode === "hold",
  );

  return (
    <Modal isOpen={isOpen} onClose={onClose} ariaLabel="Забота о себе">
      <button
        type="button"
        className="modal-close"
        onClick={onClose}
        aria-label="Закрыть"
      >
        ✕
      </button>

      <h2 className="modal-heading">
        <HeartIcon />
        <span>Забота о себе</span>
      </h2>

      <p className="modal-subtitle">Техника: {patternName}</p>

      <p className="modal-subtitle">Рекомендации</p>
      <ul className="modal-list">
        <li>Начинай с 4 циклов, не больше 2 раз в день.</li>
        <li>
          <strong>Регулярность важнее длительности:</strong> 1 минута каждый
          день полезнее, чем 10 минут раз в неделю.
        </li>
        {hasHolds && (
          <li>Техника с задержками. Если тяжело — начни с «5-5».</li>
        )}
      </ul>

      <p className="modal-subtitle">Слушай своё тело</p>
      <p>Если во время практики ты чувствуешь:</p>
      <ul className="modal-list">
        <li>сильное головокружение,</li>
        <li>нехватку воздуха,</li>
        <li>дискомфорт в груди.</li>
      </ul>

      <p className="modal-warning">
        → Остановись. Вернись к обычному дыханию. Это нормально.
      </p>

      <p className="modal-final">
        Это не спорт. Здесь не нужно «терпеть» или показывать результат.
      </p>
    </Modal>
  );
};

export default SafetyModal;
