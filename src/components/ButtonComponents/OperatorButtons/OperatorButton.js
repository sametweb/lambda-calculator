import React from "react";

const OperatorButton = ({ value, getValue, currentOperator }) => {
  return (
    <button
      onClick={() => getValue(value.value, "operator")}
      style={
        currentOperator === value.value && currentOperator !== "="
          ? { background: "white", color: "black" }
          : null
      }
    >
      {value.char}
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </button>
  );
};

export default OperatorButton;
