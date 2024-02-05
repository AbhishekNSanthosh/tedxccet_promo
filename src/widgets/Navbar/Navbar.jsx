import React from 'react'
import styles from '../../themes/navbar.module.css'

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.navbarWrap}>
        <img src="/logo.svg" alt="" className={styles.logo} />
      </div>
    </div>
  )
}

export default Navbar