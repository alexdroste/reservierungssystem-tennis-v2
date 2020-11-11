import { Alert, Button, Checkbox, Form, Input, Typography } from 'antd';
import { LockOutlined, MailOutlined } from '@ant-design/icons';
import React, { useContext } from 'react';

import { Link } from 'react-router-dom';
import { authContext } from '../AuthContext';
import styles from './LoginPage.module.css';

export function LoginPage() {

    const { login } = useContext(authContext);

    const onFinish = values => {
        console.log('Success:', values);
        login(values);
    };

    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };

    return (
        <>
        <div className={styles.cta}>
            <Alert type="info" message={
                <span>Sie haben noch keinen Account? <Link to="/register">Jetzt&nbsp;Registrieren!</Link></span>
            } />
        </div>
        <div className={styles.wrapper}>
            <Typography.Title level={3}>Anmelden</Typography.Title>

            <Form
                layout="vertical"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                <Form.Item
                    name="mail"
                    rules={[{ required: true, message: 'E-Mail Adresse ist erforderlich' }]}
                >
                    <Input prefix={<MailOutlined />} placeholder="E-Mail" />
                </Form.Item>

                <Form.Item
                    name="password"
                    rules={[{ required: true, message: 'Passwort ist erforderlich' }]}
                >
                    <Input.Password prefix={<LockOutlined />} placeholder="Passwort" />
                </Form.Item>

                <Form.Item>
                    <Form.Item name="rememberLogin" valuePropName="checked" noStyle>
                        <Checkbox>Angemeldet bleiben</Checkbox>
                    </Form.Item>

                    <a className={styles.forgotLink} href="">
                        Password vergessen
                    </a>
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit" className={styles.loginButton}>
                        Anmelden
                    </Button>
                </Form.Item>
                

                <Form.Item className={styles.registerItem}>
                    <span>oder </span>
                    <Link to="/register">Kostenlos Registrieren</Link>
                </Form.Item>
            </Form>
        </div>
        </>
    );
}