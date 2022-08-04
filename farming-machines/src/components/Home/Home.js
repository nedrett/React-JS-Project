import { useContext } from "react";

import { CombineContext } from '../../contexts/CombineContext';
import { LatestOffers } from "./LatestOffers/LatestOffers";


export const Home = () => {
    const { combines } = useContext(CombineContext);
    let latest = [];
    let index;

    if (combines.length > 0) {
        if (combines.length - 3 < 0) {
            index = 0;
        } else {
            index = combines.length - 3;
        }
        latest = combines.slice(index).reverse();
    }

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
                    <h1>Latest Offers</h1>
                    <div className="container">
                        <div className="row">
                            {latest.length > 0
                                ? latest.map(x => <LatestOffers key={x._id} combine={x} />)
                                : <p className="no-offers">No Offers Yet</p>
                            }
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}