import React from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const AddUser = () => {
  let navigate = useNavigate();

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const name = e.target.elements.name.value;
    const username = e.target.elements.username.value;
    const email = e.target.elements.email.value;

    let newUser = {
      username: username,
      name: name,
      email: email,
    };

    console.log(newUser);

    await axios.post("http://localhost:8080/user", newUser);
    navigate("/");

    e.target.elements.username.value = "";
    e.target.elements.name.value = "";
    e.target.elements.email.value = "";
  };

  return (
    <main>
      <div className="max-w-xl my-20 mx-auto px-5">
        <h1 className="text-xl mb-10 text-center uppercase underline">Add a user :</h1>
        <form
          onSubmit={(e) => handleSubmit(e)}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full"
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Enter your username"
              required
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="flex items-center justify-between">
            <button className="bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Submit
            </button>
            <Link
              className="bg-red-400 hover:bg-red-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              to="/"
            >
              Cancel
            </Link>
          </div>
        </form>
      </div>
    </main>
  );
};

export default AddUser;
