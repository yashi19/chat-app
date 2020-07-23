import React from 'react';
import {useHistory} from "react-router-dom";

const Login = () =>  {
    let history = useHistory();
  return (
    <div className="Login">
      Login Page
        <button onClick={() => history.push("/users/1")}>Go To App Page</button>
    </div>
  );
}

export default Login;
