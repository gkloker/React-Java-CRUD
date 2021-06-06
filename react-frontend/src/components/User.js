import React from "react";
import { useHistory } from "react-router-dom";

const User = ({user}) => {
  const history = useHistory();

  function editUser(id) {
    history.push(`/update-user/${id}`);
  }

  return (
    <>
      <tr>
        <td>{user.firstName}</td>
        <td>{user.lastName}</td>
        <td>{user.birthday}</td>
        <td>{user.dni}</td>
        <td>
          <button
            className="btn btn-info"
            onClick={() => editUser(user.id)}
          >Update</button>
        </td>
      </tr>
    </>
  );
}

export default User;