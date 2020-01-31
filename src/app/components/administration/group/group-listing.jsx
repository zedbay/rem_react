import React from 'react';
import Network from '../../../service/network-service';
import ListGroup from '../../../shared/components/list-group';
import GroupForm from './group-form';

class GroupListing extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      groups: [],
      groupsToDisplay: []
    }
    Network.get('group').then((res) => {
      this.setState({
        groups: res.data.groups,
        groupsToDisplay: res.data.groups
      });
    })
  }

  deleteGroup(event, groupId) {
    event.stopPropagation();
    Network.delete(`group/${groupId}`).then(() => {
      this.setState({
        groups: this.state.groups.filter((group) => group._id !== groupId),
        groupsToDisplay: this.state.groupsToDisplay.filter((group) => group._id !== groupId)
      });
    });
  }

  searchGroup(event, body) {
    event.preventDefault();
    this.setState({
      groupsToDisplay: this.state.groups.filter((group) => group.name.includes(body.name))
    });
  }

  render() {
    return (
      <div>
        <GroupForm onSearchGroup={(event, body) => this.searchGroup(event, body)} />
        <ListGroup groups={this.state.groupsToDisplay} onGroupDeleted={(event, groupId) => this.deleteGroup(event, groupId)} />
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => this.props.history.push('/administration/group/new')}>Create group</button>
      </div>
    )
  }
}

export default GroupListing;