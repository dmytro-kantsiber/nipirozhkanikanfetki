import React from "react";
import "../../App.css";
import Caption from "../Caption";
import Row20 from "./Row20";

const Table20 = ({inputValue, setInputValue}) => {
  return (
    <div className="table">
      <Caption />
      <Row20 inputValue={inputValue} setInputValue={setInputValue}/>
    </div>
  );
};

export default Table20;
