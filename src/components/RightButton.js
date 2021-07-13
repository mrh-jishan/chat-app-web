import { CloseOutlined, MenuOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import React from 'react';

const RightButton = ({ isOpen, toggleMenu }) => {

    return (
        <>
            <Button type="primary"
                size="large"
                icon={isOpen ? <CloseOutlined /> : <MenuOutlined />}
                onClick={toggleMenu}
                style={{
                    position: "fixed",
                    left: "20px",
                    top: '75px',
                    zIndex: 2
                }} />
        </>
    )

}

export default RightButton;