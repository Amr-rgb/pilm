import { useNavigate } from "react-router-dom";
import { MdHomeFilled } from "react-icons/md";
import { BiCompass } from "react-icons/bi";
import { HiTicket } from "react-icons/hi";
import { BsFillPersonFill } from "react-icons/bs";

export const Nav = () => {
  const navigate = useNavigate();

  return (
    <nav className="py-4 px-14 fixed bottom-0 w-screen max-w-[26rem] mx-auto bg-[#111] rounded-3xl">
      <ul className="flex justify-between">
        <li onClick={() => navigate("/")} className="cursor-pointer ">
          <MdHomeFilled className="text-5xl p-[10px]" />
        </li>
        <li className="cursor-pointer opacity-40">
          <BiCompass className="text-5xl p-[10px]" />
        </li>
        <li
          onClick={() => navigate("/my-tickets")}
          className="cursor-pointer opacity-40"
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
