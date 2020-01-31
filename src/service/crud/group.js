import Network from '../network-service';

export function getGroup(id) {
  return Network.get(`group/${id}`);
}

export function createGroup(body) {
  return Network.post('group', body);
}

export function getMembership(id) {
  return Network.get(`group/${id}/members`);
}

export function modifyGroup(id, body) {
  return Network.put(`group/${id}`, body);
}