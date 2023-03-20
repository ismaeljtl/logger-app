import React, { useEffect, useState } from "react";
import { ISchedule } from "../interfaces/Schedule";
import { IScheduleLog } from "../interfaces/ScheduleLog";
import Card from "./Card";
import Content from "./Content";

const CardGrid: React.FC<{
  data: ISchedule[] | undefined;
  logs: IScheduleLog[] | undefined;
  toggleRetired: (item: ISchedule) => void;
}> = ({ data, logs, toggleRetired }) => {
  const [filteredData, setFilteredData] = useState(data);
  const [selectedItem, setSelectedItem] = useState<number>();
  const [filteredLogs, setFilteredLogs] = useState<
    IScheduleLog[] | undefined
  >();
  const allCategories = ["All", "Retired", "Unretired"];
  const [category, setCategory] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (logs) {
      setFilteredLogs(
        logs.filter((log: IScheduleLog) => log.scheduleId === selectedItem)
      );
    }
  }, [logs, selectedItem]);

  useEffect(() => {
    let newData = data;

    if (category) {
      newData = filterByStatus(category, newData!);
    }

    if (search) {
      newData = filterByName(search, newData!);
    }

    setFilteredData(newData);
  }, [data, category, search]);

  const filterByName = (value: string, arr: ISchedule[]) => {
    setSearch(value);
    const filtered = arr
      .filter((item: ISchedule) => {
        return item.name.toLowerCase().includes(value.toLowerCase());
      })
      .sort();
    return filtered;
  };

  const filterByStatus = (value: string, arr: ISchedule[]) => {
    setCategory(value);
    if (value === "All") {
      return arr;
    } else {
      if (value === "Retired") {
        const filtered = arr
          .filter((item: ISchedule) => {
            return item.isRetired === true;
          })
          .sort();
        return filtered;
      } else {
        const filtered = arr
          .filter((item: ISchedule) => {
            return item.isRetired === false;
          })
          .sort();
        return filtered;
      }
    }
  };

  return (
    <>
      <div className="flex justify-between">
        <div className="prose mb-8">
          <h1 className="text-lg mr-2 md:mr-0 md:text-3xl">
            {filteredData!.length} Schedules
          </h1>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <input
            type="text"
            placeholder="Filter results"
            className="input w-full max-w-xs"
            onChange={(e: React.FormEvent<HTMLInputElement>) =>
              setSearch(e.currentTarget.value)
            }
          />
          <select
            className="select select-bordered w-full max-w-xs"
            onChange={(e: React.FormEvent<HTMLSelectElement>) =>
              setCategory(e.currentTarget.value)
            }
          >
            <option disabled value="defaultValue" hidden>
              Filter
            </option>
            {allCategories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="grid-cols-1 grid-rows-2 md:grid md:gap-8 md:grid-cols-3 md:grid-rows-1 h-[calc(100%-64px)]">
        <aside className="flex flex-row overflow-x-auto snap-x md:overflow-scroll md:pr-4 md:flex-col">
          {filteredData &&
            filteredData.map((item) => (
              <Card
                key={item.id}
                item={item}
                setSelectedItem={setSelectedItem}
                toggleRetired={toggleRetired}
              />
            ))}
        </aside>
        <Content logs={filteredLogs} />
      </div>
    </>
  );
};

export default CardGrid;
