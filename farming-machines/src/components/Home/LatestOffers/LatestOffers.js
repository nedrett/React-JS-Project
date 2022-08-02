import { Link } from 'react-router-dom';

export const LatestOffers = ({
    combine
}) => {
    return (
        <div className="col-md-4">
            <div className="box_text">
                <img src={combine.imageUrl} alt="img" />
            </div>
            <h3>{combine.name} {combine.model}</h3>
            <div className="data-buttons">
                <Link to={`/offer/${combine._id}`} className="btn details-btn">
                    Details
                </Link>
            </div>
        </div>
    )
}