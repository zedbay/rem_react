import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { useHistory } from 'react-router-dom';

function ListGroup(props) {
  let history = useHistory();
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Members</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        {props.groups.map((group) => {
          return (
            <tr key={group._id} onClick={() => history.push(`/administration/group/edit/${group._id}`)}>
              <th scope="row">{group.name}</th>
              <td>{group.userIds.length}</td>
              <td>
                <FontAwesomeIcon className="trash-icon" icon={faTrash} onClick={(event) => props.onGroupDeleted(event, group._id)} />
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default ListGroup;