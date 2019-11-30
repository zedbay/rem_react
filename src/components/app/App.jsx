import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.scss';
import Login from '../login/login';
import Administration from '../administration/administration';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Router>
          <Route path="/login" exact component={Login} />
          <Route path="/administration" component={Administration} />
        </Router>
      </div>
    )
  }


}

export default App;
