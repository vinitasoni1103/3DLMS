import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Select a Model</h1>
      <div>
        <Link to="/model/industrial_robot">
          <button>View Industrial Robot</button>
        </Link>
        <Link to="/model/second_model">
          <button>View Second Model</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
