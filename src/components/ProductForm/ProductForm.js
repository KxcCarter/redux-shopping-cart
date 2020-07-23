import React, { Component } from 'react';
import { connect } from 'react-redux';

class ProductForm extends Component {
  // You will need to keep this state in this component
  // if you're only using something in one component,
  // you do not need to move it to redux
  state = {
    productToAdd: { name: '', price: '' },
  };

  handleChange = (fieldKey) => (event) => {
    this.setState({
      productToAdd: {
        ...this.state.productToAdd,
        [fieldKey]: event.target.value,
      },
    });
  };

  addProduct = (event) => {
    event.preventDefault();
    this.props.dispatch({
      type: 'ADD_NEW_PRODUCT',
      payload: this.state.productToAdd,
    });

    this.setState({
      productToAdd: { name: '', price: '' },
    });
  };

  render() {
    return (
      <form onSubmit={this.addProduct}>
        <input
          onChange={this.handleChange('name')}
          type="text"
          placeholder="name"
          value={this.state.productToAdd.name}
        />
        <input
          onChange={this.handleChange('price')}
          type="text"
          placeholder="price"
          value={this.state.productToAdd.price}
        />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default connect()(ProductForm);
