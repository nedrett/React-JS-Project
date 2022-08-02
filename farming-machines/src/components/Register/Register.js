import { useContext } from "react";
import { Link, useNavigate } from 'react-router-dom';

import * as authService from "../../services/authService";
import { AuthContext } from "../../contexts/AuthContext";

export const Register = () => {
    const { userLogin } = useContext(AuthContext);
    const navigate = useNavigate();

    const onSubmit = (e) => {
        e.preventDefault();


        const formData = new FormData(e.target);

        const email = formData.get('email');
        const password = formData.get('password');
        const confirmPassword = formData.get('confirm-password');

        if (password !== confirmPassword) {
            return window.alert('Password and Repeated Password does not match!');

            // navigate('/register');
        }

        if (!email) {
            return window.alert('Please fill up Email!');
        }
        if (!password) {
            return window.alert('Please fill up Password!');

        }

        authService.register(email, password)
            .then(authData => {
                userLogin(authData);
                navigate('/');
            });
    }

    return (
        <main>
            <section className="py-5" id="register-page">
                <div className="container register-page">
                    <h1>Register</h1>
                    <div className="register">
                        <form id="register" onSubmit={onSubmit}>
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
                                <label htmlFor="rePassword">Re-Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="confirm-password"
                                    placeholder="Re-Password"
                                    name="confirm-password"
                                    defaultValue=""
                                />
                            </div>
                            <div className="form-group">
                                <p>
                                    Already have account? <Link to="/login">Login Now!</Link>
                                </p>
                            </div>
                            <button type="submit" className="btn btn-primary">
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </main>
    );
}