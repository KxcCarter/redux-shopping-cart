import React, { Component } from 'react';
import { connect } from 'react-redux';

import ProductListItem from '../ProductListItem/ProductListItem';

class ProductList extends Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.products.map((product, i) => {
            return <ProductListItem key={i} product={product} />;
          })}
        </ul>
      </div>
    );
  }
}

const mapStoreToProps = (store) => {
  return { products: store.productReducer };
};

export default connect(mapStoreToProps)(ProductList);
