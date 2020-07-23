import React from 'react';
import {BrowserRouter as Router, Switch} from "react-router-dom";
import routes from "./routes";
import RouteWithSubRoute from "./RouteWithSubRoute";

const AppRouter = () => {
    return (
        <Router>
            <Switch>
                {
                    routes.map((route, i) => (<RouteWithSubRoute key={i} {...route} />))
                }
            </Switch>
        </Router>
    )
};

export default AppRouter;
