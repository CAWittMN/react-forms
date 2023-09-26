import ToDoList from "./ToDoList";
import {
  render,
  fireEvent,
  getByDisplayValue,
  getByPlaceholderText,
} from "@testing-library/react";

it("renders without crashing", () => {
  render(<ToDoList />);
});

it("matches snapshot", () => {
  const { asFragment } = render(<ToDoList />);
  expect(asFragment()).toMatchSnapshot();
});

it("can add a new todo", () => {
  const { getByLabelText, queryByText } = render(<ToDoList />);

  // no todos yet
  expect(queryByText("X")).not.toBeInTheDocument();

  // fill out the form
  const todoInput = getByLabelText("New To Do:");
  fireEvent.change(todoInput, { target: { value: "do laundry" } });

  // submit form
  const submitBtn = queryByText("Add To Do");
  fireEvent.click(submitBtn);

  // todo exists!
  expect(queryByText("X")).toBeInTheDocument();
});

it("can delete a todo", () => {
  const { getByLabelText, queryByText } = render(<ToDoList />);

  // fill out the form
  const todoInput = getByLabelText("New To Do:");
  fireEvent.change(todoInput, { target: { value: "do laundry" } });

  // submit form
  const submitBtn = queryByText("Add To Do");
  fireEvent.click(submitBtn);

  // todo exists!
  expect(queryByText("X")).toBeInTheDocument();

  // delete todo
  const deleteBtn = queryByText("X");
  fireEvent.click(deleteBtn);

  // todo is gone!
  expect(queryByText("X")).not.toBeInTheDocument();
});

it("can edit a todo", () => {
  const { getByLabelText, queryByText } = render(<ToDoList />);

  // fill out the form
  const todoInput = getByLabelText("New To Do:");
  fireEvent.change(todoInput, { target: { value: "do laundry" } });

  // submit form
  const submitBtn = queryByText("Add To Do");
  fireEvent.click(submitBtn);

  // todo exists!
  expect(queryByText("X")).toBeInTheDocument();

  // edit todo
  const editBtn = queryByText("Edit");
  fireEvent.click(editBtn);

  // edit form exists!
  expect(queryByText("Update")).toBeInTheDocument();

  // fill out the form
  const updatedTodoInput = getByLabelText("Edit:");
  fireEvent.change(updatedTodoInput, { target: { value: "do dishes" } });

  // submit form
  const updateBtn = queryByText("Update To Do");
  fireEvent.click(updateBtn);

  // todo is updated!
  expect(queryByText("do dishes")).toBeInTheDocument();
});
