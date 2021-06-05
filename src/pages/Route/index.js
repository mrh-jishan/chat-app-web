import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { makeSelectIsLogged } from '../Home/selectors';

const stateSelector = createStructuredSelector({
  isLogged: makeSelectIsLogged(),
});

export const PrivateRoute = ({ component: Component, ...rest }) => {
  const { isLogged } = useSelector(stateSelector);
  return (
    <Route
      {...rest}
      render={(props) =>
        isLogged ? <Component {...props} /> : <Redirect to='/login' />
      }
    />
  );
}
