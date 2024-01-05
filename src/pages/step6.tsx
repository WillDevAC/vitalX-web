import React from "react";
import LayoutFragment from "../layout";
import { useNavigate } from "react-router-dom";

const Step6Page: React.FC = () => {

  const navigate = useNavigate();

  return (
    <LayoutFragment type="first" page="7/26" desc="NIVEL DE PREPARO FÍSICO">
      <h1 className="text-center text-2xl text-gray-50 pr-10 pl-10 font-bold">
        Qual é o seu nível de condicionamento físico?
      </h1>
      <div className="flex flex-col items-center pt-5 gap-5 w-full p-7">
        <button className="flex flex-col text-lg gap-2 text-white font-medium bg-zinc-800 p-5 w-full rounded-lg h-24" onClick={() => navigate('/step7')}>
          Iniciante
          <span className="text-sm text-zinc-400">Começei a treinar a pouco tempo</span>
        </button>
        <button className="flex flex-col text-lg gap-2 text-white font-medium bg-zinc-800 p-5 w-full rounded-lg h-24" onClick={() => navigate('/step7')}>
          Intermediário
          <span className="text-sm text-zinc-400">Eu pratico exercícios de vez em quando</span>
        </button>
        <button className="flex flex-col text-lg gap-2 text-white font-medium bg-zinc-800 p-5 w-full rounded-lg h-24" onClick={() => navigate('/step7')}>
          Avançado
          <span className="text-sm text-zinc-400">Eu treino regurlamente</span>
        </button>
      </div>
    </LayoutFragment>
  );
};

export default Step6Page;
