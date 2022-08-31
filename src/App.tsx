import { Route, Routes } from "react-router-dom";
import { Home } from "./components/home/Home";
import { MovieDetails } from "./components/home/MovieDetails";

function App() {
  return (
    <div className="App py-10 pb-20">
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="/:movieTitle" element={<MovieDetails />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
