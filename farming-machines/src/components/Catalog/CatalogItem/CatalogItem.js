import { Link } from 'react-router-dom';

export const CatalogItem = ({ combine }) => {
    return (
        <div className="col-xl-5 col-lg-5 col-md-5 col-sm-12 padding_right0">
            <div className="product_box">
                <img src={combine.imageUrl} alt="img" />
                <h2>{combine.name}</h2>
                <h3>{combine.model}</h3>
                <Link to={`/offer/${combine._id}`} className="details-btn">
                    Details
                </Link>
                <Link to={`/offer/${combine._id}/edit`} className="details-btn">
                    Edit
                </Link>
            </div>
        </div>
    )
}