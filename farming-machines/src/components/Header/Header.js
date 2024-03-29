import { useContext } from "react";
import { Link } from 'react-router-dom';

import { AuthContext } from '../../contexts/AuthContext';


export const Header = () => {
    const { user } = useContext(AuthContext);

    return (
        <header>
            <div className="header">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col logo_section">
                            <div className="full">
                                <div className="center-desk">
                                    <div className="logo">
                                        <Link to="/"><img src="images/logo.png" alt="" /></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-9 col-lg-9 col-md-9 col-sm-9">
                            <nav className="navigation navbar navbar-expand-md navbar-dark ">
                                <button className="navbar-toggler" type="button" data-toggle="collapse"
                                    data-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false"
                                    aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarsExample04">
                                    <ul className="navbar-nav mr-auto">
                                        {user.email && <span className="nav-link">Welcome: {user.email}</span>}
                                        <Link className="nav-link" to="/search"><i className="fa fa-search" aria-hidden="true"></i></Link>
                                        <Link className="nav-link" to="/"> Home </Link>
                                        <Link className="nav-link" to="/catalog">Catalog </Link>

                                        {user.email
                                            ? <div>
                                                <Link className="nav-link" to="/offer/create">Create Offer </Link>
                                                <Link className="nav-link" to="/logout">Logout</Link>
                                            </div>
                                            : <div>
                                                <Link className="nav-link" to="/login">Login</Link>
                                                <Link className="nav-link" to="/register">Register</Link>
                                            </div>
                                        }
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}