import React from "react";

const OperatorButton = ({ value, getValue }) => {
  return (
    <button onClick={() => getValue(value.value)}>
      {value.char}
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </button>
  );
};

export default OperatorButton;
