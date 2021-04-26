// import React from 'react';

// const ProductImage = ({productData}) => (
//   <div>
//     {console.log('props from productimageeee:', productData)}
//   </div>
// );

// class ProductImage extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       mainImage: '',
//       miniImage1: '',
//       miniImage2: '',
//       miniImage3: '',
//       miniImage4: '',
//     };

//     this.getProduct = this.getProduct.bind(this);
//   }

//   componentDidMount() {
//     this.getProduct();
//   }

//   getProduct() {
//     console.log('here:', this.props);

//   }

//   render() {
//     return(
//       <div>
//         {console.log('props passed to images: ', this.props)}
//         <h1>Hello from image</h1>
//       </div>
//     )
//   }
// }

// const ProductImage = (props) => (
//   <div>
//     <h1>Hello from product image</h1>
//     {console.log('hereeeee:', props)}
//   </div>
// );

// export default ProductImage;