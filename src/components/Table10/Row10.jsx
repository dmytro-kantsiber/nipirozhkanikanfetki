import React, {  useState } from "react";
import Button from "../Button";
import Cell from "../Cell";
import "../../App.css";
import Button10 from "./Button10";

const Row10 = ({inputValue, setInputValue}) => {
  const [values, setValues] = useState([
   "Знач." , 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
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
      <Button10 setValues={setValues} inputValue={inputValue} setInputValue={setInputValue}/>
    </>
  );
};

export default Row10;
