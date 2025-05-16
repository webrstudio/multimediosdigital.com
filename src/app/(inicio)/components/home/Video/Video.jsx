import styles from './styles.module.css';
import { Fade } from 'react-awesome-reveal';

export const Video = () => {
  return (
    <Fade className='bgBlackPrimary'>
      <video autoPlay muted controls className={styles.videoWrapper}>
        <source src="/assets/videos/video-promo.mp4" type="video/mp4" />
        Tu navegador no soporta videos HTML5.
      </video>
    </Fade>
  );
};
