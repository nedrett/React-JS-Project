import emailjs from 'emailjs-com';

export const Contacts = () => {

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_7kgcf0c', 'template_kz0rzvv', e.target, 'xV48AsiZpaa2xPDdk')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
      };

    return (
        <section className="contact">
            <div className="col-md-4">
                <div className="titlepage">
                    <h2>Contact Us</h2>
                </div>
            </div>
            <div className="col-md-12">
                <form id="request" className="main_form" onSubmit={sendEmail}>
                    <div className="row">
                        <div className="col-md-3 ">
                            <input className="contactus" placeholder="Full Name" type="text" name="name" />
                        </div>
                        <div className="col-md-3">
                            <input className="contactus" placeholder="Email" type="text" name="email" />
                        </div>
                        <div className="col-md-3">
                            <input className="contactus" placeholder="Phone Number" type="text" name="number" />
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12">
                            <ul className="social_icon">
                                <li><a href="https://www.facebook.com/nedret.rasim.5"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                                <li><a href="https://www.linkedin.com/in/nedret-rasim-4861a5228/"><i className="fa fa-linkedin-square" aria-hidden="true"></i></a></li>
                            </ul>
                        </div>
                        <div className="col-md-8">
                            <textarea className="contactus1" placeholder="Message" type="text"
                                name="message"></textarea>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                            <button className="send_btn">Send</button>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    );
}