import React from 'react';
import {Route} from "react-router-dom";

function RouteWithSubRoute(route) {
    return (
        <Route
            exact={true}
            path={route.path}
            render={props => (
                // pass the sub-routes down to keep nesting
                <route.component {...props} routes={route.routes}/>
            )}
        />
    );
}

export default RouteWithSubRoute;
