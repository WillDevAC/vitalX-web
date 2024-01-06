import React from "react";
import LayoutFragment from "../layout";
import { useHistory } from "react-router-dom";

const Step9Page: React.FC = () => {

  const history = useHistory();

  return (
    <LayoutFragment type="first" page="10/26" desc="ESTILO DE VIDA">
      <h1 className="text-center text-2xl text-gray-50 pr-10 pl-10 font-bold">
        Como você se sente entre as refeições?
      </h1>
      <div className="flex flex-col items-center pt-5 gap-5 w-full p-7">
        <button className="flex justify-between  items-center text-lg text-white font-medium bg-zinc-800 p-5 w-full rounded-lg h-20" onClick={() => history.push('/step10')}>
          Eu fico com sono quando estou com fome
        </button>
        <button className="flex justify-between  items-center text-lg text-white font-medium bg-zinc-800 p-5 w-full rounded-lg h-20" onClick={() => history.push('/step10')}>
          Eu me sinto cansado depois de comer
        </button>
        <button className="flex justify-between  items-center text-lg text-white font-medium bg-zinc-800 p-5 w-full rounded-lg h-20" onClick={() => history.push('/step10')}>
          Eu estou sempre me sentindo energizado
        </button>
      </div>
    </LayoutFragment>
  );
};

export default Step9Page;
