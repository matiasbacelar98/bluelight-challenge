import Logo from '../Logo';
import { FooterLink, FooterLinkIcon } from '../Links';
import { FacebookIcon, YoutubeIcon, TwitterIcon, PinterestIcon, InstagramIcon } from '../Icons';
import { Btn } from '../Buttons';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles['footer']}>
      <div className={`${styles['footer-wrapper']} container white text-md`}>
        <div className={styles['logo']}>
          <Logo isDark={false} />
        </div>

        <FooterIconsList />
        <FooterLinksList />
        <div className={styles['btn']}>
          <Btn>Request invite</Btn>
        </div>

        <p className={`${styles['copyright']} text-md text-regular neutral-dark`}>
          &copy; Easebank. All Rights Reserved
        </p>
      </div>
    </footer>
  );
}

//------- Components -------//
const footerIconLinks = [
  {
    id: '0a733edc-f64f-441c-8073-caf1de26ee7d',
    component: <FacebookIcon />,
  },
  {
    id: 'a7779558-31a1-4d43-b7ba-98af127888c0',
    component: <YoutubeIcon />,
  },
  {
    id: '5ddf4401-7355-4e6a-9041-75c7ae726eab',
    component: <TwitterIcon />,
  },
  {
    id: 'c15361ee-e4ed-4f20-9e29-e05145459b47',
    component: <PinterestIcon />,
  },
  {
    id: '610f8dd7-6068-4ad9-92b2-e2a9d8ff620a',
    component: <InstagramIcon />,
  },
];

function FooterIconsList() {
  return (
    <ul className={`${styles['icons-list']} ${styles['icons']}`}>
      {footerIconLinks.map(icon => (
        <li key={icon.id}>
          <FooterLinkIcon>{icon.component}</FooterLinkIcon>
        </li>
      ))}
    </ul>
  );
}

function FooterLinksList() {
  return (
    <ul className={styles['links-list']}>
      <div className={styles['links-list-wrapper']}>
        <li>
          <FooterLink>About us</FooterLink>
        </li>

        <li>
          <FooterLink>Contact</FooterLink>
        </li>
        <li>
          <FooterLink>Blog</FooterLink>
        </li>
      </div>

      <div className={styles['links-list-wrapper']}>
        <li>
          <FooterLink>Careers</FooterLink>
        </li>

        <li>
          <FooterLink>Support</FooterLink>
        </li>
        <li>
          <FooterLink>Privacy Policy</FooterLink>
        </li>
      </div>
    </ul>
  );
}
