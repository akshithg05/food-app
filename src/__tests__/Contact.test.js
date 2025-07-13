import { render, screen } from "@testing-library/react";
import Contact from "../components/Contact";
import "@testing-library/jest-dom";

test("should load Contact page", () => {
  render(<Contact />); // This will be rendered to js dom
  const heading = screen.getByRole("heading");
  expect(heading).toBeInTheDocument();
});

test("Should load submit button", () => {
  render(<Contact />);
  const button = screen.getByRole("button");
  const submitText = screen.getByText("Submit");

  expect(button).toBeInTheDocument();
  expect(submitText).toBeInTheDocument();
});
