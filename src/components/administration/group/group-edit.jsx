import React from 'react';
import * as Grouputil from '../../../service/crud/group';
import ListUser from '../shared/list-user';

class GroupEdit extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      creationMode: true,
      users: []
    };
    const id = this.props.match.params.id;
    if (id) {
      this.fetchCurrentGroup(id);
      this.fetchMemberShip(id);
    }
  }

  fetchCurrentGroup(id) {
    Grouputil.getGroup(id).then((group) => {
      group = group.data.group;
      this.setState({
        name: group.name,
        creationMode: false
      });
    });
  }

  fetchMemberShip(id) {
    Grouputil.getMembership(id).then((users) => {
      this.setState({
        users: users.data.users
      });
    });
  }

  onSubmit(event) {
    event.preventDefault();
    if (this.state.creationMode) {
      Grouputil.createGroup({
        name: this.state.name
      }).then(() => {
        this.props.history.push('/administration/group');
      });
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={(event) => this.onSubmit(event)}>
          <h4 className="h4">Group informations</h4>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              className="form-control"
              value={this.state.name}
              disabled={!this.state.creationMode}
              onChange={(event) => this.setState({ name: event.target.value })}
              type="text" />
          </div>
          {this.state.creationMode && (
            <button className="btn btn-primary">Create</button>
          )}
        </form>
        {!this.state.creationMode && (
          <div>
            <h4 className="h4">Members : </h4>
            <ListUser
              users={this.state.users}
              onUserDeleted={(event, userId) => this.deleteUser(event, userId)} />
            <button className="btn btn-primary">Add member</button>
          </div>
        )}
      </div>
    )
  }
}

export default GroupEdit;