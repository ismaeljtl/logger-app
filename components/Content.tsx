import Image from "next/image";
import React, { useState } from "react";
import { IScheduleLog } from "../interfaces/ScheduleLog";

const Content: React.FC<{
  logs: IScheduleLog[] | undefined;
}> = ({ logs }) => {
  return (
    <main className="col-span-2 bg-base-100 rounded-2xl p-8 overflow-scroll h-[calc(100%-230px)] md:h-full">
      {logs?.length ? (
        <div className="divide-y">
          {logs.map((item: IScheduleLog) => (
            <div key={item.id} className="py-4">
              <h1 className="text-2xl mb-1 font-medium">{item.serverName}</h1>
              <div className="flex justify-between">
                <p>
                  {new Date(item.startTime).toUTCString()} -{" "}
                  {new Date(item.endTime).toUTCString()}
                </p>
                <b
                  className={`badge border-none py-3 px-4 bg-blue-500 text-blue-50`}
                >
                  {item.status}
                </b>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="h-full flex flex-col justify-center items-center content-center">
          <Image
            src="/img/404.png"
            alt="No schedule selected."
            width={1040 * 0.5}
            height={559 * 0.5}
          />
          <h3 className="text-2xl mt-2">
            Looks like you haven&apos;t selected a Schedule 🤔 Select one to see
            it&apos;s info!
          </h3>
        </div>
      )}
    </main>
  );
};

export default Content;
