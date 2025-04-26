import { useState } from "react";

export default function TabSelector({ tabs }) {
  const tabs = ["CAI", "Dev41", "Recruit41"];
  const [selected, setSelected] = useState("Dev41");

  const getSliderPosition = (tab) => {
    switch (tab) {
      case "CAI":
        return "left-[4px]";
      case "Dev41":
        return "left-[calc(50%-57px)]";
      case "Recruit41":
        return "left-[calc(100%-118px)]";
      default:
        return "";
    }
  };

  return (
    <div className="relative w-[428px] h-[42px] bg-[#F3F3F3] rounded-[11px] flex items-center justify-between px-[4px]">
      {/* Slider */}
      <div
        className={`absolute top-[4px] h-[34px] w-[114px] rounded-[10px] bg-white transition-all duration-500 ease-in-out
        shadow-[0px_1px_1px_-1px_rgba(0,0,0,0.22),0px_2px_2px_-2px_rgba(0,0,0,0.19),0px_10px_10px_-4px_rgba(0,0,0,0.08)]
        ${getSliderPosition(selected)}`}
      />

      {/* Tabs */}
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setSelected(tab)}
          className={`z-10 w-[114px] h-[34px] flex items-center justify-center font-medium rounded-[10px] cursor-pointer
            transition-colors duration-300 ${
              selected === tab ? "text-black" : "text-gray-400"
            }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
