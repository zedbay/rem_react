import React from 'react';

class GroupForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: ''
    };
  }

  render() {
    return (
      <form onSubmit={(event) => this.props.onSearchGroup(event, this.state)}>
        <div className="container search-row row">
          <div className="col-4 input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text">Name</span>
            </div>
            <input type="text" className="form-control" value={this.state.name} onChange={(event) => this.setState({ name: event.target.value })} />
          </div>
          <button className="col-2 btn btn-secondary">Search</button>
        </div>
      </form>
    )
  }
}

export default GroupForm;