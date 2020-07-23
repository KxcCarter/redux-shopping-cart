import React, { Component } from 'react';
import { connect } from 'react-redux';

class ProductListItem extends Component {
  addProductToCart = () => {
    this.props.dispatch({
      type: 'ADD_TO_CART',
      payload: this.props.product,
    });
  };

  deleteProduct = (index) => (event) => {
    this.props.dispatch({
      type: 'DELETE_PRODUCT',
      payload: index,
    });
  };

  render() {
    return (
      <tr>
        <td>{this.props.product.name}</td>
        <td>{this.props.product.price}</td>
        <td>
          <button onClick={this.addProductToCart}>Add to Cart</button>
        </td>
        <td>
          <button onClick={this.deleteProduct(this.props.index)}>Delete from inventory</button>
        </td>
      </tr>
    );
  }
}

export default connect()(ProductListItem);
