import { Link } from 'react-router-dom';

export const Header = () => {
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
                                <li className="home">
                                    <Link className="nav-link" to="/"> Home </Link>
                                </li>
                                <li className="catalog">
                                    <Link className="nav-link" to="/catalog">Catalog </Link>
                                </li>
                                <li className="contacts">
                                    <Link className="nav-link" to="/contacts">Contact</Link>
                                </li>
                                <li className="about-nav">
                                    <Link className="nav-link" to="/about">About</Link>
                                </li>
                                <li className="search">
                                    <Link className="nav-link" to="/search"><i className="fa fa-search" aria-hidden="true"></i></Link>
                                </li>
                                <li className="login">
                                    <Link className="nav-link" to="/login">Login</Link>
                                </li>
                                <li className="register">
                                    <Link className="nav-link" to="/register">Register</Link>
                                </li>
                                <li className="logout">
                                    <Link className="nav-link" to="/logout">Logout</Link>
                                </li>
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