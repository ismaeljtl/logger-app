import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import Header from "../../components/Header";

describe("Error Component", () => {
  beforeEach(() => {
    render(<Header />);
  });

  it("renders the header title", () => {
    const heading = screen.getByText("BluePrism 🔷");
    expect(heading).toBeInTheDocument();
  });

  // it("changes the theme when the theme button is clicked", async () => {
  //   cleanup();
  //   const setTheme = jest.spyOn(Header.prototype, "setTheme");
  //   render(<Header />);
  //   const user = userEvent.setup();
  //   const btn = screen.getByRole("button");
  //   await user.click(btn);
  //   expect(setTheme).toBeCalled();
  // });
});
