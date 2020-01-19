import './administration.scss';
import React from 'react';
import UserAdministration from './user/user-listing';
import GroupAdministration from './group/group-administration'
import UserEdit from './user/user-edit';
import AdministrationNav from './administration-nav';

import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";

class Administration extends React.Component {

  render() {
    return (
      <div className="administration-container container">
        <Router>
          <AdministrationNav />
          <Route path="/administration/user" exact component={UserAdministration} />
          <Route path="/administration/group" component={GroupAdministration} />
          <Route path="/administration/user/new" component={UserEdit} />
          <Route path="/administration/user/edit/:id" component={UserEdit} />
        </Router>
      </div>
    )
  }
}

export default Administration;