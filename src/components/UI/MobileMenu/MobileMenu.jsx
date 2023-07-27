import styles from './MobileMenu.module.css';

export default function MobileMenu() {
  return (
    <aside className={styles['wrapper']}>
      <Menu />
    </aside>
  );
}

function Menu() {
  return (
    <ul className={styles['links-wrapper']}>
      <li>
        <a href="/" className="primary-blue">
          Home
        </a>
      </li>
      <li>
        <a href="/" className="primary-blue">
          About
        </a>
      </li>
      <li>
        <a href="/" className="primary-blue">
          Contact
        </a>
      </li>
      <li>
        <a href="/" className="primary-blue">
          Blog
        </a>
      </li>
      <li>
        <a href="/" className="primary-blue">
          Careers
        </a>
      </li>
    </ul>
  );
}
