import React from "react";
import LayoutFragment from "../layout";
import { useHistory } from "react-router-dom";

const Step11Page: React.FC = () => {
  const history = useHistory();

  return (
    <LayoutFragment type="first" page="12/16" desc="ESTILO DE VIDA">
      <h1 className="text-center text-2xl text-gray-50 pr-10 pl-10 font-bold">
        Qual seu consumo de água diariamente?
      </h1>
      <div className="flex flex-col items-center pt-5 gap-5 w-full p-7">
        <button
          className="flex justify-between  items-center text-lg text-white font-medium bg-zinc-800 p-5 w-full rounded-lg h-20"
          onClick={() => history.push("/step12")}
        >
          Entre 300 ML à 1 litro
        </button>
        <button
          className="flex justify-between  items-center text-lg text-white font-medium bg-zinc-800 p-5 w-full rounded-lg h-20"
          onClick={() => history.push("/step12")}
        >
          Entre 1 litro e 2 litros
        </button>
        <button
          className="flex justify-between  items-center text-lg text-white font-medium bg-zinc-800 p-5 w-full rounded-lg h-20"
          onClick={() => history.push("/step12")}
        >
          Entre 2 litros à 3 litros
        </button>
        <button
          className="flex justify-between  items-center text-lg text-white font-medium bg-zinc-800 p-5 w-full rounded-lg h-20"
          onClick={() => history.push("/step12")}
        >
          Mais de 3 litros
        </button>
        <button
          className="flex justify-between  items-center text-lg text-white font-medium bg-zinc-800 p-5 w-full rounded-lg h-20"
          onClick={() => history.push("/step12")}
        >
          Eu bebo apenas chá, café ou refrigerante
        </button>
      </div>
    </LayoutFragment>
  );
};

export default Step11Page;
