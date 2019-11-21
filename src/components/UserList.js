import React from "react";
import UserSelect from "./UserSelect";

function UserList(props) {
  return (
    <div className="flex flex-wrap -mb-4 m-16">
      {props.logins.map(login => (
        <UserSelect key={login} login={login} />
      ))}
    </div>
  );
}

export default UserList;
