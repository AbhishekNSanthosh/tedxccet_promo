"use client"

import React, { useState, useEffect } from 'react';
import Banner from '@/widgets/Banner/Banner'
import Navbar from '@/widgets/Navbar/Navbar'
import styles from './page.module.css'
import About from '@/widgets/About/About'
import Footer from '@/widgets/Footer/Footer'
import Image from 'next/image'

const page = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate an asynchronous operation (e.g., fetching data) during initial loading
    const fetchData = async () => {
      // Simulate an API call or any asynchronous operation
      await new Promise((resolve) => setTimeout(resolve, 6000));

      // Set loading to false once the data is loaded
      setLoading(false);
    };

    fetchData();
  }, []);
  return (
    <>
      {loading ?
        <div className={styles.splashContainer}>
          <img src="/splash.gif" className={styles.splash} />
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