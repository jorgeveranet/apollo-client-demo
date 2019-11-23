import React from "react";
import { gql, useQuery } from "@apollo/client";

const GET_USER = gql`
  query getUser($login: String!) {
    user(login: $login) {
      login
      name
      bio
      avatarUrl(size: 640)
      url
    }
  }
`;

function UserInfo(props) {
  const { loading, error, data } = useQuery(GET_USER, {
    variables: { login: props.login }
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div
      className={`max-w-md overflow-hidden m-4 md:flex flex-wrap rounded-lg p-6 shadow-md cursor-pointer
        ${props.isSelected ? "bg-yellow-200" : "bg-white"}`}
      onClick={props.onClick}
    >
      <img
        className="h-16 w-16 md:h-24 md:w-24 rounded-full mx-auto md:mx-0 md:mr-6"
        alt="user avatar"
        src={data.user.avatarUrl}
      />
      <div className="text-center md:text-left w-40">
        <h2 className="text-lg truncate">{data.user.name}</h2>
        <div className="text-purple-500 truncate">{data.user.login}</div>
        <div className="text-lg mt-1 text-gray-600 truncate">
          {data.user.bio}
        </div>
      </div>
    </div>
  );
}

export default UserInfo;
