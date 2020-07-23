import React, { Component } from 'react';
import { connect } from 'react-redux';

import ProductListItem from '../ProductListItem/ProductListItem';

class ProductList extends Component {
  render() {
    return (
      <div>
        <table>
          <tbody>
            {this.props.products.map((product, i) => {
              return <ProductListItem key={i} index={i} product={product} />;
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStoreToProps = (store) => {
  return { products: store.productReducer };
};

export default connect(mapStoreToProps)(ProductList);
