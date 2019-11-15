import React from "react";

const SpecialButton = ({ value }) => {
  return (
    <button>
      {value}
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </button>
  );
};

export default SpecialButton;
