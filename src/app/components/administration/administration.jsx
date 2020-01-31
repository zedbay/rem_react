import React from 'react';
import UserListing from './user/user-listing';
import GroupListing from './group/group-listing'
import UserEdit from './user/user-edit';
import AdministrationNav from './administration-nav';
import GroupEdit from './group/group-edit';

import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import OrderListing from './order/order-listing';
import MessageListing from './message/message-listing';

class Administration extends React.Component {

  render() {
    return (
      <div className="container stack-page">
        <Router>
          <div className="stack-header">
            <AdministrationNav />
          </div>
          <div className="stack-body">
            <Route path="/administration/user" exact component={UserListing} />
            <Route path="/administration/message" exact component={MessageListing} />
            <Route path="/administration/group" exact component={GroupListing} />
            <Route path="/administration/order" exact component={OrderListing} />
            <Route path="/administration/group/new" exact component={GroupEdit} />
            <Route path="/administration/group/edit/:id" component={GroupEdit} />
            <Route path="/administration/user/new" exact component={UserEdit} />
            <Route path="/administration/user/edit/:id" component={UserEdit} />
          </div>
        </Router>
      </div>
    )
  }
}

export default Administration;