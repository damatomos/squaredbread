import React from 'react';

import { useNavigate } from 'react-router-dom';

import styles from './Banner.module.css';
import "../../../node_modules/video-react/dist/video-react.css";
import video from '../../assets/video.mp4';

import { Player, BigPlayButton } from 'video-react';

function Banner() {

  const navigate = useNavigate();
  
  function handleClick() {
    navigate('/menu');
  }

  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>Do café da manhã até o jantar.</h2>
          <p className={styles.info}>Aberto de 7:00 às 22:00</p>
          <button onClick={handleClick}  className={styles.btn}>Cardápio</button>
        </div>

        <div className={styles.videocontainer}>
          <h1>Receita do Dia</h1>
          <Player
            width={500}
            height={500}
            playsInline
            src={video}
          >
            <BigPlayButton position="center" />
          </Player>
        </div>
      </div>
    </section>
  );
}

export default Banner;