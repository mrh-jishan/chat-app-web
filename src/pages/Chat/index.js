import { Button, Card, Col, Form, Layout, Row, Typography } from 'antd';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Switch, useRouteMatch } from "react-router-dom";
import { useInjectReducer, useInjectSaga } from 'redux-injectors';
import { createStructuredSelector } from 'reselect';
import Topic from '../../components/Topic';
import Message from '../Message';
import { PrivateRoute } from '../Route';
import { chatroomAction, chatroomCreateAction, closeModalAction, opneModalAction } from './actions';
import reducer from './reducer';
import saga from './saga';
import { makeSelectModalOpen, makeSelectRooms } from './selectors';

const { Header, Content } = Layout;

const key = 'chatroom';

const Chat = () => {

    useInjectReducer({ key, reducer });
    useInjectSaga({ key, saga });

    const dispatch = useDispatch();
    const stateSelector = createStructuredSelector({
        rooms: makeSelectRooms(),
        isModalVisible: makeSelectModalOpen(),
    });
    const { rooms, isModalVisible } = useSelector(stateSelector);
    const { path, url } = useRouteMatch();
    const [form] = Form.useForm();

    useEffect(() => {
        dispatch(chatroomAction());
    }, [dispatch])

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
                                    <Button
                                        type="primary"
                                        onClick={() => dispatch(opneModalAction())}>
                                        Create Topic
                                    </Button>
                                    <Topic
                                        form={form}
                                        isModalVisible={isModalVisible}
                                        handleOk={(topic) => dispatch(chatroomCreateAction(topic))}
                                        handleCancel={() => dispatch(closeModalAction())} />
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
                                            <PrivateRoute exact path={path} component={() => <h3>Please select a chat topic.</h3>} />
                                            <PrivateRoute path={`${path}/:slug`} component={Message} />
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