import { IHomeScheduleLogResponse } from "~/interfaces/HomeScheduleLog";
import { IHomeScheduleResponse } from "~/interfaces/HomeScheduleResponse";

export const getSchedules = async (): Promise<IHomeScheduleResponse> => {
  try {
    if (!process.env.NEXT_PUBLIC_API_URL)
      return {
        isOk: false,
        data: undefined,
        error: "API URL or API Key not configured.",
      };
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/schedules`);
    const data = await res.json();
    return {
      isOk: true,
      data: data,
      error: undefined,
    };
  } catch (error) {
    return {
      isOk: false,
      data: undefined,
      error:
        "There has been an error when trying to get the data. Please, try again.",
    };
  }
};

export const getScheduleLogs = async (): Promise<IHomeScheduleLogResponse> => {
  try {
    if (!process.env.NEXT_PUBLIC_API_URL)
      return {
        isOk: false,
        data: undefined,
        error: "API URL or API Key not configured.",
      };
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/scheduleLogs`);
    const data = await res.json();
    return {
      isOk: true,
      data: data,
      error: undefined,
    };
  } catch (error) {
    return {
      isOk: false,
      data: undefined,
      error:
        "There has been an error when trying to get the data. Please, try again.",
    };
  }
};
