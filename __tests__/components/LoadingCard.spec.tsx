import { cleanup, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import LoadingCard from "../../components/LoadingCard";

describe("Loading Card Component", () => {
  beforeEach(() => {
    render(<LoadingCard />);
  });

  it("renders the heading of the card", () => {
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });
});
