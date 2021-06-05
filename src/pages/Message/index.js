import actionCable from 'actioncable';
import { Button, Comment, Form, Input, List } from 'antd';
import React, { useEffect } from "react";
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
const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
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

    const { slug } = useParams();
    const [form] = Form.useForm();

    useEffect(() => {
        const cable = actionCable.createConsumer(WS_HOST);
        cable.subscriptions.create({
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
                console.log('socket data----------------', data);
                // setMessages(prevArray => [...prevArray, data.message])
                dispatch(addNewMessageSocketAction(data.message))

            }
        })
    }, [slug, dispatch])

    useEffect(() => {
        dispatch(messageAction(slug));
    }, [slug, dispatch])

    return (
        <div>
            <h3>Chat Room: {slug}</h3>
            <List
                className="comment-list"
                header={`${messages.length} replies`}
                itemLayout="horizontal"
                dataSource={messages}
                renderItem={item => (
                    <li>
                        <Comment
                            actions={item.actions}
                            author={item.user.username}
                            avatar='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'
                            content={item.content}
                            datetime={item.created_at}
                        />
                    </li>
                )}
            />

            <Form
                {...layout}
                name="basic"
                onFinish={(message) => { dispatch(newMessageAction(message.content)); form.resetFields(); }}
                form={form}
            >
                <Form.Item
                    name="content"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your message!',
                        },
                    ]}
                >
                    <TextArea rows={4} />
                </Form.Item>

                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit"> Submit </Button>
                </Form.Item>
            </Form>
        </div >
    );
}

export default Message;