import React from 'react';


class ProductImages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imgUrls: {}
    };
  }

  componentDidMount() {
    let imgUrls = {};
    let images = this.props.product.data[0].images;
    images.forEach((image, idx) => {
      if (idx === 0) {
        imgUrls["mainImage"] = image;
      } else {
        imgUrls[`miniImage${idx}`] = image;
      }
    })
    this.setState({imgUrls});
    this.props.loading(false);
  }

  render() {
    return(
      <div>
        <h1>Hello from images</h1>
      </div>
    )
  }
}

export default ProductImages;