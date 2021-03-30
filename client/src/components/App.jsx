import React from 'react';
const axios = require('axios');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      details: [],
      images: [],
      stars: 0,
    };
  };

  componentDidMount() {
    axios.get('http://localhost:3000/product/1')
    .then((res) => {
      console.log('Response from GET: ', res.data);
    })
    .catch((err) => {
      console.log('Error from GET: ', err);
    })
  }



  render() {
    return (
      <div>
        <h1>Hello React</h1>
      </div>
    )
  };
}

export default App;
