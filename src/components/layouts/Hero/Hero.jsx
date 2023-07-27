import { Btn } from '../../UI/Buttons';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles['hero']}>
      <div className={`${styles['content']} container`}>
        <h1 className="heading-xl text-regular primary-blue">Next generation digital banking</h1>
        <p className="neutral-dark">
          Take your financial life online. Your Easybank account will be a one-stop-shop for
          spending, saving, budgeting, investing, and much more.
        </p>
        <Btn>Request invite</Btn>
      </div>
    </section>
  );
}

//------ Components ------//
// function HeroImgMobile() {
//   return (
//     <div className={styles['img-mobile']}>
//       <img src={mockupsImg} alt="mockup cellphones" />
//     </div>
//   );
// }
