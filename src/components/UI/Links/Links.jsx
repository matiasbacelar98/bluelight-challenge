import styles from './Links.module.css';

export function HeaderLink({ children }) {
  return (
    <a href="/" className={`${styles['header-link']} neutral-dark text-md`}>
      {children}
    </a>
  );
}

export function FooterLink({ children }) {
  return (
    <a href="/" className={`${styles['footer-link']} white text-md`}>
      {children}
    </a>
  );
}

export function FooterLinkIcon({ children }) {
  return (
    <a href="/" className={styles['footer-link-icon']}>
      {children}
    </a>
  );
}
