import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import NotARobotCheckbox from "../Check";

test("Checkbox renders correctly and toggles visibility upon change", () => {
  render(<NotARobotCheckbox />);

  expect(screen.getByText("I am not a robot")).toBeInTheDocument();

  const checkbox = screen.getByLabelText("I am not a robot");
  expect(checkbox).toBeInTheDocument();

  fireEvent.click(checkbox);

  expect(checkbox).toBeChecked();

  expect(screen.queryByText("I am not a robot")).not.toBeInTheDocument();
});
