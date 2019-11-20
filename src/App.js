import React from "react";

// import UserInfo from "./components/UserInfo";

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

      <div className="flex flex-wrap -mb-4 m-16">
        <div className="m-4 md:flex flex-wrap bg-white rounded-lg p-6 shadow-md">
          <img
            className="h-16 w-16 md:h-24 md:w-24 rounded-full mx-auto md:mx-0 md:mr-6"
            src="https://avatars0.githubusercontent.com/u/472956?s=640&v=4"
            alt="user avatar"
          />
          <div className="text-center md:text-left">
            <h2 className="text-lg">Jeremy Livingston</h2>
            <div className="text-purple-500">jeremylivingston</div>
            <div className="text-lg mt-1 text-gray-600">
              I'm the jQuery champion!
            </div>
          </div>
        </div>

        <div className="m-4 md:flex bg-white rounded-lg p-6 shadow-md">
          <img
            className="h-16 w-16 md:h-24 md:w-24 rounded-full mx-auto md:mx-0 md:mr-6"
            src="https://avatars0.githubusercontent.com/u/18388704?s=460&v=4"
            alt="user avatar"
          />
          <div className="text-center md:text-left">
            <h2 className="text-lg">Jorge Vera</h2>
            <div className="text-purple-500">jorgeveranet</div>
            <div className="text-lg mt-1 text-gray-600">Web and APIs</div>
          </div>
        </div>

        <div className="m-4 md:flex bg-white rounded-lg p-6 shadow-md">
          <img
            className="h-16 w-16 md:h-24 md:w-24 rounded-full mx-auto md:mx-0 md:mr-6"
            src="https://avatars0.githubusercontent.com/u/18388704?s=460&v=4"
            alt="user avatar"
          />
          <div className="text-center md:text-left">
            <h2 className="text-lg">Jorge Vera</h2>
            <div className="text-purple-500">jorgeveranet</div>
            <div className="text-lg mt-1 text-gray-600">Web and APIs</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
