import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addTicket } from "../../app/ticketsSlice";
import { Picker } from "./Picker";
import { SelectSeats } from "./SelectSeats";

type SeatsSelectionType = {
  movie: {
    id: string;
    title: string;
    genre: string;
    duration: string;
    rating: string;
    imgUrl: string;
    description: string;
    dates: { id: string; date: { month: string; day: number } }[];
    times: { id: string; time: string }[];
    seats: { y: number; x: number }[];
  };
};

const TICKET_PRICE = 10.5;

export const SeatsSelection = ({ movie }: SeatsSelectionType) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [selectedSeatsInfo, setSelectedSeatsInfo] = useState<
    { y: number; x: number }[]
  >([]);
  const [selectedDateInfo, setSelectedDateInfo] = useState<string>();
  const [selectedTimeInfo, setSelectedTimeInfo] = useState<string>();
  const [price, setPrice] = useState("0.00");

  useEffect(() => {
    setPrice((selectedSeatsInfo.length * TICKET_PRICE).toFixed(2));
  }, [selectedSeatsInfo]);

  const clickHandler = () => {
    dispatch(
      addTicket({
        movieId: movie.id,
        seats: selectedSeatsInfo,
        dateId: selectedDateInfo,
        timeId: selectedTimeInfo,
        price: price,
      })
    );

    navigate("/my-tickets");
  };

  return (
    <div className="mt-10">
      <div className="mb-12 w-[90%] h-9 mx-auto overflow-hidden flex justify-center">
        <div className="min-w-[150vw] h-[150vw] border-4 border-orange rounded-full"></div>
      </div>

      <SelectSeats
        seatsInfo={movie.seats}
        setSelectedInfo={setSelectedSeatsInfo}
      />

      <div className="mt-10 flex space-x-4 justify-center">
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 rounded-full bg-white"></div>
          <p className="text-xs">Available</p>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 rounded-full bg-[#fdb33a]"></div>
          <p className="text-xs">Selected</p>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 rounded-full bg-[#333]"></div>
          <p className="text-xs">Reserved</p>
        </div>
      </div>

      <div className="mt-16 py-10 rounded-t-[2.5rem] bg-[#333] flex flex-col items-center">
        <p className="font-semibold text-lg">Select Date and Time</p>
        <Picker
          dates={movie.dates}
          times={movie.times}
          setSelectedDateInfo={setSelectedDateInfo}
          setSelectedTimeInfo={setSelectedTimeInfo}
        />

        <div className="px-8 w-full flex items-center justify-between">
          <div>
            <p className="text-sm opacity-40">Total Price</p>
            <p className="font-semibold text-xl">${price}</p>
          </div>
          <button
            className="py-[25px] px-[50px] rounded-full bg-orange font-semibold text-black z-10"
            onClick={clickHandler}
            disabled={Number(price) === 0}
          >
            Book Ticket
          </button>
        </div>
      </div>
    </div>
  );
};
