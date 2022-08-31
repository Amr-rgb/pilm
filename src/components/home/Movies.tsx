import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Movies = () => {
  const movies = [
    {
      id: "1",
      title: "Minions: The Rise Of Gru",
      genre: "Comedy",
      duration: "1h 20m",
      rating: "8.7",
      imgUrl: "/films/minions.jpg",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quod et tempora nulla ad eos adipisci! Similique adipisci ea libero, magni harum vitae delectus accusamus omnis tempora temporibus esse asperiores deserunt ab dolore reiciendis aspernatur expedita labore maiores ad exercitationem nisi, molestias tenetur? Eos asperiores iure libero unde obcaecati incidunt adipisci molestiae ex. Distinctio, sapiente animi quod, incidunt sed quasi consequuntur temporibus quia, alias a laborum. Tenetur suscipit quas vero recusandae repudiandae sunt voluptate animi est reprehenderit, officia repellendus eveniet cum voluptatum rerum aspernatur. Ipsa laboriosam animi quas doloribus id cumque sapiente recusandae accusamus! Deleniti accusantium nam consectetur ex molestias?",
    },
    {
      id: "2",
      title: "Minions: The Rise Of Gru",
      genre: "Comedy",
      duration: "1h 20m",
      rating: "8.7",
      imgUrl: "/films/minions.jpg",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quod et tempora nulla ad eos adipisci! Similique adipisci ea libero, magni harum vitae delectus accusamus omnis tempora temporibus esse asperiores deserunt ab dolore reiciendis aspernatur expedita labore maiores ad exercitationem nisi, molestias tenetur? Eos asperiores iure libero unde obcaecati incidunt adipisci molestiae ex. Distinctio, sapiente animi quod, incidunt sed quasi consequuntur temporibus quia, alias a laborum. Tenetur suscipit quas vero recusandae repudiandae sunt voluptate animi est reprehenderit, officia repellendus eveniet cum voluptatum rerum aspernatur. Ipsa laboriosam animi quas doloribus id cumque sapiente recusandae accusamus! Deleniti accusantium nam consectetur ex molestias?",
    },
    {
      id: "3",
      title: "Minions: The Rise Of Gru",
      genre: "Comedy",
      duration: "1h 20m",
      rating: "8.7",
      imgUrl: "/films/minions.jpg",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quod et tempora nulla ad eos adipisci! Similique adipisci ea libero, magni harum vitae delectus accusamus omnis tempora temporibus esse asperiores deserunt ab dolore reiciendis aspernatur expedita labore maiores ad exercitationem nisi, molestias tenetur? Eos asperiores iure libero unde obcaecati incidunt adipisci molestiae ex. Distinctio, sapiente animi quod, incidunt sed quasi consequuntur temporibus quia, alias a laborum. Tenetur suscipit quas vero recusandae repudiandae sunt voluptate animi est reprehenderit, officia repellendus eveniet cum voluptatum rerum aspernatur. Ipsa laboriosam animi quas doloribus id cumque sapiente recusandae accusamus! Deleniti accusantium nam consectetur ex molestias?",
    },
    {
      id: "4",
      title: "Minions: The Rise Of Gru",
      genre: "Comedy",
      duration: "1h 20m",
      rating: "8.7",
      imgUrl: "/films/minions.jpg",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quod et tempora nulla ad eos adipisci! Similique adipisci ea libero, magni harum vitae delectus accusamus omnis tempora temporibus esse asperiores deserunt ab dolore reiciendis aspernatur expedita labore maiores ad exercitationem nisi, molestias tenetur? Eos asperiores iure libero unde obcaecati incidunt adipisci molestiae ex. Distinctio, sapiente animi quod, incidunt sed quasi consequuntur temporibus quia, alias a laborum. Tenetur suscipit quas vero recusandae repudiandae sunt voluptate animi est reprehenderit, officia repellendus eveniet cum voluptatum rerum aspernatur. Ipsa laboriosam animi quas doloribus id cumque sapiente recusandae accusamus! Deleniti accusantium nam consectetur ex molestias?",
    },
    {
      id: "5",
      title: "Minions: The Rise Of Gru",
      genre: "Comedy",
      duration: "1h 20m",
      rating: "8.7",
      imgUrl: "/films/minions.jpg",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quod et tempora nulla ad eos adipisci! Similique adipisci ea libero, magni harum vitae delectus accusamus omnis tempora temporibus esse asperiores deserunt ab dolore reiciendis aspernatur expedita labore maiores ad exercitationem nisi, molestias tenetur? Eos asperiores iure libero unde obcaecati incidunt adipisci molestiae ex. Distinctio, sapiente animi quod, incidunt sed quasi consequuntur temporibus quia, alias a laborum. Tenetur suscipit quas vero recusandae repudiandae sunt voluptate animi est reprehenderit, officia repellendus eveniet cum voluptatum rerum aspernatur. Ipsa laboriosam animi quas doloribus id cumque sapiente recusandae accusamus! Deleniti accusantium nam consectetur ex molestias?",
    },
  ];

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
