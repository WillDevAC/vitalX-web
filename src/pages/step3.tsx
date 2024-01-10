import React, { useState } from "react";
import LayoutFragment from "../layout";
import {
  Flame,
  HandMetal,
  HeartPulse,
  PersonStanding,
  UserRoundCog,
} from "lucide-react";
import { useHistory } from "react-router-dom";

const Step3Page: React.FC = () => {
  const [selectedButtons, setSelectedButtons] = useState<string[]>([]);

  const handleButtonClick = (buttonText: string) => {
    if (selectedButtons.includes(buttonText)) {
      setSelectedButtons(selectedButtons.filter((btn) => btn !== buttonText));
    } else {
      setSelectedButtons([...selectedButtons, buttonText]);
    }
  };

  const history = useHistory();

  return (
    <LayoutFragment type="first" page="4/16" desc="METAS">
      <h1 className="text-center text-3xl text-gray-50 pr-10 pl-10 font-bold">
        Qual é a sua motivação para se exercitar?
      </h1>
      <div className="flex flex-col items-center pt-5 gap-5 w-full p-7">
        <button
          className={`flex gap-3 items-center text-lg text-white font-medium  p-5 w-full rounded-lg h-20 ${
            selectedButtons.includes("Melhorar a sáude")
              ? "bg-blue-400"
              : "bg-zinc-800"
          }`}
          onClick={() => handleButtonClick("Melhorar a sáude")}
        >
          <HeartPulse /> Melhorar a saúde
        </button>
        <button
          className={`flex gap-3 items-center text-lg text-white font-medium  p-5 w-full rounded-lg h-20 ${
            selectedButtons.includes("Melhorar a aparência")
              ? "bg-blue-400"
              : "bg-zinc-800"
          }`}
          onClick={() => handleButtonClick("Melhorar a aparência")}
        >
          <UserRoundCog /> Melhorar a aparência
        </button>
        <button
          className={`flex gap-3 items-center text-lg text-white font-medium  p-5 w-full rounded-lg h-20 ${
            selectedButtons.includes("Aumentar a força")
              ? "bg-blue-400"
              : "bg-zinc-800"
          }`}
          onClick={() => handleButtonClick("Aumentar a força")}
        >
          <HandMetal /> Aumentar a força
        </button>
        <button
          className={`flex gap-3 items-center text-lg text-white font-medium  p-5 w-full rounded-lg h-20 ${
            selectedButtons.includes("Aumentar a libído")
              ? "bg-blue-400"
              : "bg-zinc-800"
          }`}
          onClick={() => handleButtonClick("Aumentar a libído")}
        >
          <Flame /> Aumentar a libído
        </button>
        <button
          className={`flex gap-3 items-center text-lg text-white font-medium  p-5 w-full rounded-lg h-20 ${
            selectedButtons.includes("Perder peso")
              ? "bg-blue-400"
              : "bg-zinc-800"
          }`}
          onClick={() => handleButtonClick("Perder peso")}
        >
          <PersonStanding /> Perder peso
        </button>
        <button
          className={`flex mt-10 gap-3 items-center justify-center text-lg text-white font-bold bg-zinc-800 p-5 w-full rounded-lg h-20 ${
            selectedButtons.length === 0 ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={selectedButtons.length === 0}
          onClick={() => history.push("/step4")}
        >
          CONTINUAR
        </button>
      </div>
    </LayoutFragment>
  );
};

export default Step3Page;
