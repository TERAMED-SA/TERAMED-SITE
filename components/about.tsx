"use client";

import { Check } from "lucide-react";
import { useState } from "react";

export default function AboutUs() {
  const [selectedCard, setSelectedCard] = useState<string>("sobre");

  const cardData = {
    sobre: {
      title: "Sobre a TERAMED",
      description:
        "A TERAMED é uma empresa líder em tecnologias de saúde, fundada em 2024 com o objetivo de revolucionar o setor de saúde em Angola. Desenvolvemos soluções inovadoras que conectam pacientes, médicos e instituições de saúde através de tecnologia de ponta.",
    },
    missao: {
      title: "Nossa Missão",
      description:
        "Nossa missão é democratizar o acesso à saúde através de tecnologias inovadoras, proporcionando soluções eficientes e acessíveis que melhorem a qualidade de vida da população angolana e facilitem o trabalho dos profissionais de saúde.",
    },
    visao: {
      title: "Nossa Visão",
      description:
        "Ser pioneiro e líder em inovação no setor das tecnologias de saúde, consolidando nossa posição no mercado angolano e promovendo uma vida mais saudável para todos os utentes.",
    },
    valores: {
      title: "Nossos Valores",
      description:
        "Nossos valores fundamentais incluem inovação, excelência, transparência, compromisso com a saúde pública e responsabilidade social. Trabalhamos com ética e dedicação para transformar o cenário da saúde em Angola.",
    },
  };

  const handleCardClick = (cardId: string) => {
    setSelectedCard(cardId);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-6">
            <p className="font-medium">TRABALHANDO DESDE 2024</p>

            <h1 className="text-4xl md:text-5xl font-bold text-[#255459] leading-tight">
              Ter uma boa saúde
              <br />é o seu melhor
              <br />
              investimento
            </h1>

            <div className="space-y-6 pt-4">
              <div>
                <h2
                  className="font-semibold text-xl"
                  style={{ color: "#255459" }}
                >
                  {cardData[selectedCard as keyof typeof cardData].title}
                </h2>
                <p className="text-gray-700 mt-2">
                  {cardData[selectedCard as keyof typeof cardData].description}
                </p>
              </div>

              <p className="text-gray-700">
                Com compromisso e excelência, impulsionamos a transformação
                digital na saúde, garantindo soluções acessíveis, eficientes e
                de alto impacto.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2">
                  <div
                    className="rounded-full p-0.5"
                    style={{ backgroundColor: "#255459" }}
                  >
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-gray-800">Inovação em saúde</span>
                </div>

                <div className="flex items-center gap-2">
                  <div
                    className="rounded-full p-0.5"
                    style={{ backgroundColor: "#255459" }}
                  >
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-gray-800">Liderança no mercado</span>
                </div>

                <div className="flex items-center gap-2">
                  <div
                    className="rounded-full p-0.5"
                    style={{ backgroundColor: "#255459" }}
                  >
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-gray-800">Transformação digital</span>
                </div>

                <div className="flex items-center gap-2">
                  <div
                    className="rounded-full p-0.5"
                    style={{ backgroundColor: "#255459" }}
                  >
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-gray-800">Qualidade de vida</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div
                className={`rounded-lg shadow-md p-8 flex flex-col items-center justify-center text-center cursor-pointer transition-all duration-200 ${
                  selectedCard === "sobre"
                    ? "text-white"
                    : "bg-white hover:shadow-lg hover:bg-gray-100"
                }`}
                style={{
                  backgroundColor:
                    selectedCard === "sobre" ? "#255459" : undefined,
                }}
                onClick={() => handleCardClick("sobre")}
              >
                <div
                  className={`rounded-full p-4 mb-6 ${
                    selectedCard === "sobre" ? "bg-white" : ""
                  }`}
                  style={{
                    backgroundColor:
                      selectedCard === "sobre" ? "white" : "#255459",
                  }}
                >
                  <HealthcareIcon
                    className={`h-10 w-10`}
                    style={{
                      color: selectedCard === "sobre" ? "#255459" : "white",
                    }}
                  />
                </div>
                <h3
                  className={`font-medium text-lg ${
                    selectedCard === "sobre" ? "text-white" : "text-gray-700"
                  }`}
                >
                  SOBRE A TERAMED
                </h3>
              </div>

              <div
                className={`rounded-lg shadow-md p-8 flex flex-col items-center justify-center text-center cursor-pointer transition-all duration-200 ${
                  selectedCard === "missao"
                    ? "text-white"
                    : "bg-white hover:shadow-lg hover:bg-gray-100"
                }`}
                style={{
                  backgroundColor:
                    selectedCard === "missao" ? "#255459" : undefined,
                }}
                onClick={() => handleCardClick("missao")}
              >
                <div
                  className={`rounded-full p-4 mb-6 ${
                    selectedCard === "missao" ? "bg-white" : ""
                  }`}
                  style={{
                    backgroundColor:
                      selectedCard === "missao" ? "white" : "#255459",
                  }}
                >
                  <TargetIcon
                    className={`h-10 w-10`}
                    style={{
                      color: selectedCard === "missao" ? "#255459" : "white",
                    }}
                  />
                </div>
                <h3
                  className={`font-medium text-lg ${
                    selectedCard === "missao" ? "text-white" : "text-gray-700"
                  }`}
                >
                  MISSÃO
                </h3>
              </div>

              <div
                className={`rounded-lg shadow-md p-8 flex flex-col items-center justify-center text-center cursor-pointer transition-all duration-200 ${
                  selectedCard === "visao"
                    ? "text-white"
                    : "bg-white hover:shadow-lg hover:bg-gray-100"
                }`}
                style={{
                  backgroundColor:
                    selectedCard === "visao" ? "#255459" : undefined,
                }}
                onClick={() => handleCardClick("visao")}
              >
                <div
                  className={`rounded-full p-4 mb-6 ${
                    selectedCard === "visao" ? "bg-white" : ""
                  }`}
                  style={{
                    backgroundColor:
                      selectedCard === "visao" ? "white" : "#255459",
                  }}
                >
                  <EyeIcon
                    className={`h-10 w-10`}
                    style={{
                      color: selectedCard === "visao" ? "#255459" : "white",
                    }}
                  />
                </div>
                <h3
                  className={`font-medium text-lg ${
                    selectedCard === "visao" ? "text-white" : "text-gray-700"
                  }`}
                >
                  VISÃO
                </h3>
              </div>

              <div
                className={`rounded-lg shadow-md p-8 flex flex-col items-center justify-center text-center cursor-pointer transition-all duration-200 ${
                  selectedCard === "valores"
                    ? "text-white"
                    : "bg-white hover:shadow-lg hover:bg-gray-100"
                }`}
                style={{
                  backgroundColor:
                    selectedCard === "valores" ? "#255459" : undefined,
                }}
                onClick={() => handleCardClick("valores")}
              >
                <div
                  className={`rounded-full p-4 mb-6 ${
                    selectedCard === "valores" ? "bg-white" : ""
                  }`}
                  style={{
                    backgroundColor:
                      selectedCard === "valores" ? "white" : "#255459",
                  }}
                >
                  <ValuesIcon
                    className={`h-10 w-10`}
                    style={{
                      color: selectedCard === "valores" ? "#255459" : "white",
                    }}
                  />
                </div>
                <h3
                  className={`font-medium text-lg ${
                    selectedCard === "valores" ? "text-white" : "text-gray-700"
                  }`}
                >
                  VALORES
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function HealthcareIcon({
  className,
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      style={style}
    >
      <path d="M19 9h-5V4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9Z" />
      <path d="M17 2v5h5" />
      <path d="M11 14h2" />
      <path d="M12 11v6" />
    </svg>
  );
}

function TargetIcon({
  className,
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      style={style}
    >
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
      <path d="m22 2-5 5" />
      <path d="m2 22 5-5" />
    </svg>
  );
}

function EyeIcon({
  className,
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      style={style}
    >
      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
      <circle cx="12" cy="12" r="3" />
      <path d="M12 5V3" />
      <path d="M12 21v-2" />
      <path d="m15 7 1.5-1.5" />
      <path d="m7.5 7.5 1.5 1.5" />
      <path d="m7.5 16.5 1.5-1.5" />
      <path d="m16.5 16.5-1.5-1.5" />
    </svg>
  );
}

function ValuesIcon({
  className,
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      style={style}
    >
      <path d="M4 18V6c0-1 1-2 2-2h12c1 0 2 1 2 2v12c0 1-1 2-2 2H6c-1 0-2-1-2-2Z" />
      <circle cx="12" cy="10" r="3" />
      <path d="M12 13v3" />
      <path d="M10 15h4" />
    </svg>
  );
}
