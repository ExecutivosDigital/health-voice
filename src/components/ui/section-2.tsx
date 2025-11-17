import { cn } from "@/utils/cn";
import useOnScreen from "@/utils/IsOnScreen";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

export function Section2() {
  const ref1 = useRef<HTMLDivElement | null>(null);
  const isVisible1 = useOnScreen(ref1);

  return (
    <div className="from-bg-2 to-bg-1 relative flex w-full flex-col overflow-x-hidden bg-gradient-to-b py-10 xl:py-20">
      <div
        ref={ref1}
        className="mx-auto flex h-full max-w-[1280px] flex-1 flex-col gap-4 xl:gap-16"
      >
        <div
          className={cn(
            "text-center text-base font-light opacity-0 transition delay-[250ms] duration-[600ms] xl:text-5xl",
            isVisible1.isIntersecting && "translate-y-0 opacity-100",
            !isVisible1.isIntersecting && "translate-y-20 opacity-0",
          )}
        >
          <span className="font-semibold">Transcrição </span>
          <span>100% precisa no </span>
          <span className="font-semibold">
            seu celular.
            <br />{" "}
          </span>
          <span>Deixe a </span>
          <span className="font-semibold">I.A. organizar </span>
          <span>cada detalhe da </span>
          <span className="font-semibold">consulta.</span>
        </div>
        <div
          className={cn(
            "grid w-full gap-4 px-4 opacity-0 transition delay-[250ms] duration-[600ms] xl:grid-cols-4 xl:gap-16 xl:px-0",
            isVisible1.isIntersecting && "translate-y-0 opacity-100",
            !isVisible1.isIntersecting && "translate-y-20 opacity-0",
          )}
        >
          <div className="relative flex h-48 items-center justify-center overflow-hidden rounded-2xl xl:col-span-1 xl:h-80">
            <Image
              src="/static/doctor-1.png"
              alt=""
              width={250}
              height={500}
              className="h-full w-full object-cover"
            />
            <div className="absolute top-0 left-0 h-full w-full bg-black/40 backdrop-blur-xs" />
            <Image
              src="/logos/logo-2.png"
              alt=""
              width={500}
              height={500}
              className="absolute top-1/2 left-1/2 h-max w-2/3 -translate-x-1/2 -translate-y-1/2 object-contain"
            />
          </div>
          <div className="relative flex h-48 items-center justify-center overflow-hidden rounded-2xl xl:col-span-1 xl:h-80">
            <Image
              src="/static/doctor-2.png"
              alt=""
              width={250}
              height={500}
              className="h-full w-full object-cover"
            />
            <div className="absolute top-0 left-0 h-full w-full bg-black/40 backdrop-blur-xs" />
            <Image
              src="/logos/logo-2.png"
              alt=""
              width={500}
              height={500}
              className="absolute top-1/2 left-1/2 h-max w-2/3 -translate-x-1/2 -translate-y-1/2 object-contain"
            />
          </div>
          <div className="relative flex h-48 items-end justify-center overflow-hidden rounded-2xl xl:col-span-2 xl:h-80">
            <Image
              src="/static/pacient-1.png"
              alt=""
              width={250}
              height={500}
              className="h-full w-full object-cover"
            />
            <div className="absolute top-0 left-0 h-full w-full bg-black/40 backdrop-blur-xs" />
            <div className="absolute bottom-2 left-0 flex w-full items-center justify-between px-4">
              <div className="flex max-w-80 flex-col text-lg">
                <span className="font-bold">Inicia a Gravação</span>
                <div className="font-light">
                  <span>Mantenha o máximo de informações </span>
                  <span className="font-bold">guardadas</span>
                </div>
              </div>
              <Image
                src="/icons/play.png"
                alt=""
                width={100}
                height={100}
                className="h-10 w-10 object-contain"
              />
            </div>
          </div>
        </div>
        <button
          className={cn(
            "group relative mx-auto w-max opacity-0 transition delay-[250ms] duration-[600ms]",
            isVisible1.isIntersecting && "translate-y-0 opacity-100",
            !isVisible1.isIntersecting && "translate-y-20 opacity-0",
          )}
        >
          <div className="animate-tilt bg-primary absolute -inset-px rounded-3xl opacity-70 blur-md transition duration-1000 group-hover:-inset-0.5 group-hover:opacity-100 group-hover:duration-200" />
          <span className="bg-primary text-light relative inline-flex w-full items-center justify-center rounded-3xl px-4 py-2 text-lg font-bold transition-all duration-200 focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 focus:outline-none">
            Começar Agora
            <ChevronRight className="stroke-3" />
          </span>
        </button>
      </div>
    </div>
  );
}
