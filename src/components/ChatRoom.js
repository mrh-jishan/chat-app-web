import { Avatar, Card, List, Typography } from 'antd';
import React from 'react';
import { Link } from "react-router-dom";


const ChatRoom = ({ toggleMenu, rooms, url , isMobile}) => {

    const getHeight = ()=> {
        return isMobile ? 'calc(100vh - 210px)': 'calc(100vh - 270px)'
    }

    return (
        <>
            <Card>
                <h3>Select Chat Room</h3>
                <List header={`${rooms.length} chat rooms`}
                    size="small"
                    itemLayout="horizontal"
                    dataSource={rooms}
                    style={{
                        height: getHeight(),
                        overflowY: 'scroll'
                    }}
                    bordered
                    renderItem={room => (
                        <Link to={`${url}/${room.slug}`} onClick={toggleMenu}>
                            <Card bodyStyle={{ padding: 10 }}>
                                <Card.Meta
                                    avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                                    title={<Typography.Text>{room.topic}</Typography.Text>} />
                            </Card>
                        </Link>
                    )}
                />
            </Card>
        </>
    )
}

export default ChatRoom;