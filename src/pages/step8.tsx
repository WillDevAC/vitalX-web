import React from "react";
import LayoutFragment from "../layout";
import { useNavigate } from "react-router-dom";

const Step8Page: React.FC = () => {

  const navigate = useNavigate();

  return (
    <LayoutFragment type="first" page="9/26" desc="NIVEL DE PREPARO FÍSICO">
      <h1 className="text-center text-2xl text-gray-50 pr-10 pl-10 font-bold">
        Quanto você anda diariamente?
      </h1>
      <div className="flex flex-col items-center pt-5 gap-5 w-full p-7">
        <button className="flex justify-between  items-center text-lg text-white font-medium bg-zinc-800 p-5 w-full rounded-lg h-20" onClick={() => navigate('/step9')}>
          Menos de uma hora
        </button>
        <button className="flex justify-between  items-center text-lg text-white font-medium bg-zinc-800 p-5 w-full rounded-lg h-20" onClick={() => navigate('/step9')}>
          De 1 a 2 horas
        </button>
        <button className="flex justify-between  items-center text-lg text-white font-medium bg-zinc-800 p-5 w-full rounded-lg h-20" onClick={() => navigate('/step9')}>
          Mais de 2 horas
        </button>
      </div>
    </LayoutFragment>
  );
};

export default Step8Page;
