import { useEffect, useState } from "react";
import LoadingCardGrid from "../components/LoadingCardGrid";
import { ISchedule } from "../interfaces/Schedule";
import CardGrid from "../components/CardGrid";
import Error from "../components/Error";
import { useStore } from "../store";
import { shallow } from "zustand/shallow";

export default function Home() {
  const [loading, setLoading] = useState<boolean>(false);
  const { fetchData, logs, schedules, toggleRetired } = useStore(
    (state) => ({
      fetchData: state.fetchData,
      logs: state.logs,
      schedules: state.schedules,
      toggleRetired: state.toggleRetired,
    }),
    shallow
  );

  const getInitData = async () => {
    setLoading(true);
    await fetchData();
    setLoading(false);
  };

  useEffect(() => {
    getInitData();
  }, []);

  return (
    <>
      {loading && <LoadingCardGrid numCards={9} />}
      {schedules.error && <Error errorMsg={schedules.error} />}
      {schedules.isOk && logs.isOk && (
        <CardGrid
          data={schedules.data}
          logs={logs.data}
          toggleRetired={toggleRetired}
        />
      )}
    </>
  );
}
