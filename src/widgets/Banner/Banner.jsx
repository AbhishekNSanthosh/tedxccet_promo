import React from 'react'
import styles from '../../themes/banner.module.css'

const Banner = () => {
  return (
    <div className={styles.container}>
      <img src="../logo.png" alt="" className={styles.banner} />
      <div className={styles.row}>
        <span className={styles.comingsoon}>COMINGx</span>
        <span className={styles.comingsoonRed}>SOON</span>
      </div>
      <div className={styles.row}>
        <img src="/staytuned.svg" alt="" className={styles.staytuned} />
      </div>
    </div>
  )
}

export default Banner