import React from 'react';
import styles from '../CSS/GetInvolved.module.css';
import { Row, Button, Input } from 'antd';
import { MailOutlined } from '@ant-design/icons';
// import { useForm } from "react-hook-form";
import { useState } from 'react';
const GetInvolved = () => {
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState('');
  const handleEmailChange = e => {
    const { value } = e.target;
    console.log(value);
    setEmail(value);
  };
  const handleClick = () => {
    console.log(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i.test(email));
    let emailValid = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i.test(email);
    if (!emailValid) {
      setErrors('is invalid');
      return;
    }
    console.log('success');
    setEmail('');
    setErrors('');
  };
  return (
    <div className={styles.container}>
      <Row className={styles.header}>
        <h2>Want to Get Involved?</h2>
      </Row>
      <Row className={styles.info}>
        <p>
          Input your email into the form below to have a member contact you with
          more information.
        </p>
      </Row>
      <div className={styles.actionContainer}>
        <div className={styles.inputContainer}>
          <Input
            className={styles.input}
            style={{ fontFamily: 'Open Sans, sans-serif' }}
            placeholder={'Your Email'}
            prefix={<MailOutlined />}
            value={email}
            onChange={handleEmailChange}
          />
          <p className={styles.error}>{errors} </p>
        </div>
        <div className={styles.buttonContainer}>
          <Button
            className={styles.button}
            onClick={handleClick}
            style={{
              background: '#1565D8',
              color: 'white',
              fontFamily: 'Open Sans, sans-serif',
            }}
          >
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
};
export default GetInvolved;