const ThemeChanger = ({ checkedTheme, onChange }) => {
  const themes = ["theme1", "theme2", "theme3"];

  function getChecked(name) {
    return true ? name === checkedTheme : false;
  }

  return (
    <div className="themeChanger">
      {themes.map((theme) => (
        <label className="radio" key={theme}>
          <span className="radio__input">
            <input
              key={theme}
              className={`${theme}`}
              type="radio"
              name="themeToggle"
              value={theme}
              onChange={() => onChange(theme)}
              checked={getChecked(theme)}
            ></input>
            <span className="radio__control"></span>
          </span>
          <span className="radio__label">{theme[theme.length - 1]}</span>
        </label>
      ))}
    </div>
  );
};

export default ThemeChanger;
