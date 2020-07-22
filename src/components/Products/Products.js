import React, { Component } from 'react';
import ProductForm from '../ProductForm/ProductForm';
import ProductList from '../ProductList/ProductList';
import { connect } from 'react-redux';

class Products extends Component {
  render() {
    return (
      <div>
        <h2>Products</h2>
        <ProductForm />
        <ProductList />
      </div>
    );
  }
}

export default connect()(Products);
