import { render } from "@testing-library/react";
import App from "./App";

test("renders app", () => {
  render(<App />);
});

test("matches snapshot", () => {
  const { asFragment } = render(<App />);
  expect(asFragment()).toMatchSnapshot();
});
