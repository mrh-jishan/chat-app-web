import { Col, Layout, Menu, Row } from 'antd';
import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { makeSelectIsLogged } from '../Startup/selectors';


const { Header, Footer } = Layout;

const stateSelector = createStructuredSelector({
  isLogged: makeSelectIsLogged(),
});

export const PrivateRoute = ({ component: Component, ...rest }) => {
  const { isLogged } = useSelector(stateSelector);
  return (
    <Route
      {...rest}
      render={(props) =>
        isLogged ? (
          <>
            <Layout>
              <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
                <Row justify="space-between">
                  <Col span={10}>
                    <div className="logo" />
                    <Menu theme="dark"
                      mode="horizontal"
                      defaultSelectedKeys={['0']}>
                      <Menu.Item key="1">Home</Menu.Item>
                      <Menu.Item key="2">Feeds</Menu.Item>
                    </Menu>
                  </Col>
                  <Col span={8}>
                    <Row justify="end">
                      <Col>
                        <Menu theme="dark"
                          mode="horizontal">
                          <Menu.Item key="3">Profile</Menu.Item>
                          <Menu.Item key="4">Logout</Menu.Item>
                        </Menu>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Header>
              <Component {...props} />
              <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
            </Layout>
          </>
        ) : <Redirect to='/login' />
      }
    />
  );
}

export const PublicRoute = ({ component: Component, restricted, ...rest }) => {
  const { isLogged } = useSelector(stateSelector);
  return (
    <Route
      {...rest}
      render={(props) =>
        isLogged ? (
          <Redirect to='/chat' />
        ) : (
          (
            <>
              <Layout>
                <Header>
                  <div className="logo" />
                </Header>
                <Component {...props} />
                <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
              </Layout>
            </>
          )
        )
      }
    />
  );
}