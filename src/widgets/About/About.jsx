'use client'

import React, { useEffect, useState } from 'react';
import styles from '../../themes/about.module.css';
import { about } from '@/common/utils/constants';

const About = () => {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    // Update window width on mount and on resize
    const updateWindowWidth = () => {
      setWindowWidth(window.innerWidth);
    };

    // Initial update
    updateWindowWidth();

    // Add event listener for window resize
    window.addEventListener('resize', updateWindowWidth);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', updateWindowWidth);
    };
  }, []);


  return (
    <div className={styles.container}>
      {about.map((item, index) => (
        <div className={styles.wrap} key={index}>
          <div className={styles.row}>
            <span className={styles.about}>{item?.title}</span>
          </div>
          <div
            className={styles.row}
            style={{
              flexDirection: windowWidth < 767 ? (item?.reverse ? 'column' : 'column') : (item?.reverse ? 'row-reverse' : 'row'),
            }}
          >
            <div className={styles.left}>
              <img src={item?.img} alt="" className={styles.img} />
            </div>
            <div className={styles.right}>
              <p className={styles.desc}>{item?.desc}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default About;
