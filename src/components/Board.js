import { useState } from "react";
import CalcButton from "./CalcButton";

const Board = ({ buffer, setBuffer }) => {
  const [currentOperation, setCurrentOperation] = useState(null);
  const [result, setResult] = useState(0);

  const boardElements = [
    "7",
    "8",
    "9",
    "DEL",
    "4",
    "5",
    "6",
    "+",
    "1",
    "2",
    "3",
    "-",
    ".",
    "0",
    "/",
    "x",
    "RESET",
    "=",
  ];

  function processClick(value) {
    if (!isNaN(parseInt(value))) {
      processNumber(value);
    } else {
      processOperation(value);
    }
  }

  function processNumber(value) {
    if (buffer === 0) {
      setBuffer(value);
    } else {
      setBuffer(buffer + "" + value);
    }
  }

  function processOperation(operation) {
    if (operation === "=") {
      switch (currentOperation) {
        case "+":
          setBuffer(String(Number(result) + Number(buffer)));
          break;
        case "-":
          setBuffer(String(Number(result) - Number(buffer)));
          break;
        case "x":
          setBuffer(String(Number(result) * Number(buffer)));
          break;
        case "/":
          setBuffer(String(Number(result) / Number(buffer)));
          break;
        default:
          break;
      }
    } else if (operation === "DEL") {
      if (buffer === "0") {
        return;
      } else if (buffer.length === 1) {
        setBuffer(0);
      } else {
        setBuffer(buffer.substring(0, buffer.length - 1));
      }
    } else if (operation === "RESET") {
      setResult(0);
      setBuffer(0);
    } else if (operation === ".") {
      if (!String(buffer).includes(".")) {
        setBuffer(buffer + ".");
      }
      return;
    } else {
      // When math opations are clicked
      setResult(buffer);
      setCurrentOperation(operation);
      setBuffer(0);
      return;
    }
    setCurrentOperation(null);
  }

  function getButtonType(element) {
    switch (element) {
      case "DEL":
        return "sysFunction delButton";
      case "RESET":
        return "sysFunction resetButton";
      case "=":
        return "resultsButton";
      default:
        return "";
    }
  }

  return (
    <div className="board roundedBorders">
      {boardElements.map((element) => (
        <CalcButton
          key={element}
          value={element}
          colorType={getButtonType(element)}
          onClick={processClick}
        />
      ))}
    </div>
  );
};

export default Board;
