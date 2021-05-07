import React from 'react';
import ProductImages from './ProductImages';
const axios = require('axios');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      currentProduct: {},
      mainImg: '',
      hoverEnterImg: ''
    };

    this.getProductData = this.getProductData.bind(this);
    this.onMouseEnterHandler = this.onMouseEnterHandler.bind(this);
    this.onMouseLeaveHandler = this.onMouseLeaveHandler.bind(this);
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
        currentProduct: productData,
        mainImg: productData.data[0].images[0],
      });
    })
    .catch((err) => {
      console.log('testing:', err);
      })
    };

    onMouseEnterHandler(e) {
      const {src} = e.target;
      this.setState({
        hoverEnterImg: src
      })
      console.log(e.target.src);
    };

    onMouseLeaveHandler(e) {
      this.setState({
        hoverEnterImg: ''
      })
    };



  render() {
    return (
    this.state.isLoading ?
      <div>
        <h1>Loading...</h1>
      </div>
      :
      <div id="main">
        <div>
          <h1 className='productName'>{this.state.currentProduct.data[0].name}</h1>
        </div>
        <div>
          <h2 className='productStars'>{this.state.currentProduct.data[0].stars}</h2>
        </div>
        <div>
          <ProductImages product={this.state.currentProduct} loading={this.toggleLoading} mouseEnter={this.onMouseEnterHandler} mouseLeave={this.onMouseLeaveHandler}/>
        </div>
        {
        this.state.hoverEnterImg ?
        <div className='hoverEnterImgBox'>
          <img src={this.state.hoverEnterImg} className="hoverEnterImg"/>
        </div> :
        <div className='mainImgBox'>
          <img src={this.state.mainImg} className="mainImg"/>
        </div>
          }
      </div>
    )
  };
};

export default App;

