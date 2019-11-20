import React from "react";
import UserInfo from "./UserInfo";

function UserList(props) {
  return (
    <div className="flex flex-wrap -mb-4 m-16">
      {props.logins.map(login => (
        <UserInfo key={login} login={login} />
      ))}
    </div>
  );
}

export default UserList;
