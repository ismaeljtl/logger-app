import { cleanup, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import LoadingContent from "../../components/LoadingContent";

describe("Loading Content Component", () => {
  beforeEach(() => {
    render(<LoadingContent />);
  });

  it("renders the heading of the card", () => {
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });
});
