'use client';

import React, { useState, useEffect } from 'react';
import styles from '../../themes/navbar.module.css';
import { navItems } from '@/common/utils/constants';

const Navbar = () => {
  const [isNavbarFixed, setIsNavbarFixed] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  console.log(isNavbarFixed)
  const handleScroll = () => {
    setScrollPosition(window.scrollY);

    if (scrollPosition > 100 && !isNavbarFixed) {
      setIsNavbarFixed(true);
    } else if (scrollPosition <= 100 && isNavbarFixed) {
      setIsNavbarFixed(false);
    }
  };

  useEffect(() => {
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollPosition, isNavbarFixed]);

  return (
    <div className={`${isNavbarFixed ? styles.containerVanish : styles.container}`}>
      <div className={styles.navbarWrap}>
        <div className={styles.left}>
          <img src="/logo.svg" alt="" className={styles.logo} />
        </div>
        <div className={styles.right}>
          {navItems && navItems.map((item) => (
            <div className={styles.navItem}>
              <span className={styles.nav}>{item?.title}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
