import { Button, Card, Col, Form, Layout, notification, Row, Typography } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, Route, Switch, useRouteMatch } from "react-router-dom";
import Topic from '../components/Topic';
import { API_HOST } from '../constant';
import Message from './Message';

const { Header, Content } = Layout;

const Chat = ({ history }) => {

    const { path, url } = useRouteMatch();
    const [rooms, setRooms] = useState([]);
    const [form] = Form.useForm();
    const [isModalVisible, setIsModalVisible] = useState(false);

    useEffect(() => {
        axios.get(`${API_HOST}/chatrooms`)
            .then(res => {
                const { data } = res.data;
                setRooms(data.rooms)
            }).catch(err => {
                console.log('err: ', err.response);
            })
    }, [])

    const handleOk = (topic) => {
        axios.post(`${API_HOST}/chatrooms`, { chatroom: topic })
            .then(res => {
                setRooms(prev => [...prev, res.data.data.chatroom])
                setIsModalVisible(false);
                form.resetFields();
                notification.info({
                    description: 'Success!',
                    placement: 'bottomRight',
                });
            }).catch(err => {
                notification.error({
                    message: err.response.data.message,
                    placement: 'bottomRight'
                })
            })
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const showModal = () => {
        setIsModalVisible(true);
    };

    return (
        <>
            <Layout>
                <Header>
                    <div className="logo" />
                </Header>
                <Content style={{ padding: '0 50px', marginTop: 64 }}>
                    <Row align='middle' justify='center' style={{ minHeight: '300px' }}>
                        <Col span={24}>
                            <Typography.Title>Welcome to Chat App</Typography.Title>
                            <Row
                                gutter={[16, 16]}
                                align='middle'
                                justify='center'>

                                <Col span={24}>
                                    <h2>Chat Topic</h2>
                                    <Button type="primary" onClick={showModal}>
                                        Create Topic
                                    </Button>
                                    <Topic
                                        form={form}
                                        isModalVisible={isModalVisible}
                                        handleOk={handleOk}
                                        handleCancel={handleCancel} />
                                </Col>
                                <Col span={10}>
                                    <Card>
                                        <ul>
                                            {rooms.length <= 0 && (
                                                <h3> No topic found </h3>
                                            )}
                                            {rooms.map((room, index) => (
                                                <li key={index}>
                                                    <Link to={`${url}/${room.slug}`}>{room.topic}</Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </Card>
                                </Col>

                                <Col span={14}>
                                    <Card>
                                        <Switch>
                                            <Route exact path={path} component={() => <h3>Please select a chat topic.</h3>} />
                                            <Route path={`${path}/:slug`} component={Message} />
                                        </Switch>
                                    </Card>
                                </Col>
                            </Row>,
                        </Col>
                    </Row>
                </Content>
            </Layout>
            <Link to="/">Go Back</Link>
        </>
    )
}

export default Chat;