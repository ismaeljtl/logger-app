import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import Card from "../../components/Card";
import scheduleMock from "../../__mocks__/schedule.mock";

const toggleRetired = jest.fn();
const setSelectedItem = jest.fn();

describe("Card Component", () => {
  beforeEach(() => {
    render(
      <Card
        item={scheduleMock[0]}
        setSelectedItem={setSelectedItem}
        toggleRetired={toggleRetired}
      />
    );
  });

  it("renders the heading of the card", () => {
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });

  it("renders the description of the card", () => {
    const description = screen.getByText("mollit dolor");
    expect(description).toBeInTheDocument();
  });

  it("renders the button of the card", () => {
    const link = screen.getByRole("checkbox");
    expect(link).toBeInTheDocument();
  });

  it("toggles the retire button of the card", async () => {
    cleanup();
    const user = userEvent.setup();

    render(
      <Card
        item={scheduleMock[0]}
        setSelectedItem={jest.fn()}
        toggleRetired={toggleRetired}
      />
    );

    const toggle = screen.getByRole("checkbox");
    await user.click(toggle);
    expect(toggleRetired).toBeCalled();
  });

  it("clicks the card and calls the setSelectedItem function", async () => {
    cleanup();
    const user = userEvent.setup();

    render(
      <Card
        item={scheduleMock[0]}
        setSelectedItem={setSelectedItem}
        toggleRetired={toggleRetired}
      />
    );

    const heading = screen.getByRole("heading");
    await user.click(heading);
    expect(setSelectedItem).toBeCalled();
  });
});
