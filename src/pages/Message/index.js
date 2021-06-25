import actionCable from 'actioncable';
import { Button, Comment, Form, Input, List } from 'antd';
import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from "react-router-dom";
import { useInjectReducer, useInjectSaga } from 'redux-injectors';
import { createStructuredSelector } from 'reselect';
import { WS_HOST } from '../../constant';
import { addNewMessageSocketAction, messageAction, newMessageAction } from './actions';
import reducer from './reducer';
import saga from './saga';
import { makeSelectMessages } from './selectors';

const { TextArea } = Input;

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};

const key = 'messageList';

const Message = () => {

    useInjectReducer({ key, reducer });
    useInjectSaga({ key, saga });

    const dispatch = useDispatch();
    const stateSelector = createStructuredSelector({
        messages: makeSelectMessages(),
    });
    const { messages } = useSelector(stateSelector);

    const el = useRef(null);
    const { slug } = useParams();
    const [form] = Form.useForm();

    useEffect(() => {
        const cable = actionCable.createConsumer(WS_HOST);
        const cableRef = cable.subscriptions.create({
            channel: `MessagesChannel`,
            chatroom_slug: `messages_${slug}`
        }, {
            connected: () => {
                console.log("connected!")
            },
            disconnected: () => {
                console.log('disconnected');
            },
            received: data => {
                dispatch(addNewMessageSocketAction(data.message));
                console.log('inputEl: ', el);
                el.current.scrollIntoView()
            }
        })
        return () => {
            cableRef.consumer.disconnect();
        };
    }, [slug, dispatch])

    useEffect(() => {
        dispatch(messageAction(slug));
        setTimeout(() => el.current.scrollIntoView(), 500)
    }, [slug, dispatch])


    return (
        <>
            <h3>Chat Room: {slug}</h3>
            <List
                className="comment-list"
                style={{
                    height: 380,
                    overflow: 'auto'
                }}
                header={`${messages.length} replies`}
                dataSource={messages}
                bordered={true}
                footer={<div ref={el} />}
                renderItem={item => (
                    <Comment
                        actions={item.actions}
                        author={item.user.username}
                        avatar='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'
                        content={item.content}
                        datetime={item.created_at}
                    />
                )}
            />

            <Form
                {...layout}
                name="basic"
                onFinish={(message) => { dispatch(newMessageAction(message.content)); form.resetFields(); }}
                form={form}
            >
                <Form.Item
                    wrapperCol={{ span: 24 }}
                    name="content"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your message!',
                        },
                    ]}
                >
                    <TextArea rows={2} placeholder='Message...' />
                </Form.Item>

                <Form.Item
                    wrapperCol={{ span: 24 }} style={{ textAlign: 'right' }}>
                    <Button type="primary" htmlType="submit"> Submit </Button>
                </Form.Item>
            </Form>
        </>
    );
}

export default Message;