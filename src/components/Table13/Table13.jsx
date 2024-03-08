import React from "react";
import "../../App.css";
import Caption from "../Caption";
import Caption13 from "./Caption13";
import Row13 from "./Row13";

const Table13 = ({inputValue, setInputValue}) => {
  return (
    <div className="table">
      <Caption13 />
      <Row13 inputValue={inputValue} setInputValue={setInputValue}/>
    </div>
  );
};

export default Table13;
