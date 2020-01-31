import NetworkService from '../network-service';
import { CrudService } from './crud-service';

class GroupCrudService extends CrudService {

  constructor() {
    super('group');
  }

  getMembership(id) {
    return NetworkService.get(`${this.endpoint}/${id}/members`);
  }
}

export default new GroupCrudService();