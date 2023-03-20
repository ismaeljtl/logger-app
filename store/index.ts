import { create } from "zustand";
import { IHomeScheduleLogResponse } from "~/interfaces/HomeScheduleLog";
import { IHomeScheduleResponse } from "~/interfaces/HomeScheduleResponse";
import { ISchedule } from "../interfaces/Schedule";
import { getSchedules, getScheduleLogs } from "../services/fetch";

interface IState {
  schedules: IHomeScheduleResponse;
  logs: IHomeScheduleLogResponse;
  fetchData: () => void;
  toggleRetired: (item: ISchedule) => void;
}

export const useStore = create<IState>()((set, get) => ({
  schedules: { isOk: false, data: [], error: undefined },
  logs: { isOk: false, data: [], error: undefined },
  fetchData: async () => {
    const res = await Promise.all([getSchedules(), getScheduleLogs()]);
    set({ schedules: await res[0] });
    set({ logs: await res[1] });
  },
  toggleRetired: (item: ISchedule) => {
    const stateData = get().schedules;
    const newData = stateData.data!.map((fd) => {
      if (fd.id === item.id) {
        return { ...fd, isRetired: !fd.isRetired };
      } else {
        return fd;
      }
    });
    set({ schedules: { isOk: true, data: newData, error: undefined } });
  },
}));
