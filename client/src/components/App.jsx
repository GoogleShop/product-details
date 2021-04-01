import React from 'react';
import ProductImages from './ProductImages';
const axios = require('axios');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentProductId: 1,
      name: '',
      details: [],
      images: [],
      stars: 0,
    };

    this.getProductData = this.getProductData.bind(this);
  };

  componentDidMount() {
    const urlParams = window.location.pathname.replace(/\//g, ' ');
    const urlParamsArray = urlParams.toString().split(' ');
    const productId = urlParamsArray[2];
    this.setState({
      currentProductId: productId
    });

    this.getProductData(productId);
  };

  getProductData(productId) {
    axios.get(`http://localhost:3000/shop/product/${productId}`)
    .then((res) => {
      const productData = res.data[0];
      this.setState({
        name: productData.name,
        details: productData.details,
        images: productData.images,
        stars: productData.stars,
      })
    })
    .catch((err) => {
      console.log('Error from GET: ', err);
    })
  };



  render() {
    return (
      <div>
        <h1>Hello React</h1>
        <ProductImages images={this.state.images}/>
      </div>
    )
  };
}

export default App;
