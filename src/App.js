import React from "react";
import UserList from "./components/UserList";

function App() {
  return (
    <>
      <form className="flex justify-center pt-16">
        <div className="flex items-center border-b border-b-2 border-purple-500 py-2">
          <input
            className="appearance-none bg-transparent border-none w-full text-purple-500 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            placeholder="github-login"
            aria-label="github-login"
          />
          <button
            className="flex-shrink-0 bg-purple-700 hover:bg-purple-500 border-purple-700 hover:border-purple-500 text-sm border-4 text-white py-1 px-2 mr-2 rounded"
            type="button"
          >
            Find
          </button>
        </div>
      </form>

      <UserList logins={["topherjaynes", "jeremylivingston", "jorgeveranet"]} />
    </>
  );
}

export default App;
