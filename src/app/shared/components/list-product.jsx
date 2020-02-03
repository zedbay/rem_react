import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router-dom';

function ListProduct(props) {
  let history = useHistory();
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {props.products.map((product) => {
            return (
              <tr key={product._id} onClick={() => history.push(`/administration/product/edit/${product._id}`)}>
                <th scope="row">{product.name}</th>
                <td>{product.price}</td>
                <td>
                  <FontAwesomeIcon className="trash-icon" icon={faTrash} onClick={(event) => props.onProductDeleted(event, product._id)} />
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default ListProduct;