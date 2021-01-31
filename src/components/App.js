import React from "react";
import Header from "./google-drive/Header";
import { AuthProvider } from "./contexts/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Profile from "./authentication/Profile";
import Signup from "./authentication/Signup";
import Login from "./authentication/Login";
import ResetPassword from "./authentication/ResetPassword";
import UpdateProfile from "./authentication/UpdateProfile";
import PrivateRoute from "./authentication/PrivateRoute.jsx";
import Dashboard from "./google-drive/Dashboard";

function App() {
  return (
    <>
      <Router>
        <AuthProvider>
          <Header />
          <Switch>
            <PrivateRoute exact path="/" component={Dashboard} />
            <PrivateRoute
              exact
              path="/folder/:folderId"
              component={Dashboard}
            />

            <PrivateRoute path="/profile" component={Profile} />
            <PrivateRoute path="/update-profile" component={UpdateProfile} />

            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            <Route path="/forgot-password" component={ResetPassword} />
          </Switch>
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;
