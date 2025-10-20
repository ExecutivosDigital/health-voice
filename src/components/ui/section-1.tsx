import Image from "next/image";

export function Section1() {
  return (
    <div className="bg-bg-1 relative flex w-full flex-col overflow-x-hidden py-20">
      <div className="bg-primary/5 absolute top-1/2 -right-40 hidden h-[500px] w-[500px] -translate-y-1/2 rounded-full blur-2xl xl:block" />
      <div className="mx-auto flex h-full max-w-[1280px] flex-1 flex-col gap-4">
        <div className="text-center text-3xl font-light xl:text-5xl">
          <span>O que a </span>
          <span className="font-semibold">Health Voice </span>
          <span>faz </span>
          <span className="font-semibold">
            por você
            <br className="hidden xl:block" />{" "}
          </span>
          <span className="text-primary font-semibold">Garante </span>
          <span>a </span>
          <span className="text-primary font-semibold">Eficiência </span>
          <span>que a Medicina Exige.</span>
        </div>
        <div className="flex flex-col items-center justify-between gap-4 xl:flex-row xl:gap-0">
          <div className="h-full w-4/5 px-4 xl:w-1/2 2xl:px-0">
            <Image
              src="/static/section-1.png"
              alt=""
              width={500}
              height={1000}
              className="h-max w-full object-contain xl:w-4/5"
            />
          </div>
          <div className="flex h-full w-full items-end justify-end px-4 xl:w-1/2 2xl:px-0">
            <div className="flex w-full flex-col gap-4 xl:w-4/5">
              <span className="w-full text-2xl font-bold xl:text-4xl">
                Prontuário Perfeito, Sem Esforço.
              </span>
              <div className="w-full text-base font-light xl:text-xl">
                <span>Identifica automaticamente os </span>
                <span className="font-semibold">Tópicos Chave </span>
                <span>de cada consulta e </span>
                <span className="font-semibold">
                  personaliza seu relatório.{" "}
                </span>
                <span>
                  Você não precisa mais perder tempo buscando informações
                  cruciais. Tudo é{" "}
                </span>
                <span className="font-semibold">organizado </span>
                <span>
                  , pronto para ser anexando ao prontuário eletrônico e{" "}
                </span>
                <span className="font-semibold">localizado em segundos </span>
                <span>
                  , garantindo a segurança e rastreabilidade da informação{" "}
                </span>
                <span className="font-semibold">
                  quando você mais precisa.{" "}
                </span>
              </div>
              <button className="group relative w-max">
                <div className="animate-tilt bg-primary absolute -inset-px rounded-3xl opacity-70 blur-md transition duration-1000 group-hover:-inset-0.5 group-hover:opacity-100 group-hover:duration-200" />
                <span className="bg-primary text-light relative inline-flex w-full items-center justify-center rounded-3xl px-4 py-2 text-lg font-bold transition-all duration-200 focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 focus:outline-none">
                  Quero Fazer Parte
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col-reverse items-center justify-between gap-4 xl:flex-row xl:gap-0">
          <div className="flex h-full w-full items-start justify-start px-4 xl:w-1/2 2xl:px-0">
            <div className="flex w-full flex-col gap-4 xl:w-4/5">
              <span className="w-full text-2xl font-bold xl:text-4xl">
                Zero risco de Falha no Acompanhamento.
              </span>
              <div className="w-full text-base font-light xl:text-xl">
                <span>Nossa I.A. vai além da </span>
                <span className="font-semibold">transcrição </span>
                <span>, ela extrai automaticamente do diálogo as </span>
                <span className="font-semibold">Datas e Ações cruciais. </span>
                <span>
                  Isso garante que você siga o plano à risca e elimina a{" "}
                </span>
                <span className="font-semibold">
                  possibilidade de esquecimento{" "}
                </span>
                <span>
                  de pontos cruciais. Segurança total para sua prática, e máxima
                  adesão para seu paciente.{" "}
                </span>
              </div>
              <button className="group relative w-max">
                <div className="animate-tilt bg-primary absolute -inset-px rounded-3xl opacity-70 blur-md transition duration-1000 group-hover:-inset-0.5 group-hover:opacity-100 group-hover:duration-200" />
                <span className="bg-primary text-light relative inline-flex w-full items-center justify-center rounded-3xl px-4 py-2 text-lg font-bold transition-all duration-200 focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 focus:outline-none">
                  Quero Conhecer
                </span>
              </button>
            </div>
          </div>
          <div className="h-full w-4/5 px-4 xl:w-1/2 2xl:px-0">
            <Image
              src="/static/section-2.png"
              alt=""
              width={500}
              height={1000}
              className="ml-auto h-max w-full object-contain xl:w-4/5"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
