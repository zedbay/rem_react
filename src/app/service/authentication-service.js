import NetworkService from './network-service';

class AuthenticationService {

  login(email, password, callback) {
    NetworkService.post('login', { email, password })
      .then((res) => {
        localStorage.removeItem('token');
        localStorage.setItem('token', res.data.token);
        callback(true);
      })
      .catch((err) => {
        callback(false);
      });
  }

  logout() {

  }

}

export default new AuthenticationService();