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
  let [numbers, setNumbers] = useState({
    current: 0,
    prev: 0,
    display: 0,
    operator: ""
  });
  // STEP 5 - After you get the components displaying using the provided data file, write your state hooks here.
  // Once the state hooks are in place write some functions to hold data in state and update that data depending on what it needs to be doing
  // Your functions should accept a parameter of the the item data being displayed to the DOM (ie - should recieve 5 if the user clicks on
  // the "5" button, or the operator if they click one of those buttons) and then call your setter function to update state.
  // Don't forget to pass the functions (and any additional data needed) to the components as props
  const getValue = (value, type) => {
    switch (type) {
      case "number":
        setNumbers({
          ...numbers,
          current:
            value === "."
              ? numbers.current.toString().includes(".")
                ? numbers.current
                : numbers.current + value
              : value === 0
              ? numbers.current === 0
                ? numbers.current
                : parseFloat(numbers.current + value)
              : parseFloat(numbers.current + value),
          display:
            value === "."
              ? numbers.display.toString().includes(".")
                ? numbers.display
                : numbers.display + value
              : numbers.display === 0
              ? value
              : numbers.display + value
        });

        break;
      case "special":
        if (value === "C") {
          setNumbers({
            current: 0,
            prev: 0,
            display: 0,
            operator: ""
          });
        } else if (value === "+/-") {
          setNumbers({
            ...numbers,
            current: parseFloat(-numbers.current)
          });
        }
        break;
      case "operator":
        if (value !== "=") {
          if (parseInt(numbers.current) === 0 && parseInt(numbers.prev) === 0) {
            //If both numbers are 0, do nothing
          } else if (
            //If first number is typed but second is not
            parseInt(numbers.current) &&
            parseInt(numbers.prev) === 0
          ) {
            if (!numbers.operator) {
              //If no operator selected yet
              setNumbers({
                ...numbers,
                display: numbers.display + value,
                current: 0,
                prev: numbers.current,
                operator: value
              });
            } else {
              //If there is a selected operator
              setNumbers({
                ...numbers,
                display: numbers.display.replace(numbers.operator, value),
                operator: value
              });
            }
          } else if (
            //If both numbers are typed and there is a selected operator
            parseInt(numbers.current) !== 0 &&
            parseInt(numbers.prev) !== 0 &&
            numbers.operator
          ) {
            if (numbers.operator === "+") {
              setNumbers({
                ...numbers,
                current: parseFloat(numbers.current) + parseFloat(numbers.prev),
                prev: 0,
                display: parseFloat(numbers.current) + parseFloat(numbers.prev),
                operator: value
              });
            } else if (numbers.operator === "-") {
              setNumbers({
                ...numbers,
                current: parseFloat(numbers.prev) - parseFloat(numbers.current),
                prev: 0,
                display: parseFloat(numbers.prev) - parseFloat(numbers.current),
                operator: value
              });
            } else if (numbers.operator === "*") {
              setNumbers({
                ...numbers,
                current: parseFloat(numbers.current) * parseFloat(numbers.prev),
                prev: 0,
                display: parseFloat(numbers.current) * parseFloat(numbers.prev),
                operator: value
              });
            } else if (numbers.operator === "/") {
              setNumbers({
                ...numbers,
                current: parseFloat(numbers.current) / parseFloat(numbers.prev),
                prev: 0,
                display: parseFloat(numbers.current) / parseFloat(numbers.prev),
                operator: value
              });
            }
          }
        } else {
          //Eger basilan operator = ise
          if (parseInt(numbers.current) === 0 && parseInt(numbers.prev) === 0) {
            //current: 0 prev: 0
            setNumbers({ ...numbers });
          } else if (
            parseInt(numbers.current) !== 0 &&
            parseInt(numbers.prev) === 0
          ) {
            //Current: x prev: 0 operator: ''
            setNumbers({ ...numbers, display: numbers.current, operator: "" });
          } else if (
            //Current: 0 prev: x operator: +-*/
            parseInt(numbers.current) === 0 &&
            parseInt(numbers.prev) !== 0 &&
            numbers.operator
          ) {
            setNumbers({
              ...numbers,
              display: numbers.prev,
              current: numbers.prev,
              prev: 0,
              operator: ""
            });
          } else if (
            parseInt(numbers.current) !== 0 &&
            parseInt(numbers.prev) !== 0 &&
            numbers.operator
          ) {
            //current: x prev: y operator: true
            if (numbers.operator === "+") {
              setNumbers({
                ...numbers,
                current: parseFloat(numbers.current) + parseFloat(numbers.prev),
                prev: 0,
                display: parseFloat(numbers.current) + parseFloat(numbers.prev),
                operator: ""
              });
            } else if (numbers.operator === "-") {
              setNumbers({
                ...numbers,
                current: parseFloat(numbers.prev) - parseFloat(numbers.current),
                prev: 0,
                display: parseFloat(numbers.prev) - parseFloat(numbers.current),
                operator: ""
              });
            } else if (numbers.operator === "*") {
              setNumbers({
                ...numbers,
                current: parseFloat(numbers.current) * parseFloat(numbers.prev),
                prev: 0,
                display: parseFloat(numbers.current) * parseFloat(numbers.prev),
                operator: ""
              });
            } else if (numbers.operator === "/") {
              setNumbers({
                ...numbers,
                current: parseFloat(numbers.prev) / parseFloat(numbers.current),
                prev: 0,
                display: parseFloat(numbers.prev) / parseFloat(numbers.current),
                operator: ""
              });
            }
          }
        }
        break;
      default:
      //default
    }
    // setNumbers({
    //   ...numbers,
    //   display:
    //     numbers.current + numbers.operator &&
    //     numbers.operator + numbers.prev &&
    //     numbers.prev
    // });
  };

  console.log(numbers);

  return (
    <div className="container">
      <Logo />
      <div className="App">
        {/* STEP 4 - Render your components here and be sure to properly import/export all files */}
        <Display value={numbers.display} />
        <div className="buttons">
          <div className="left">
            <Specials specials={data.specials} getValue={getValue} />
            <Numbers numbers={data.numbers} getValue={getValue} />
          </div>
          <div className="right">
            <Operators
              operators={data.operators}
              getValue={getValue}
              currentOperator={numbers.operator}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
