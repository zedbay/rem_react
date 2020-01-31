import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { useHistory } from 'react-router-dom';
import { getDate } from '../../../util/date-util';

function ListUser(props) {
  let history = useHistory();
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Email</th>
            <th scope="col">First name</th>
            <th scope="col">name</th>
            <th scope="col">Creation date</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {props.users.map((user) => {
            return (
              <tr key={user._id} onClick={() => history.push(`/administration/user/edit/${user._id}`)}>
                <th scope="row">{user.email}</th>
                <td>{user.firstName}</td>
                <td>{user.name}</td>
                <td>{getDate(user.creationDate)}</td>
                <td>
                  <FontAwesomeIcon className="trash-icon" icon={faTrash} onClick={(event) => props.onUserDeleted(event, user._id)} />
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default ListUser;