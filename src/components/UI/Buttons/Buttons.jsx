import Show from '../../Show';
import closeIcon from '../../../assets/svg/icon-close.svg';
import hamburguerIcon from '../../../assets/svg/icon-hamburger.svg';
import styles from './Buttons.module.css';

export function HamburguerBtn({ isOpen, toggle }) {
  return (
    <button
      type="button"
      onClick={toggle}
      className={`${styles['btn-reset']} ${styles['hamburguer-btn']}`}
    >
      <Show when={!isOpen} fallback={<img src={closeIcon} alt="close icon" />}>
        <img src={hamburguerIcon} alt="close icon" />
      </Show>
    </button>
  );
}
