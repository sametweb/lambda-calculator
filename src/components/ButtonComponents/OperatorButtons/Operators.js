import React from "react";
import OperatorButton from "./OperatorButton";

//import any components needed

//Import your array data to from the provided data file

const Operators = ({ operators, getValue }) => {
  // STEP 2 - add the imported data to state
  return (
    <div className="operators">
      {operators.map((item, index) => (
        <OperatorButton key={index} value={item} getValue={getValue} />
      ))}
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
    </div>
  );
};

export default Operators;
