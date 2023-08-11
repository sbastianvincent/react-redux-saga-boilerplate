import React from 'react';
import { connect } from 'react-redux'

let Laoading = ({ loading }) => (

  loading ?
    <div style={{ textAlign: 'center' }}>
      <h1>LOADING</h1>
    </div> :
    null
);

const mapStateToProps = (state) => ({
  loading: state.product.fetching
})

Laoading = connect(
  mapStateToProps,
  null
)(Laoading)


export default Laoading;


