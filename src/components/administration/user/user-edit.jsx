import React from 'react';
import * as UserUtil from '../../../utils/user';

class UserEdit extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      passwordConfirmation: '',
      name: '',
      firstName: ''
    }
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    if (id) {
      UserUtil.getUser(id).then((res) => {
        let user = res.data.user;
        this.setState({
          email: user.email,
          password: user.password,
          passwordConfirmation: '',
          name: user.name,
          firstName: user.firstName
        })
      });
    }
  }

  onSubmit(event) {
    event.preventDefault();
    UserUtil.createUser(this.state).then(() => {
      this.props.history.push('/administration/user');
    });
  }

  render() {
    return (
      <div id="user-edit-container">
        <form onSubmit={(event) => this.onSubmit(event)}>
          <div className="form-group">
            <label htmlFor="firstName">First name</label>
            <input
              id="firstName"
              className="form-control"
              value={this.state.firstName}
              onChange={(event) => this.setState({ firstName: event.target.value })}
              type="text" />
          </div>
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
            <label htmlFor="email">Email</label>
            <input
              id="email"
              className="form-control"
              value={this.state.email}
              onChange={(event) => this.setState({ email: event.target.value })}
              type="text" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              className="form-control"
              value={this.state.password}
              onChange={(event) => this.setState({ password: event.target.value })}
              type="password" />
          </div>
          <div className="form-group">
            <label htmlFor="passwordConfirmation">Password</label>
            <input
              id="passwordConfirmation"
              className="form-control"
              value={this.state.passwordConfirmation}
              onChange={(event) => this.setState({ passwordConfirmation: event.target.value })}
              type="password" />
          </div>
          <button className="btn btn-primary">Register</button>
        </form>
      </div>
    )
  }
}

export default UserEdit;