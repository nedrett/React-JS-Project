export const Catalog = () => {
    return (
        // <!-- product  section -->
      <div className="product">
         <div className="container">
            <div className="row">
               <div className="col-md-6">
                  <div className="titlepage">
                     <h2>Our Product</h2>
                  </div>
               </div>
            </div>
         </div>
         <div className="container-fluid">
            <div className="row">
               <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 padding_left0">
                  <div className="product_box">
                     <figure><img src="images/product1.jpg" alt="#"/></figure>
                     <h3 className="black">vegetable</h3>
                  </div>
               </div>
               <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12">
                  <div className="product_box">
                     <figure><img src="images/product2.jpg" alt="#"/></figure>
                     <h3 >weat</h3>
                  </div>
               </div>
               <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 padding_right0">
                  <div className="product_box">
                     <figure><img src="images/product3.jpg" alt="#"/></figure>
                     <h3>fruit</h3>
                  </div>
               </div>
               <div className="col-xl-7 col-lg-7 col-md-7 col-sm-12 padding_left0">
                  <div className="product_box">
                     <figure><img src="images/product4.jpg" alt="#"/></figure>
                     <h3>sunflowere</h3>
                  </div>
               </div>
               <div className="col-xl-5 col-lg-5 col-md-5 col-sm-12 padding_right0">
                  <div className="product_box">
                     <figure><img src="images/product5.jpg" alt="#"/></figure>
                     <h3>Livestock</h3>
                  </div>
               </div>
            </div>
         </div>
      </div>
    );
}