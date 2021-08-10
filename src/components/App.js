import { useEffect, useState } from "react";
import Board from "./Board";
import OutputScreen from "./OutputScreen";
import ThemeChanger from "./ThemeChanger";

function App() {
  // eslint-disable-next-line no-unused-vars
  const [outputValue, setOutputValue] = useState(0);
  const [currentTheme, setCurrentTheme] = useState(
    localStorage.getItem("theme") || "theme1"
  );

  function handleThemeToggle(theme) {
    setCurrentTheme(theme);
  }

  useEffect(() => {
    localStorage.setItem("theme", currentTheme);
  }, [currentTheme]);

  return (
    <div className={`App ${currentTheme}`}>
      <ThemeChanger checkedTheme={currentTheme} onChange={handleThemeToggle} />
      <OutputScreen value={outputValue} />
      <Board buffer={outputValue} setBuffer={setOutputValue} />
      <div className="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge">
          Frontend Mentor
        </a>
        . Coded by <a href="https://github.com/DranelM">Dranel</a>
      </div>
    </div>
  );
}

export default App;
