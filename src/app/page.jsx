import Banner from '@/widgets/Banner/Banner'
import Navbar from '@/widgets/Navbar/Navbar'
import React from 'react'
import styles from './page.module.css'
import About from '@/widgets/About/About'

const page = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <Banner />
      <About/>
    </div>
  )
}

export default page