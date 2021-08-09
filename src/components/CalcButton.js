const CalcButton = ({ colorType = "", value, onClick = "" }) => {
  return (
    <div
      className={`calcButton roundedBorders ${colorType}`}
      onClick={() => onClick(value)}
    >
      {" "}
      {value}
    </div>
  );
};

export default CalcButton;
