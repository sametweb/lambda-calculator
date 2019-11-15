import React, { useState } from "react";
import * as data from "./data";
import "./App.css";
// STEP 4 - import the button and display components
// Don't forget to import any extra css/scss files you build into the correct component

// Logo has already been provided for you. Do the same for the remaining components
import Logo from "./components/DisplayComponents/Logo";
import Display from "./components/DisplayComponents/Display";
import Numbers from "./components/ButtonComponents/NumberButtons/Numbers";
import Operators from "./components/ButtonComponents/OperatorButtons/Operators";
import Specials from "./components/ButtonComponents/SpecialButtons/Specials";

function App() {
  let [display, setDisplay] = useState(0);
  // STEP 5 - After you get the components displaying using the provided data file, write your state hooks here.
  // Once the state hooks are in place write some functions to hold data in state and update that data depending on what it needs to be doing
  // Your functions should accept a parameter of the the item data being displayed to the DOM (ie - should recieve 5 if the user clicks on
  // the "5" button, or the operator if they click one of those buttons) and then call your setter function to update state.
  // Don't forget to pass the functions (and any additional data needed) to the components as props
  const getValue = value => {
    value === "C"
      ? setDisplay(0)
      : value === "="
      ? setDisplay(display !== 0 ? Math.round(eval(display) * 100) / 100 : 0)
      : value === "+/-"
      ? setDisplay(eval(display) - 2 * eval(display))
      : value === "%"
      ? setDisplay(display)
      : value === "/"
      ? display === 0
        ? setDisplay(0)
        : setDisplay(display + value)
      : value === "*"
      ? display === 0
        ? setDisplay(0)
        : setDisplay(display + value)
      : value === "+"
      ? display === 0
        ? setDisplay(0)
        : setDisplay(display + value)
      : value === "-"
      ? display === 0
        ? setDisplay(0)
        : setDisplay(display + value)
      : display === 0
      ? setDisplay((value = +value)) // to prevent multiple zeros on the display
      : setDisplay(display + value);
    // setDisplay(display === 0 ? value : (display += value));
  };

  return (
    <div className="container">
      <Logo />
      <div className="App">
        {/* STEP 4 - Render your components here and be sure to properly import/export all files */}
        <Display value={display} />
        <div className="buttons">
          <div className="left">
            <Specials specials={data.specials} getValue={getValue} />
            <Numbers numbers={data.numbers} getValue={getValue} />
          </div>
          <div className="right">
            <Operators operators={data.operators} getValue={getValue} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
