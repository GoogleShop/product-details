import React from 'react';
import ProductImages from './ProductImages';
const axios = require('axios');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      currentProduct: {}
    };

    this.getProductData = this.getProductData.bind(this);
    this.toggleLoading = this.toggleLoading.bind(this);
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
      console.log('www', productData);
      this.setState({
        isLoading: false,
        currentProduct: productData
      });
    })
    .catch((err) => {
      console.log('testing:', err);
      })
    }

  toggleLoading(status) {
    this.setState({
      isLoading: status
    })
  }



  render() {
    return (
    this.state.isLoading ?
      <div>
        <h1>Loading...</h1>
      </div>
      :
      <div>
        <ProductImages product={this.state.currentProduct} loading={this.toggleLoading}/>
      </div>
    )
  };
}

export default App;

