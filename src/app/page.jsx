"use client"

import React, { useEffect, useState } from 'react'
import Banner from '@/widgets/Banner/Banner'
import Navbar from '@/widgets/Navbar/Navbar'
import styles from './page.module.css'
import About from '@/widgets/About/About'
import Footer from '@/widgets/Footer/Footer'

const page = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false);
    }, 4100);
  }, []);
  return (
    <>
      {loading ?
        <div className={styles.splashContainer}>
          <img src="/sp.gif" className={styles.splash} />
        </div>
        :
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
      }
    </>
  )
}

export default page