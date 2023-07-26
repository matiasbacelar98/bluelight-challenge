import styles from './Article.module.css';

export default function Article({ img, author, title, content }) {
  return (
    <a href="/">
      <article className={styles['article']}>
        <img src={img.src} alt={img.alt} className={styles['img']} />

        <div className={styles['content']}>
          <p className="text-regular text-xsm neutral-dark">By {author}</p>
          <h3 className="heading-sm text-regular primary-blue">{title}</h3>
          <p className="text-regular text-sm neutral-dark">{content}</p>
        </div>
      </article>
    </a>
  );
}
