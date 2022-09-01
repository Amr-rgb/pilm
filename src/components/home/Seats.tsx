import { useNavigate, useParams } from "react-router-dom";
import { HiChevronLeft } from "react-icons/hi";
import { SelectSeats } from "./SelectSeats";

export const Seats = () => {
  const navigate = useNavigate();
  const { movieTitle } = useParams();

  return (
    <div className="px-4 pb-32">
      <div className="flex items-center relative">
        <HiChevronLeft
          onClick={() => navigate(-1)}
          className="cursor-pointer text-5xl p-3"
        />
        <p className="font-medium absolute left-1/2 -translate-x-1/2">
          Select Seats
        </p>
      </div>

      <SelectSeats />
    </div>
  );
};
