import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Login from "../components/Login/Login";
import App from "../components/App/App";
import {history} from "./history";

const AppRouter = () => {
    return (
        <Router history={history}>
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
