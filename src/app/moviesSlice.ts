import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "1",
    title: "DC League of Super-Pets",
    genre: "Adventure",
    duration: "1h 45m",
    rating: "7.5",
    imgUrl: "/films/dc-league.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quod et tempora nulla ad eos adipisci! Similique adipisci ea libero, magni harum vitae delectus accusamus omnis tempora temporibus esse asperiores deserunt ab dolore reiciendis aspernatur expedita labore maiores ad exercitationem nisi, molestias tenetur? Eos asperiores iure libero unde obcaecati incidunt adipisci molestiae ex. Distinctio, sapiente animi quod, incidunt sed quasi consequuntur temporibus quia, alias a laborum. Tenetur suscipit quas vero recusandae repudiandae sunt voluptate animi est reprehenderit, officia repellendus eveniet cum voluptatum rerum aspernatur. Ipsa laboriosam animi quas doloribus id cumque sapiente recusandae accusamus! Deleniti accusantium nam consectetur ex molestias?",
    dates: [
      {
        id: "1",
        date: { month: "Mar", day: 6 },
      },
      {
        id: "2",
        date: { month: "Mar", day: 7 },
      },
      {
        id: "3",
        date: { month: "Mar", day: 8 },
      },
      {
        id: "4",
        date: { month: "Mar", day: 9 },
      },
      {
        id: "5",
        date: { month: "Mar", day: 10 },
      },
      {
        id: "6",
        date: { month: "Mar", day: 11 },
      },
      {
        id: "7",
        date: { month: "Mar", day: 12 },
      },
    ],
    times: [
      { id: "1", time: "06:00" },
      { id: "2", time: "07:30" },
      { id: "3", time: "08:00" },
      { id: "4", time: "09:30" },
      { id: "5", time: "10:30" },
      { id: "6", time: "12:00" },
      { id: "7", time: "13:00" },
      { id: "8", time: "14:30" },
      { id: "9", time: "15:30" },
    ],
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
    title: "Luck",
    genre: "Comedy",
    duration: "1h 45m",
    rating: "6.3",
    imgUrl: "/films/luck.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quod et tempora nulla ad eos adipisci! Similique adipisci ea libero, magni harum vitae delectus accusamus omnis tempora temporibus esse asperiores deserunt ab dolore reiciendis aspernatur expedita labore maiores ad exercitationem nisi, molestias tenetur? Eos asperiores iure libero unde obcaecati incidunt adipisci molestiae ex. Distinctio, sapiente animi quod, incidunt sed quasi consequuntur temporibus quia, alias a laborum. Tenetur suscipit quas vero recusandae repudiandae sunt voluptate animi est reprehenderit, officia repellendus eveniet cum voluptatum rerum aspernatur. Ipsa laboriosam animi quas doloribus id cumque sapiente recusandae accusamus! Deleniti accusantium nam consectetur ex molestias?",
    dates: [
      {
        id: "1",
        date: { month: "Mar", day: 6 },
      },
      {
        id: "2",
        date: { month: "Mar", day: 7 },
      },
      {
        id: "3",
        date: { month: "Mar", day: 8 },
      },
      {
        id: "4",
        date: { month: "Mar", day: 9 },
      },
      {
        id: "5",
        date: { month: "Mar", day: 10 },
      },
      {
        id: "6",
        date: { month: "Mar", day: 11 },
      },
      {
        id: "7",
        date: { month: "Mar", day: 12 },
      },
    ],
    times: [
      { id: "1", time: "06:00" },
      { id: "2", time: "07:30" },
      { id: "3", time: "08:00" },
      { id: "4", time: "09:30" },
      { id: "5", time: "10:30" },
      { id: "6", time: "12:00" },
      { id: "7", time: "13:00" },
      { id: "8", time: "14:30" },
      { id: "9", time: "15:30" },
    ],
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
    duration: "1h 27m",
    rating: "6.6",
    imgUrl: "/films/minions.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quod et tempora nulla ad eos adipisci! Similique adipisci ea libero, magni harum vitae delectus accusamus omnis tempora temporibus esse asperiores deserunt ab dolore reiciendis aspernatur expedita labore maiores ad exercitationem nisi, molestias tenetur? Eos asperiores iure libero unde obcaecati incidunt adipisci molestiae ex. Distinctio, sapiente animi quod, incidunt sed quasi consequuntur temporibus quia, alias a laborum. Tenetur suscipit quas vero recusandae repudiandae sunt voluptate animi est reprehenderit, officia repellendus eveniet cum voluptatum rerum aspernatur. Ipsa laboriosam animi quas doloribus id cumque sapiente recusandae accusamus! Deleniti accusantium nam consectetur ex molestias?",
    dates: [
      {
        id: "1",
        date: { month: "Mar", day: 6 },
      },
      {
        id: "2",
        date: { month: "Mar", day: 7 },
      },
      {
        id: "3",
        date: { month: "Mar", day: 8 },
      },
      {
        id: "4",
        date: { month: "Mar", day: 9 },
      },
      {
        id: "5",
        date: { month: "Mar", day: 10 },
      },
      {
        id: "6",
        date: { month: "Mar", day: 11 },
      },
      {
        id: "7",
        date: { month: "Mar", day: 12 },
      },
    ],
    times: [
      { id: "1", time: "06:00" },
      { id: "2", time: "07:30" },
      { id: "3", time: "08:00" },
      { id: "4", time: "09:30" },
      { id: "5", time: "10:30" },
      { id: "6", time: "12:00" },
      { id: "7", time: "13:00" },
      { id: "8", time: "14:30" },
      { id: "9", time: "15:30" },
    ],
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
    title: "The Sea Beast",
    genre: "Comedy",
    duration: "1h 55m",
    rating: "7.1",
    imgUrl: "/films/sea-beast.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quod et tempora nulla ad eos adipisci! Similique adipisci ea libero, magni harum vitae delectus accusamus omnis tempora temporibus esse asperiores deserunt ab dolore reiciendis aspernatur expedita labore maiores ad exercitationem nisi, molestias tenetur? Eos asperiores iure libero unde obcaecati incidunt adipisci molestiae ex. Distinctio, sapiente animi quod, incidunt sed quasi consequuntur temporibus quia, alias a laborum. Tenetur suscipit quas vero recusandae repudiandae sunt voluptate animi est reprehenderit, officia repellendus eveniet cum voluptatum rerum aspernatur. Ipsa laboriosam animi quas doloribus id cumque sapiente recusandae accusamus! Deleniti accusantium nam consectetur ex molestias?",
    dates: [
      {
        id: "1",
        date: { month: "Mar", day: 6 },
      },
      {
        id: "2",
        date: { month: "Mar", day: 7 },
      },
      {
        id: "3",
        date: { month: "Mar", day: 8 },
      },
      {
        id: "4",
        date: { month: "Mar", day: 9 },
      },
      {
        id: "5",
        date: { month: "Mar", day: 10 },
      },
      {
        id: "6",
        date: { month: "Mar", day: 11 },
      },
      {
        id: "7",
        date: { month: "Mar", day: 12 },
      },
    ],
    times: [
      { id: "1", time: "06:00" },
      { id: "2", time: "07:30" },
      { id: "3", time: "08:00" },
      { id: "4", time: "09:30" },
      { id: "5", time: "10:30" },
      { id: "6", time: "12:00" },
      { id: "7", time: "13:00" },
      { id: "8", time: "14:30" },
      { id: "9", time: "15:30" },
    ],
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
    title: "The Bad Guys",
    genre: "Adventure",
    duration: "1h 40m",
    rating: "6.8",
    imgUrl: "/films/bad-guys.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quod et tempora nulla ad eos adipisci! Similique adipisci ea libero, magni harum vitae delectus accusamus omnis tempora temporibus esse asperiores deserunt ab dolore reiciendis aspernatur expedita labore maiores ad exercitationem nisi, molestias tenetur? Eos asperiores iure libero unde obcaecati incidunt adipisci molestiae ex. Distinctio, sapiente animi quod, incidunt sed quasi consequuntur temporibus quia, alias a laborum. Tenetur suscipit quas vero recusandae repudiandae sunt voluptate animi est reprehenderit, officia repellendus eveniet cum voluptatum rerum aspernatur. Ipsa laboriosam animi quas doloribus id cumque sapiente recusandae accusamus! Deleniti accusantium nam consectetur ex molestias?",
    dates: [
      {
        id: "1",
        date: { month: "Mar", day: 6 },
      },
      {
        id: "2",
        date: { month: "Mar", day: 7 },
      },
      {
        id: "3",
        date: { month: "Mar", day: 8 },
      },
      {
        id: "4",
        date: { month: "Mar", day: 9 },
      },
      {
        id: "5",
        date: { month: "Mar", day: 10 },
      },
      {
        id: "6",
        date: { month: "Mar", day: 11 },
      },
      {
        id: "7",
        date: { month: "Mar", day: 12 },
      },
    ],
    times: [
      { id: "1", time: "06:00" },
      { id: "2", time: "07:30" },
      { id: "3", time: "08:00" },
      { id: "4", time: "09:30" },
      { id: "5", time: "10:30" },
      { id: "6", time: "12:00" },
      { id: "7", time: "13:00" },
      { id: "8", time: "14:30" },
      { id: "9", time: "15:30" },
    ],
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

export const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    editSeats: (state, action) => {
      const movie = state.find((m) => m.id === action.payload.movieId);
      for (let i = movie!.seats.length - 1; i >= 0; i--) {
        if (action.payload.seats.includes(JSON.stringify(movie!.seats[i]))) {
          movie!.seats.splice(i, 1);
        }
      }
    },
  },
});

export const moviesSelector = (state: any) => state.movies;

export const { editSeats } = moviesSlice.actions;

export default moviesSlice.reducer;
