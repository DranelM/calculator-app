const OutputScreen = ({ value }) => {
  return (
    <div data-testid="screen" className="outputScreen roundedBorders">
      {value}
    </div>
  );
};

export default OutputScreen;
