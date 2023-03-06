export interface IScheduleLog {
  id: number;
  startTime: string;
  endTime: string;
  status: Status | string;
  serverName: string;
  scheduleId: number;
}

export enum Status {
  Completed = "Completed",
  Exception = "Exception",
  Pending = "Pending",
  Running = "Running",
  Terminated = "Terminated",
}
