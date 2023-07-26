import Card from '../../UI/Card';

import onlineBankingIcon from '../../../assets/svg/icon-online.svg';
import iconBudgeting from '../../../assets/svg/icon-budgeting.svg';
import iconOnboarding from '../../../assets/svg/icon-onboarding.svg';
import iconApi from '../../../assets/svg/icon-api.svg';

import styles from './Info.module.css';

export default function Info() {
  return (
    <section className={styles['info-section']}>
      <div className={`container ${styles['info']}`}>
        <div className={styles['content']}>
          <h2 className="heading-lg text-regular primary-blue">Why choose Easybank?</h2>
          <p className="text-md text-regular neutral-dark">
            We leverage Open Banking to turn your bank account into your financial hub. Control your
            finances like never before.
          </p>
        </div>

        <CardsList />
      </div>
    </section>
  );
}

//------- Components -------//
const infoCards = [
  {
    id: '5daaa433-3434-4bd3-893a-0991f2bc6f05',
    title: 'Online Banking',
    content:
      'Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.',
    img: {
      src: onlineBankingIcon,
      alt: 'online banking icon',
    },
  },
  {
    id: '11edc742-fc81-4c43-beed-fcf9520157a5',
    title: 'Simple Budgeting',
    content:
      'See exactly where your money goes each month. Receive notifications when you"re close to your hitting limits.',
    img: {
      src: iconBudgeting,
      alt: 'icon budgeting',
    },
  },
  {
    id: '6f40848a-c647-48b5-855c-2ae12e3da875',
    title: 'Fast Onboarding',
    content:
      'We don"t do branches. Open your account in minutes online and start taking control of your finances right away.',
    img: {
      src: iconOnboarding,
      alt: 'icon onboarding',
    },
  },
  {
    id: '6d9fdaf0-2262-4234-8d4d-6e901ce31030',
    title: 'Open API',
    content:
      'Manage your savings, investments, pension and much more from one account. Tracking your money has never been easier.',
    img: {
      src: iconApi,
      alt: 'icon api',
    },
  },
];

function CardsList() {
  return (
    <ul className={styles['info-list']}>
      {infoCards.map(card => (
        <li key={card.id}>
          <Card img={card.img} title={card.title} content={card.content} />
        </li>
      ))}
    </ul>
  );
}
