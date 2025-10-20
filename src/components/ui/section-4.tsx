import { fakerPT_BR } from "@faker-js/faker";
import Image from "next/image";

export function Section4() {
  const testimonials = [
    {
      id: "1",
      stars: 5,
      text: "Eu passava horas documentando ao final do dia. Com a Health Voice, o relatório está pronto assim que a consulta termina. É incrível ter meu tempo de volta para a família, sem comprometer a qualidade da documentação. Recomendo a todos!",
      photo: fakerPT_BR.image.personPortrait({ sex: "female" }),
      name: "Dra. " + fakerPT_BR.person.fullName({ sex: "female" }),
      position: "Pediatra",
    },
    {
      id: "2",
      stars: 5,
      text: "Em Cardiologia, a precisão é tudo. A Health Voice não só economiza meu tempo, mas me dá uma segurança jurídica que a anotação manual não alcançava. A transcrição completa e organizada é essencial para o meu prontuário eletrônico.",
      photo: fakerPT_BR.image.personPortrait({ sex: "male" }),
      name: "Dr. " + fakerPT_BR.person.fullName({ sex: "male" }),
      position: "Cardiologista",
    },
    {
      id: "3",
      stars: 5,
      text: "A Health Voice mudou a dinâmica do meu consultório. Agora, eu me concentro 100% no paciente, sabendo que a documentação será feita com perfeição pela I.A. É mais profissional e acelera o fluxo entre as consultas, sem stress.",
      photo: fakerPT_BR.image.personPortrait({ sex: "female" }),
      name: "Dra. " + fakerPT_BR.person.fullName({ sex: "female" }),
      position: "Clínica Geral",
    },
    {
      id: "4",
      stars: 5,
      text: "Fim da digitação noturna! A Health Voice é a solução que eu precisava para desligar o computador mais cedo e focar no descanso. Simplesmente libertador.",
      photo: fakerPT_BR.image.personPortrait({ sex: "female" }),
      name: "Dra. " + fakerPT_BR.person.fullName({ sex: "female" }),
      position: "Oftalmologista",
    },
    {
      id: "5",
      stars: 4,
      text: "Eu temia a tecnologia, mas a Health Voice é muito intuitiva. Em casos ortopédicos complexos, a transcrição fiel é vital. O sistema não só transcreve, ele organiza a narrativa, facilitando a vida na hora de montar o laudo e acompanhar a evolução.",
      photo: fakerPT_BR.image.personPortrait({ sex: "male" }),
      name: "Dr. " + fakerPT_BR.person.fullName({ sex: "male" }),
      position: "Ortopedista",
    },
    {
      id: "6",
      stars: 5,
      text: "O investimento se paga no primeiro dia. Ganhei mais tempo para atender pacientes particulares, elevando minha receita. É uma ferramenta essencial.",
      photo: fakerPT_BR.image.personPortrait({ sex: "male" }),
      name: "Dra. " + fakerPT_BR.person.fullName({ sex: "male" }),
      position: "Dermatologista",
    },
  ];

  return (
    <div className="from-bg-2 to-bg-1 relative flex min-h-screen w-full flex-col overflow-x-hidden bg-gradient-to-b py-20">
      <div className="mx-auto flex h-full max-w-[1280px] flex-1 flex-col gap-4">
        <div className="group relative mx-auto w-max">
          <div className="animate-tilt bg-primary absolute -inset-px rounded-3xl opacity-70 blur-md transition duration-1000" />
          <span className="bg-primary text-light relative inline-flex w-full items-center justify-center rounded-3xl px-2 py-1 font-semibold transition-all duration-200 focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 focus:outline-none">
            Health Voice é a Escolha Certa
          </span>
        </div>
        <div className="text-center text-2xl font-light xl:text-4xl">
          <span>O que os </span>
          <span className="font-bold">
            Médicos que Recuperaram o Foco <br />
          </span>
          <span>têm a dizer sobre a </span>
          <span className="font-bold">Health Voice.</span>
        </div>
        <div className="text-center font-light">
          <span>Nossa I.A. já </span>
          <span className="font-semibold">elevou o nível de eficiência </span>
          <span>e segurança na documentação de </span>
          <span className="font-semibold">+100 profissionais </span>
          <span>em todo o país.</span>
        </div>
        <div className="grid w-full gap-4 px-4 xl:grid-cols-3 2xl:px-0">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-primary/20 flex h-max flex-col gap-4 rounded-2xl p-4 backdrop-blur-sm"
            >
              <div className="flex items-center gap-2">
                {Array.from({ length: t.stars }).map((_, index) => (
                  <Image
                    key={index}
                    src="/icons/star-on.png"
                    alt=""
                    width={100}
                    height={100}
                    className="h-3 w-max object-contain"
                  />
                ))}
              </div>
              <span className="text-sm leading-6 font-light text-stone-300">
                {t.text}
              </span>
              <div className="flex items-center gap-4">
                <Image
                  src={t.photo}
                  alt=""
                  width={100}
                  height={100}
                  className="h-10 w-10 rounded-full object-cover"
                />
                <div className="flex flex-col">
                  <span className="font-semibold">{t.name}</span>
                  <span className="text-sm text-stone-300">{t.position}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-2 px-4 xl:flex-row xl:items-center xl:justify-center xl:px-0">
          <button className="border-light text-light flex h-10 items-center justify-center gap-2 rounded-3xl border px-4 font-semibold xl:justify-normal">
            <Image
              src="/icons/play-store.png"
              alt=""
              width={100}
              height={100}
              className="h-6 w-max object-contain"
            />
            Baixar Play Store
          </button>
          <button className="border-primary bg-primary text-light flex h-10 items-center justify-center gap-2 rounded-3xl border px-4 font-semibold xl:justify-normal">
            <Image
              src="/icons/apple.png"
              alt=""
              width={100}
              height={100}
              className="h-6 w-max object-contain"
            />
            Baixar App Store
          </button>
        </div>
      </div>
    </div>
  );
}
