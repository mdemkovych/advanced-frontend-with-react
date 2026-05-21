/** @jest-environment jsdom */

import { render } from "@testing-library/react";
import Button from "../app/components/Button";

test("Renders with a className equal to the active", () => {
  const { container } = render(<Button />);
  expect(container.firstChild).toHaveClass("active");
});
