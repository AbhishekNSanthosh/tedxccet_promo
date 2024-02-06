"use client"

import React, { useEffect } from 'react'
import styles from '../../themes/banner.module.css'
import Aos from 'aos';
import 'aos/dist/aos.css'

const Banner = () => {
  useEffect(() => {
    Aos.init({ duration: 800 });
  }, [])
  return (
    <div className={styles.container}>
      <img src="../logo.png" alt="" className={styles.banner} data-aos="fade-up"/>
      <div className={styles.row} data-aos="fade-up">
        <span className={styles.comingsoon}>COMINGx</span>
        <span className={styles.comingsoonRed}>SOON</span>
      </div>
      <div className={styles.row} data-aos="fade-up">
        <img src="/staytuned.svg" alt="" className={styles.staytuned} />
      </div>
    </div>
  )
}

export default Banner