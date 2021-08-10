const CalcButton = ({ colorType = "", value, onClick = "" }) => {
  return (
    <div
      className={`calcButton roundedBorders ${colorType}`}
      data-testid={value}
      onClick={() => onClick(value)}
    >
      {" "}
      {value}
    </div>
  );
};

export default CalcButton;
