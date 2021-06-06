import React from "react";

const Users = ({user}) => {
  const [firstName, LastName, Birthday, dni] = user;
  return (
    <>
      <tr>
        <td>{firstName}</td>
        <td>{LastName}</td>
        <td>{Birthday}</td>
        <td>{dni}</td>
      </tr>
    </>
  );
}

export default Users;