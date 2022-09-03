import { useLocation, useNavigate } from "react-router-dom";
import { MdHomeFilled } from "react-icons/md";
import { BiCompass } from "react-icons/bi";
import { HiTicket } from "react-icons/hi";
import { BsFillPersonFill } from "react-icons/bs";
import { useEffect, useState } from "react";

export const Nav = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [active, setActive] = useState(
    location.pathname === "/" ? "home" : "tickets"
  );

  useEffect(() => {
    setActive(location.pathname === "/" ? "home" : "tickets");
  }, [location]);

  return (
    <nav className="py-4 px-14 fixed bottom-0 w-screen max-w-[26rem] mx-auto bg-[#111] rounded-3xl">
      <ul className="flex justify-between">
        <li
          onClick={() => navigate("/")}
          className={`cursor-pointer ${
            active === "home" ? "opacity-100" : "opacity-40"
          }`}
        >
          <MdHomeFilled className="text-5xl p-[10px]" />
        </li>
        <li className="cursor-pointer opacity-40">
          <BiCompass className="text-5xl p-[10px]" />
        </li>
        <li
          onClick={() => navigate("/my-tickets")}
          className={`cursor-pointer ${
            active === "tickets" ? "opacity-100" : "opacity-40"
          }`}
        >
          <HiTicket className="text-5xl p-[10px]" />
        </li>
        <li className="cursor-pointer opacity-40">
          <BsFillPersonFill className="text-5xl p-[10px]" />
        </li>
      </ul>
    </nav>
  );
};
