import Login from "../components/Login/Login";
import App from "../components/App/App";

const routes = [
    {
        path: "/",
        component: Login
    },
    {
        path: "/users/:id",
        component: App
    }
];

export default routes;