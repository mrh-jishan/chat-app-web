import { Card, Col, Layout, Row, Typography } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, Route, Switch, useRouteMatch } from "react-router-dom";
import { API_HOST } from '../constant';
import Message from './Message';

const { Header, Content } = Layout;

const Chat = () => {

    const { path, url } = useRouteMatch();

    const [rooms, setRooms] = useState([]);

    useEffect(() => {
        axios.get(`${API_HOST}/chatrooms`)
            .then(res => {
                const { data } = res.data;
                console.log('data, ', data);
                setRooms(data.rooms)
            }).catch(err => {
                console.log('err: ', err.response);
            })
    }, [])

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
                            <Row>
                                <Col span={24}>  <h2>Chat Topic</h2> </Col>
                                <Col span={10}>
                                    <Card>
                                        <ul>
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