import React from 'react'
import styles from '../../themes/banner.module.css'
import Link from 'next/link'

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
      <div className={styles.buttonRow}>
        <Link target="_blank" href="https://www.ted.com/tedx/events/57144" passHref>
          <button className={styles.button}>
            Official website
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Banner