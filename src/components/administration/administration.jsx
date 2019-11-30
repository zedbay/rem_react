import './administration.scss';
import React from 'react';
import UserAdministration from './user/user-administration';
import GroupAdministration from './group/group-administration'

import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";

class Administration extends React.Component {

  render() {
    return (
      <div className="administration-container container">
        <h1>Administration</h1>
        <ul className="nav">
          <li className="nav-item">
            <a className="nav-link" href="/administration/user">User</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/administration/group">Group</a>
          </li>
        </ul>
        <Router>
          <Route path="/administration/user" exact component={UserAdministration} />
          <Route path="/administration/group" component={GroupAdministration} />
        </Router>
      </div>
    )
  }
}

export default Administration;