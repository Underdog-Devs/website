import React from 'react';
import styles from '../../CSS/Logo.module.css';
import logo from '../../Assets/UD_Logo.webp';
export default function Logo() {
  return (
    <div className={styles.logo}>
      <img src={logo} alt="Underdog Dev Logo" className={styles.logoImg} />
      <p className={styles.logoText}> Underdog Devs</p>
    </div>
  );
}
