import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Login from "../components/Login/Login";
import App from "../components/App/App";

const AppRouter = () => {
    return (
        <Router>
            <Switch>
                <Route path={"/"} exact={true}>
                    <Login />
                </Route>
                <Route path={"/app"} exact={true}>
                    <App />
                </Route>
            </Switch>
        </Router>
    )
};

export default AppRouter;
