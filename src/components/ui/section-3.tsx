import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./blocks/accordion";

export function Section3() {
  return (
    <div className="from-bg-1 to-bg-2 relative flex min-h-[80vh] w-full flex-col overflow-x-hidden bg-gradient-to-b py-20">
      <div className="bg-primary/5 absolute top-1/2 -left-40 hidden h-[500px] w-[500px] -translate-y-1/2 rounded-full blur-2xl xl:block" />
      <div className="mx-auto flex h-full max-w-[1280px] flex-1 flex-col gap-4 px-4 2xl:px-0">
        <div className="flex flex-col text-center text-3xl font-light xl:text-5xl">
          <span className="text-primary font-bold">Investimento Certo</span>
          <span>Tire Suas Últimas Dúvidas.</span>
        </div>
        <div className="mx-auto w-full text-center text-xl font-light xl:w-1/2">
          <span>Restou alguma dúvida? </span>
          <span className="font-semibold">Fale agora </span>
          <span>com nosso </span>
          <span className="font-semibold">time de especialistas </span>
          <span>e comece a </span>
          <span className="font-semibold">ganhar tempo.</span>
        </div>
        <Accordion
          type="single"
          collapsible
          className="w-full max-w-[1280px] px-4 xl:w-[1280px] 2xl:px-0"
        >
          <AccordionItem value="item-1">
            <AccordionTrigger>
              <div className="flex w-full items-center gap-4">
                <div className="border-light flex h-10 w-10 max-w-10 min-w-10 items-center justify-center rounded-lg border">
                  <Image
                    src="/icons/faq-1.png"
                    alt=""
                    width={100}
                    height={100}
                    className="h-max w-6 object-contain"
                  />
                </div>
                <span className="font-semibold">
                  O que é exatamente a Health Voice?
                </span>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="font-light">
                <span>É uma plataforma de </span>
                <span className="font-semibold">Inteligência Artificial</span>
                <span>que </span>
                <span className="font-semibold">
                  transforma o áudio da sua consulta{" "}
                </span>
                <span>(gravado no seu celular) </span>
                <span className="font-semibold">em um Relatório Médico </span>
                <span>
                  completo e 100% organizado, pronto para ser anexado ao
                  prontuário.
                </span>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              <div className="flex w-full items-center gap-4">
                <div className="border-light flex h-10 w-10 max-w-10 min-w-10 items-center justify-center rounded-lg border">
                  <Image
                    src="/icons/faq-2.png"
                    alt=""
                    width={100}
                    height={100}
                    className="h-max w-6 object-contain"
                  />
                </div>
                <span className="font-semibold">
                  Qual o preço/modelo de assinatura?
                </span>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="font-light">
                <span>É uma plataforma de </span>
                <span className="font-semibold">Inteligência Artificial</span>
                <span>que </span>
                <span className="font-semibold">
                  transforma o áudio da sua consulta{" "}
                </span>
                <span>(gravado no seu celular) </span>
                <span className="font-semibold">em um Relatório Médico </span>
                <span>
                  completo e 100% organizado, pronto para ser anexado ao
                  prontuário.
                </span>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>
              <div className="flex w-full items-center gap-4">
                <div className="border-light flex h-10 w-10 max-w-10 min-w-10 items-center justify-center rounded-lg border">
                  <Image
                    src="/icons/faq-1.png"
                    alt=""
                    width={100}
                    height={100}
                    className="h-max w-6 object-contain"
                  />
                </div>
                <span className="font-semibold">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry?
                </span>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="font-light">
                <span>É uma plataforma de </span>
                <span className="font-semibold">Inteligência Artificial</span>
                <span>que </span>
                <span className="font-semibold">
                  transforma o áudio da sua consulta{" "}
                </span>
                <span>(gravado no seu celular) </span>
                <span className="font-semibold">em um Relatório Médico </span>
                <span>
                  completo e 100% organizado, pronto para ser anexado ao
                  prontuário.
                </span>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>
              <div className="flex w-full items-center gap-4">
                <div className="border-light flex h-10 w-10 max-w-10 min-w-10 items-center justify-center rounded-lg border">
                  <Image
                    src="/icons/faq-4.png"
                    alt=""
                    width={100}
                    height={100}
                    className="h-max w-6 object-contain"
                  />
                </div>
                <span className="font-semibold">
                  Qual a economia de tempo ou dinheiro que podemos quantificar?
                </span>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="font-light">
                <span>É uma plataforma de </span>
                <span className="font-semibold">Inteligência Artificial</span>
                <span>que </span>
                <span className="font-semibold">
                  transforma o áudio da sua consulta{" "}
                </span>
                <span>(gravado no seu celular) </span>
                <span className="font-semibold">em um Relatório Médico </span>
                <span>
                  completo e 100% organizado, pronto para ser anexado ao
                  prontuário.
                </span>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>
              <div className="flex w-full items-center gap-4">
                <div className="border-light flex h-10 w-10 max-w-10 min-w-10 items-center justify-center rounded-lg border">
                  <Image
                    src="/icons/faq-5.png"
                    alt=""
                    width={100}
                    height={100}
                    className="h-max w-6 object-contain"
                  />
                </div>
                <span className="font-semibold">
                  Para quem é o Health Voice?
                </span>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="font-light">
                <span>É uma plataforma de </span>
                <span className="font-semibold">Inteligência Artificial</span>
                <span>que </span>
                <span className="font-semibold">
                  transforma o áudio da sua consulta{" "}
                </span>
                <span>(gravado no seu celular) </span>
                <span className="font-semibold">em um Relatório Médico </span>
                <span>
                  completo e 100% organizado, pronto para ser anexado ao
                  prontuário.
                </span>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
