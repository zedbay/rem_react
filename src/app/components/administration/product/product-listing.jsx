import React from 'react';
import ProductCrudService from '../../../service/crud/product-crud-service';
import ListProduct from '../../../shared/components/list-product';
import ProductForm from './product-form';

class ProductListing extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      dataIsFetched: false
    };
    ProductCrudService.list().then((res) => {
      this.setState({
        products: res.data.products,
        productsToDisplay: res.data.products,
        dataIsFetched: true
      });
    });
  }

  deleteProduct(event, productId) {
    event.stopPropagation();
    ProductCrudService.delete(productId).then(() => {
      this.setState({
        products: this.state.products.filter((product) => product._id !== productId),
        productsToDisplay: this.state.products.filter((product) => product._id !== productId)
      });
    });
  }

  searchProduct(event, body) {
    event.preventDefault();
    console.log(body);
    this.setState({
      productsToDisplay: this.state.products.filter((product) => product.name.includes(body.name))
    });
  }

  render() {
    if (!this.state.dataIsFetched) return null;
    return (
      <div>
        <ProductForm onSearchProduct={(event, body) => this.searchProduct(event, body)} />
        <ListProduct products={this.state.productsToDisplay} onProductDeleted={(event, productId) => { this.deleteProduct(event, productId) }} />
      </div>
    )
  }
}

export default ProductListing;