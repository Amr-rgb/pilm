import { Header } from "./Header";
import { Category } from "./Category";
import { Movies } from "./Movies";
import { Nav } from "../Nav";

export const Home = () => {
  return (
    <div>
      <Header />
      <Category />
      <Movies />
      <Nav />
    </div>
  );
};
