import NewToDoForm from "./NewToDoForm";
import { render, fireEvent } from "@testing-library/react";

jest.mock("uuid", () => {
  return {
    v4: jest.fn(() => 1),
  };
});

it("renders without crashing", () => {
  render(<NewToDoForm />);
});

it("matches snapshot", () => {
  const { asFragment } = render(<NewToDoForm />);
  expect(asFragment()).toMatchSnapshot();
});

it("can update form data", () => {
  const { getByLabelText } = render(<NewToDoForm />);

  const taskInput = getByLabelText("New To Do:");

  fireEvent.change(taskInput, { target: { value: "do laundry" } });

  expect(taskInput).toHaveValue("do laundry");
});

it("can submit form", () => {
  const addToDo = jest.fn();
  const { getByLabelText, queryByText } = render(
    <NewToDoForm addToDo={addToDo} />
  );

  // fill out the form
  const taskInput = getByLabelText("New To Do:");
  fireEvent.change(taskInput, { target: { value: "do laundry" } });

  // submit form
  const submitBtn = queryByText("Add To Do");
  fireEvent.click(submitBtn);

  expect(addToDo).toHaveBeenCalledWith({
    text: "do laundry",
  });
});
