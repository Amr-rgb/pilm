import { useEffect, useState } from "react";

type SelectSeatsType = {
  seatsInfo: { y: number; x: number }[];
  selectedInfo?: { y: number; x: number }[];
  setSelectedInfo: React.Dispatch<
    React.SetStateAction<
      {
        y: number;
        x: number;
      }[]
    >
  >;
};

type SeatType = {
  ready: boolean;
  value: boolean;
  y: number;
  x: number;
  selectedSeats: { y: number; x: number }[];
  toggleSelected: (y: number, x: number) => void;
};

export const SelectSeats = ({
  seatsInfo,
  selectedInfo,
  setSelectedInfo,
}: SelectSeatsType) => {
  const makeSeats = (seatsInfo: { x: number; y: number }[]) => {
    const seats = [];
    for (let i = 0; i < 12; i++) {
      const row = [];
      const num = i === 0 || i === 5 || i === 6 || i === 11 ? 3 : 4;
      for (let j = 0; j < num; j++) {
        let flag = true;
        seatsInfo.forEach((item) => {
          if (item.y === i && item.x === j) {
            row.push(true);
            flag = false;
          }
        });
        flag && row.push(false);
      }
      seats.push(row);
    }
    return seats;
  };

  const [seats, setSeats] = useState(makeSeats(seatsInfo));
  const [selectedSeats, setSelectedSeats] = useState<
    { y: number; x: number }[]
  >(selectedInfo || []);

  const toggleSelected = (y: number, x: number) => {
    if (selectedSeats.find((item) => item.y === y && item.x === x)) {
      setSelectedSeats((prev) =>
        prev.filter((item) => {
          return JSON.stringify(item) !== JSON.stringify({ y, x });
        })
      );
    } else {
      setSelectedSeats((prev) => [...prev, { y, x }]);
    }
  };

  useEffect(() => {
    setSelectedInfo(selectedSeats);
  }, [selectedSeats]);

  return (
    <div className="flex justify-center space-x-6">
      <div>
        {seats.slice(0, 6).map((item, idx) => {
          return (
            <div key={idx} className="flex justify-end">
              {item.map((it, id) => (
                <Seat
                  key={id}
                  ready={Boolean(selectedInfo)}
                  value={it}
                  y={idx}
                  x={id}
                  selectedSeats={selectedSeats}
                  toggleSelected={toggleSelected}
                />
              ))}
            </div>
          );
        })}
      </div>

      <div>
        {seats.slice(6).map((item, idx) => {
          return (
            <div key={idx} className="flex justify-start">
              {item.map((it, id) => (
                <Seat
                  key={id}
                  ready={Boolean(selectedInfo)}
                  value={it}
                  y={idx + 6}
                  x={id}
                  selectedSeats={selectedSeats}
                  toggleSelected={toggleSelected}
                />
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
};

const Seat = ({
  ready,
  value,
  y,
  x,
  selectedSeats,
  toggleSelected,
}: SeatType) => {
  const [available, setAvailable] = useState(false);
  const [selected, setSelected] = useState(false);

  useEffect(() => {
    setAvailable(value);
    ready &&
      selectedSeats.forEach((item) => {
        if (item.y === y && item.x === x) {
          setSelected(true);
        }
      });
  }, []);

  return (
    <button
      className={`mt-2 ml-1 mr-1 w-8 h-8 rounded-lg`}
      style={{
        background: available ? (selected ? "#fdb33a" : "#fff") : "#333",
      }}
      onClick={() => {
        toggleSelected(y, x);
        setSelected((prev) => !prev);
      }}
      disabled={!available || ready}
    ></button>
  );
};
