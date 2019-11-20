import React, { useState } from "react";
import UserList from "./components/UserList";
import FindUser from "./components/FindUser";

function App() {
  const [logins, setLogins] = useState([
    "AndersonZacharyT",
    "afulton12",
    "topherjaynes",
    "hgeary",
    "goranb"
  ]);

  const handleLoginChange = login =>
    setLogins([...new Set([...logins, login])]);

  return (
    <>
      <FindUser onLoginChange={handleLoginChange} />
      <UserList logins={logins} />
    </>
  );
}

export default App;
