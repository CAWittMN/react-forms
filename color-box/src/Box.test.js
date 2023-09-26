import { render, screen } from "@testing-library/react";
import Box from "./Box";

test("renders without crashing", () => {
  render(<Box />);
});

test("matches snapshot", () => {
  const { asFragment } = render(<Box />);
  expect(asFragment()).toMatchSnapshot();
});

test("renders with correct styles", () => {
  const { container } = render(
    <Box
      width={100}
      height={100}
      backgroundColor="peachpuff"
      removeBox={() => {}}
    />
  );
  expect(container.querySelector(".Box-box")).toHaveStyle(`
        width: 100px;
        height: 100px;
        background-color: peachpuff;
    `);
});
