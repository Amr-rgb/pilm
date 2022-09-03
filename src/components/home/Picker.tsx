import { useEffect, useState } from "react";

type PickerType = {
  dates: { id: string; date: { month: string; day: number } }[];
  times: { id: string; time: string }[];
  selectedInfo?: { dateId: string; timeId: string };
  setSelectedDateInfo: React.Dispatch<React.SetStateAction<string | undefined>>;
  setSelectedTimeInfo: React.Dispatch<React.SetStateAction<string | undefined>>;
};

export const Picker = ({
  dates,
  times,
  selectedInfo,
  setSelectedDateInfo,
  setSelectedTimeInfo,
}: PickerType) => {
  const [activeDate, setActiveDate] = useState(
    selectedInfo
      ? dates.findIndex((d) => d.id === selectedInfo?.dateId)
      : Math.floor(dates.length / 2)
  );
  const [activeTime, setActiveTime] = useState(
    selectedInfo
      ? times.findIndex((t) => t.id === selectedInfo?.timeId)
      : Math.floor(times.length / 2)
  );

  useEffect(() => {
    setSelectedDateInfo(dates[activeDate].id);
  }, [activeDate]);

  useEffect(() => {
    setSelectedTimeInfo(times[activeTime].id);
  }, [activeTime]);

  return (
    <div className="my-12 w-full flex flex-col items-center overflow-hidden relative">
      <span className="picker-overlay z-10 absolute inset-0 pointer-events-none"></span>
      <div
        className="flex space-x-4 duration-500"
        style={{
          transform:
            "translateX(" +
            -(activeDate - (dates.length - 1) / 2) * 4.5 +
            "rem)",
        }}
      >
        {dates.map((item, idx) => (
          <DateCard
            key={item.id}
            date={item.date}
            isReady={selectedInfo}
            isActive={activeDate === idx}
            setActive={() => setActiveDate(idx)}
          />
        ))}
      </div>

      <div
        className="mt-8 flex space-x-4 duration-500"
        style={{
          transform:
            "translateX(" + -(activeTime - (times.length - 1) / 2) * 6 + "rem)",
        }}
      >
        {times.map((item, idx) => (
          <TimeCard
            key={item.id}
            time={item.time}
            isReady={selectedInfo}
            isActive={activeTime === idx}
            setActive={() => setActiveTime(idx)}
          />
        ))}
      </div>
    </div>
  );
};

const DateCard = ({
  date,
  isReady,
  isActive,
  setActive,
}: {
  date: { month: string; day: number };
  isReady: any;
  isActive?: boolean;
  setActive: () => void;
}) => {
  return (
    <button
      className={`p-2 rounded-full space-y-2 text-center duration-500 ${
        isActive ? "bg-orange" : "bg-[#444]"
      }`}
      onClick={setActive}
      disabled={isReady}
    >
      <p className="mt-1 font-medium">{date.month}</p>
      <div
        className={`font-semibold w-10 h-10 rounded-full flex items-center justify-center duration-500 ${
          isActive ? "bg-white text-black" : ""
        }`}
      >
        <p>{date.day}</p>
      </div>
    </button>
  );
};

const TimeCard = ({
  time,
  isReady,
  isActive,
  setActive,
}: {
  time: string;
  isReady: any;
  isActive?: boolean;
  setActive: () => void;
}) => {
  return (
    <button
      className={`p-4 w-20 rounded-xl space-y-2 text-center border-2 duration-500 ${
        isActive ? "border-orange text-orange" : "border-[#444]"
      }`}
      onClick={setActive}
      disabled={isReady}
    >
      <p className="mt-1 font-medium text-sm">{time}</p>
    </button>
  );
};
