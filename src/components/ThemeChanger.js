const ThemeChanger = ({ checkedTheme, onChange }) => {
  const themes = ["theme1", "theme2", "theme3"];

  function getChecked(name) {
    return true ? name === checkedTheme : false;
  }

  return (
    <div className="themeChanger">
      {themes.map((theme) => (
        <input
          key={theme}
          className={theme}
          type="radio"
          name="themeToggle"
          value={theme}
          onChange={() => onChange(theme)}
          checked={getChecked(theme)}
        ></input>
      ))}
    </div>
  );
};

export default ThemeChanger;
