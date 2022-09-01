import { useEffect, useState } from "react";

export const Picker = () => {
  const dates = [
    {
      id: "1",
      date: { month: "Mar", day: 6 },
    },
    {
      id: "2",
      date: { month: "Mar", day: 7 },
    },
    {
      id: "3",
      date: { month: "Mar", day: 8 },
    },
    {
      id: "4",
      date: { month: "Mar", day: 9 },
    },
    {
      id: "5",
      date: { month: "Mar", day: 10 },
    },
    {
      id: "6",
      date: { month: "Mar", day: 11 },
    },
    {
      id: "7",
      date: { month: "Mar", day: 12 },
    },
  ];
  const times = [
    { id: "1", time: "06:00" },
    { id: "2", time: "07:30" },
    { id: "3", time: "08:00" },
    { id: "4", time: "09:30" },
    { id: "5", time: "10:30" },
    { id: "6", time: "12:00" },
    { id: "7", time: "13:00" },
    { id: "8", time: "14:30" },
    { id: "9", time: "15:30" },
  ];

  const [activeDate, setActiveDate] = useState(Math.floor(dates.length / 2));
  const [activeDateId, setActiveDateId] = useState<string>();
  const [activeTime, setActiveTime] = useState(Math.floor(times.length / 2));
  const [activeTimeId, setActiveTimeId] = useState<string>();

  useEffect(() => {
    setActiveDateId(dates[activeDate].id);
  }, [activeDate]);

  useEffect(() => {
    setActiveTimeId(times[activeTime].id);
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
  isActive,
  setActive,
}: {
  date: { month: string; day: number };
  isActive?: boolean;
  setActive: () => void;
}) => {
  return (
    <button
      className={`p-2 rounded-full space-y-2 text-center duration-500 ${
        isActive ? "bg-orange" : "bg-[#444]"
      }`}
      onClick={setActive}
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
  isActive,
  setActive,
}: {
  time: string;
  isActive?: boolean;
  setActive: () => void;
}) => {
  return (
    <button
      className={`p-4 w-20 rounded-xl space-y-2 text-center border-2 duration-500 ${
        isActive ? "border-orange text-orange" : "border-[#444]"
      }`}
      onClick={setActive}
    >
      <p className="mt-1 font-medium text-sm">{time}</p>
    </button>
  );
};
