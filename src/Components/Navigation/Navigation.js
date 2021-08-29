import React from 'react';
import styles from './navBar.module.css';
import { NavLinks } from './NavLinks';

export const Navigation = () => {
  return (
    <nav className={styles.navigation}>
      <NavLinks isMobile={false} />
    </nav>
  );
};

export default Navigation;
