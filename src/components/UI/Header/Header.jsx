import { useState } from 'react';
import Show from '../../Show';

import Logo from '../Logo';
import MobileMenu from '../MobileMenu';
import { HeaderLink } from '../Links/Links';
import { Btn, HamburguerBtn } from '../Buttons';

import styles from './Header.module.css';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  function handleOpen() {
    setIsOpen(prev => !prev);

    // !This is a hacky solution
    if (!isOpen) {
      document.querySelector('body').classList.add('remove-scroll');
    } else {
      document.querySelector('body').classList.remove('remove-scroll');
    }
  }

  return (
    <header className={styles['header-section']}>
      <div className={`${styles['header']} container`}>
        <Logo />

        <LinksList />

        <div className={styles['btn-container']}>
          <Btn>Request invite</Btn>
        </div>

        {/* Mobile */}
        <HamburguerBtn isOpen={isOpen} toggle={handleOpen} />
      </div>

      <Show when={isOpen} fallback={null}>
        <MobileMenu />
      </Show>
    </header>
  );
}

//------ Components ------//
const links = [
  {
    id: '36dd2902-d1b5-4395-9b4d-90837da0e183',
    content: 'Home',
  },
  {
    id: '25363f90-87a3-41a3-a7b9-a546526b0b6c',
    content: 'About',
  },
  {
    id: 'f0fc5194-e173-46e6-bd69-b9f5590fc9d9',
    content: 'Contact',
  },
  {
    id: 'afb215c7-28e4-4841-8228-e20bf7858704',
    content: 'Blog',
  },
  {
    id: '48c7337d-3e46-4c6c-b0a2-d6a168584be3',
    content: 'Careers',
  },
];

function LinksList() {
  return (
    <ul className={styles['links-list']}>
      {links.map(link => (
        <li key={link.id}>
          <HeaderLink>{link.content}</HeaderLink>
        </li>
      ))}
    </ul>
  );
}
