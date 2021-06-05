import { Button, Col, Form, Input, Layout, Row, Typography } from 'antd';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import { useInjectReducer, useInjectSaga } from 'redux-injectors';
import { registerAction } from './actions';
import reducer from './reducer';
import saga from './saga';

const { Content } = Layout;

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};
const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};

const key = 'register';

const Register = () => {
    useInjectReducer({ key, reducer });
    useInjectSaga({ key, saga });
    const dispatch = useDispatch();

    return (
        <>
            <Content style={{ padding: '0 50px', marginTop: 64 }}>
                <Row align='middle'
                    justify='center'
                    style={{ minHeight: '300px' }}>
                    <Col span={10}>
                        <Typography.Title>Welcome to Chat App</Typography.Title>
                        <Form
                            {...layout}
                            name="basic"
                            initialValues={{
                                username: 'test',
                                password: 'test',
                                first_name: 'hi',
                                last_name: 'there'
                            }}
                            onFinish={(user) => dispatch(registerAction(user))}
                        >
                            <Form.Item
                                label="First Name"
                                name="first_name"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your first name!',
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                label="Last Name"
                                name="last_name"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your last name!',
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>

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
                                    Already have an account?   <Link to="/"> Login here</Link>
                                </Typography.Paragraph>
                            </Form.Item>

                            <Form.Item {...tailLayout}>
                                <Button type="primary" htmlType="submit">Register</Button>
                            </Form.Item>
                        </Form>
                    </Col>
                </Row>
            </Content>
        </>
    )
}

export default Register;