import React from 'react';
import ProductDetail from './ProductDetail';

function ProductDetails({details}) {
  return (
    <div>
      <ul>{details.map(detail => <ProductDetail detail={detail}/>)}</ul>
    </div>
  )
};

export default ProductDetails;