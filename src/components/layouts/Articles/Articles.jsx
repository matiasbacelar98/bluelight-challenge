import Article from '../../UI/Article';

import imageConfetti from '../../../assets/images/image-confetti.jpg';
import imageCurrency from '../../../assets/images/image-currency.jpg';
import imagePlane from '../../../assets/images/image-plane.jpg';
import imageRestaurant from '../../../assets/images/image-restaurant.jpg';

import styles from './Articles.module.css';

export default function Articles() {
  return (
    <section className={`${styles['articles']} container`}>
      <h2 className="heading-lg text-regular primary-blue">Latest Articles</h2>
      <ArticlesList />
    </section>
  );
}

//------- Components -------//
const infoArticles = [
  {
    id: '35ec44e6-b884-401a-9366-e00e4f9a8b47',
    author: 'Claire Robinson',
    title: 'Receive money in any currency with no fees',
    content:
      "The world is getting smaller and we're becoming more mobile. So why should you be forced to only received money in a single...", // eslint-disable-line
    img: {
      src: imageCurrency,
      alt: 'money',
    },
  },
  {
    id: '042d219e-e248-4696-acf9-1a2f0fd7a659',
    author: 'Wilson Hutton',
    title: 'Treat yourself without worrying about money',
    content:
      'Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you...',
    img: {
      src: imageRestaurant,
      alt: 'restaurant',
    },
  },
  {
    id: 'adb52344-201a-448a-9b1c-3565039a3785',
    title: 'Take your Easybank card wherever you go',
    author: 'Wilson Hutton',
    content:
      "We want you to enjoy your travels. This is we dont't charge any fees on purchases while you're abroad. We'll even show you...", // eslint-disable-line
    img: {
      src: imagePlane,
      alt: 'plane',
    },
  },
  {
    id: '0c2b066c-449e-4e95-b142-f3ea64e92407',
    author: 'Claire Robinson',
    title: 'Our invite-only Beta accounts are now live!',
    content:
      "After a lot of hard work by the whole team, we're excited to launch our closed beta. It's ease to request an invite through the site...", // eslint-disable-line
    img: {
      src: imageConfetti,
      alt: 'confetti',
    },
  },
];

function ArticlesList() {
  return (
    <ul className={styles['info-articles']}>
      {infoArticles.map(article => (
        <li key={article.id}>
          <Article
            img={article.img}
            author={article.author}
            title={article.title}
            content={article.content}
          />
        </li>
      ))}
    </ul>
  );
}
