import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { moviesSelector } from "../../app/moviesSlice";

type movieType = {
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

export type moviesType = movieType[];

export const Movies = () => {
  const movies: moviesType = useSelector(moviesSelector);

  const navigate = useNavigate();

  const moviesRef = useRef(null);
  const [active, setActive] = useState(Math.floor(movies.length / 2));
  const [prev, setPrev] = useState(Math.floor(movies.length / 2));

  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [startY, setStartY] = useState(0);
  const [leftOrRight, setLeftOrRight] = useState(0);

  const changeMovie = (curr: number) => {
    setActive(curr);
  };

  useEffect(() => {
    if (leftOrRight > 0 && active - 1 >= 0) {
      changeMovie(active - 1);
    }
    if (leftOrRight < 0 && active + 1 <= movies.length - 1) {
      changeMovie(active + 1);
    }
  }, [leftOrRight]);

  return (
    <div className="my-10">
      <p className="font-medium px-4">Showing this month</p>

      <div className="mt-6 h-96 space-x-8 overflow-hidden">
        <div
          ref={moviesRef}
          className={`h-full flex items-end justify-center space-x-8 duration-500`}
          style={{ transform: "translateX(" + (prev - active) * 240 + "px)" }}
          onMouseDown={(e) => {
            setIsDown(true);
            setStartX(e.pageX);
          }}
          onTouchStart={(e) => {
            setIsDown(true);
            setStartX(e.changedTouches[0].pageX);
            setStartY(e.changedTouches[0].pageY);
          }}
          onMouseUp={(e) => {
            setIsDown(false);
            const x = e.pageX - startX;
            setLeftOrRight(x);
          }}
          onTouchEnd={(e) => {
            setIsDown(false);
            const x = e.changedTouches[0].pageX - startX;
            const y = e.changedTouches[0].pageY - startY;
            Math.abs(x) > Math.abs(y) && setLeftOrRight(x);
          }}
        >
          {movies.map((movie, idx) => {
            const classes =
              idx === active
                ? "-translate-y-12"
                : idx > active
                ? "rotate-6 opacity-30"
                : "-rotate-6 opacity-30";
            return (
              <div
                key={movie.id}
                onClick={() => {
                  idx === active
                    ? navigate(`/${movie.title}`)
                    : changeMovie(idx);
                }}
                className={`cursor-pointer select-none w-52 min-w-[13rem] h-[20.625rem] rounded-3xl bg-cover bg-center duration-500 ${classes}`}
                style={{ backgroundImage: `url(${movie.imgUrl})` }}
              ></div>
            );
          })}
        </div>
      </div>

      <div className="flex items-center justify-center space-x-3 overflow-hidden">
        {movies.map((movie, idx) => (
          <div
            key={movie.id}
            className={`h-3 rounded-full origin-center duration-500 ${
              idx === active ? "w-8 bg-orange" : "w-3 bg-[#333]"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};
