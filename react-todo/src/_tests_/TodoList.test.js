import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import TodoList from "../components/TodoList";

describe("TodoList Component", () => {
  test("renders initial todos", () => {
    render(<TodoList />);
    expect(screen.getByText("Learn React")).toBeInTheDocument();
    expect(screen.getByText("Build a Todo App")).toBeInTheDocument();
  });

  test("can add a new todo", () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText("Add a new todo");
    const button = screen.getByText("Add");

    fireEvent.change(input, { target: { value: "New Task" } });
    fireEvent.click(button);

    expect(screen.getByText("New Task")).toBeInTheDocument();
  });

  test("can toggle a todo's completion", () => {
    render(<TodoList />);
    const todo = screen.getByText("Learn React");

    fireEvent.click(todo);

    expect(todo).toHaveClass("line-through");
  });

  test("can delete a todo", () => {
    render(<TodoList />);
    const deleteButton = screen.getAllByText("Delete")[0];

    fireEvent.click(deleteButton);

    expect(screen.queryByText("Learn React")).not.toBeInTheDocument();
  });
});
