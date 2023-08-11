import React from 'react';
import { connect } from 'react-redux'
let NewsItem = ({ product }) => (
  product ?
    <div>
      {product.category && <div>
        <h1>{product.brand}</h1>
        <h2>{product.description}</h2>
        <img src={product.thumbnail} alt="" />
      </div>}
    </div> :
    null
);

const mapStateToProps = (state) => ({
  product: state.product.payload,
})

NewsItem = connect(
  mapStateToProps,
  null
)(NewsItem)

export default NewsItem;


