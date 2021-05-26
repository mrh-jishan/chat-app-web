import React from 'react';
import { Link } from "react-router-dom";
const Chat = () => {

    const handleReceivedConversation = response => {
        // const { conversation } = response;
        // this.setState({
        //   conversations: [...this.state.conversations, conversation]
        // });

        console.log('response: ', response);
    };


    return (
        <>
            <h1>HI there</h1>
            <Link to="/">Go Back</Link>
        </>
    )
}

export default Chat;