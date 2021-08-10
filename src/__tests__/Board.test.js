import { mount, shallow } from "enzyme";
import App from "../components/App";
import Board from "../components/Board";
import CalcButton from "../components/CalcButton";

describe("renders all buttons properly", () => {
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

  const board = shallow(<Board />);
  boardElements.forEach((element) => {
    it(`renders "${element}" button without crash`, () => {
      board.containsMatchingElement(<CalcButton value={element} />);
    });
  });
});

it("RESET button works", () => {
  const app = mount(<App />);
  const resetButton = app.find('[data-testid="RESET"]');

  app.find('[data-testid="8"]').simulate("click");
  app.find('[data-testid="1"]').simulate("click");
  app.find('[data-testid="3"]').simulate("click");
  resetButton.simulate("click");

  app.update();
  expect(app.find('[data-testid="screen"]').text()).toEqual("0");
});

describe("DEL button works", () => {
  const app = mount(<App />);
  const delButton = app.find('[data-testid="DEL"]');

  it("delete last number when buffer > 9", () => {
    app.find('[data-testid="8"]').simulate("click");
    app.find('[data-testid="1"]').simulate("click");
    delButton.simulate("click");
    app.update();

    expect(app.find('[data-testid="screen"]').text()).toEqual("8");
  });

  it("changes output to 0 when buffer < 9 during delete", () => {
    delButton.simulate("click");
    app.update();

    expect(app.find('[data-testid="screen"]').text()).toEqual("0");
  });

  it("deletes the dot", () => {
    app.find('[data-testid="."]').simulate("click");
    delButton.simulate("click");
    app.update();

    expect(app.find('[data-testid="screen"]').text()).toEqual("0");
  });

  it("allows to put another dot after dot deletion", () => {
    app.find('[data-testid="."]').simulate("click");
    // delButton.simulate("click");
    app.update();

    expect(app.find('[data-testid="screen"]').text()).toEqual("0.");
  });
});

describe("do integer math right", () => {
  const app = mount(<App />);

  const operationsLabels = ["+", "-", "x", "/"];
  const operationsMath = ["+", "-", "*", "/"];

  const resetButton = app.find('[data-testid="RESET"]');
  const eightButton = app.find('[data-testid="8"]');
  const fourButton = app.find('[data-testid="4"]');
  const resultsButton = app.find('[data-testid="="]');

  operationsLabels.forEach((label, index) => {
    it(`${label} operation works`, () => {
      resetButton.simulate("click");
      eightButton.simulate("click");
      app.find(`[data-testid="${label}"]`).simulate("click");
      fourButton.simulate("click");
      resultsButton.simulate("click");

      app.update();

      expect(app.find('[data-testid="screen"]').text()).toEqual(
        String(eval(`8 ${operationsMath[index]} 4`))
      );
    });
  });
});

describe("dot button works", () => {
  const app = mount(<App />);
  const dotButton = app.find('[data-testid="."]');
  const delButton = app.find('[data-testid="DEL"]');
  const resultButton = app.find('[data-testid="="]');
  const resetButton = app.find('[data-testid="RESET"]');

  it("renders dot when it's clicked", () => {
    dotButton.simulate("click");
    app.update();
    expect(app.find('[data-testid="screen"]').text()).toEqual("0.");
  });

  it("deletes the dot when DEL button clicked", () => {
    delButton.simulate("click");
    app.update();
    expect(app.find('[data-testid="screen"]').text()).toEqual("0");
  });

  it("makes integer calculation when there is nothing after the dot on the screen", () => {
    app.find('[data-testid="1"]').simulate("click");
    dotButton.simulate("click");
    app.find('[data-testid="+"]').simulate("click");
    app.find('[data-testid="1"]').simulate("click");
    resultButton.simulate("click");
    app.update();

    expect(app.find('[data-testid="screen"]').text()).toEqual("2");
  });

  it("renders dot after calculation where the first buffer value was ended with dot", () => {
    dotButton.simulate("click");
    app.update();

    expect(app.find('[data-testid="screen"]').text()).toEqual("2.");
  });

  it("renders number after dot", () => {
    app.find('[data-testid="1"]').simulate("click");
    app.update();

    expect(app.find('[data-testid="screen"]').text()).toEqual("2.1");
  });

  it("makes float and integer calculation with dot", () => {
    app.find('[data-testid="+"]').simulate("click");
    app.find('[data-testid="1"]').simulate("click");
    resultButton.simulate("click");
    app.update();

    expect(app.find('[data-testid="screen"]').text()).toEqual("3.1");
  });

  it("makes float and float calculation with dot", () => {
    app.find('[data-testid="+"]').simulate("click");
    app.find('[data-testid="1"]').simulate("click");
    dotButton.simulate("click");
    app.find('[data-testid="1"]').simulate("click");
    resultButton.simulate("click");
    app.update();

    expect(app.find('[data-testid="screen"]').text()).toEqual("4.2");
  });

  it("prevents from rendering second dot", () => {
    dotButton.simulate("click");
    app.update();

    expect(app.find('[data-testid="screen"]').text()).toEqual("4.2");
  });

  it("allows to put dot after reseting screen output", () => {
    resetButton.simulate("click");
    dotButton.simulate("click");
    app.update();

    expect(app.find('[data-testid="screen"]').text()).toEqual("0.");
  });
});
