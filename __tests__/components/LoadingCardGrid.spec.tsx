import { cleanup, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import LoadingCardGrid from "../../components/LoadingCardGrid";

const num = 9;

describe("Loading Card Grid Component", () => {
  beforeEach(() => {
    render(<LoadingCardGrid numCards={num} />);
  });

  it("renders 9 elements on the page", () => {
    const toggles = screen.getAllByTestId("loadingCard");
    expect(toggles.length).toBe(num);
  });

  it("renders the main section on the page", () => {
    const toggles = screen.getAllByTestId("loadingContent");
    expect(toggles.length).toBe(1);
  });
});
