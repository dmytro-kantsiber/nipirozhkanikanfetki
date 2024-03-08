import React from "react";
import "../../App.css";
import Caption from "../Caption";
import Caption6 from "./Caption6";
import Row6 from "./Row6";

const Table6 = ({inputValue, setInputValue}) => {
  return (
    <div className="table">
      <Caption6 />
      <Row6 inputValue={inputValue} setInputValue={setInputValue}/>
    </div>
  );
};

export default Table6;
