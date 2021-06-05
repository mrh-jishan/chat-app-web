import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
import { Redirect, Route, Switch } from "react-router-dom";
import './App.css';
import configureStore from './configureStore';
import history from './history';
import Chat from "./pages/Chat";
import Home from "./pages/Home";
import Register from "./pages/Register";
import { PrivateRoute } from './pages/Route';

const store = configureStore(history);

function App() {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Switch>
          <Route exact path="/login" component={Home} />
          <Route exact path="/register" component={Register} />
          <PrivateRoute path="/chat" component={Chat} />
          <Redirect to='/login' from='/' />
          <Route path='*' exact={true} component={Home} />
        </Switch>
      </ConnectedRouter>
    </Provider>
  );
}

export default App;
