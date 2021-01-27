import React from 'react'
import styles from "../../CSS/GetInvolved.module.css"
import {Row, Col, Button, Input} from 'antd'
import {MailOutlined} from '@ant-design/icons'


const GetInvolved = () => {
    return (
        <div className={styles.container}>
            <Row className={styles.header}><h2>Want to Get Involved?</h2></Row>
            <Row className={styles.info}><p>Input your email into the form below to have a member contact you with more information.</p></Row>
            <div className={styles.actionContainer}>
                <div className={styles.inputContainer}>
                    <Input className={styles.input} style={{fontFamily: 'Open Sans, sans-serif'}}placeHolder={'Your Email'} prefix={<MailOutlined/>}/>
                </div>
                <div className={styles.buttonContainer}>
                    <Button className={styles.button} style={{background: '#1565d8', color: 'white', fontFamily: 'Open Sans, sans-serif'}}>Submit</Button>
                </div>
            </div>
        </div>
    )
}

export default GetInvolved
