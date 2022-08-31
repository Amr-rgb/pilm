import { useParams } from "react-router-dom";
import { HiChevronLeft } from "react-icons/hi";

export const MovieDetails = () => {
  const { movieId } = useParams();

  return (
    <div className="px-4">
      <div className="flex items-center relative">
        <HiChevronLeft className="text-xl" />
        <p className="font-medium absolute left-1/2 -translate-x-1/2">
          Movie Details
        </p>
      </div>
    </div>
  );
};
