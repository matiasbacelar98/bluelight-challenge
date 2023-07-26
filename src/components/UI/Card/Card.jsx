import styles from './Card.module.css';

export default function Card({ img, title, content }) {
  return (
    <article className={styles['card']}>
      <img src={img.src} alt={img.alt} />
      <h3 className="heading-md text-regular primary-blue">{title}</h3>
      <p className="text-md text-regular neutral-dark">{content}</p>
    </article>
  );
}
