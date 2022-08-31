import { useEffect, useRef, useState } from "react";

export const Movies = () => {
  const movies = [
    {
      id: "1",
      imgUrl: "/films/minions.jpg",
    },
    {
      id: "2",
      imgUrl: "/films/minions.jpg",
    },
    {
      id: "3",
      imgUrl: "/films/minions.jpg",
    },
    {
      id: "4",
      imgUrl: "/films/minions.jpg",
    },
    {
      id: "5",
      imgUrl: "/films/minions.jpg",
    },
  ];

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
                onClick={() => changeMovie(idx)}
                className={`cursor-pointer select-none w-52 min-w-[13rem] h-[20.625rem] rounded-3xl bg-[url(/films/minions.jpg)] bg-cover bg-center duration-500 ${classes}`}
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
