import React from 'react';

const ProductImage = ({image, id, mouseEnter}) => (
  <div>
    <img src={image} className={id === 0 ? 'main' : 'mini'} onMouseEnter={mouseEnter} alt=""/>
  </div>
);

export default ProductImage;