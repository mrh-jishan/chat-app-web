import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
import { Redirect, Switch } from "react-router-dom";
import './App.css';
import configureStore from './configureStore';
import history from './history';
import Chat from "./pages/Chat";
import Home from "./pages/Home";
import Register from "./pages/Register";
import { PrivateRoute, PublicRoute } from './pages/Route';
import Startup from './pages/Startup';

const store = configureStore(history);

function App() {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Startup>
          <Switch>
            <PublicRoute exact path="/login" component={Home} />
            <PublicRoute exact path="/register" component={Register} />
            <PrivateRoute path="/chat" component={Chat} />
            <Redirect to='/login' from='/' />
            <PublicRoute path='*' exact component={Home} />
          </Switch>
        </Startup>
      </ConnectedRouter>
    </Provider>
  );
}

export default App;
