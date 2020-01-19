import React from 'react';
import Network from '../../../utils/network';
import ListUser from '../shared/list-user';

class UserListing extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      users: []
    }
    Network.get('user').then((res) => {
      this.setState({ users: res.data.users });
    });
  }

  deleteUser(event, userId) {
    event.stopPropagation();
    Network.delete(`user/${userId}`).then(() => {
      this.setState({ users: this.state.users.filter((user) => user._id !== userId) });
    });
  }

  render() {
    return (
      <div className="user-administration-container">
        <ListUser
          users={this.state.users}
          onUserDeleted={(event, userId) => this.deleteUser(event, userId)} />
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => this.props.history.push('/administration/user/new')}>Create user</button>
      </div >
    )
  }

}

export default UserListing;