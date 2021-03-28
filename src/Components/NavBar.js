import React from 'react';
import { Button, Col, Row } from 'antd';
import logo from '../Assets/UDD_logo.svg';
import styles from '../CSS/NavBar.module.css';
import { MenuOutlined } from '@ant-design/icons';


const NavBar = () => {
  const scrollTo = (el) => {
    console.log(el);
    let target = document.getElementById(el);
    target.scrollIntoView({
      block: 'center',
      behavior: 'smooth',
      inline: 'center'
    });
  }

  return (
    <Row className={styles.navContainer} align={'middle'} >
      <Col className={styles.logoContainer} align={'start'} >
        <img src={logo} alt={'logo'} className={styles.logo} />
      </Col>
      <Col className={styles.linksContainer} >
        <Row className={styles.linksRow} justify={'space-around'} align={'center'} >
          <Col className={styles.linkItem} >
            <p className={styles.navP} onClick={() => scrollTo('our-story')}>Home</p>
          </Col>
          <Col className={styles.linkItem}>
            <p className={styles.navP} onClick={() => scrollTo('mentee')}>Mentees</p>
          </Col>
          <Col className={styles.linkItem}>
            <p className={styles.navP} onClick={() => scrollTo('mentor')}>Mentors</p>
          </Col>
        </Row>
      </Col>
      <Col className={styles.buttonContainer} span={4}>
        <Button className={styles.getInvolvedButton} type={'primary'} ghost>Get
          Involved</Button>
      </Col>
      <Col className={styles.menuContainer} span={14} align={'end'}>
        <Button className={styles.menuButton} icon={<MenuOutlined />}/>
      </Col>
    </Row>
  );
};

export default NavBar;
