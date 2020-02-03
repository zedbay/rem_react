import { CrudService } from './crud-service';

class ProductCrudService extends CrudService {

  constructor() {
    super('product');
  }

}

export default new ProductCrudService();