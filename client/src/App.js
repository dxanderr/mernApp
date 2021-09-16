import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/profile";
import Register from "./pages/register/Register"

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
            <Home />
        </Route>
        <Route path="/login">
            <Login />
        </Route>
        <Route path="/profile/:userame">
            <Profile />
        </Route>
        <Route path="/register">
            <Register />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
