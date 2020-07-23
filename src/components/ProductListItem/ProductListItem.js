import React, { Component } from 'react';
import { connect } from 'react-redux';

class ProductListItem extends Component {
  addProductToCart = () => {
    console.log(this.props.product);
    this.props.dispatch({
      type: 'ADD_TO_CART',
      payload: this.props.product,
    });
  };

  deleteProduct = (index) => (event) => {
    console.log('we will delete', index);
    this.props.dispatch({
      type: 'DELETE_PRODUCT',
      payload: index,
    });
  };

  render() {
    return (
      <li>
        {this.props.product.name}: {this.props.product.price}{' '}
        <button onClick={this.addProductToCart}>Add to Cart</button>
        <button onClick={this.deleteProduct(this.props.index)}>Delete from inventory</button>
      </li>
    );
  }
}

export default connect()(ProductListItem);
