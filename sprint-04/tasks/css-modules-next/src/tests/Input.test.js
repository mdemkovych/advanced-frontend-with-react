/** @jest-environment jsdom */

import { render, screen } from "@testing-library/react";
import Input from "../app/components/Input";

test("Renders with a className equal to 'active'", () => {
  render(<Input />);

  const input = screen.getByPlaceholderText("your text");
  expect(input).toHaveClass("active");
});
