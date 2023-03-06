import { cleanup, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Error from "../../components/Error";

describe("Error Component", () => {
  beforeEach(() => {
    render(<Error errorMsg={"error"} />);
  });

  it("renders the error message", () => {
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });
});
