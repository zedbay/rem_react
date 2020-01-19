import Network from './network';

export function createUser(body) {
  return Network.post('user', body);
}

export function getUser(id) {
  return Network.get(`user/${id}`);
}
