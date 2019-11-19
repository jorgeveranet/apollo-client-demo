import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import { ApolloClient, HttpLink, gql, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  link: new HttpLink({
    uri: "https://api.github.com/graphql",
    headers: {
      Authorization: localStorage.getItem("token")
    }
  }),
  cache: new InMemoryCache({
    typePolicies: {
      User: {
        keyFields: ["login"]
      }
    }
  })
});

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

client
  .query({
    query: GET_USER
  })
  .then(result => console.log(result))
  .catch(err => console.log(err));

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
