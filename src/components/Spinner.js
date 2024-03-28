import React from "react";
import "./Spinner.css";

const Spinner = () => {
  return (
    <div className="spinbody flex flex-col justify-center items-center h-screen">
      <div className="loader"></div>
      <div className="mt-4 text-center font-bold text-3xl">Loading</div>
    </div>
  );
};

export default Spinner;
