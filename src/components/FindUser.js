import React, { useState } from "react";

function FindUser(props) {
  const [login, setLogin] = useState("");

  const handleChange = event => setLogin(event.target.value);
  const handleSubmit = event => {
    event.preventDefault();
    if (login) {
      props.onLoginChange(login);
      setLogin("");
    }
  };

  return (
    <form className="flex justify-center pt-16" onSubmit={handleSubmit}>
      <div className="flex items-center border-b border-b-2 border-purple-500 py-2">
        <input
          value={login}
          onChange={handleChange}
          className="appearance-none bg-transparent border-none w-full text-purple-500 mr-3 py-1 px-2 leading-tight focus:outline-none"
          type="text"
          placeholder="github-login"
          aria-label="github-login"
        />
        <input
          className="flex-shrink-0 bg-purple-700 hover:bg-purple-500 border-purple-700 hover:border-purple-500 text-sm border-4 text-white py-1 px-2 mr-2 rounded"
          type="submit"
          value="Find"
        />
      </div>
    </form>
  );
}

export default FindUser;
