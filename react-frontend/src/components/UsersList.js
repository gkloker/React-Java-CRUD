import React, {useEffect, useState} from "react";
import { useHistory } from "react-router-dom";
import User from "./User";

const UsersList = () => {

  const history = useHistory();

  const [users, setUsers] = useState([]);

  useEffect(() => {
    const consultAPI = async () => {
      if(users === '') return;

      const url = "http://localhost:8080/api/v1/users";

      const request = await fetch(url);
      const result = await request.json();

      setUsers(result);
    }
    consultAPI();

  }, []);

  function addUser() {
    history.push('/add-user');
  }
  return (
    <div>
      <h1 className="text-center">Invitations List</h1>
      <div className="row">
        <button
          className="btn btn-primary"
          onClick={addUser}
        >Add</button>
      </div>
      <div className="row">
        <table className="table table-striped table-bordered">
          <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Birthday</th>
            <th>DNI</th>
            <th>Actions</th>
          </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <User key={user.id} user={user} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UsersList;