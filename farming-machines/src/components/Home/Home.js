export const Home = () => {
    return (
        <>
        {/* // < !--banner -- > */}
        <section className="banner_main">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 ">
                        <div className="text-bg">
                            <h1>FARMING MACHINERY</h1>
                            <p>We are woking for Your confort and finding the desired Items and machinery</p>
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