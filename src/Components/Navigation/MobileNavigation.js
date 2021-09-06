import React, { useState } from 'react';
import { RiMenu3Line } from 'react-icons/ri';
import { CgClose } from 'react-icons/cg';
import styles from './navBar.module.css';
import { NavLinks } from './NavLinks';

export const MobileNavigation = () => {
  const [open, setOpen] = useState(false);
  const openIcon = (
    <RiMenu3Line
      className={styles.hamburger}
      size="35px"
      onClick={() => setOpen(!open)}
    />
  );

  const closeIcon = (
    <>
      <CgClose
        className={styles.hamburger}
        size="35px"
        onClick={() => setOpen(!open)}
      />
      <NavLinks isMobile={true} setOpen={setOpen} />
    </>
  );

  return (
    <nav className={styles.mobileNavigation}>
      {!open ? openIcon : closeIcon}
    </nav>
  );
};

export default MobileNavigation;
