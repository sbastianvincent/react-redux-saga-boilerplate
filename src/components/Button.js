import React from 'react';
import { connect } from 'react-redux';
import ProductActions from '../redux/ProductRedux'

let styles = {
  backgroundColor: 'black',
  width: '250px',
  height: '100px',
  borderRadius: '100px',
  display: 'block',
  margin: '50px auto',
  fontSize: '25px',
  border: '3px solid ',
  color: 'white'
}

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hover: false };
  }
  render() {
    console.info(this.props.product)
    return (
      <button style={!this.state.hover ? styles : { ...styles, backgroundColor: 'blue ' }}
        onMouseOut={() => { this.setState({ hover: false }) }}
        onMouseOver={() => { this.setState({ hover: true }) }}
        onClick={this.props.getProductRequest}
      >Press to get Product</button>
    );
  }

};

const mapStateToProps = state => {
  return {
    product: state.product,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    getProductRequest: () => {
      dispatch(ProductActions.getProductRequest(null))
    },
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Button);
