import React from 'react'
import styles from '../../themes/banner.module.css'

const Banner = () => {
  return (
    <div className={styles.container}>
        <img src="../logo.png" alt="" className={styles.banner}/>
    </div>
  )
}

export default Banner