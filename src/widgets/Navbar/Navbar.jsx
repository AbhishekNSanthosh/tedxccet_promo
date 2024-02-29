'use client';

import React, { useState, useEffect } from 'react';
import styles from '../../themes/navbar.module.css';
import { navItems } from '@/common/utils/constants';
import Menu from '@/common/icons/Menu';
import Close from '@/common/icons/Close';

const Navbar = () => {
  const [isNavbarFixed, setIsNavbarFixed] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [drawerOpen, setDrawerOpen] = useState(false);
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
    <div className={styles.container}>
      <div className={styles.navbarWrap}>
        <div className={styles.left}>
          <img src="/logo.svg" alt="" className={styles.logo} />
        </div>
        <div className={styles.right}>
          {navItems && navItems.map((item, index) => (
            <div className={styles.navItem} key={index}>
              <a href={item.link}>
                <span className={styles.nav}>{item?.title}</span>
              </a>
            </div>
          ))}
        </div>
        {drawerOpen ?
          <div className={styles.rightMob} onClick={() => {
            setDrawerOpen(false)
          }}>
            <Close />
          </div>
          :
          <div className={styles.rightMob} onClick={() => {
            setDrawerOpen(true)
          }}>
            <Menu />
          </div>
        }
      </div>
      {drawerOpen &&
        <div className={styles.drawer}>
          {navItems && navItems.map((item, index) => (
            <div className={styles.navItem} key={index}>
              <a href={item.link} onClick={() => {
                setDrawerOpen(false)
              }}>
                <span className={styles.nav}>{item?.title}</span>
              </a>
            </div>
          ))}
        </div>
      }
    </div>
  );
};

export default Navbar;
