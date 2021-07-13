import { Button, Card, Col, Form, Layout, Row } from 'antd';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import { Route, Switch, useRouteMatch } from "react-router-dom";
import { useInjectReducer, useInjectSaga } from 'redux-injectors';
import { createStructuredSelector } from 'reselect';
import ChatRoom from '../../components/ChatRoom';
import RightButton from '../../components/RightButton';
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

    const isMobile = useMediaQuery({ maxWidth: 767 })
    const [isOpen, setIsOpen] = useState(false);

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

    const toggleMenu = () => {
        if (isMobile) { setIsOpen(!isOpen) }
    }

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

                            {isMobile && (
                                <RightButton isOpen={isOpen} toggleMenu={toggleMenu} />
                            )}

                            {isOpen && isMobile && (
                                <Col style={{
                                    position: 'fixed',
                                    zIndex: 1,
                                    top: 64,
                                    width: '100%'
                                }}>
                                    <ChatRoom toggleMenu={toggleMenu} rooms={rooms} url={url} isMobile={isMobile}/>
                                </Col>
                            )}

                            {!isMobile && (
                                <Col style={{
                                    width: '35%'
                                }}>
                                    <ChatRoom toggleMenu={toggleMenu} rooms={rooms} url={url} isMobile={isMobile}/>
                                </Col>

                            )}

                            <Col flex="auto">
                                <Card>
                                    {rooms.length <= 0 ? (
                                        <h3> No topic found </h3>
                                    ) : (
                                        <Switch>
                                            <Route exact path={path} component={() => (
                                                <div style={{ textAlign: 'center' }}>
                                                    <h3>Please select a chat topic...</h3>
                                                    {isMobile && (
                                                        <Button type='primary' onClick={toggleMenu}>Open Chat Room</Button>
                                                    )}
                                                </div>
                                            )} />
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