"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import Image from "next/image";

export default function FAQSection() {
  const [openFAQ, setOpenFAQ] = useState<number>(0); // First FAQ is open by default

  const faqs = [
    {
      question: "Que tipos de soluções de sistemas de saúde a TERAMED oferece?",
      answer:
        "A TERAMED oferece soluções completas incluindo Baika Corporate para empresas, sistemas de telemedicina 24h, e plataformas digitais para marcação de consultas em clínicas e hospitais públicos e privados.",
    },
    {
      question: "Como funciona o sistema de telemedicina da TERAMED?",
      answer:
        "Nosso sistema de telemedicina permite consultas online 24 horas por dia com clínicos gerais através de uma plataforma digital segura e de fácil utilização, garantindo acesso à saúde a qualquer momento.",
    },
    {
      question: "O Baika Corporate é adequado para que tipo de empresas?",
      answer:
        "O Baika Corporate é ideal para empresas e instituições de todos os tamanhos que desejam cuidar da saúde dos seus colaboradores de forma moderna, eficiente e digital.",
    },
    {
      question:
        "Como posso implementar os sistemas da TERAMED na minha instituição?",
      answer:
        "Entre em contacto connosco através do info@teramed.ao ou +244 934 888 675. Nossa equipa técnica fará uma avaliação das suas necessidades e criará uma solução personalizada.",
    },
    {
      question:
        "Os sistemas da TERAMED são seguros e conformes com as regulamentações?",
      answer:
        "Sim, todos os nossos sistemas seguem os mais altos padrões de segurança de dados e são desenvolvidos em conformidade com as regulamentações de saúde digital em Angola.",
    },
    {
      question: "Que suporte técnico a TERAMED oferece após a implementação?",
      answer:
        "Oferecemos suporte técnico contínuo, treinamento para equipas, manutenção regular dos sistemas e atualizações para garantir o funcionamento otimizado das nossas soluções.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? -1 : index);
  };

  return (
    <div className="bg-gray-50 py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            FAQS
          </h2>
          <div
            className="w-16 h-1 mx-auto mb-6"
            style={{ backgroundColor: "#255459" }}
          ></div>
          <p className="text-gray-700 max-w-3xl mx-auto">
            Encontre aqui respostas para as perguntas mais frequentes sobre a{" "}
            <span className="font-bold">TERAMED</span>.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Image and CTA */}
          <div className="space-y-6">
            <div className="relative rounded-lg overflow-hidden">
              <Image
                src="/Imagens/nurse.png"
                alt="Healthcare professional ready to help"
                width={600}
                height={400}
                className="w-full h-80 object-cover"
              />
            </div>

            {/* Call to Action Box */}
            <div
              className="rounded-lg p-6 text-white"
              style={{ backgroundColor: "#255459" }}
            >
              <h3 className="text-xl font-semibold mb-2">Questões sobre ?</h3>
              <p className="text-white/90 mb-4">
                Procure atendimento especializado.
              </p>
              <a
                href="https://wa.me/244934888675"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-white px-6 py-2 rounded-md transition-colors duration-200 border border-white/30 hover:bg-white/30"
                style={{
                  backgroundColor: "rgba(255,255,255,0.2)",
                }}
              >
                Apoio ao Utente
              </a>
            </div>
          </div>

          {/* Right Column - FAQ Accordion */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-sm border border-gray-100"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                >
                  <span className="font-medium text-gray-800 pr-4">
                    {faq.question}
                  </span>
                  {openFAQ === index ? (
                    <Minus
                      className="h-5 w-5 flex-shrink-0"
                      style={{ color: "#255459" }}
                    />
                  ) : (
                    <Plus
                      className="h-5 w-5 flex-shrink-0"
                      style={{ color: "#255459" }}
                    />
                  )}
                </button>
                {openFAQ === index && (
                  <div className="px-6 pb-4">
                    <div className="pt-2 border-t border-gray-100">
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
