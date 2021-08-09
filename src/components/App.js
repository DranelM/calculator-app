import { useState } from "react";
import Board from "./Board";
import OutputScreen from "./OutputScreen";
import ThemeChanger from "./ThemeChanger";

function App() {
  // eslint-disable-next-line no-unused-vars
  const [outputValue, setOutputValue] = useState(0);
  const [currentTheme, setCurrentTheme] = useState("theme1");

  function handleThemeToggle(theme) {
    setCurrentTheme(theme);
  }

  return (
    <div className="App">
      <ThemeChanger checkedTheme={currentTheme} onChange={handleThemeToggle} />
      <OutputScreen value={outputValue} />
      <Board buffer={outputValue} setBuffer={setOutputValue} />
    </div>
  );
}

export default App;
