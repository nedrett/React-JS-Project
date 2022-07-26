import { Link } from 'react-router-dom';

export const Login = () => {
    return (
        <main>
            <section className="py-5" id="login-page">
                <div className="container login-page">
                    <h1>Login</h1>
                    <div className="login">
                        <form action="" method="">
                            <div className="form-group">
                                <label htmlFor="email">Email address</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="email"
                                    placeholder="Enter email"
                                    name=""
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
                                    name=""
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
        </main>
    );
}