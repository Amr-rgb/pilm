import { useNavigate, useParams } from "react-router-dom";
import { HiChevronLeft } from "react-icons/hi";
import { SeatsSelection } from "./SeatsSelection";

export const Seats = () => {
  const navigate = useNavigate();
  const { movieTitle } = useParams();

  return (
    <div className="-mb-20">
      <div className="px-4 flex items-center relative">
        <HiChevronLeft
          onClick={() => navigate(-1)}
          className="cursor-pointer text-5xl p-3"
        />
        <p className="font-medium absolute left-1/2 -translate-x-1/2">
          Select Seats
        </p>
      </div>

      <SeatsSelection />
    </div>
  );
};
