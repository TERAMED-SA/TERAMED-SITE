"use client";
import { Check } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function SectorSection() {
  const [selectedSector, setSelectedSector] = useState<"saude" | "tecnologia">(
    "tecnologia"
  );

  const sectorContent = {
    saude: {
      title: "Saúde",
      description:
        "O sector da saúde é essencial para o bem-estar e a qualidade de vida da população. Envolve a prestação de serviços médicos, prevenção de doenças, tratamentos e acompanhamento contínuo de pacientes. Com a evolução das necessidades da sociedade, a inovação e a acessibilidade tornaram-se fundamentais para melhorar a eficiência dos cuidados de saúde.",
      image: "/Imagens/pos_banner.jpg",
      imageAlt: "Médica trabalhando no laptop",
      tipsTitle: "Dicas de Saúde",
      tips: [
        "As pessoas antigas são removidas",
        "As pessoas antigas são removidas",
        "As pessoas antigas são removidas",
      ],
      tipText:
        "Ampla encomenda pronta. O tempo cego tinha agora aqueles que deviam ser definidos com frequência. Ou confortável, sem graça, ele mostra um desejo mais verdadeiro. Não, em muitos nega-se a falta do mal. Em tal espírito uma mãe. Montou velho estritamente mas marianne admitiu. As pessoas antigas são removidas, permanecemos louvamos.",
      specialist: {
        image: "/Imagens/specialist.jpeg",
        name: "Dra. Josiane Alves",
        role: "Clínica Geral",
        quote: "É mais fácil cuidar da saúde todos os dias Com a ajuda da tecnologia, Prevenir é o primeiro passo para viver melhor."
      }
    },
    tecnologia: {
      title: "Tecnologia",
      description:
        "A tecnologia é a força motriz da transformação digital em diversos sectores, incluindo a saúde. Por meio de soluções inovadoras, como telemedicina, inteligência artificial e automação de processos, a tecnologia possibilita maior eficiência, conectividade e acessibilidade, revolucionando a forma como os serviços de saúde são prestados.",
      image: "/Imagens/2149611193.jpg",
      imageAlt: "Mãos com sobreposição tecnológica digital",
      tipsTitle: "Dicas de Tecnologia",
      tips: [
        "As pessoas antigas são removidas",
        "As pessoas antigas são removidas",
        "As pessoas antigas são removidas",
      ],
      tipText:
        "Ampla encomenda pronta. O tempo cego tinha agora aqueles que deviam ser definidos com frequência. Ou confortável, sem graça, ele mostra um desejo mais verdadeiro. Não, em muitos nega-se a falta do mal. Em tal espírito uma mãe. Montou velho estritamente mas marianne admitiu. As pessoas antigas são removidas, permanecemos louvamos.",
      specialist: {
        image: "/Imagens/carlosmarques.png",
        name: "Carlos Marques",
        role: "CTO",
        quote: "Quando aliamos a saúde às novas tecnologias, não só otimizamos diagnósticos e tratamentos, como também aproximamos o cuidado médico das pessoas — é o futuro a serviço da vida."
      }
    },
  };

  const currentContent = sectorContent[selectedSector];

  return (
    <div className="bg-gray-50 px-6 md:px-12 lg:px-24 pt-16 pb-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column - Sector Selection */}
          <div className="lg:col-span-3">
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  Sector
                </h2>
                <h3 className="text-3xl font-bold text-gray-900">
                  de Actuação
                </h3>
                <div
                  className="w-16 h-1 mt-2"
                  style={{ backgroundColor: "#255459" }}
                ></div>
              </div>

              <div className="space-y-4"> 
                <button
                  onClick={() => setSelectedSector("tecnologia")}
                  className={`w-full p-6 rounded-lg text-xl font-semibold transition-all duration-200 ${
                    selectedSector === "tecnologia"
                      ? "text-white"
                      : "bg-white text-gray-700 border border-gray-200 hover:shadow-md"
                  }`}
                  style={{
                    backgroundColor:
                      selectedSector === "tecnologia" ? "#255459" : undefined,
                  }}
                >
                  Tecnologia
                </button>
                <button
                  onClick={() => setSelectedSector("saude")}
                  className={`w-full p-6 rounded-lg text-xl font-semibold transition-all duration-200 ${
                    selectedSector === "saude"
                      ? "text-white"
                      : "bg-white text-gray-700 border border-gray-200 hover:shadow-md"
                  }`}
                  style={{
                    backgroundColor:
                      selectedSector === "saude" ? "#255459" : undefined,
                  }}
                >
                  Saúde
                </button>

               
              </div>
            </div>
          </div>

          {/* Center Column - Image and Description */}
          <div className="lg:col-span-6">
            <div className="space-y-6">
              <div className="relative rounded-lg overflow-hidden">
                <Image
                  src={currentContent.image || "/placeholder.svg"}
                  alt={currentContent.imageAlt}
                  width={600}
                  height={400}
                  className="w-full h-80 object-cover"
                />
              </div>

              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  {currentContent.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {currentContent.description}
                </p>
              </div>
            </div>
          </div>

         
          <div className="lg:col-span-3">
            <div
              className="rounded-lg p-6 text-white"
              style={{ backgroundColor: "#255459" }}
            >

               <div className="space-y-4 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                    <Image
                      src={currentContent.specialist.image}
                      alt={currentContent.specialist.name}
                      width={58}
                      height={58}
                      className="rounded-full"
                    />
                  </div>
                  <div>
                    <p className="font-medium">{currentContent.specialist.name}</p>
                    <p className="text-sm text-white/80">{currentContent.specialist.role}</p>
                  </div>
                </div>
              </div>


              <p className="text-sm text-white/90 mb-6 leading-relaxed">
               {currentContent.specialist.quote}
              </p>

              {/* <div className="space-y-3">
                {currentContent.tips.map((tip, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="bg-white rounded-full p-1 flex-shrink-0">
                      <Check className="h-3 w-3" style={{ color: "#255459" }} />
                    </div>
                    <span className="text-sm">{tip}</span>
                  </div>
                ))}
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
