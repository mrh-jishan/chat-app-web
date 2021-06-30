import { Avatar, Button, Card, Col, Form, Layout, List, Row } from 'antd';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Route, Switch, useRouteMatch } from "react-router-dom";
import { useInjectReducer, useInjectSaga } from 'redux-injectors';
import { createStructuredSelector } from 'reselect';
import Topic from '../../components/Topic';
import Message from '../Message';
import { chatroomAction, chatroomCreateAction, closeModalAction, opneModalAction } from './actions';
import reducer from './reducer';
import saga from './saga';
import { makeSelectModalOpen, makeSelectRooms } from './selectors';

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
            <Layout style={{ marginTop: 20 }}>
                <Row gutter={[16, 16]}
                    justify='center'
                    style={{ height: '250px' }}>

                    <Col span={24}>
                        <Row gutter={[16, 16]}
                            align='middle'
                            justify='end'>
                            {/* <Col>
                                    <Typography.Title >Welcome to Chat App</Typography.Title>
                                </Col> */}
                            <Col>
                                <Button
                                    type="primary"
                                    onClick={() => dispatch(opneModalAction())}>
                                    Create Topic
                                </Button>
                            </Col>
                        </Row>

                        <Topic
                            form={form}
                            isModalVisible={isModalVisible}
                            handleOk={(topic) => dispatch(chatroomCreateAction(topic))}
                            handleCancel={() => dispatch(closeModalAction())} />
                    </Col>

                    <Col span={24}>
                        <Row gutter={[16, 16]}
                            align='stretch'
                            justify='center'>
                            <Col span={8}>
                                <Card>
                                    <h3>Select Chat Room</h3>
                                    <List header={`${rooms.length} chat rooms`}
                                        size="small"
                                        itemLayout="horizontal"
                                        dataSource={rooms}
                                        style={{
                                            height: 'calc(100vh - 270px)',
                                            overflowY: 'scroll'
                                        }}
                                        renderItem={room => (
                                            <List.Item>
                                                <List.Item.Meta
                                                    avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                                                    title={<Link to={`${url}/${room.slug}`}>{room.topic}</Link>}
                                                />
                                            </List.Item>
                                        )}
                                    />
                                </Card>
                            </Col>

                            <Col flex="auto">
                                <Card>
                                    {rooms.length <= 0 ? (
                                        <h3> No topic found </h3>
                                    ) : (
                                        <Switch>
                                            <Route exact path={path} component={() => <h3>Please select a chat topic.</h3>} />
                                            <Route path={`${path}/:slug`} component={Message} />
                                        </Switch>
                                    )}

                                </Card>
                            </Col>
                        </Row>

                    </Col>
                </Row>
            </Layout>
        </>
    )
}

export default Chat;