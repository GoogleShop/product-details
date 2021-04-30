import React from 'react';

const ProductImage = ({image, id}) => (
  <div>
    <img src={image} className={id === 0 ? 'main' : 'mini'} alt=""/>
  </div>
);

export default ProductImage;