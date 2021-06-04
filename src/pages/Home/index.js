import { Button, Col, Form, Input, Layout, Row, Typography } from 'antd';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import { useInjectReducer, useInjectSaga } from 'redux-injectors';
import { loginAction } from './actions';
import reducer from './reducer';
import saga from './saga';

const { Header, Content } = Layout;

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};

const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};

const key = 'auth';

const Home = () => {

    useInjectReducer({ key, reducer });
    useInjectSaga({ key, saga });

    const dispatch = useDispatch();
    const onLogin = (user) => dispatch(loginAction(user));

    return (
        <>
            <Layout>
                <Header>
                    <div className="logo" />
                </Header>
                <Content style={{ padding: '0 50px', marginTop: 64 }}>
                    <Row align='middle'
                        justify='center'
                        style={{ minHeight: '300px' }}>
                        <Col span={10}>
                            <Typography.Title>Welcome to Chat App</Typography.Title>
                            <Form
                                {...layout}
                                initialValues={{
                                    username: 'test',
                                    password: 'test'
                                }}
                                onFinish={onLogin}
                            >
                                <Form.Item
                                    label="Username"
                                    name="username"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your username!',
                                        },
                                    ]}
                                >
                                    <Input />
                                </Form.Item>

                                <Form.Item
                                    label="Password"
                                    name="password"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your password!',
                                        },
                                    ]}
                                >
                                    <Input.Password />
                                </Form.Item>

                                <Form.Item {...tailLayout}>
                                    <Typography.Paragraph>
                                        Don't you have an account? <Link to="/register"> Register here</Link>
                                    </Typography.Paragraph>
                                </Form.Item>

                                <Form.Item {...tailLayout}>
                                    <Button type="primary" htmlType="submit">Login</Button>
                                </Form.Item>
                            </Form>
                        </Col>
                    </Row>
                </Content>
            </Layout>
        </>
    )
}

export default Home;