import NetworkService from '../network-service';

export class CrudService {

  constructor(endpoint) {
    this.endpoint = endpoint;
  }

  create(body) {
    return NetworkService.post(this.endpoint, body);
  }

  get(id) {
    return NetworkService.get(`${this.endpoint}/${id}`);
  }

  list() {
    return NetworkService.get(this.endpoint);
  }

  delete(id) {
    return NetworkService.delete(`${this.endpoint}/${id}`);
  }

  update(id, body) {
    return NetworkService.put(`${this.endpoint}/${id}`, body);
  }

}