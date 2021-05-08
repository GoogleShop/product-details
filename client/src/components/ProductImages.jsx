import React from 'react';
import ProductImage from './ProductImage';
import styled from 'styled-components';

// const mainImageWrapper = () => {};

// const miniImageWrapper = () => {};

const ProductImages = ({images, mouseEnter, mouseLeave, mouseClick}) => {
  // let images = product.data[0].images;
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