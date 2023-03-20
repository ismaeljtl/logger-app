import { IScheduleLog } from "./ScheduleLog";

export interface IHomeScheduleLogResponse {
  isOk: boolean;
  data: IScheduleLog[] | undefined;
  error: string | undefined;
}
