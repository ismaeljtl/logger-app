import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import CardGrid from "../../components/CardGrid";
import scheduleMock from "../../__mocks__/schedule.mock";
import scheduleLogsMock from "../../__mocks__/scheduleLogs.mock";

const toggleRetired = jest.fn();

describe("Card Grid Component", () => {
  beforeEach(() => {
    render(
      <CardGrid
        data={scheduleMock}
        logs={scheduleLogsMock}
        toggleRetired={toggleRetired}
      />
    );
  });

  it("renders the heading of the component", () => {
    const heading = screen.getAllByRole("heading");
    expect(heading[0].textContent).toContain("Schedules");
  });

  it("filters by name", async () => {
    cleanup();
    const user = userEvent.setup();

    render(
      <CardGrid
        data={scheduleMock}
        logs={scheduleLogsMock}
        toggleRetired={toggleRetired}
      />
    );

    const input = screen.getByRole("textbox");
    await user.type(input, "0.08");
    const card = screen.getAllByRole("checkbox");
    expect(card.length).toBe(1);
  });

  it("filters by Retired status", async () => {
    const length = scheduleMock.filter((item) => {
      return item.isRetired === true;
    }).length;

    cleanup();
    const user = userEvent.setup();

    render(
      <CardGrid
        data={scheduleMock}
        logs={scheduleLogsMock}
        toggleRetired={toggleRetired}
      />
    );

    const select = screen.getByRole("combobox");
    await user.selectOptions(select, "Retired");
    const card = screen.getAllByRole("checkbox");
    expect(card.length).toBe(length);
  });

  it("filters by Unretired status", async () => {
    const length = scheduleMock.filter((item) => {
      return item.isRetired === false;
    }).length;

    cleanup();
    const user = userEvent.setup();

    render(
      <CardGrid
        data={scheduleMock}
        logs={scheduleLogsMock}
        toggleRetired={toggleRetired}
      />
    );

    const select = screen.getByRole("combobox");
    await user.selectOptions(select, "Unretired");
    const card = screen.getAllByRole("checkbox");
    expect(card.length).toBe(length);
  });

  it("shows all elements if filtered by status All", async () => {
    cleanup();
    const user = userEvent.setup();

    render(
      <CardGrid
        data={scheduleMock}
        logs={scheduleLogsMock}
        toggleRetired={toggleRetired}
      />
    );

    const select = screen.getByRole("combobox");
    await user.selectOptions(select, "Unretired");
    await user.selectOptions(select, "All");
    const card = screen.getAllByRole("checkbox");
    expect(card.length).toBe(scheduleMock.length);
  });
});
