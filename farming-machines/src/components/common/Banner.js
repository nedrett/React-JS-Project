export const Banner = () => {
    return (
        <>
        {/* // < !--banner -- > */}
        <section class="banner_main">
            <div class="container">
                <div class="row">
                    <div class="col-md-12 ">
                        <div class="text-bg">
                            <h1>FARMING MACHINERY</h1>
                            <p>We are woking for Your confort and finding the desired Items and machinery</p>
                            <a href="#">Discover</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* // <!-- three_box --> */}
        <section>
        <div className="three_box">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="box_text">
                            <figure><img src="images/img1.jpg" alt="#" /></figure>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="box_text">
                            <figure><img src="images/img2.jpg" alt="#" /></figure>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="box_text">
                            <figure><img src="images/img3.jpg" alt="#" /></figure>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </section>
        </>
    );
}