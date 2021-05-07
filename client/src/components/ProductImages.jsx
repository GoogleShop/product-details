import React from 'react';
import ProductImage from './ProductImage';
import styled from 'styled-components';

// const mainImageWrapper = () => {};

// const miniImageWrapper = () => {};

const ProductImages = ({product, mouseEnter}) => {
  let images = product.data[0].images;
  return (
  <div>
    <ul>
      {
        images.map((image, idx) => {
          return <li key={idx}><ProductImage image={image} id={idx} mouseEnter={mouseEnter}/></li>
        })
      }
    </ul>
  </div>
  )
};


export default ProductImages;