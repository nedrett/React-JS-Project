import { Link } from 'react-router-dom';

export const Register = () => {
    return (
        <main>
            <section className="py-5" id="register-page">
                <div className="container register-page">
                    <h1>Register</h1>
                    <div className="register">
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
                                <label htmlFor="rePassword">Re-Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="rePassword"
                                    placeholder="Re-Password"
                                    name=""
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