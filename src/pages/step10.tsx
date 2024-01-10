import React from "react";
import LayoutFragment from "../layout";
import { useHistory } from "react-router-dom";

const Step10Page: React.FC = () => {

  const history = useHistory();

  return (
    <LayoutFragment type="first" page="11/16" desc="ESTILO DE VIDA">
      <h1 className="text-center text-2xl text-gray-50 pr-10 pl-10 font-bold">
        Quantas horas por noite você dorme?
      </h1>
      <div className="flex flex-col items-center pt-5 gap-5 w-full p-7">
        <button className="flex justify-between  items-center text-lg text-white font-medium bg-zinc-800 p-5 w-full rounded-lg h-20" onClick={() => history.push('/step11')}>
          Menos de 5 horas
        </button>
        <button className="flex justify-between  items-center text-lg text-white font-medium bg-zinc-800 p-5 w-full rounded-lg h-20" onClick={() => history.push('/step11')}>
          Entre 5 e 6 horas
        </button>
        <button className="flex justify-between  items-center text-lg text-white font-medium bg-zinc-800 p-5 w-full rounded-lg h-20" onClick={() => history.push('/step11')}>
          Entre 7 e 8 horas
        </button>
        <button className="flex justify-between  items-center text-lg text-white font-medium bg-zinc-800 p-5 w-full rounded-lg h-20" onClick={() => history.push('/step11')}>
          Mais de 8 horas
        </button>
      </div>
    </LayoutFragment>
  );
};

export default Step10Page;
