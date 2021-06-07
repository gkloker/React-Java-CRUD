import React, { Fragment, useEffect } from 'react';
import User from "./User";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { getProductAction } from "../actions/getProductAction";

const Users = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // Consult database
    const getUsers = () => dispatch(getProductAction());
    getUsers();
    // eslint-disable-next-line
  }, []);

  // Get state
  const products = useSelector((state) => state.products.products);
  const error = useSelector((state) => state.products.error);
  const loading = useSelector((state) => state.products.loading);

  return (
    <Fragment>
      <h2 className="text-center my-5">Products List</h2>

      { error && <p className="font-weight-bold alert alert-danger text-center">There are an error</p> }
      { loading && <p className="text-center">Loading...</p> }
      <table className="table table-striped">
        <thead className="bg-primary table-dark">
          <tr>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Birthday</th>
            <th scope="col">DNI</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          { products.length === 0 ? 'No products' : (
            products.map(product => (
              <User key={product.id} product={product}/>
            ))
          )}
        </tbody>
      </table>
    </Fragment>
  );
}

export default Users;