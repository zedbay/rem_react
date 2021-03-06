import React from 'react';
import ListGroup from '../../../shared/components/list-group';
import GroupForm from './group-form';
import GroupCrudService from '../../../service/crud/group-crud-service';

class GroupListing extends React.Component {

  constructor(props) {
    super(props);
    this.state = { dataIsFetched: false };
    GroupCrudService.list().then((res) => {
      this.setState({
        groups: res.data.groups,
        groupsToDisplay: res.data.groups,
        dataIsFetched: true
      })
    });
  }

  deleteGroup(event, groupId) {
    event.stopPropagation();
    GroupCrudService.delete(groupId).then(() => {
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
    if (!this.state.dataIsFetched) return null;
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