import React, {useState} from "react";
import Axios from "../services/Axios";


const CreateUser = () => {

  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    birthday: "",
    dni: 0
  });

  const [error, setError] = useState(false);

  const {firstName, lastName, birthday, dni} = user;

  function changeHandler(e) {
    setUser({
      ...user,
      [e.target.name] : e.target.value
    })
  }

  function saveUser(e) {
    e.preventDefault();
    if (firstName.trim() === "" || lastName.trim() === "" || birthday.trim() === "" || dni === 0) {
      setError(true);
      return;
    }
    setError(false);

    Axios.addUser(user).then(res => {
      console.log(res);
    });
  }

  return (
    <div className="container">
      <div className="row">
        <div className="card col-md-6 offset-md-3 offset-md-3">
          <h3 className="text-center">Add User</h3>
          <div className="card-body">
            <form>
              <div className="form-group">
                <label>First Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="firstName"
                  value={firstName}
                  onChange={changeHandler}
                />
              </div>
              <div className="form-group">
                <label>Last Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="lastName"
                  value={lastName}
                  onChange={changeHandler}
                />
              </div>
              <div className="form-group">
                <label>Birthday</label>
                <input
                  type="text"
                  className="form-control"
                  name="birthday"
                  value={birthday}
                  onChange={changeHandler}
                />
              </div>
              <div className="form-group">
                <label>DNI</label>
                <input
                  type="number"
                  className="form-control"
                  name="dni"
                  value={dni}
                  onChange={changeHandler}
                />
              </div>

              <button
                className="btn btn-success"
                onClick={saveUser}
              >Save</button>
            </form>
            {error && <p className="text-danger">All fields are Required</p>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateUser;