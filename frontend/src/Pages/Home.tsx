import React from "react";
import Table from "../Components/Table";

const Home = () => {
  return (
    <main>
      <h1 className="my-20 px-[10%]  text-2xl font-bold underline">
        The best User Management
      </h1>
      <div className="px-0 sm:px-[10%]">
        <Table />
      </div>
    </main>
  );
};

export default Home;
