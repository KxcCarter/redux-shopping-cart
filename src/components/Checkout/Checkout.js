import React, { Component } from 'react';
import { connect } from 'react-redux';

class Checkout extends Component {
  handleCheckout = () => {
    this.props.dispatch({
      type: 'CLEAR_CART',
    });
  };

  render() {
    const cartList = this.props.cart.map((item, index) => {
      return <li key={index}>{item}</li>;
    });
    return (
      <div>
        <h2>Checkout</h2>
        <ul>{cartList}</ul>

        <button onClick={this.handleCheckout}>Checkout</button>
      </div>
    );
  }
}

const mapStoreToProps = (store) => {
  return { cart: store.checkoutReducer };
};

export default connect(mapStoreToProps)(Checkout);
