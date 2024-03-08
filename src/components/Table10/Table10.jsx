import React from "react";
import "../../App.css";
import Caption from "../Caption";
import Caption10 from "./Caption10";
import Row10 from "./Row10";

const Table10 = ({inputValue, setInputValue}) => {
  return (
    <div className="table">
      <Caption10 />
      <Row10 inputValue={inputValue} setInputValue={setInputValue}/>
    </div>
  );
};

export default Table10;
