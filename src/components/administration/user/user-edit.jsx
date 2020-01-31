import React from 'react';
import ListGroup from '../shared/list-group';
import UserService from '../../../service/crud/user-crud-service';
import { getDate } from '../../../util/date-util';

class UserEdit extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      passwordConfirmation: '',
      name: '',
      firstName: '',
      creationMode: true,
      groupsMember: [],
      creation: ''
    }
    const id = this.props.match.params.id;
    if (id) {
      this.fetchCurrentUser(id);
      this.fetchUserGroups(id);
    }
  }

  fetchUserGroups(id) {
    UserService.getUserGroups(id).then((res) => {
      this.setState({
        groupsMember: res.data.groups
      });
    });
  }

  fetchCurrentUser(id) {
    UserService.get(id).then((res) => {
      let user = res.data.user;
      this.setState({
        email: user.email,
        password: user.password,
        passwordConfirmation: '',
        name: user.name,
        firstName: user.firstName,
        creationMode: false,
        creationDate: getDate(user.creationDate)
      })
    });
  }

  removeMembership(event, groupId) {
    event.stopPropagation();
    UserService.removeMembership(this.props.match.params.id, groupId).then((res) => {
      this.setState({
        groupsMember: this.state.groupsMember.filter((group) => group._id !== groupId)
      });
    })
  }

  onSubmit(event) {
    event.preventDefault();
    if (this.state.creationMode) {
      UserService.create(this.state).then(() => {
        this.props.history.push('/administration/user');
      });
    } else {
      UserService.update(this.props.match.params.id, {
        email: this.state.email,
        name: this.state.name,
        firstName: this.state.firstName
      }).then(() => {
        this.props.history.push('/administration/user');
      });
    }
  }

  render() {
    return (
      <div id="user-edit-container">
        <form onSubmit={(event) => this.onSubmit(event)}>
          <h4 className="h4">User informations : </h4>
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
          {!this.state.creationMode && (
            <div className="form-group">
              <label htmlFor="creationDate">Creation date</label>
              <input className="form-control" type="text" value={this.state.creationDate} disabled />
            </div>
          )}
          {this.state.creationMode && (
            <div>
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
                <label htmlFor="passwordConfirmation">Password confirmation</label>
                <input
                  id="passwordConfirmation"
                  className="form-control"
                  value={this.state.passwordConfirmation}
                  onChange={(event) => this.setState({ passwordConfirmation: event.target.value })}
                  type="password" />
              </div>
            </div>
          )}
          <button className="btn btn-primary">{this.state.creationMode ? 'Register' : 'Modify'}</button>
        </form>
        {!this.state.creationMode && (
          <div>
            <h4 className="h4">Membership : </h4>
            <ListGroup groups={this.state.groupsMember} onGroupDeleted={(event, groupId) => this.removeMembership(event, groupId)} />
          </div>
        )}
      </div>
    )
  }
}

export default UserEdit;