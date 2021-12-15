import React from "react";

import styles from './About.module.css';

// images
import aboutPNG from './../../assets/aboutus_img.png';

// json
import contents from './../../assets/contents.json';
import Title from "../../components/Title/Title.component";

function About() {
  return (
    <section className={`page ${styles.wrapper}`}>
      <div className={`container ${styles.content}`}>
        <Title>Quem Somos</Title>
        <img className={styles.image} src={aboutPNG} alt="Ambiente da Padaria" />
        <p className={styles.paragraph}>
          {contents.about.about_content}
        </p>
      </div>
    </section>
  );
}

export default About;