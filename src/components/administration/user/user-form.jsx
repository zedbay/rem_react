import React from 'react';

class UserForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      status: ''
    };
  }

  render() {
    return (
      <form onSubmit={(event) => this.props.onSearchUser(event, this.state)}>
        <div className="container search-row row">
          <div className="col-4 input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text">@</span>
            </div>
            <input type="text" className="form-control" value={this.state.email} onChange={(event) => this.setState({ email: event.target.value })} />
          </div>
          <div className="col-4 input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text">Name</span>
            </div>
            <input type="text" className="form-control" value={this.state.name} onChange={(event) => this.setState({ name: event.target.value })} />
          </div>
          <div className="col-2 input-group mb-3">
            <div className="input-group-prepend">
              <label className="input-group-text" htmlFor="userStatus">Status</label>
            </div>
            <select className="custom-select" id="userStatus" value={this.state.status} onChange={(event) => this.setState({ status: event.target.value })}>
              <option value="">All</option>
              <option value="1">Actif</option>
              <option value="0">Disable</option>
            </select>
          </div>
          <button className="col-2 btn btn-secondary">Search</button>
        </div>
      </form>
    )
  }
}

export default UserForm;