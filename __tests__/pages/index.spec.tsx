import { act, cleanup, render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "../../pages/index";
import userEvent from "@testing-library/user-event";

describe("404 Page Component", () => {
  beforeEach(() => {
    render(<Home />);
  });

  it("toggles the value of a card", () => {
    act(async () => {
      const user = userEvent.setup();
      const toggleRetiredMock = jest.fn();

      const toggle = await waitFor(() => screen.getByRole("checkbox"));
      await user.click(toggle);
      expect(toggleRetiredMock).toHaveBeenCalled();
    });
  });
});
