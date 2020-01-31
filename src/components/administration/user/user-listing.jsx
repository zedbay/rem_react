import React from 'react';
import ListUser from '../shared/list-user';
import UserForm from './user-form';
import UserCrudService from '../../../service/crud/user-crud-service';

class UserListing extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      users: [],
      usersToDisplay: []
    }
    UserCrudService.list().then((res) => {
      this.setState({
        users: res.data.users,
        usersToDisplay: res.data.users
      });
    });
  }

  deleteUser(event, userId) {
    event.stopPropagation();
    UserCrudService.delete(`user/${userId}`).then(() => {
      this.setState({
        users: this.state.users.filter((user) => user._id !== userId),
        usersToDisplay: this.state.usersToDisplay.filter((user) => user._id !== userId)
      });
    });
  }

  searchUser(event, body) {
    event.preventDefault();
    this.setState({
      usersToDisplay: this.state.users
        .filter((user) => user.email.includes(body.email))
        .filter((user) => user.name.includes(body.name) || user.firstName.includes(body.name))
    });
  }

  render() {
    return (
      <div className="user-administration-container">
        <UserForm
          onSearchUser={(event, body) => this.searchUser(event, body)} />
        <ListUser
          users={this.state.usersToDisplay}
          onUserDeleted={(event, userId) => this.deleteUser(event, userId)} />
        <button
          type="button"
          className="col-2 btn btn-primary"
          onClick={() => this.props.history.push('/administration/user/new')}>Create user</button>
      </div >
    )
  }

}

export default UserListing;