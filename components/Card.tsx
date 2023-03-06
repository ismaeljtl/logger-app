import React from "react";
import { ISchedule } from "../interfaces/Schedule";

const Card: React.FC<{
  item: ISchedule;
  setSelectedItem: React.Dispatch<React.SetStateAction<number | undefined>>;
  toggleRetired: (item: ISchedule) => void;
}> = ({ item, setSelectedItem, toggleRetired }) => {
  return (
    <div className="card card-compact snap-center mb-6 w-full bg-base-100 shadow-lg mx-2 md:mx-0">
      <div className="card-body prose">
        <div className="flex items-center">
          <input
            onChange={() => toggleRetired(item)}
            type="checkbox"
            className="toggle toggle-primary toggle-sm"
            checked={item.isRetired}
          />
          <span className="ml-1 text-lg">Retired</span>
        </div>
        <h1
          className="card-title capitalize cursor-pointer hover:opacity-50 text-sm md:text-base lg:text-2xl"
          onClick={() => setSelectedItem(item.id)}
        >
          {item.name}
        </h1>
        <p className="capitalize m-0">{item.description}</p>
      </div>
    </div>
  );
};

export default Card;
