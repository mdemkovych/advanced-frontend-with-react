import { screen, render } from "@testing-library/react";
import MyLabel from ".";

it("Renders MyLabel without crashing", () => {
  render(<MyLabel />);
  expect(screen.getByTestId("element-label")).toBeInTheDocument();
});

it("Renders MyLabel with attr:for", () => {
  render(<MyLabel />);
  expect(screen.getByTestId("element-label")).toHaveAttribute("for", "inp-num");
});

it("Renders MyLabel with text", () => {
  render(<MyLabel />);
  expect(screen.getByTestId("element-label")).toHaveTextContent("Count:");
});
