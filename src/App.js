import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import './App.css';
import Chat from "./pages/Chat";
import Home from "./pages/Home";
import Register from "./pages/Register";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={Home} />
        <Route exact path="/register" component={Register} />
        <Route path="/chat" component={Chat} />
        <Redirect to='/login' from='/' />
        <Route path='*' exact={true} component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
