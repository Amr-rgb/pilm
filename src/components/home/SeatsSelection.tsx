import { SelectSeats } from "./SelectSeats";

export const SeatsSelection = () => {
  return (
    <div className="my-10">
      <div className="mb-12 w-[90%] h-9 mx-auto overflow-hidden flex justify-center">
        <div className="min-w-[150vw] h-[150vw] border-4 border-orange rounded-full"></div>
      </div>

      <SelectSeats />

      <div className="mt-10 flex space-x-4 justify-center">
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 rounded-full bg-white"></div>
          <p className="text-xs">Available</p>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 rounded-full bg-[#fdb33a]"></div>
          <p className="text-xs">Selected</p>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 rounded-full bg-[#333]"></div>
          <p className="text-xs">Reserved</p>
        </div>
      </div>
    </div>
  );
};
