import { useContext } from "react";
import { Link, useNavigate } from 'react-router-dom';

import { AuthContext } from '../../contexts/AuthContext';
import * as authService from "../../services/authService";

export const Login = () => {
    const { userLogin } = useContext(AuthContext);
    const navigate = useNavigate();

    const onSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target)
        console.log(formData);

        const email = formData.get('email');
        console.log(email);
        const password = formData.get('password');
        console.log(password);

        // const {
        //     email,
        //     password,
        // } = Object.fromEntries(new FormData(e.target));

        authService.login(email, password)
            .then(authData => {
                userLogin(authData);
                navigate('/')
            })
            .catch(() => {
                navigate('/404');
            })
    };

    return (
            <section className="py-5" id="login-page">
                <div className="container login-page">
                    <h1>Login</h1>
                    <div className="login">
                        <form id="login" method="POST" onSubmit={onSubmit}>
                            <div className="form-group">
                                <label htmlFor="email">Email address</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    placeholder="Enter email"
                                    name="email"
                                    defaultValue=""
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="password"
                                    placeholder="Password"
                                    name="password"
                                    defaultValue=""
                                />
                            </div>
                            <div className="form-group">
                                <p>
                                    Not registered yet? <Link to="/register">Register Now!</Link>
                                </p>
                            </div>
                            <button type="submit" className="btn btn-primary">
                                Sign-in
                            </button>
                        </form>
                    </div>
                </div>
            </section>
    );
}