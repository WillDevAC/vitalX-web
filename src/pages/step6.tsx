import React from "react";
import LayoutFragment from "../layout";
import { useHistory } from "react-router-dom";

const Step6Page: React.FC = () => {

  const history = useHistory();

  return (
    <LayoutFragment type="first" page="7/16" desc="NIVEL DE PREPARO FÍSICO">
      <h1 className="text-center text-2xl text-gray-50 pr-10 pl-10 font-bold">
        Qual é o seu nível de condicionamento físico?
      </h1>
      <div className="flex flex-col items-center pt-5 gap-5 w-full p-7">
        <button className="flex flex-col text-lg gap-2 text-white font-medium bg-zinc-800 p-5 w-full rounded-lg h-24" onClick={() => history.push('/step7')}>
          Iniciante
          <span className="text-sm text-zinc-400">Começei a treinar há pouco tempo</span>
        </button>
        <button className="flex flex-col text-lg gap-2 text-white font-medium bg-zinc-800 p-5 w-full rounded-lg h-24" onClick={() => history.push('/step7')}>
          Intermediário
          <span className="text-sm text-zinc-400">Treino regurlamente 2 a 3x por semana</span>
        </button>
        <button className="flex flex-col text-lg gap-2 text-white font-medium bg-zinc-800 p-5 w-full rounded-lg h-24" onClick={() => history.push('/step7')}>
          Avançado
          <span className="text-sm text-zinc-400">Treino todos os dias 4 a 6x por semana</span>
        </button>
        <button className="flex flex-col text-lg gap-2 text-white font-medium bg-zinc-800 p-5 w-full rounded-lg h-24" onClick={() => history.push('/step7')}>
          Não treino
          <span className="text-sm text-zinc-400">Já treinei mas parei ou nunca treinei</span>
        </button>
      </div>
    </LayoutFragment>
  );
};

export default Step6Page;
