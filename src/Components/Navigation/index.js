import React from 'react';
import Logo from './Logo';
import styles from './navBar.module.css';
import MobileNavigation from './MobileNavigation';
import Navigation from './Navigation';

const NavBar = () => {
  return (
    <div className={styles.navBar}>
      <Logo />
      <MobileNavigation />
      <Navigation />
    </div>
  );
};

export default NavBar;
