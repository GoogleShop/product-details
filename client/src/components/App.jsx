import React from 'react';
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
  };

  componentDidMount() {
    const urlParams = window.location.pathname.replace(/\//g, ' ');
    const urlParamsArray = urlParams.toString().split(' ');
    const productId = urlParamsArray[2];
    this.setState({
      currentProductId: productId
    });

    return axios.get(`http://localhost:3000/shop/product/${this.state.currentProductId}`)
    .then((res) => {
      console.log('Response from GET: ', res.data[0]);
    })
    .catch((err) => {
      console.log('Error from GET: ', err);
    })
  };



  render() {
    return (
      <div>
        <h1>Hello React</h1>
      </div>
    )
  };
}

export default App;
