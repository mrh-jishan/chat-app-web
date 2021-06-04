import { Button, Col, Form, Input, Modal, Row } from 'antd';
import React from 'react';

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};

const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};

const Topic = ({ form, isModalVisible, handleOk, handleCancel }) => {

    return (
        <>
            <Modal title="Create Chat Topic"
                centered
                visible={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
                footer={null}>
                <Form
                    {...layout}
                    form={form}
                    onFinish={handleOk}
                >
                    <Row align='middle'
                        justify='center'>
                        <Col span={16}>
                            <Form.Item
                                label="Topic Name"
                                name="topic"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your topic name!',
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item {...tailLayout}>
                                <Button type="primary" htmlType="submit">
                                    Submit
                                </Button>
                            </Form.Item>
                        </Col>
                    </Row>
                </Form>
            </Modal>
        </>
    )
}

export default Topic;