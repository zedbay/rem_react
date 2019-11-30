import axios from 'axios';

class Network {

  static target = "http://localhost:8080";

  static post(endPoint, body) {
    return axios.post(`${this.target}/${endPoint}`, body, this.getConfig());
  }

  static get(endPoint) {
    return axios.get(`${this.target}/${endPoint}`, this.getConfig());
  }

  static delete(endPoint) {
    return axios.delete(`${this.target}/${endPoint}`, this.getConfig());
  }

  static getConfig() {
    if (localStorage.getItem('token')) {
      return { headers: { Authorization: localStorage.getItem('token') } };
    }
    return {};
  }

}

export default Network;