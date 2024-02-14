import React from 'react'
import styles from '../../themes/banner.module.css'
import Image from 'next/image'

const Banner = () => {
  return (
    <div className={styles.container}>
      <Image src="/banner.svg" width={600} height={150} className={styles.banner}/>
      <div className={styles.row}>
        <span className={styles.comingsoon}>COMINGx</span>
        <span className={styles.comingsoonRed}>SOON</span>
      </div>
      <div className={styles.row}>
      <Image src="/staytuned.svg" width={300} height={0} className={styles.staytuned}/>
      </div>
    </div>
  )
}

export default Banner