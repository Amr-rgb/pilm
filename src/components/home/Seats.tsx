import { useNavigate, useParams } from "react-router-dom";
import { HiChevronLeft } from "react-icons/hi";
import { SeatsSelection } from "./SeatsSelection";

export const Seats = () => {
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
      seats: [
        { y: 1, x: 3 },
        { y: 2, x: 3 },
        { y: 3, x: 0 },
        { y: 3, x: 3 },
        { y: 4, x: 1 },
        { y: 4, x: 3 },
        { y: 6, x: 0 },
        { y: 6, x: 1 },
        { y: 6, x: 2 },
        { y: 8, x: 2 },
        { y: 8, x: 3 },
        { y: 9, x: 3 },
        { y: 10, x: 1 },
        { y: 11, x: 0 },
      ],
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
      seats: [
        { y: 0, x: 2 },
        { y: 1, x: 1 },
        { y: 1, x: 3 },
        { y: 2, x: 3 },
        { y: 3, x: 3 },
        { y: 7, x: 0 },
        { y: 7, x: 1 },
        { y: 8, x: 0 },
        { y: 10, x: 0 },
        { y: 10, x: 2 },
        { y: 10, x: 3 },
        { y: 11, x: 1 },
      ],
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
      seats: [
        { y: 2, x: 0 },
        { y: 2, x: 1 },
        { y: 2, x: 2 },
        { y: 3, x: 1 },
        { y: 4, x: 1 },
        { y: 5, x: 1 },
        { y: 7, x: 2 },
        { y: 8, x: 3 },
        { y: 9, x: 3 },
        { y: 11, x: 2 },
      ],
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
      seats: [
        { y: 1, x: 3 },
        { y: 2, x: 1 },
        { y: 2, x: 2 },
        { y: 3, x: 0 },
        { y: 3, x: 3 },
        { y: 4, x: 2 },
        { y: 5, x: 0 },
        { y: 5, x: 2 },
        { y: 7, x: 2 },
        { y: 8, x: 0 },
        { y: 8, x: 3 },
        { y: 10, x: 0 },
        { y: 10, x: 1 },
        { y: 10, x: 3 },
        { y: 11, x: 1 },
        { y: 11, x: 2 },
      ],
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
      seats: [
        { y: 0, x: 2 },
        { y: 1, x: 2 },
        { y: 3, x: 0 },
        { y: 3, x: 1 },
        { y: 4, x: 0 },
        { y: 5, x: 0 },
        { y: 8, x: 3 },
        { y: 9, x: 3 },
        { y: 10, x: 2 },
        { y: 11, x: 0 },
        { y: 11, x: 1 },
      ],
    },
  ];
  const navigate = useNavigate();
  const { movieTitle } = useParams();
  const ourMovie = movies.find((movie) => movie.title === movieTitle);

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

      {ourMovie && <SeatsSelection movie={ourMovie} />}
    </div>
  );
};
