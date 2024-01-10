import React from "react";
import LayoutFragment from "../layout";
import { useHistory } from "react-router-dom";

const Step7Page: React.FC = () => {

  const history = useHistory();

  return (
    <LayoutFragment type="first" page="8/16" desc="NIVEL DE PREPARO FÍSICO">
      <h1 className="text-center text-2xl text-gray-50 pr-10 pl-10 font-bold">
        Quantas flexões você consegue fazer?
      </h1>
      <div className="flex flex-col items-center pt-5 gap-5 w-full p-7">
        <button className="flex justify-between  items-center text-lg text-white font-medium bg-zinc-800 p-5 w-full rounded-lg h-20" onClick={() => history.push('/step8')}>
          Menos de 12
        </button>
        <button className="flex justify-between  items-center text-lg text-white font-medium bg-zinc-800 p-5 w-full rounded-lg h-20" onClick={() => history.push('/step8')}>
          De 13 a 20
        </button>
        <button className="flex justify-between  items-center text-lg text-white font-medium bg-zinc-800 p-5 w-full rounded-lg h-20" onClick={() => history.push('/step8')}>
          Mais de 20
        </button>
        <button className="flex justify-between  items-center text-lg text-white font-medium bg-zinc-800 p-5 w-full rounded-lg h-20" onClick={() => history.push('/step8')}>
          Não sei
        </button>
      </div>
    </LayoutFragment>
  );
};

export default Step7Page;
