import { FiSearch } from "react-icons/fi";

export const Header = () => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="space-y-2">
          <p className="text-xs opacity-80">Welcome {"Amr"}</p>
          <p className="font-medium text-sm">
            Let&#39;s relax and watch a movie !
          </p>
        </div>

        <div className="bg-[url(https://images.unsplash.com/photo-1640960543409-dbe56ccc30e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80)] bg-cover bg-center w-12 h-12 rounded-full"></div>
      </div>

      <div className="mt-12 bg-[#333] flex items-center p-4 space-x-4 rounded-full">
        <FiSearch className="text-3xl opacity-40" />
        <input
          type="text"
          className="w-full bg-transparent outline-none placeholder:text-white placeholder:opacity-40"
          placeholder="Search"
        />
      </div>
    </div>
  );
};
