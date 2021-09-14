import React from 'react';
import ProductImage from './ProductImage';

const ProductImages = ({images, mouseEnter, mouseLeave, mouseClick}) => {
  return (
  <div>
    <ul className="miniImages">
      {
        images.map((image, idx) => {
          return <li key={idx}><ProductImage image={image} id={idx} mouseEnter={mouseEnter} mouseLeave={mouseLeave} mouseClick={mouseClick}/></li>
        })
      }
    </ul>
  </div>
  )
};


export default ProductImages;