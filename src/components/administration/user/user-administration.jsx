import React from 'react';
import Network from '../../../utils/network';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

class UserAdministration extends React.Component {

  constructor(props) {
    super(props);
    this.state = { users: [] };
    Network.get('user').then((res) => {
      this.setState({ users: res.data.users });
    });
  }

  deleteUser(userId) {
    Network.delete(`user/${userId}`).then(() => {
      this.setState({ users: this.state.users.filter((user) => user._id !== userId) });
    });
  }

  render() {
    return (
      <div className="user-administration-container">
        <h2>User administration</h2>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Email</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.state.users.map((user) => {
              return (
                <tr key={user._id}>
                  <th scope="row">{user._id}</th>
                  <th>{user.email}</th>
                  <th>
                    <FontAwesomeIcon className="trash-icon" icon={faTrash} onClick={() => this.deleteUser(user._id)} />
                  </th>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div >
    )
  }

}

export default UserAdministration;