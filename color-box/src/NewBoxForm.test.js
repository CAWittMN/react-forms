import NewBoxForm from "./NewBoxForm";
import { render, fireEvent } from "@testing-library/react";

it("renders without crashing", () => {
  render(<NewBoxForm />);
});

it("matches snapshot", () => {
  const { asFragment } = render(<NewBoxForm />);
  expect(asFragment()).toMatchSnapshot();
});

it("can update form data", () => {
  const { getByLabelText } = render(<NewBoxForm />);

  const widthInput = getByLabelText("Width:");
  const heightInput = getByLabelText("Height:");
  const colorInput = getByLabelText("Color:");

  fireEvent.change(widthInput, { target: { value: "100" } });
  fireEvent.change(heightInput, { target: { value: "100" } });
  fireEvent.change(colorInput, { target: { value: "peachpuff" } });

  expect(widthInput).toHaveValue("100");
  expect(heightInput).toHaveValue("100");
  expect(colorInput).toHaveValue("peachpuff");
});

it("can submit form", () => {
  const addBox = jest.fn();
  const { getByLabelText, queryByText } = render(
    <NewBoxForm addBox={addBox} />
  );

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

  expect(addBox).toHaveBeenCalledWith({
    backgroundColor: "peachpuff",
    height: "100",
    id: expect.any(Number),
    width: "100",
  });
});
