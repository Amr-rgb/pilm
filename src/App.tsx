import { Route, Routes } from "react-router-dom";
import { Home } from "./components/home/Home";
import { MovieDetails } from "./components/home/MovieDetails";
import { Seats } from "./components/home/Seats";
import { Tickets } from "./components/tickets/Tickets";

function App() {
  return (
    <div className="App py-10 pb-20">
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="/:movieTitle">
            <Route index element={<MovieDetails />} />
            <Route path="select-seats" element={<Seats />} />
          </Route>
        </Route>
        <Route path="/my-tickets" element={<Tickets />} />
      </Routes>
    </div>
  );
}

export default App;
