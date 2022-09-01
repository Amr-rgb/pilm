import { Picker } from "./Picker";
import { SelectSeats } from "./SelectSeats";

export const SeatsSelection = () => {
  return (
    <div className="mt-10">
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

      <div className="mt-16 py-10 rounded-t-[2.5rem] bg-[#333] flex flex-col items-center">
        <p className="font-semibold text-lg">Select Date and Time</p>
        <Picker />

        <div className="px-8 w-full flex items-center justify-between">
          <div>
            <p className="text-sm opacity-40">Total Price</p>
            <p className="font-semibold text-xl">$43.55</p>
          </div>
          <button className="py-[25px] px-[50px] rounded-full bg-orange font-semibold text-black z-10">
            Book Ticket
          </button>
        </div>
      </div>
    </div>
  );
};
