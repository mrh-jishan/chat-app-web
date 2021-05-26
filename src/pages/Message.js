import actionCable from 'actioncable';
import { Button, Form, Input, Typography } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_HOST, WS_HOST } from '../constant';

const { TextArea } = Input;

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};
const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};


const Message = () => {
    const { slug } = useParams();
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        const cable = actionCable.createConsumer(WS_HOST);
        cable.subscriptions.create({
            channel: `MessagesChannel`,
            id: 'messages'
        }, {
            connected: () => {
                console.log("connected!")
            },
            disconnected: () => {
                console.log('disconnected');
            },
            received: data => {
                console.log('socket data----------------', data);
                setMessages(prevArray => [...prevArray, data.message])
            }
        })
    }, [])

    useEffect(() => {
        axios.get(`${API_HOST}/messages`)
            .then(res => {
                const { data } = res.data;
                console.log('messages-------, ', data);
                setMessages(data.messages)
            }).catch(err => {
                console.log('err: ', err.response);
            })
    }, [slug])

    const onFinish = (values) => {
        console.log('Success:', values);
        axios.post(`${API_HOST}/messages`, {
            "message": {
                "content": values.content,
                "chatroom_id": 1,
                "user_id": 2
            }
        })
            .then(res => {
                console.log(res);
                console.log(res.data);
            }).catch(err => {
                console.log('err: ', err.response);
            })
    };


    return (
        <div>
            <h3>slug: {slug}</h3>
            {messages.map((message, index) => (
                <div key={index}>
                    <Typography.Text>text: {message.content}</Typography.Text>
                    <hr />
                </div>
            ))}

            {/* <List
                header={<div>Header</div>}
                footer={<div>Footer</div>}
                bordered
                dataSource={messages}
                renderItem={item => (
                    <List.Item>
                        <Typography.Text mark>[ITEM]</Typography.Text> {item.content}
                    </List.Item>
                )}
            /> */}

            <Form
                {...layout}
                name="basic"
                initialValues={{
                    content: "hi",
                }}
                onFinish={onFinish}
            >
                <Form.Item

                    name="content"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your username!',
                        },
                    ]}
                >
                    <TextArea rows={4} />
                </Form.Item>


                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit">
                        Submit
        </Button>
                </Form.Item>
            </Form>
        </div>
    );
}

export default Message;