import { render, screen } from "@testing-library/react";
import Contact from "../components/Contact";
import "@testing-library/jest-dom";

describe("Contact us page test cases", () => {
  beforeAll(() => {
    console.log("This is called before all test cases in this block");
  });
  beforeEach(() => {
    console.log("This will run before each test case in the describe block");
  });
  afterAll(() => {
    console.log("This is called After all test cases in this block");
  });
  afterEach(() => {
    console.log("This will run after each test case in the describe block");
  });

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

  // Test keyword can also be replaced with 'it', does the same function

  it("Should load input ", () => {
    render(<Contact />);
    const inputName = screen.getByPlaceholderText("Enter name");
    expect(inputName).toBeInTheDocument();
  });

  test("Should load 2 input boxes on the Contact component", () => {
    render(<Contact />);
    const inputBoxes = screen.getAllByRole("textbox");
    expect(inputBoxes.length).toBe(2);
    expect(inputBoxes.length).not.toBe(1);
  });
});
