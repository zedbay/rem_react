import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { useHistory } from 'react-router-dom';

function ListUser(props) {
  let history = useHistory();
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">First name</th>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {props.users.map((user) => {
          return (
            <tr key={user._id} onClick={() => history.push(`/administration/user/edit/${user._id}`)}>
              <th scope="row">{user.firstName}</th>
              <th>{user.name}</th>
              <th>{user.email}</th>
              <th>
                <FontAwesomeIcon className="trash-icon" icon={faTrash} onClick={(event) => props.onUserDeleted(event, user._id)} />
              </th>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default ListUser;