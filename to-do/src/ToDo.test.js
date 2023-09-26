import ToDo from "./ToDo";
import { render, fireEvent } from "@testing-library/react";

it("renders without crashing", () => {
  render(<ToDo />);
});

it("matches snapshot", () => {
  const { asFragment } = render(<ToDo />);
  expect(asFragment()).toMatchSnapshot();
});

it("renders with correct props", () => {
  const { getByText } = render(<ToDo text="do laundry" />);
  expect(getByText("do laundry")).toBeInTheDocument();
});
