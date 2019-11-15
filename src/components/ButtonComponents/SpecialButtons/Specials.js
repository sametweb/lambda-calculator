import React from "react";
import SpecialButton from "./SpecialButton";
//import any components needed

//Import your array data to from the provided data file

const Specials = ({ specials }) => {
  // STEP 2 - add the imported data to state
  return (
    <div className="specials">
      {specials.map((item, index) => (
        <SpecialButton key={index} value={item} />
      ))}
    </div>
  );
};

export default Specials;
