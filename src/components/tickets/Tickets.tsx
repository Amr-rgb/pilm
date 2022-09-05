import { useNavigate } from "react-router-dom";
import { HiChevronLeft } from "react-icons/hi";
import { useSelector } from "react-redux";
import { ticketsSelector } from "../../app/ticketsSlice";
import { useEffect, useState } from "react";
import { moviesSelector } from "../../app/moviesSlice";
import { Nav } from "../Nav";

type ticketType = {
  id: string;
  movieId: string;
  seats: {}[];
  dateId: string;
  timeId: string;
  price: string;
};

export const Tickets = () => {
  const navigate = useNavigate();
  const tickets = useSelector(ticketsSelector);

  useEffect(() => {
    window.sessionStorage.clear();
  }, []);

  return (
    <div className="-mb-20">
      <div className="px-4 flex items-center relative">
        <HiChevronLeft
          onClick={() => navigate("/")}
          className="cursor-pointer text-5xl p-3"
        />
        <p className="font-medium absolute left-1/2 -translate-x-1/2">
          My Tickets
        </p>
      </div>

      <div className="px-4 mt-16 space-y-10">
        {tickets.map((ticket: ticketType) => (
          <Ticket key={ticket.id} ticket={ticket} />
        ))}
      </div>

      <Nav />
    </div>
  );
};

export const Ticket = ({ ticket }: { ticket: ticketType }) => {
  const navigate = useNavigate();

  const movies = useSelector(moviesSelector);
  const [ourMovie] = useState(
    movies.find((movie: any) => movie.id === ticket.movieId)
  );
  const [movieDate] = useState(
    ourMovie.dates.find((date: any) => date.id === ticket.dateId).date
  );
  const [movieTime] = useState(
    ourMovie.times.find((time: any) => time.id === ticket.timeId).time
  );

  return (
    <div
      className="cursor-pointer flex items-center space-x-6"
      onClick={() =>
        navigate(`/${ourMovie.title}/select-seats`, { state: ticket })
      }
    >
      <div
        className={`bg-cover bg-center h-24 w-24 rounded-2xl`}
        style={{ backgroundImage: `url(${ourMovie.imgUrl})` }}
      ></div>
      <div className="flex-1 flex justify-between space-x-2">
        <div className="space-y-2">
          <p className="font-medium text-lg">{ourMovie.title}</p>

          <span className="block flex-1 h-[1px] bg-[#333]"></span>

          <div className="text-sm font-medium opacity-80 flex items-center space-x-4">
            <p className="space-x-2">
              <span>{movieDate.day}</span>
              <span>{movieDate.month}</span>
            </p>
            <p className="">{movieTime}</p>
          </div>
        </div>

        <div className="text-sm p-3 rounded-lg flex justify-center items-center bg-orange bg-opacity-30">
          ${ticket.price}
        </div>
      </div>
    </div>
  );
};
