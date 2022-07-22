export const Details = () => {
    return (
        // <!-- choose  section -->
        <div className="choose ">
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <div className="titlepage">
                            <h2>Item Details </h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="row d_flex">
                    <div className="col-xl-5 col-lg-5 col-md-12 col-sm-12">
                        <div className="choose_img">
                            <figure><img src="images/food.jpg" alt="#" /></figure>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-5">
                        <a className="read_more" href="#">Read More</a>
                    </div>
                </div>
            </div>
        </div>
    );
}