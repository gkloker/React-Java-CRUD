import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { editUserAction } from "../actions/editUserAction";
import { useHistory } from "react-router-dom";

const EditUser = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [product, setProduct] = useState({
    firstName: '',
    lastName: '',
    birthday: '',
    dni: 0
  });

  // Edit product
  const productEdit = useSelector(state => state.products.productEdit);

  // Load state automatic
  useEffect(() => {
    setProduct(productEdit)
  }, [productEdit])

  // Read data from form
  const onChangeForm = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value
    })
  }

  const submitEditProduct = (e) => {
    e.preventDefault();

    dispatch(editUserAction(product));

    history.push("/");
  }

  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-4 font-weight-bold">
              Edit User
            </h2>

            <form
              onSubmit={submitEditProduct}
            >
              <div className="form-group">
                <label>First Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="FirstName"
                  name="firstName"
                  value={product.firstName}
                  onChange={onChangeForm}
                />
              </div>
              <div className="form-group">
                <label>Last Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="LastName"
                  name="lastName"
                  value={product.lastName}
                  onChange={onChangeForm}
                />
              </div>
              <div className="form-group">
                <label>Birthday</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Birthday"
                  name="birthday"
                  value={product.birthday}
                  onChange={onChangeForm}
                />
              </div>

              <div className="form-group">
                <label>DNI</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="DNI"
                  name="dni"
                  value={product.dni}
                  onChange={onChangeForm}
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
              >Save Changes</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditUser;