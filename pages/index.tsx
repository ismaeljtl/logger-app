import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import LoadingCardGrid from "../components/LoadingCardGrid";
import { ISchedule } from "../interfaces/Schedule";
import CardGrid from "../components/CardGrid";
import Error from "../components/Error";
import { getSchedules, getScheduleLogs } from "../services/fetch";
import { IScheduleLog } from "../interfaces/ScheduleLog";

interface IHomeScheduleResponse {
  isOk: boolean;
  data: ISchedule[] | undefined;
  error: string | undefined;
}

interface IHomeScheduleLogResponse {
  isOk: boolean;
  data: IScheduleLog[] | undefined;
  error: string | undefined;
}

export default function Home() {
  const [data, setData] = useState<IHomeScheduleResponse | undefined>();
  const [logs, setLogs] = useState<IHomeScheduleLogResponse | undefined>();
  const [loading, setLoading] = useState<boolean>(false);

  const fetchCharacters = async () => {
    setLoading(true);
    const res = await Promise.all([getSchedules(), getScheduleLogs()]);
    setData(res[0]);
    setLogs(res[1]);
    setLoading(false);
  };

  useEffect(() => {
    fetchCharacters();
  }, []);

  const toggleRetired = (item: ISchedule) => {
    const stateData = data!.data!;
    const newData = stateData.map((fd) => {
      if (fd.id === item.id) {
        return { ...fd, isRetired: !fd.isRetired };
      } else {
        return fd;
      }
    });
    setData({ ...data!, data: newData });
  };

  return (
    <>
      {data && data.error && <Error errorMsg={data.error} />}
      {loading && <LoadingCardGrid numCards={9} />}
      {data && data.isOk && logs && logs.isOk && (
        <CardGrid
          data={data.data}
          logs={logs.data}
          toggleRetired={toggleRetired}
        />
      )}
    </>
  );
}
