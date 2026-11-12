import { Modal } from "./Modal";

const HeartIcon = () => (
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
);

export const ThanksModal = ({ isOpen, onClose }) => (
  <Modal
    isOpen={isOpen}
    onClose={onClose}
    className="thanks-modal"
    ariaLabel="Благодарность"
  >
    <button
      type="button"
      className="modal-close"
      onClick={onClose}
      aria-label="Закрыть"
    >
      ✕
    </button>

    <div className="modal-icon-svg">
      <HeartIcon />
    </div>

    <h2 className="finish-title">Ты молодец!</h2>
    <p className="finish-text">
      Поблагодари себя и своё тело
      <br />
      за заботу
    </p>

    <button type="button" className="thanks-btn" onClick={onClose}>
      Спасибо себе
    </button>
  </Modal>
);

export default ThanksModal;
