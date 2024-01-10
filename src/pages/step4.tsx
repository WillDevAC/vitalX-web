import React, { useState } from "react";
import LayoutFragment from "../layout";
import { useHistory } from "react-router-dom";

const Step4Page: React.FC = () => {
  const [selectedButtons, setSelectedButtons] = useState<string[]>([]);

  const handleButtonClick = (buttonText: string) => {
    if (selectedButtons.includes(buttonText)) {
      setSelectedButtons(selectedButtons.filter((btn) => btn !== buttonText));
    } else {
      setSelectedButtons([...selectedButtons, buttonText]);
    }
  };

  const isButtonSelected = (buttonText: string) => {
    return selectedButtons.includes(buttonText);
  };

  const history = useHistory();

  return (
    <LayoutFragment type="first" page="5/16S" desc="METAS">
      <h1 className="text-center text-3xl text-gray-50 pr-10 pl-10 font-bold">
        Escolha suas zonas alvos
      </h1>
      <div className="flex items-center justify-center w-full relative mt-10">
        <img src="zonasalvo.webp" alt="Zonas Alvo" />
        <button
          className={`absolute top-0 left-0 ml-7 p-3  text-white font-medium text-sm rounded-lg ${
            isButtonSelected("BRAÇOS") ? "bg-blue-400" : "bg-zinc-800"
          }`}
          onClick={() => handleButtonClick("BRAÇOS")}
        >
          BRAÇOS
        </button>
        <button
          className={`absolute top-0 right-0 mr-7 p-3  text-white font-medium text-sm rounded-lg ${
            isButtonSelected("PEITORAL") ? "bg-blue-400" : "bg-zinc-800"
          }`}
          onClick={() => handleButtonClick("PEITORAL")}
        >
          PEITORAL
        </button>
        <button
          className={`absolute bottom-0 left-0 ml-7 p-3  text-white font-medium text-sm rounded-lg ${
            isButtonSelected("ABDÔMEM") ? "bg-blue-400" : "bg-zinc-800"
          }`}
          onClick={() => handleButtonClick("ABDÔMEM")}
        >
          ABDÔMEM
        </button>
        <button
          className={`absolute bottom-0 right-0 mr-7 p-3  text-white font-medium text-sm rounded-lg ${
            isButtonSelected("PERNAS") ? "bg-blue-400" : "bg-zinc-800"
          }`}
          onClick={() => handleButtonClick("PERNAS")}
        >
          PERNAS
        </button>
      </div>
      <div className="m-5">
        <button
          className={`flex mt-10 gap-3 items-center justify-center text-lg text-white font-bold bg-zinc-800 p-5 w-full rounded-lg h-20 ${
            selectedButtons.length === 0 ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={selectedButtons.length === 0}
          onClick={() => history.push("/step5")}
        >
          CONTINUAR
        </button>
      </div>
    </LayoutFragment>
  );
};

export default Step4Page;
