import React, {useEffect, useState} from "react";

const ListUser = () => {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    const consultAPI = async () => {
      if(users === '') return;

      const url = "http://localhost:8080/api/v1/users";

      const request = await fetch(url);
      const result = await request.json();

      console.log(result);
    }
    consultAPI();

  }, [users]);

  return (
    <div>
      <h2 className="text-center">Users List</h2>
      <div className="row">
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Birthday</th>
              <th>DNI</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id}>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.birthday}</td>
                <td>{user.dni}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ListUser;