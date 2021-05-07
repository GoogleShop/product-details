import React from 'react';

const ProductImage = ({image, id, mouseEnter, mouseLeave}) => (
  <div>
    <img src={image} className={id === 0 ? 'main' : 'mini'} onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} alt=""/>
  </div>
);

export default ProductImage;