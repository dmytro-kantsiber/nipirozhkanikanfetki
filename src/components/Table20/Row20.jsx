import React, {  useState } from "react";
import Button from "../Button";
import Cell from "../Cell";
import "../../App.css";

const Row20 = ({inputValue, setInputValue}) => {
  const [values, setValues] = useState([
   "Знач." , 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 
  ]);

  return (
    <>
      <div className="main">
        {values
          ? values.map((element, index) => {
              return <Cell number={values[index]} />;
            })
          : null}
      </div>
      <Button setValues={setValues} inputValue={inputValue} setInputValue={setInputValue}/>
    </>
  );
};

export default Row20;
