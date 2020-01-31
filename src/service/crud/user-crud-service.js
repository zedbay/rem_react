import NetworkService from '../network-service';
import { CrudService } from './crud-service';

class UserCrudService extends CrudService {

  endpoint = 'user';

  constructor() {
    super(UserCrudService.endpoint);
  }

  getUserGroups(id) {
    return NetworkService.get(`${this.endpoint}/${id}/group`);
  }

  removeMembership(userId, groupId) {
    return NetworkService.delete(`group/${groupId}/member/${userId}`);
  }

}

export default new UserCrudService();