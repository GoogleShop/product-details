import React, { useState } from 'react';
import ProductImage from './ProductImage';

function ProductImages ({images}) {
  return (
    <div>
      {images.map((image, idx) => {
        return <ProductImage image={image} key={idx}/>
      })}
    </div>
  );
};

export default ProductImages;