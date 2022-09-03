import { useNavigate } from "react-router-dom";
import { HiChevronLeft } from "react-icons/hi";
import { useSelector } from "react-redux";
import { ticketsSelector } from "../../app/ticketsSlice";
import { useState } from "react";
import { moviesSelector } from "../../app/moviesSlice";

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

  return (
    <div className="-mb-20 px-4">
      <div className="flex items-center relative">
        <HiChevronLeft
          onClick={() => navigate(-1)}
          className="cursor-pointer text-5xl p-3"
        />
        <p className="font-medium absolute left-1/2 -translate-x-1/2">
          My Tickets
        </p>
      </div>

      <div className="mt-16 space-y-10">
        {tickets.map((ticket: ticketType) => (
          <Ticket key={ticket.id} ticket={ticket} />
        ))}
      </div>
    </div>
  );
};

export const Ticket = ({ ticket }: { ticket: ticketType }) => {
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
    <div className="flex items-center space-x-6">
      <div
        className={`bg-[url(${ourMovie.imgUrl})] bg-cover bg-center h-24 w-24 rounded-2xl`}
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