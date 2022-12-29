import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserInt } from "../model";

const Table = () => {
  const [users, setUsers] = useState<UserInt[]>([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:8080/users");
    setUsers(result.data);
  };

  const deleteUser = async (id: number) => {
    await axios.delete(`http://localhost:8080/user/${id}`);
    loadUsers();
  };

  return (
    <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="py-3 px-4">
              Id
            </th>
            <th scope="col" className="py-3 px-6">
              Name
            </th>
            <th scope="col" className="py-3 px-6">
              Username
            </th>
            <th scope="col" className="py-3 px-6">
              Email
            </th>
            <th scope="col" className="py-3 px-6">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {users.map((el, index) => (
            <tr
              className="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
              key={index}
            >
              <th className="py-4 px-4">{el.id}</th>
              <td
                scope="row"
                className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {el.name}
              </td>
              <td className="py-4 px-6">{el.username}</td>
              <td className="py-4 px-6">{el.email}</td>
              <td className="py-4 px-6 text-center">
                <div className="font-medium text-blue-600 dark:text-blue-500  flex justify-between ">
                  <Link
                    to={`/edituser/${el.id}`}
                    className="px-5 py-1.5 bg-blue-400 rounded-md"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => deleteUser(el.id)}
                    className="px-5 py-1.5 bg-red-400 rounded-md"
                  >
                    ❌
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
