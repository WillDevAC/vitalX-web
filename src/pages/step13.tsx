import React, { useState } from "react";
import LayoutFragment from "../layout";
import { useHistory } from "react-router-dom";

const Step13Page: React.FC = () => {
  const history = useHistory();
  const [height, setHeight] = useState<number | string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(0, parseFloat(e.target.value));
    setHeight(value);
  };

  const handleContinueClick = (heightValue: string) => {
    localStorage.setItem("altura", heightValue);
    history.push("/step14");
  };

  return (
    <LayoutFragment type="first" page="14/16" desc="DETALHES PESSOAIS">
      <h1 className="text-center text-2xl text-gray-50 pr-10 pl-10 font-bold">
        Qual a sua altura?
      </h1>
      <div className="flex flex-col items-center justify-center pt-5 gap-5 w-full p-7">
        <div className="flex gap-2">
          <input
            type="number"
            placeholder="0"
            value={height}
            onChange={handleInputChange}
            className="text-white w-24 font-bold text-5xl border-none bg-transparent flex justify-end items-center"
            max={999}
            style={{ textAlign: "right", outline: "none" }}
          />
          <span className="text-white flex flex-col items-center">CM</span>
        </div>
      </div>
      <div className="bg-zinc-800 m-5 p-5 rounded-lg flex flex-col gap-2">
        <p className="text-white font-bold text-sm">Calculando seu índice de massa corporal</p>
        <span className="text-zinc-200 font-light text-xs">
          O IMC é amplamente utilizado como fator de risco para o
          desenvolvimento ou prevalência de diversos problemas de saúde.
        </span>
      </div>
      <div className="m-5">
        <button
          onClick={() => handleContinueClick(height.toString())}
          disabled={!height}
          className={`flex mt-10 gap-3 items-center justify-center text-lg text-white font-bold bg-zinc-800 p-5 w-full rounded-lg h-20 ${
            !height ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          CONTINUAR
        </button>
      </div>
    </LayoutFragment>
  );
};

export default Step13Page;
