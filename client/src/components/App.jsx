import React from 'react';
import ProductImages from './ProductImages';
const axios = require('axios');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      currentProduct: {},
      mainImg: ''
    };

    this.getProductData = this.getProductData.bind(this);
  };

  componentDidMount() {
    const urlParams = window.location.pathname.replace(/\//g, ' ');
    const urlParamsArray = urlParams.toString().split(' ');
    const productId = urlParamsArray[2];

    this.getProductData(productId || Math.floor(Math.random() * 100));
  };

  getProductData(productId) {
    axios.get(`http://localhost:3000/shop/product/${productId}`)
    .then((productData) => {
      this.setState({
        isLoading: false,
        currentProduct: productData
      });
    })
    .catch((err) => {
      console.log('testing:', err);
      })
    };



  render() {
    return (
    this.state.isLoading ?
      <div>
        <h1>Loading...</h1>
      </div>
      :
      <div>
        <h1>{this.state.currentProduct.data[0].name}</h1>
        <h2>{this.state.currentProduct.data[0].stars}</h2>
        <ProductImages product={this.state.currentProduct} loading={this.toggleLoading}/>
        {console.log(this.state.currentProduct.data[0].name)}
        <div>Current Product: <img src={this.state.mainImg} /></div>
      </div>
    )
  };
};

export default App;

