import React from 'react';
import {useHistory} from "react-router-dom";
import "./Login.css";

const Login = () => {
    let history = useHistory();
    return (
        <div className="Login">
            <div className="sidenav">
                <div className="login-main-text">
                    <h2>Application<br/> Login Page</h2>
                    <p>Login or register from here to access.</p>
                </div>
            </div>
            <div className="main">
                <div className="col-md-6 col-sm-12">
                    <div className="login-form">
                        <form>
                            <div className="form-group">
                                <label>User Name</label>
                                <input type="text" className="form-control" placeholder="User Name"/>
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" className="form-control" placeholder="Password"/>
                            </div>
                            <button type="submit" className="btn btn-black"
                                    onClick={() => history.push("/users/1")}>Login
                            </button>
                            <button type="submit" className="btn btn-secondary">Register</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
