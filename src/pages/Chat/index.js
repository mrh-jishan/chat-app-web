import { Button, Card, Col, Form, Layout, Menu, Row, Typography } from 'antd';
import React, { Fragment, useEffect } from 'react';
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

const { Content, Sider } = Layout;

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
            <Content style={{ padding: '0 50px', marginTop: 64 }}>
                <Layout>
                    <Sider style={{
                        overflow: 'auto',
                        height: 'calc(100vh - 60px)',
                        position: 'fixed',
                        left: 0,
                        top: 60
                    }}
                    >
                        <Menu theme="dark" mode="inline" >
                            {rooms.map((room, index) => (
                                <Fragment key={index}>
                                    <Menu.Divider type="horizontal" />
                                    <Menu.Item key={index} >
                                        <Link to={`${url}/${room.slug}`}>{room.topic}</Link>
                                    </Menu.Item>
                                </Fragment>
                            ))}
                        </Menu>
                    </Sider>
                    <Layout className="site-layout" style={{ marginLeft: 200, marginTop: 20 }}>
                        <Row align='middle' justify='center' style={{ minHeight: '250px' }}>
                            <Col span={24}>
                                <Row
                                    gutter={[16, 16]}
                                    align='middle'
                                    justify='space-between'>
                                    <Col>
                                        <Typography.Title>Welcome to Chat App</Typography.Title>
                                    </Col>
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
                    </Layout>
                </Layout>
            </Content>
        </>
    )
}

export default Chat;