import { ISchedule } from "./Schedule";

export interface IHomeScheduleResponse {
  isOk: boolean;
  data: ISchedule[] | undefined;
  error: string | undefined;
}
