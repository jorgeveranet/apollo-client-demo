import React, { useState } from "react";
import UserList from "./components/UserList";
import FindUser from "./components/FindUser";

function App() {
  const [logins, setLogins] = useState(["johnpapa", "samerbuna", "wesbos"]);

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
