import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './styles/design-system.scss';
import Login from './components/login/login';
import Administration from './components/administration/administration';

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
