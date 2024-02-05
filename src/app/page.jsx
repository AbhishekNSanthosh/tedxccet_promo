import Banner from '@/widgets/Banner/Banner'
import Navbar from '@/widgets/Navbar/Navbar'
import React from 'react'
import styles from './page.module.css'
import About from '@/widgets/About/About'
import Footer from '@/widgets/Footer/Footer'

const page = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <Banner />
      <section id='about'>
        <About />
      </section>
      {/* <hr /> */}
      <section id='contact'>
        <Footer />
      </section>
    </div>
  )
}

export default page