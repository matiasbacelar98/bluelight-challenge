import { useState } from 'react';
import Show from '../../Show';
import Logo from '../Logo';
import { Btn, HamburguerBtn } from '../Buttons';
import styles from './Header.module.css';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  function handleOpen() {
    setIsOpen(prev => !prev);
  }

  return (
    <header className={`${styles['header']} container`}>
      <Logo />

      <div className={styles['btn-container']}>
        <Btn>Request invite</Btn>
      </div>

      {/* Mobile */}
      <HamburguerBtn isOpen={isOpen} toggle={handleOpen} />

      <Show when={isOpen} fallback={null}>
        <aside>Mobile menu</aside>
      </Show>
    </header>
  );
}
