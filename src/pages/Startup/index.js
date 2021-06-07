import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useInjectReducer, useInjectSaga } from 'redux-injectors';
import { checkLoginAction } from './actions';
import reducer from './reducer';
import saga from './saga';

const key = 'root';

const Startup = (props) => {
    useInjectReducer({ key, reducer });
    useInjectSaga({ key, saga });
    const dispatch = useDispatch();

    useEffect(() => dispatch(checkLoginAction(localStorage.getItem("token"))), [dispatch]);
   
    return (
        props.children
    );
}

export default Startup;
