import { useNavigate, useParams } from "react-router-dom";
import { HiChevronLeft } from "react-icons/hi";
import { HiVideoCamera } from "react-icons/hi";
import { MdAccessTimeFilled } from "react-icons/md";
import { AiTwotoneStar } from "react-icons/ai";
import { ReactNode, useState } from "react";

export const MovieDetails = () => {
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

  const { movieTitle } = useParams();
  const [ourMovie, setOurMovie] = useState(
    movies.find((m) => m.title == movieTitle)
  );

  const iconClasses = "mb-3 text-3xl";

  return (
    <div className="px-4 pb-32">
      <div className="flex items-center relative">
        <HiChevronLeft onClick={() => navigate(-1)} className="text-5xl p-3" />
        <p className="font-medium absolute left-1/2 -translate-x-1/2">
          Movie Details
        </p>
      </div>

      <div className="mt-16 flex items-start space-x-4">
        <div
          className={`rounded-3xl bg-[url(${ourMovie?.imgUrl})] bg-cover bg-center flex-1 h-[24.5rem]`}
        ></div>

        <div className="space-y-4">
          <Card
            Icon={<HiVideoCamera className={iconClasses} />}
            title="Genre"
            value={ourMovie?.genre}
          />
          <Card
            Icon={<MdAccessTimeFilled className={iconClasses} />}
            title="Duration"
            value={ourMovie?.duration}
          />
          <Card
            Icon={<AiTwotoneStar className={iconClasses} />}
            title="Rating"
            value={`${ourMovie?.rating} / 10`}
          />
        </div>
      </div>

      <div className="mt-10 space-y-8">
        <p className="font-semibold text-2xl">{ourMovie?.title}</p>
        <span className="block w-full h-[1px] bg-[#333]"></span>
        <div>
          <p className="font-medium text-lg">Synopsis</p>
          <p className="mt-6 opacity-60 leading-loose">
            {ourMovie?.description}
          </p>
        </div>
      </div>

      <div className=" flex flex-col items-center fixed bottom-0 left-0 right-0 py-8">
        <div className="btn-div absolute bottom-0 w-full py-8 pt-72 pointer-events-none"></div>
        <button className="py-[25px] px-[50px] rounded-full bg-orange font-semibold text-black z-10">
          Get Reservation
        </button>
      </div>
    </div>
  );
};

export const Card = ({
  Icon,
  title,
  value,
}: {
  Icon: ReactNode;
  title: string;
  value?: string;
}) => {
  return (
    <div className="py-5 px-8 border border-[#333] rounded-3xl flex flex-col items-center">
      {Icon}
      <p className="text-xs mb-1 opacity-40">{title}</p>
      <p className="font-semibold text-xs">{value}</p>
    </div>
  );
};
