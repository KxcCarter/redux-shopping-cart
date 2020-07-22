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
      return (
        <tr key={index}>
          <td>{item.name} </td>
          <td>{item.price}</td>
        </tr>
      );
    });

    let cartTotal = 0;
    this.props.cart.forEach((item) => {
      return (cartTotal += parseFloat(item.price));
    });
    return (
      <div>
        <h2>Checkout</h2>

        <table>
          <thead>
            <tr>
              <th>Item</th>
              <th>Price</th>
              <th></th>
            </tr>
          </thead>
          <tbody>{cartList}</tbody>
          <tfoot>
            <tr>
              <td>Cart Total:</td>
              <td>${cartTotal.toFixed(2)}</td>
            </tr>
          </tfoot>
        </table>

        <button onClick={this.handleCheckout}>Checkout</button>
      </div>
    );
  }
}

const mapStoreToProps = (store) => {
  return { cart: store.checkoutReducer };
};

export default connect(mapStoreToProps)(Checkout);
