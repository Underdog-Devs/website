import React from 'react';
import styles from '../CSS/GetInvolved.module.css';
import globalStyles from '../CSS/globalStyles.module.css';
import { Row } from 'antd';
import { MailOutlined } from '@ant-design/icons';
import emailjs from 'emailjs-com';
// import { useForm } from "react-hook-form";
import { useState } from 'react';
const GetInvolved = () => {
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState('');
  const handleEmailChange = e => {
    const { value } = e.target;
    setEmail(value);
  };

  const sendEmail = e => {
    e.preventDefault();
    let emailValid = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i.test(email);
    if (emailValid) {
      emailjs
        .sendForm(
          process.env.REACT_APP_SERVICE_ID,
          process.env.REACT_APP_TEMPLATE_ID,
          e.target,
          process.env.REACT_APP_USER_ID
        )
        .then(
          result => {
            console.log(result.text);
          },
          error => {
            console.log(error.text);
          }
        );
    }
    setEmail('');
    setErrors('');
  };

  return (
    <div className={styles.container} id="get-involved">
      <Row className={`${globalStyles.headerText} ${styles.header}`}>
        <h2>Want to Get Involved?</h2>
      </Row>
      <Row className={`${globalStyles.normalP} ${styles.info}`}>
        <p>
          Input your email into the form below to have a member contact you with
          more information.
        </p>
      </Row>
      <form onSubmit={sendEmail} className={styles.actionContainer}>
        <div className={styles.inputContainer}>
          <input
            name="email"
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
          <button
            type="submit"
            className={styles.button}
            style={{
              background: '#1565D8',
              color: 'white',
              fontFamily: 'Open Sans, sans-serif',
            }}
          >
            Submit
          </button>
        </div>
      </form>
      <form action="https://www.paypal.com/donate" method="post" target="_top">
        <input type="hidden" name="hosted_button_id" value="2R2AP79YGLEXJ" />
        <input
          type="image"
          src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif"
          border="0"
          name="submit"
          title="PayPal - The safer, easier way to pay online!"
          alt="Donate with PayPal button"
        />
        <img
          alt=""
          border="0"
          src="https://www.paypal.com/en_US/i/scr/pixel.gif"
          width="1"
          height="1"
        />
      </form>
    </div>
  );
};
export default GetInvolved;
