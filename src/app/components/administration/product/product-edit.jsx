import React from 'react';
import ProductCrudService from '../../../service/crud/product-crud-service';

class ProductEdit extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      dataIsFetched: false
    }
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    if (id) {
      this.fetchProduct(id);
    } else {
      this.setState({
        name: '',
        price: 0,
        creationMode: true,
        dataIsFetched: true
      });
    }
  }

  fetchProduct(productId) {
    ProductCrudService.get(productId).then((res) => {
      const product = res.data;
      this.setState({
        name: product.name,
        price: product.price,
        creationMode: false,
        dataIsFetched: true
      })
    });
  }

  onSubmit(event) {
    event.preventDefault();
    if (this.state.creationMode) {
      ProductCrudService.create({ name: this.state.name, price: this.state.price }).then(() => {
        this.props.history.push('/administration/product');
      });
    } else {
      ProductCrudService.update(this.props.match.params.id, { name: this.state.name, price: this.state.price }).then(() => {
        this.props.history.push('/administration/product');
      });
    }
  }

  render() {
    if (!this.state.dataIsFetched) return null;
    return (
      <div>
        <form onSubmit={(event) => this.onSubmit(event)}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              className="form-control"
              value={this.state.name}
              onChange={(event) => this.setState({ name: event.target.value })}
              type="text" />
          </div>
          <div className="form-group">
            <label htmlFor="price">Price</label>
            <input
              id="price"
              className="form-control"
              value={this.state.price}
              onChange={(event) => this.setState({ price: event.target.value })}
              type="number" />
          </div>
          <button className="btn btn-primary">{this.state.creationMode ? 'Create product' : 'Modify product'}</button>
        </form>
      </div>
    )
  }

}

export default ProductEdit;