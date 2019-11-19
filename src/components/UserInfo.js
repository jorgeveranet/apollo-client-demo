import React from "react";
import { gql, useQuery } from "@apollo/client";

const GET_USER = gql`
  {
    user(login: "jorgeveranet") {
      login
      name
      bio
      avatarUrl(size: 75)
      url
    }
  }
`;

function UserInfo() {
  const { loading, error, data } = useQuery(GET_USER);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      <p>{data.user.name}</p>
    </div>
  );
}

export default UserInfo;
