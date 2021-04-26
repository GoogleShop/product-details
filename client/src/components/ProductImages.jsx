import React from 'react';
import ProductImage from './ProductImage';

const ProductImages = ({product}) => {
  let images = product.data[0].images;
  return (
  <div>
    <ul>
      {
        images.map((image, idx) => {
          return <li className={idx === 0 ? 'main' : 'mini'} key={idx}><ProductImage image={image}/></li>
        })
      }
    </ul>
  </div>
  )
}


export default ProductImages;