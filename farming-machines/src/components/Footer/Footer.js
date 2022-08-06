import { Link } from 'react-router-dom';

export const Footer = () => {
    return (
        // <!--  footer -->
        <footer id="contact">
            <div className="footer">
                <div className="container">
                    <div className="row">

                        <div className="col-md-3 border_right">
                            <h3>Contacts</h3>
                            <ul className="location_icon">
                                <li><i className="fa fa-volume-control-phone" aria-hidden="true"></i>  +359885908746
                                </li>
                                <li><i className="fa fa-envelope" aria-hidden="true"></i>  nedret88@gmail.com</li>
                            </ul>
                        </div>
                        <div className="col-md-3 border_right">
                            <h3>Menus</h3>
                            <ul className="link">
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/catalog">Catalog</Link></li>
                                <li><Link to="/contacts">Contact</Link></li>
                                <li><Link to="/about">About</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="copyright">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <p>Copyright &copy; All Right Reserved By <a href="https://github.com/nedrett"> Nedret</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}