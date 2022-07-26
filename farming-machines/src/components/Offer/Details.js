import { Link } from 'react-router-dom';

export const OfferDetails = () => {
    return (
        <main>
            <section id="offer-details">
                <h1>Offer Details</h1>
                <div className="info-section">
                    <div className="offer-header">
                        <img className="offer-img" src="images/icon2.png" alt="" />
                        <h1>Bright</h1>
                        <span className="brand">Brand: CLAAS</span>
                        <p className="model">Model: Mega 218</p>
                    </div>
                    <p className="text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum malesuada, quam sed ornare mollis, magna felis semper nunc, quis dignissim neque orci
                        ut arcu. Donec elementum tellus ut tincidunt vulputate. Vivamus sollicitudin urna sapien, sed ultrices ipsum pulvinar in. Nulla laoreet est nibh,
                        porttitor porttitor tortor viverra vitae. Pellentesque luctus, felis at euismod consectetur, enim dui viverra sapien, sit amet laoreet urna lacus non nisi.
                        Morbi gravida consequat nibh, non convallis odio convallis ut. Donec fringilla est sed ante bibendum consectetur. In at convallis velit. Donec imperdiet erat
                        quis elementum placerat. Curabitur porttitor dignissim est vitae imperdiet. Cras sed sagittis nisi, non tristique lacus. Duis ac nisi neque. Fusce fringilla in
                        libero nec tempor. Proin iaculis vitae lectus et viverra. Proin nec arcu dui.
                    </p>

                    {/* Edit/Delete buttons ( Only for creator of this game )  */}
                    <div className="buttons">
                        <Link to="/offer/edit" className="button">
                            Edit
                        </Link>
                        <Link to="/offer/delete" className="button">
                            Delete
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}