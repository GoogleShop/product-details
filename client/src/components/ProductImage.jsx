import React from 'react';

const ProductImage = ({image, id, mouseEnter, mouseLeave, mouseClick}) => (
  <div>
    <img src={image} className={id === 0 ? 'main' : 'mini'} onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} onClick={mouseClick} alt=""/>
  </div>
);

export default ProductImage;