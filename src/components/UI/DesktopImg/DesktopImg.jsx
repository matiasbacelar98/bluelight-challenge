import cellphoneMockupImg from '../../../assets/images/image-mockups.png';
import styles from './DesktopImg.module.css';

export default function DesktopImg() {
  return <img className={styles['img']} src={cellphoneMockupImg} alt="cellphones" />;
}
