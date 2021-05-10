import React from 'react';
import ProductDetail from './ProductDetail';

function ProductDetails({details}) {
  //let mapLiDetails = details.map((detail) => <li>{detail}</li>)
  return (
    <div>
      <ul>{details.map((detail) => <ProductDetail detail={detail}/>)}</ul>
    </div>
  )
};

export default ProductDetails;