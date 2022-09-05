import { createSlice, nanoid } from "@reduxjs/toolkit";

type ticketType = {
  seats: {}[];
  date: string;
  time: string;
  price: string;
};

const initialState: { tickets: ticketType[] } = {
  tickets: JSON.parse(window.sessionStorage.getItem("tickets")!) || [],
};

export const ticketsSlice = createSlice({
  name: "tickets",
  initialState,
  reducers: {
    addTicket: (state, action) => {
      state.tickets.push({
        id: nanoid(),
        ...action.payload,
      });
    },
  },
});

export const ticketsSelector = (state: any) => state.tickets.tickets;

export const { addTicket } = ticketsSlice.actions;

export default ticketsSlice.reducer;
