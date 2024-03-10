import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Tharun</h1>
        <p className={styles.description}>
          I'm a frontend developer with using React and
          NodeJS. Reach out if you'd like to learn more!
        </p>
        <a href="mailto:tharunravuru19844@email.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
