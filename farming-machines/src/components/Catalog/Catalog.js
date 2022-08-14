import { useContext } from "react";

import { CombineContext } from "../../contexts/CombineContext";
import { CatalogItem } from "./CatalogItem/CatalogItem";


export const Catalog = () => {
   const { combines } = useContext(CombineContext);
   return (
      // <!-- product  section -->
      <div className="product">
         <div className="container">
            <div className="row">
               <div className="col-md-6">
                  <div className="titlepage">
                     <h2>Our Products</h2>
                  </div>
               </div>
            </div>
         </div>
         <div className="container-fluid">
            <div className="row">
               {combines.length > 0
                  ? combines.map(combine => <CatalogItem key={combine._id} combine={combine} />)
                  : <h3 className="no-offers">No Offers Yet</h3>
               }

            </div>
         </div>
      </div>
   );
}