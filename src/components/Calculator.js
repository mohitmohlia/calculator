import React, { useState } from "react";
import Button from "./Button";
import Display from "./Display";

const numberPad = Array(10).fill("null");

function Calculator() {
  const [result, setResult] = useState("");

  const handleClick = (value) => {
    if (value === "." && result.includes(".")) return;
    setResult(result.concat(value));
  };

  const handleClear = () => {
    setResult("");
  };
  const handleDelete = () => {
    setResult(result.slice(0, -1));
  };
  const handleCalculate = () => {
    setResult(eval(result).toString());
  };
  return (
    <div>
      <Display value={result} />
      <div className="number-pad">
        {numberPad.map((numBtn, index) => {
          return <Button key={index} value={index} handleClick={handleClick} />;
        })}
        <Button value={"."} handleClick={handleClick} />
      </div>
      <div className="operatorsBtn">
        <Button className="optBtn" value={"+"} handleClick={handleClick} />
        <Button className="optBtn" value={"-"} handleClick={handleClick} />
        <Button className="optBtn" value={"/"} handleClick={handleClick} />
        <Button className="optBtn" value={"*"} handleClick={handleClick} />
        <Button className="optBtn" value={"AC"} handleClick={handleClear} />
        <Button className="optBtn" value={"C"} handleClick={handleDelete} />
        <Button className="optBtn" value={"="} handleClick={handleCalculate} />
      </div>
    </div>
  );
}

export default Calculator;
