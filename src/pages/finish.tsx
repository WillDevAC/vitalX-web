import React, { useState } from "react";
import LayoutFragment from "../layout";
import { Info } from "lucide-react";
import { useHistory } from "react-router-dom";

const FinishPage: React.FC = () => {
  const objetivo = localStorage.getItem("objetivo");

  const [planoSelecionado, setPlanoSelecionado] = useState("");

  const history = useHistory();

  const handleReceberPlano = () => {
    
    if(planoSelecionado === '') {
      alert('Selecione um plano para continuar!');
      return;
    }

    //Perda de peso
    if(planoSelecionado === 'pdp1m') {
      window.location.href = 'https://payment.ticto.app/OC172C851';
      return;
    }

    if(planoSelecionado === 'pdp3m') {
      window.location.href = ('https://payment.ticto.app/O4856D67D');
      return;
    }

    if(planoSelecionado === 'pdp6m') {
      window.location.href = ('https://payment.ticto.app/O4F3B1264');
      return;
    }

    //Ganho de massa
    if(planoSelecionado === 'gdm1m') {
      window.location.href = ('https://payment.ticto.app/OE2EA5940');
      return;
    }

    if(planoSelecionado === 'gdm3m') {
      window.location.href = ('https://payment.ticto.app/OA902D051');
      return;
    }

    if(planoSelecionado === 'gdm6m') {
      window.location.href = ('https://payment.ticto.app/OC073159F');
      return;
    }

    //Qualidade de vida
    if(planoSelecionado === 'qdv1m') {
      window.location.href = ('https://payment.ticto.app/O994C013F');
      return;
    }

    if(planoSelecionado === 'qdv3m') {
      window.location.href = ('https://payment.ticto.app/O4CBA6318');
      return;
    }

    if(planoSelecionado === 'qdv6m') {
      window.location.href = ('https://payment.ticto.app/O4A7AEA9D');
      return;
    }

  };

  return (
    <LayoutFragment type="normal" desc="0" page="#">
      <h1 className="text-center text-2xl text-gray-50 pr-10 pl-10 font-bold">
        Seu plano de <b className="text-blue-500">treinos personalizados</b>
        está pronto!
      </h1>
      <div className="flex flex-col gap-5 m-10">
        {objetivo === "Perca de peso" && (
          <>
            <button
              className={`flex items-center justify-between p-5 w-full rounded-md relative border ${
                planoSelecionado === "pdp1m" ? "border-blue-500" : "bg-zinc-800"
              }`}
              onClick={() => setPlanoSelecionado("pdp1m")}
            >
              <div className="flex flex-col gap-2 mt-5">
                <p className="text-white font-bold">PLANO DE 1 MÊS</p>
                <span className="flex text-gray-100 font-semibold text-xs">
                  6x de R$ 6,44
                </span>
              </div>
              <div className="text-lg bg-[#5f6061] p-1 text-[#9a9b9b] font-bold rounded-lg">
                0,32 <b className="text-xs">dia</b>
              </div>
              <div className="absolute top-0 right-0 flex items-center w-full font-xs justify-center text-[#9a9b9b]  bg-[#5f6061]">
                MAIS POPULAR
              </div>
            </button>
            <button
              className={`flex items-center justify-between p-5 w-full rounded-md relative border ${
                planoSelecionado === "pdp3m" ? "border-blue-500" : "bg-zinc-800"
              }`}
              onClick={() => setPlanoSelecionado("pdp3m")}
            >
              <div className="flex flex-col gap-2 mt-5">
                <p className="text-white font-bold">PLANO DE 3 MÊSES</p>
                <span className="flex text-gray-100 font-semibold text-xs">
                  12x de R$ R$ 10,03
                </span>
              </div>
              <div className="text-lg bg-[#5f6061] p-1 text-[#9a9b9b] font-bold rounded-lg">
                0,82 <b className="text-xs">dia</b>
              </div>
              <div className="absolute top-0 right-0 flex items-center w-full font-xs justify-center text-[#9a9b9b]  bg-[#5f6061]">
                MELHOR OFERTA
              </div>
            </button>
            <button
              className={`flex items-center justify-between p-5 w-full rounded-md relative border ${
                planoSelecionado === "pdp6m" ? "border-blue-500" : "bg-zinc-800"
              }`}
              onClick={() => setPlanoSelecionado("pdp6m")}
            >
              <div className="flex flex-col gap-2">
                <p className="text-white font-bold">PLANO DE 6 MÊSES</p>
                <span className="flex text-gray-100 font-semibold text-xs">
                  12x de R$ 18,06
                </span>
              </div>
              <div className="text-lg bg-[#5f6061] p-1 text-[#9a9b9b] font-bold rounded-lg">
                1,65 <b className="text-xs">dia</b>
              </div>
            </button>
          </>
        )}

        {objetivo === "Ganho de massa" && (
          <>
            <button
              className={`flex items-center justify-between p-5 w-full rounded-md relative border ${
                planoSelecionado === "gdm1m" ? "border-blue-500" : "bg-zinc-800"
              }`}
              onClick={() => setPlanoSelecionado("gdm1m")}
            >
              <div className="flex flex-col gap-2 mt-5">
                <p className="text-white font-bold">PLANO DE 1 MÊS</p>
                <span className="flex text-gray-100 font-semibold text-xs">
                  6x de R$ 6,44
                </span>
              </div>
              <div className="text-lg bg-[#5f6061] p-1 text-[#9a9b9b] font-bold rounded-lg">
                0,32 <b className="text-xs">dia</b>
              </div>
              <div className="absolute top-0 right-0 flex items-center w-full font-xs justify-center text-[#9a9b9b]  bg-[#5f6061]">
                MAIS POPULAR
              </div>
            </button>
            <button
              className={`flex items-center justify-between p-5 w-full rounded-md relative border ${
                planoSelecionado === "gdm3m" ? "border-blue-500" : "bg-zinc-800"
              }`}
              onClick={() => setPlanoSelecionado("gdm3m")}
            >
              <div className="flex flex-col gap-2 mt-5">
                <p className="text-white font-bold">PLANO DE 3 MÊSES</p>
                <span className="flex text-gray-100 font-semibold text-xs">
                  12x de R$ R$ 10,03
                </span>
              </div>
              <div className="text-lg bg-[#5f6061] p-1 text-[#9a9b9b] font-bold rounded-lg">
                0,82 <b className="text-xs">dia</b>
              </div>
              <div className="absolute top-0 right-0 flex items-center w-full font-xs justify-center text-[#9a9b9b]  bg-[#5f6061]">
                MELHOR OFERTA
              </div>
            </button>
            <button
              className={`flex items-center justify-between p-5 w-full rounded-md relative border ${
                planoSelecionado === "gdm6m" ? "border-blue-500" : "bg-zinc-800"
              }`}
              onClick={() => setPlanoSelecionado("gdm6m")}
            >
              <div className="flex flex-col gap-2">
                <p className="text-white font-bold">PLANO DE 6 MÊSES</p>
                <span className="flex text-gray-100 font-semibold text-xs">
                  12x de R$ 18,06
                </span>
              </div>
              <div className="text-lg bg-[#5f6061] p-1 text-[#9a9b9b] font-bold rounded-lg">
                1,65 <b className="text-xs">dia</b>
              </div>
            </button>
          </>
        )}

        {objetivo === "Qualidade de vida" && (
          <>
            <button
              className={`flex items-center justify-between p-5 w-full rounded-md relative border ${
                planoSelecionado === "qdv1m" ? "border-blue-500" : "bg-zinc-800"
              }`}
              onClick={() => setPlanoSelecionado("qdv1m")}
            >
              <div className="flex flex-col gap-2 mt-5">
                <p className="text-white font-bold">PLANO DE 1 MÊS</p>
                <span className="flex text-gray-100 font-semibold text-xs">
                  6x de R$ 6,44
                </span>
              </div>
              <div className="text-lg bg-[#5f6061] p-1 text-[#9a9b9b] font-bold rounded-lg">
                0,32 <b className="text-xs">dia</b>
              </div>
              <div className="absolute top-0 right-0 flex items-center w-full font-xs justify-center text-[#9a9b9b]  bg-[#5f6061]">
                MAIS POPULAR
              </div>
            </button>
            <button
              className={`flex items-center justify-between p-5 w-full rounded-md relative border ${
                planoSelecionado === "qdv3m" ? "border-blue-500" : "bg-zinc-800"
              }`}
              onClick={() => setPlanoSelecionado("qdv3m")}
            >
              <div className="flex flex-col gap-2 mt-5">
                <p className="text-white font-bold">PLANO DE 3 MÊSES</p>
                <span className="flex text-gray-100 font-semibold text-xs">
                  12x de R$ R$ 10,03
                </span>
              </div>
              <div className="text-lg bg-[#5f6061] p-1 text-[#9a9b9b] font-bold rounded-lg">
                0,82 <b className="text-xs">dia</b>
              </div>
              <div className="absolute top-0 right-0 flex items-center w-full font-xs justify-center text-[#9a9b9b]  bg-[#5f6061]">
                MELHOR OFERTA
              </div>
            </button>
            <button
              className={`flex items-center justify-between p-5 w-full rounded-md relative border ${
                planoSelecionado === "qdv6m" ? "border-blue-500" : "bg-zinc-800"
              }`}
              onClick={() => setPlanoSelecionado("qdv6m")}
            >
              <div className="flex flex-col gap-2">
                <p className="text-white font-bold">PLANO DE 6 MÊSES</p>
                <span className="flex text-gray-100 font-semibold text-xs">
                  12x de R$ 18,06
                </span>
              </div>
              <div className="text-lg bg-[#5f6061] p-1 text-[#9a9b9b] font-bold rounded-lg">
                1,65 <b className="text-xs">dia</b>
              </div>
            </button>
          </>
        )}

        <div className="flex justify-center items-center w-full text-white underline font-bold mt-5">
          Garantia de reembolso em 7 dias
        </div>

        <div className="m-5">
          <button
            className="flex mt-3 gap-3 items-center justify-center text-lg text-white font-bold bg-blue-800 p-5 w-full rounded-lg h-20"
            onClick={() => handleReceberPlano()}
          >
            RECEBER MEU PLANO
          </button>
        </div>

        <h1 className="text-center text-2xl text-gray-50 pr-10 pl-10 font-bold">
          O que você recebe?
        </h1>
        <div className="text-white">
          Nosso algoritmo inteligente criou um plano de treino personalizado com
          base em seus objetivos e dados pessoais.
        </div>
        <b className="text-white">Para atingir o seu objetivo, você terá:</b>
        <div className="flex flex-col gap-2">
          <span className="text-sm font-light text-white underline">
            Biblioteca com +200 treinos e exercícios extensos de profissionais
            certificados.
          </span>
          <span className="text-sm font-light text-white underline">
            Plano fitness feito sob medida para as suas necessidades e nível de
            preparo físico.
          </span>
          <span className="text-sm font-light text-white underline">
            Receitas e dicas para um estilo de vida saudável.
          </span>
        </div>
        <div className="mt-5">
          <p className="text-white font-bold">
            Tudo em uma aréa de membros personalizada e interativa para
            facilitar a sua caminhada!
          </p>
        </div>
        <div className="mt-3 flex justify-center items-center">
          <img src="banner.png" alt="Finish" />
        </div>

        <h1 className="text-center text-2xl text-gray-50 pr-10 pl-10 font-bold">
          FAQ
        </h1>
        <div className="mt-3 bg-zinc-800 p-3 flex flex-col gap-5">
          <div className="flex gap-2">
            <Info color="blue" size={100} />
            <div className="flex flex-col gap-2">
              <p className="font-bold text-md text-white">
                Como meu plano é criado?
              </p>
              <span className="text-white text-xs">
                Usamos as respostas fornecidas e nossos algoritmos exclusivos
                para direcionar seu programa especificamente para suas
                necessidades e objetivos. Nossos programas são verificados por
                especialistas para que você possa ter certeza de que funcionará
                para você.
              </span>
            </div>
          </div>
          <div className="flex gap-2">
            <Info color="blue" size={100} />
            <div className="flex flex-col gap-2">
              <p className="font-bold text-md text-white">
                Como posso ver meu programa?
              </p>
              <span className="text-white text-xs">
                Cada plano é personalizado e nossos nutricionistas, juntamente
                com especialistas em fitness, trabalham duro para não perder
                seus clientes. Normalmente, o acesso ao seu plano por e-mail
                demora algumas horas.
              </span>
            </div>
          </div>
        </div>
        <h1 className="text-center text-2xl text-gray-50 pr-10 pl-10 font-bold">
          Reviews
        </h1>
        <div className="mt-3p-3 flex flex-col gap-5">
          <div className="flex gap-2">
            <div className="flex flex-col gap-5">
              <span className="text-white text-xs">
                " Plano de treinos direto, área de membros intuitiva, suporte
                não demora pra responder, mas não consegui o resultado que
                queria pq não mantive a dieta rsrs
                <b>- @ivone.matos</b>
              </span>
              <span className="text-white text-xs">
                " Bem objetivo e eficaz, recomendo! <b>- @fernando92</b>
              </span>
              <span className="text-white text-xs">
                " Gostei porque compensa muito mais do que pagar um personal,
                pra mim valeu apena por conta disso. <b>- @lucas_f2k</b>
              </span>
              <span className="text-white text-xs">
                " Muito prático e intuitivo, excelente suporte, adorei.{" "}
                <b>- @julia.jx2</b>
              </span>
              <span className="text-white text-xs">
                " Suporte muito bom 👍. <b>- @carlos.santos91</b>
              </span>
              <span className="text-white text-xs">
                " Gostei porque é fácil para os iniciantes entenderem os treinos{" "}
                <b>- @socorro_silvaguerra</b>
              </span>
              <span className="text-white text-xs">
                " Custo beneficio muito bom! <b>- @maria_flor2</b>
              </span>
              <span className="text-white text-xs">
                " Valeu a pena! <b>- @_eduardoqueiroz</b>
              </span>
              <span className="text-white text-xs">
                " Paguei 500 reais em um personal que me fez uma programação que
                não deu 10% desse programa! 🤡 <b>- @clarasena_1378</b>
              </span>
              <span className="text-white text-xs">
                " Muito fácil de acompanhar e entender, vale a pena!{" "}
                <b>- @mabisj3</b>
              </span>
              <span className="text-white text-xs">
                " Programa excelente para quem vai viajar e não quer ficar
                parado! <b>- @walis_santana</b>
              </span>
              <span className="text-white text-xs">
                " O programa é bem completo e muito mais barato que um personal,
                recomendo! <b>- @_amaralrita</b>
              </span>
              <span className="text-white text-xs">
                " O custo beneficio desse programa é muito bom.{" "}
                <b>- @josue.klein_</b>
              </span>
              <span className="text-white text-xs">
                " Não acho que uma pessoa vai ficar grande com esse programa,
                mas pra quem quer qualidade de vida acho que encaixa bem{" "}
                <b>- @jon_sovelino</b>
              </span>
              <span className="text-white text-xs">
                " O treino é bem montado mas é simples, se você não fizer dieta
                não adianta nada <b>- @josilenedias_</b>
              </span>
              <span className="text-white text-xs">
                " Ganhei 10kg em 6 meses com esse programa, muito bom vale cada
                centavo! <b>- @rodrigo3a</b>
              </span>
              <span className="text-white text-xs">
                " Tinha um casamento pra ir da minha cunhada e queria emagrecer,
                fiz o teste de programa e perdi 5kg em 3 meses. 😊
                <b>- @elena_silva</b>
              </span>
              <span className="text-white text-xs">
                " Amei serve para todas as idades!<b>- @emmy_dourado5</b>
              </span>
            </div>
          </div>
        </div>
        <h1 className="text-center text-2xl text-gray-50 pr-10 pl-10 font-bold">
          Tenha resultados visiveis em 4 semanas
        </h1>
        {objetivo === "Perca de peso" && (
          <>
            <button
              className={`flex items-center justify-between p-5 w-full rounded-md relative border ${
                planoSelecionado === "pdp1m" ? "border-blue-500" : "bg-zinc-800"
              }`}
              onClick={() => setPlanoSelecionado("pdp1m")}
            >
              <div className="flex flex-col gap-2 mt-5">
                <p className="text-white font-bold">PLANO DE 1 MÊS</p>
                <span className="flex text-gray-100 font-semibold text-xs">
                  6x de R$ 6,44
                </span>
              </div>
              <div className="text-lg bg-[#5f6061] p-1 text-[#9a9b9b] font-bold rounded-lg">
                0,32 <b className="text-xs">dia</b>
              </div>
              <div className="absolute top-0 right-0 flex items-center w-full font-xs justify-center text-[#9a9b9b]  bg-[#5f6061]">
                MAIS POPULAR
              </div>
            </button>
            <button
              className={`flex items-center justify-between p-5 w-full rounded-md relative border ${
                planoSelecionado === "pdp3m" ? "border-blue-500" : "bg-zinc-800"
              }`}
              onClick={() => setPlanoSelecionado("pdp3m")}
            >
              <div className="flex flex-col gap-2 mt-5">
                <p className="text-white font-bold">PLANO DE 3 MÊSES</p>
                <span className="flex text-gray-100 font-semibold text-xs">
                  12x de R$ R$ 10,03
                </span>
              </div>
              <div className="text-lg bg-[#5f6061] p-1 text-[#9a9b9b] font-bold rounded-lg">
                0,82 <b className="text-xs">dia</b>
              </div>
              <div className="absolute top-0 right-0 flex items-center w-full font-xs justify-center text-[#9a9b9b]  bg-[#5f6061]">
                MELHOR OFERTA
              </div>
            </button>
            <button
              className={`flex items-center justify-between p-5 w-full rounded-md relative border ${
                planoSelecionado === "pdp6m" ? "border-blue-500" : "bg-zinc-800"
              }`}
              onClick={() => setPlanoSelecionado("pdp6m")}
            >
              <div className="flex flex-col gap-2">
                <p className="text-white font-bold">PLANO DE 6 MÊSES</p>
                <span className="flex text-gray-100 font-semibold text-xs">
                  12x de R$ 18,06
                </span>
              </div>
              <div className="text-lg bg-[#5f6061] p-1 text-[#9a9b9b] font-bold rounded-lg">
                1,65 <b className="text-xs">dia</b>
              </div>
            </button>
          </>
        )}

        {objetivo === "Ganho de massa" && (
          <>
            <button
              className={`flex items-center justify-between p-5 w-full rounded-md relative border ${
                planoSelecionado === "gdm1m" ? "border-blue-500" : "bg-zinc-800"
              }`}
              onClick={() => setPlanoSelecionado("gdm1m")}
            >
              <div className="flex flex-col gap-2 mt-5">
                <p className="text-white font-bold">PLANO DE 1 MÊS</p>
                <span className="flex text-gray-100 font-semibold text-xs">
                  6x de R$ 6,44
                </span>
              </div>
              <div className="text-lg bg-[#5f6061] p-1 text-[#9a9b9b] font-bold rounded-lg">
                0,32 <b className="text-xs">dia</b>
              </div>
              <div className="absolute top-0 right-0 flex items-center w-full font-xs justify-center text-[#9a9b9b]  bg-[#5f6061]">
                MAIS POPULAR
              </div>
            </button>
            <button
              className={`flex items-center justify-between p-5 w-full rounded-md relative border ${
                planoSelecionado === "gdm3m" ? "border-blue-500" : "bg-zinc-800"
              }`}
              onClick={() => setPlanoSelecionado("gdm3m")}
            >
              <div className="flex flex-col gap-2 mt-5">
                <p className="text-white font-bold">PLANO DE 3 MÊSES</p>
                <span className="flex text-gray-100 font-semibold text-xs">
                  12x de R$ R$ 10,03
                </span>
              </div>
              <div className="text-lg bg-[#5f6061] p-1 text-[#9a9b9b] font-bold rounded-lg">
                0,82 <b className="text-xs">dia</b>
              </div>
              <div className="absolute top-0 right-0 flex items-center w-full font-xs justify-center text-[#9a9b9b]  bg-[#5f6061]">
                MELHOR OFERTA
              </div>
            </button>
            <button
              className={`flex items-center justify-between p-5 w-full rounded-md relative border ${
                planoSelecionado === "gdm6m" ? "border-blue-500" : "bg-zinc-800"
              }`}
              onClick={() => setPlanoSelecionado("gdm6m")}
            >
              <div className="flex flex-col gap-2">
                <p className="text-white font-bold">PLANO DE 6 MÊSES</p>
                <span className="flex text-gray-100 font-semibold text-xs">
                  12x de R$ 18,06
                </span>
              </div>
              <div className="text-lg bg-[#5f6061] p-1 text-[#9a9b9b] font-bold rounded-lg">
                1,65 <b className="text-xs">dia</b>
              </div>
            </button>
          </>
        )}

        {objetivo === "Qualidade de vida" && (
          <>
            <button
              className={`flex items-center justify-between p-5 w-full rounded-md relative border ${
                planoSelecionado === "qdv1m" ? "border-blue-500" : "bg-zinc-800"
              }`}
              onClick={() => setPlanoSelecionado("qdv1m")}
            >
              <div className="flex flex-col gap-2 mt-5">
                <p className="text-white font-bold">PLANO DE 1 MÊS</p>
                <span className="flex text-gray-100 font-semibold text-xs">
                  6x de R$ 6,44
                </span>
              </div>
              <div className="text-lg bg-[#5f6061] p-1 text-[#9a9b9b] font-bold rounded-lg">
                0,32 <b className="text-xs">dia</b>
              </div>
              <div className="absolute top-0 right-0 flex items-center w-full font-xs justify-center text-[#9a9b9b]  bg-[#5f6061]">
                MAIS POPULAR
              </div>
            </button>
            <button
              className={`flex items-center justify-between p-5 w-full rounded-md relative border ${
                planoSelecionado === "qdv3m" ? "border-blue-500" : "bg-zinc-800"
              }`}
              onClick={() => setPlanoSelecionado("qdv3m")}
            >
              <div className="flex flex-col gap-2 mt-5">
                <p className="text-white font-bold">PLANO DE 3 MÊSES</p>
                <span className="flex text-gray-100 font-semibold text-xs">
                  12x de R$ R$ 10,03
                </span>
              </div>
              <div className="text-lg bg-[#5f6061] p-1 text-[#9a9b9b] font-bold rounded-lg">
                0,82 <b className="text-xs">dia</b>
              </div>
              <div className="absolute top-0 right-0 flex items-center w-full font-xs justify-center text-[#9a9b9b]  bg-[#5f6061]">
                MELHOR OFERTA
              </div>
            </button>
            <button
              className={`flex items-center justify-between p-5 w-full rounded-md relative border ${
                planoSelecionado === "qdv6m" ? "border-blue-500" : "bg-zinc-800"
              }`}
              onClick={() => setPlanoSelecionado("qdv6m")}
            >
              <div className="flex flex-col gap-2">
                <p className="text-white font-bold">PLANO DE 6 MÊSES</p>
                <span className="flex text-gray-100 font-semibold text-xs">
                  12x de R$ 18,06
                </span>
              </div>
              <div className="text-lg bg-[#5f6061] p-1 text-[#9a9b9b] font-bold rounded-lg">
                1,65 <b className="text-xs">dia</b>
              </div>
            </button>
          </>
        )}
        <div className="flex justify-center items-center w-full text-white underline font-bold mt-5">
          Garantia de reembolso em 7 dias
        </div>

        <div className="m-5">
          <button
            className="flex mt-3 gap-3 items-center justify-center text-lg text-white font-bold bg-blue-800 p-5 w-full rounded-lg h-20"
            onClick={() => handleReceberPlano()}
          >
            RECEBER MEU PLANO
          </button>
        </div>
        <img src="garantia7.png" alt="Garantia 30 dias" />
        <h1 className="text-center text-2xl text-gray-50 font-bold">
          Garantia de reembolso de 100%
        </h1>
        <span className="text-xs font-light text-white">
          O nosso plano funciona e você terá resultados visíveis em 4 semanas!
          Estamos dispostos a devolver seu dinheiro se você comprovar que
          aplicou e não viu resultados.
        </span>
      </div>
    </LayoutFragment>
  );
};

export default FinishPage;
