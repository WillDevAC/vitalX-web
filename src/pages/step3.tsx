import React, { useState } from "react";
import LayoutFragment from "../layout";
import { Flame, HandMetal, HeartPulse, UserRoundCog } from "lucide-react";

const Step3Page: React.FC = () => {
  const [selectedButtons, setSelectedButtons] = useState<string[]>([]);

  const handleButtonClick = (buttonText: string) => {
    if (selectedButtons.includes(buttonText)) {
      setSelectedButtons(selectedButtons.filter((btn) => btn !== buttonText));
    } else {
      setSelectedButtons([...selectedButtons, buttonText]);
    }
  };

  return (
    <LayoutFragment type="first" page="4/26" desc="METAS">
      <h1 className="text-center text-3xl text-gray-50 pr-10 pl-10 font-bold">
        Qual é a sua motivação para se exercitar?
      </h1>
      <div className="flex flex-col items-center pt-5 gap-5 w-full p-7">
        <button
          className={`flex gap-3 items-center text-lg text-white font-medium bg-zinc-800 p-5 w-full rounded-lg h-20 ${
            selectedButtons.includes("Melhorar a sáude") ? "bg-blue-600" : ""
          }`}
          onClick={() => handleButtonClick("Melhorar a sáude")}
        >
          <HeartPulse /> Melhorar a saúde
        </button>
        <button
          className={`flex gap-3 items-center text-lg text-white font-medium bg-zinc-800 p-5 w-full rounded-lg h-20 ${
            selectedButtons.includes("Melhorar a aparência")
              ? "bg-blue-600"
              : ""
          }`}
          onClick={() => handleButtonClick("Melhorar a aparência")}
        >
          <UserRoundCog /> Melhorar a aparência
        </button>
        <button
          className={`flex gap-3 items-center text-lg text-white font-medium bg-zinc-800 p-5 w-full rounded-lg h-20 ${
            selectedButtons.includes("Aumentar a força") ? "bg-blue-600" : ""
          }`}
          onClick={() => handleButtonClick("Aumentar a força")}
        >
          <HandMetal /> Aumentar a força
        </button>
        <button
          className={`flex gap-3 items-center text-lg text-white font-medium bg-zinc-800 p-5 w-full rounded-lg h-20 ${
            selectedButtons.includes("Aumentar a libído") ? "bg-blue-600" : ""
          }`}
          onClick={() => handleButtonClick("Aumentar a libído")}
        >
          <Flame /> Aumentar a libído
        </button>
        <button
          className={`flex mt-10 gap-3 items-center justify-center text-lg text-white font-bold bg-zinc-800 p-5 w-full rounded-lg h-20 ${
            selectedButtons.length === 0 ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={selectedButtons.length === 0}
        >
          CONTINUAR
        </button>
      </div>
    </LayoutFragment>
  );
};

export default Step3Page;
