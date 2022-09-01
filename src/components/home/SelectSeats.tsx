import { useEffect, useState } from "react";

export const SeatsSelect = ({
  seatsInfo,
  selectedInfo,
}: {
  seatsInfo?: { y: number; x: number }[];
  selectedInfo?: { y: number; x: number }[];
}) => {
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

  const [seats, setSeats] = useState(
    seatsInfo
      ? makeSeats(seatsInfo)
      : [
          [false, false, false],
          [false, false, false, false],
          [false, false, false, false],
          [false, false, false, false],
          [false, false, false, false],
          [false, false, false],
          [false, false, false],
          [false, false, false, false],
          [false, false, false, false],
          [false, false, false, false],
          [false, false, false, false],
          [false, false, false],
        ]
  );
  const [availableSeats, setAvailableSeats] = useState<
    { y: number; x: number }[]
  >([]);
  const [selectedSeats, setSelectedSeats] = useState<
    { y: number; x: number }[]
  >(selectedInfo || []);

  const plusSeat = (y: number, x: number) => {
    setAvailableSeats((prev) => [...prev, { y, x }]);
  };

  const toggleSelected = (y: number, x: number) => {
    let flag = false;
    const newArr = selectedSeats
      .map((item) => {
        if (item.y === y && item.x === x) {
          flag = true;
          return;
        } else return item;
      })
      .filter((i) => i);
    setSelectedSeats((prev) => (flag ? newArr : [...prev, { y, x }]));
  };

  return (
    <div className="flex justify-center space-x-6">
      <div>
        {seats.slice(0, 6).map((item, idx) => {
          return (
            <div key={idx} className="flex justify-end">
              {item.map((it, id) => (
                <Seat
                  key={id}
                  ready={Boolean(seatsInfo)}
                  value={it}
                  y={idx}
                  x={id}
                  selectedSeats={selectedSeats}
                  plusSeat={plusSeat}
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
                  ready={Boolean(seatsInfo)}
                  value={it}
                  y={idx + 6}
                  x={id}
                  selectedSeats={selectedSeats}
                  plusSeat={plusSeat}
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
  plusSeat,
  toggleSelected,
}: {
  ready: boolean;
  value: boolean;
  y: number;
  x: number;
  selectedSeats: { y: number; x: number }[];
  plusSeat: (y: number, x: number) => void;
  toggleSelected: (y: number, x: number) => void;
}) => {
  const [available, setAvailable] = useState(false);
  const [selected, setSelected] = useState(false);

  const randomColor = () => {
    const arr = [1, 2, 3, 4, 5, 6, 7];
    const color = arr[Math.floor(Math.random() * arr.length)];
    if (color === 1) {
      setAvailable(true);
    }
  };

  useEffect(() => {
    if (ready) {
      setAvailable(value);
    } else {
      !available && randomColor();
      available && plusSeat(y, x);
    }
  }, [available]);

  useEffect(() => {
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
