"use client";

import { Phone } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gray-100">
      {/* Main Footer Content */}
      <div className="py-12 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Sector de Actuação */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Sector de Actuação
                <div className="w-12 h-0.5 bg-[#255459] mt-1"></div>
              </h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#sector"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection("sector");
                    }}
                    className="text-gray-600 hover:text-[#255459] transition-colors duration-200 cursor-pointer"
                  >
                    Saúde
                  </a>
                </li>
                <li>
                  <a
                    href="#sector"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection("sector");
                    }}
                    className="text-gray-600 hover:text-[#255459] transition-colors duration-200 cursor-pointer"
                  >
                    Tecnologia
                  </a>
                </li>
              </ul>
            </div>

            {/* Links Úteis */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Links Úteis
                <div className="w-12 h-0.5 bg-[#255459] mt-1"></div>
              </h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#inicio"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection("inicio");
                    }}
                    className="text-gray-600 hover:text-[#255459] transition-colors duration-200 cursor-pointer"
                  >
                    Início
                  </a>
                </li>
                <li>
                  <a
                    href="#sobre"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection("sobre");
                    }}
                    className="text-gray-600 hover:text-[#255459] transition-colors duration-200 cursor-pointer"
                  >
                    Sobre nós
                  </a>
                </li>
                <li>
                  <a
                    href="#sector"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection("sector");
                    }}
                    className="text-gray-600 hover:text-[#255459] transition-colors duration-200 cursor-pointer"
                  >
                    Sector de actuação
                  </a>
                </li>
                <li>
                  <a
                    href="#solucoes"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection("solucoes");
                    }}
                    className="text-gray-600 hover:text-[#255459] transition-colors duration-200 cursor-pointer"
                  >
                    Nossas soluções
                  </a>
                </li>
              </ul>
            </div>

            {/* Atendimento */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Atendimento
                <div className="w-12 h-0.5 bg-[#255459] mt-1"></div>
              </h3>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                Entre em contacto connosco para atendimento especializado e
                suporte técnico.
              </p>
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 px-4 py-2 border-2 border-[#255459] rounded-md">
                  <Phone className="h-4 w-4 text-[#255459]" />
                  <a
                    href="tel:+244934888675"
                    className="text-[#255459] font-semibold"
                  >
                    +244 934 886 675
                  </a>
                </div>
                <div className="mt-2">
                  <a
                    href="https://wa.me/244934886675"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-[#255459] text-white px-4 py-2 rounded-md hover:bg-[#1f4248] transition-colors duration-200"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>

            {/* Logo */}
            <div className="flex justify-center lg:justify-end">
              <div className="text-center">
                <div className="inline-block">
                  <Image
                    src="/Imagens/logo2.png"
                    alt="Teramed Logo"
                    className="h-16 w-auto mb-2 cursor-pointer"
                    width={100}
                    height={100}
                    onClick={() => scrollToSection("inicio")}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="bg-slate-800 py-4 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <p className="text-white text-sm mb-2 md:mb-0">
            © Copyright 2025. Todos os direitos reservados por{" "}
            <span className="font-semibold">Teramed Sistemas de Saúde, SA</span>
          </p>
          <div className="flex gap-4">
            <a
              href="mailto:info@teramed.ao"
              className="text-white text-sm hover:text-green-300 transition-colors duration-200"
            >
              Contacto
            </a>
            <a
              href="https://wa.me/244934886675"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-sm hover:text-green-300 transition-colors duration-200"
            >
              Suporte
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
