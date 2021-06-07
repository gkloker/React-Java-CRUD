import React, {useState} from "react";
import Axios from "../services/Axios";
import {useHistory} from "react-router-dom";
import {useParams} from "react-router";

const CreateUser = () => {
  const history = useHistory();
  const { id } = useParams();

  const [user, setUser] = useState({
    id: id,
    firstName: "",
    lastName: "",
    birthday: "",
    dni: 0
  });

  const [error, setError] = useState(false);

  if(id === -1) {
    return;
  } else {
    Axios.getUserId(user.id).then((res) => {
      let user = res.data
      setUser({
        firstName: user.firstName,
        lastName: user.lastName,
        birthday: user.birthday,
        dni: user.dni
      })
    })
  }

  function changeHandler(e) {
    setUser({
      ...user,
      [e.target.name] : e.target.value
    })
  }

  function saveUser() {
    if (user.firstName.trim() === "" || user.lastName.trim() === "" || user.birthday.trim() === "" || user.dni === 0) {
      setError(true);
      return;
    }
    setError(false);

    if(id === -1) {
      Axios.addUser(user).then(res => {
        window.location.href="/users"
      });
    } else {
      Axios.updateUser(user, id).then(res => {
        window.location.href="/users"
      });
    }
  }

  function deleteUser() {
    Axios.deleteUser(id).then(res => {
      window.location.href="/users"
    });
    // history.push('/users');
  }

  function cancel() {
    history.push('/users');
  }

  return (
    <div className="container">
      <div className="row">
        <div className="card col-md-6 offset-md-3 offset-md-3">
          <div className="card-body">
            <form>
              <div className="form-group">
                <label>First Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="firstName"
                  value={user.firstName}
                  onChange={changeHandler}
                />
              </div>
              <div className="form-group">
                <label>Last Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="lastName"
                  value={user.lastName}
                  onChange={changeHandler}
                />
              </div>
              <div className="form-group">
                <label>Birthday</label>
                <input
                  type="text"
                  className="form-control"
                  name="birthday"
                  value={user.birthday}
                  onChange={changeHandler}
                />
              </div>
              <div className="form-group">
                <label>DNI</label>
                <input
                  type="number"
                  className="form-control"
                  name="dni"
                  value={user.dni}
                  onChange={changeHandler}
                />
              </div>

              <button
                className="btn btn-success"
                onClick={saveUser}
              >Save</button>
              <button
                className="btn btn-danger ml-2"
                onClick={deleteUser}
              >Delete</button>
              <button
                className="btn btn-secondary ml-2"
                onClick={cancel}
              >Cancel</button>
            </form>
            {error && <p className="text-danger">All fields are Required</p>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateUser;