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
                                <li><a href="#"><i className="fa fa-map-marker" aria-hidden="true"></i></a> Locatins</li>
                                <li><a href="#"><i className="fa fa-volume-control-phone" aria-hidden="true"></i></a> +71 9087654321
                                </li>
                                <li><a href="#"><i className="fa fa-envelope" aria-hidden="true"></i></a>demo@gmail.com</li>
                            </ul>
                        </div>
                        <div className="col-md-3 border_right">
                            <h3>Menus</h3>
                            <ul className="link">
                                <li><a href="index.html">Home</a></li>
                                <li><a href="about.html">About</a></li>
                                <li><a href="products.html">Catalog</a></li>
                                <li><a href="blog.html">Blog</a></li>
                                <li><a href="contact.html">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="copyright">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <p>Copyright 2019 All Right Reserved By <a href="https://github.com/nedrett"> Nedret</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}