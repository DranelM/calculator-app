import { shallow } from "enzyme";
import App from "../components/App";
import Board from "../components/Board";
import OutputScreen from "../components/OutputScreen";
import ThemeChanger from "../components/ThemeChanger";

it("renders App without crashing", () => {
  shallow(<App />);
});

it("App should have board", () => {
  const app = shallow(<App />);
  expect(app.containsMatchingElement(<Board />)).toEqual(true);
});

it("App should have ThemeChanger", () => {
  const app = shallow(<App />);
  expect(app.containsMatchingElement(<ThemeChanger />)).toEqual(true);
});

it("App should have OutputScreen", () => {
  const app = shallow(<App />);
  expect(app.containsMatchingElement(<OutputScreen />)).toEqual(true);
});
