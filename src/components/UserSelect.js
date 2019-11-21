import React from "react";
import { gql, useQuery } from "@apollo/client";
import UserInfo from "./UserInfo";

const GET_SELECTED_USER = gql`
  {
    selectedUser @client
  }
`;

function UserSelect(props) {
  const { data, client } = useQuery(GET_SELECTED_USER);

  const handleClick = () =>
    client.writeData({ data: { selectedUser: props.login } });

  return (
    <UserInfo
      login={props.login}
      onClick={handleClick}
      isSelected={data && data.selectedUser === props.login}
    />
  );
}

export default UserSelect;
