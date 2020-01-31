import React from 'react';
import AuthenticationService from '../../service/authentication-service';

class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
  }

  onLogin(event) {
    event.preventDefault();
    AuthenticationService.login(this.state.email, this.state.password, (success) => {
      if (success) {
        this.props.history.push('/administration');
      } else {
        console.log('wrong identifiant');
      }
    });
  }

  render() {
    return (
      <div className="login-container container">
        <h1>Login</h1>
        <form onSubmit={(event) => this.onLogin(event)}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input value={this.state.email} onChange={(event) => this.setState({ email: event.target.value })} className="form-control" type="email" id="email" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input value={this.state.password} onChange={(event) => this.setState({ password: event.target.value })} id="password" className="form-control" type="password" />
          </div>
          <button className="btn btn-primary">Connect</button>
        </form>
      </div >
    )
  }
}

export default Login;