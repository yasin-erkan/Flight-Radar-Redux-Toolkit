import React from "react";

const Error = ({ message }) => {
  return (
    <div className="error">
      <p> Details can not be caught!</p>
      <p>{message}</p>
    </div>
  );
};

export default Error;
