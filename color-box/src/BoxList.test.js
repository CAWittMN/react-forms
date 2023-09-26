import { render, fireEvent } from "@testing-library/react";
import BoxList from "./BoxList";

test("renders without crashing", () => {
  render(<BoxList />);
});

test("matches snapshot", () => {
  const { asFragment } = render(<BoxList />);
  expect(asFragment()).toMatchSnapshot();
});

test("can add a new box", () => {
  const { getByLabelText, queryByText } = render(<BoxList />);

  // no boxes yet
  expect(queryByText("X")).not.toBeInTheDocument();

  // fill out the form
  const widthInput = getByLabelText("Width:");
  const heightInput = getByLabelText("Height:");
  const colorInput = getByLabelText("Color:");
  fireEvent.change(widthInput, { target: { value: "100" } });
  fireEvent.change(heightInput, { target: { value: "100" } });
  fireEvent.change(colorInput, { target: { value: "peachpuff" } });

  // submit form
  const submitBtn = queryByText("Add a new box!");
  fireEvent.click(submitBtn);

  // box exists!
  expect(queryByText("X")).toBeInTheDocument();
});

test("can delete a box", () => {
  const { getByLabelText, queryByText } = render(<BoxList />);

  // fill out the form
  const widthInput = getByLabelText("Width:");
  const heightInput = getByLabelText("Height:");
  const colorInput = getByLabelText("Color:");
  fireEvent.change(widthInput, { target: { value: "100" } });
  fireEvent.change(heightInput, { target: { value: "100" } });
  fireEvent.change(colorInput, { target: { value: "peachpuff" } });

  // submit form
  const submitBtn = queryByText("Add a new box!");
  fireEvent.click(submitBtn);

  // box exists!
  expect(queryByText("X")).toBeInTheDocument();

  // delete box
  const deleteBtn = queryByText("X");
  fireEvent.click(deleteBtn);

  // box is gone!
  expect(queryByText("X")).not.toBeInTheDocument();
});
