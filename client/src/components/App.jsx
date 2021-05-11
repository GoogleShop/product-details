import React from 'react';
import ProductImages from './ProductImages';
import ProductDetails from './ProductDetails';
const axios = require('axios');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      currentProduct: {},
      stars: [],
      mainImg: '',
      hoverEnterImg: '',
      clickedImg: '',
    };

    this.getProductData = this.getProductData.bind(this);
    this.createStars = this.createStars.bind(this);
    this.onMouseEnterHandler = this.onMouseEnterHandler.bind(this);
    this.onMouseLeaveHandler = this.onMouseLeaveHandler.bind(this);
    this.onMouseClickHandler = this.onMouseClickHandler.bind(this);
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
      this.createStars(productData.data[0].stars);
    })
    .catch((err) => {
      console.log('testing:', err);
      })
    };

    createStars(starCount) {
      let stars = [];
      for (let i = 0; i < starCount; i++) {
        stars.push('★');
      }
      this.setState({
        stars
      })
    };

    onMouseEnterHandler(e) {
      e.preventDefault();
      const {src} = e.target;
      this.setState({
        hoverEnterImg: src
      })
    };

    onMouseLeaveHandler(e) {
      e.preventDefault();
      let clickedImg = this.state.clickedImg;
      !clickedImg ?
        this.setState({
          mainImg: this.state.mainImg,
          hoverEnterImg: ''
        }) :
        this.setState({
          mainImg: clickedImg
        })
    };

    onMouseClickHandler(e) {
      e.preventDefault();
      let clickedImg = e.target;
      let imgList = document.querySelector('.miniImages').querySelectorAll('li>div>img');
      for (let li of imgList) {
        let clickedClass = li.classList.contains('clickedImage');
        if ((clickedClass) || (clickedImg.src !== li.src)) {
          li.classList.remove('clickedImage');
        }
      }
      clickedImg.classList.add('clickedImage');
      this.setState({
        mainImg: clickedImg.src
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
        <div className='productInfo'>
          <h2 className='productStars'>{this.state.stars}</h2>
          <h2 className='productReviewCount'>({this.state.currentProduct.data[0].review_count})</h2>
        </div>
        <div>
          <ProductImages images={this.state.currentProduct.data[0].images} loading={this.toggleLoading}
          mouseEnter={this.onMouseEnterHandler} mouseLeave={this.onMouseLeaveHandler} mouseClick={this.onMouseClickHandler}/>
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
        <div className='productDetails'>
          <ProductDetails details={this.state.currentProduct.data[0].details}/>
        </div>
      </div>
    )
  };
};

export default App;

