import React, { useState } from "react";
import LayoutFragment from "../layout";
import { useHistory } from "react-router-dom";

const Step14Page: React.FC = () => {
  const history = useHistory();
  const [weight, setWeight] = useState<number | string>("");
  const [bmi, setBMI] = useState<number | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(0, parseFloat(e.target.value));
    setWeight(value);

    const heightInMetersString = localStorage.getItem("altura");
    if (heightInMetersString) {
      const heightInMeters = parseFloat(heightInMetersString);
      if (!isNaN(heightInMeters) && heightInMeters > 0) {
        const bmiValue =
          value / ((heightInMeters / 100) * (heightInMeters / 100)); // Convert height to meters
        setBMI(bmiValue);
      } else {
        setBMI(null);
      }
    } else {
      setBMI(null);
    }
  };

  const handleContinueClick = (weightValue: string) => {
    localStorage.setItem("peso", weightValue);
    history.push("/step15");
  };

  return (
    <LayoutFragment type="first" page="15/16" desc="DETALHES PESSOAIS">
      <h1 className="text-center text-2xl text-gray-50 pr-10 pl-10 font-bold">
        Digite seu peso atual?
      </h1>
      <div className="flex flex-col items-center justify-center pt-5 gap-5 w-full p-7">
        <div className="flex gap-2">
          <input
            type="number"
            placeholder="0"
            value={weight}
            onChange={handleInputChange}
            className="text-white w-24 font-bold text-5xl border-none bg-transparent flex justify-end items-center"
            max={999}
            style={{ textAlign: "right", outline: "none" }}
          />
          <span className="text-white flex flex-col items-center">KG</span>
        </div>
      </div>
      {weight !== "" && bmi !== null && bmi !== 0 && !isNaN(bmi) && (
        <>
          <div
            className={`m-5 p-5 rounded-lg flex flex-col gap-2 ${
              bmi < 18.5
                ? "bg-yellow-700" // Below weight
                : bmi < 24.9
                ? "bg-green-900" // Normal weight
                : bmi < 29.9
                ? "bg-orange-700" // Overweight
                : "bg-red-600" // Obesity
            }`}
          >
            <p className="text-white font-bold text-sm">
              Seu IMC é {bmi.toFixed(1)}, o que é considerado{" "}
              {bmi < 18.5
                ? "abaixo do peso"
                : bmi < 24.9
                ? "normal"
                : bmi < 29.9
                ? "sobrepeso"
                : "obesidade"}
            </p>
            <span className="text-zinc-200 font-light text-xs">
              {bmi < 18.5
                ? "Você está abaixo do peso. Consulte um profissional de saúde para orientação."
                : bmi < 24.9
                ? "Você está mantendo um peso considerado normal. Continue com seus hábitos saudáveis."
                : bmi < 29.9
                ? "Você está com sobrepeso. Considere ajustar sua dieta e praticar exercícios físicos."
                : "Você está na faixa de obesidade. Recomenda-se buscar orientação profissional para melhorar sua saúde."}
            </span>
          </div>
        </>
      )}
      <div className="m-5">
        <button
          onClick={() => handleContinueClick(weight.toString())}
          disabled={!weight}
          className={`flex mt-10 gap-3 items-center justify-center text-lg text-white font-bold bg-zinc-800 p-5 w-full rounded-lg h-20 ${
            !weight ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          CONTINUAR
        </button>
      </div>
    </LayoutFragment>
  );
};

export default Step14Page;
