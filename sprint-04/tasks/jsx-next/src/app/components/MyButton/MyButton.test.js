import { screen, render } from "@testing-library/react";
import MyButton from "."

it("Renders MyButton without crashing", () => {
  render(<MyButton />);
});

it("Renders MyButton as button tag", () => {
  render(<MyButton />);
  expect(screen.getByRole("button")).toBeInTheDocument();
});

it("Renders MyButton correctly", () => {
  render(<MyButton />);
  expect(screen.getByTestId("element-button")).toHaveTextContent(
    "Add to account"
  );
});
