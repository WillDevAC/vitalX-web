import { LocateFixed } from "lucide-react";
import React from "react";

interface IHeader {
  type: "normal" | "first";
  page: string;
  desc: string;
}

const Header: React.FC<IHeader> = ({ type, page, desc }) => {
  return (
    <>
      {type === "normal" && (
        <div className="flex justify-center items-center h-14 md:justify-between md:pl-60 bg-zinc-800">
          <img src="logo.png" alt="Website Logo VitalX" className="max-w-36" />
        </div>
      )}

      {type === "first" && (
        <div className="flex flex-col items-center h-auto p-3 bg-zinc-800">
          <span className="font-light text-zinc-400 text-sm">Passo {page}</span>
          <p className=" flex items-center gap-2 text-white font-bold text-md">
            <LocateFixed size={20} /> {desc}
          </p>
        </div>
      )}
    </>
  );
};

export default Header;
