import React from "react";
import { axe, toHaveNoViolations } from "jest-axe";
import { render } from "@testing-library/react";
import App from "./App";

/*Jest-axe checks for a11y accessibility violations, which should be checked per page.
This doesn't cover all accessibility, but it does hit a lot of common errors.
This is proper way to test for these violations, do not deviate from its asynchronous nature.
 */
expect.extend(toHaveNoViolations);

test("renders without a11y violations", async () => {
  const { container } = render(<App />);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});
