import { screen, render } from "@testing-library/react";
import MyInput from ".";

it("Renders MyInput component without crashing", () => {
  render(<MyInput />);
});

it("Renders input tag with attr:id", () => {
  render(<MyInput />);
  expect(screen.getByTestId("element-input")).toHaveAttribute("id", "inp-num");
});

it("Renders input tag with attr:type", () => {
  render(<MyInput />);
  expect(screen.getByTestId("element-input")).toHaveAttribute("type", "number");
});
