"use client";
import AboutUs from "@/components/about";
import CareersSection from "@/components/carrers-section";
import FAQSection from "@/components/faq-section";
import FidelitySection from "@/components/fidelity-section";
import Footer from "@/components/footer";
import SectorSection from "@/components/sector-section";
import SolutionsSection from "@/components/solutions-section";
import { Button } from "@/components/ui/button";
import { Search, Menu, MapPin, Mail, Phone, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function Component() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false); // Close mobile menu after navigation
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header Bar - Melhorado para responsividade */}
      <div className="bg-slate-800 text-white py-2 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Desktop Layout */}
          <div className="hidden md:flex justify-between items-center text-sm">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 flex-shrink-0" />
              <span className="truncate">Edifício Prometeus, Talatona, Luanda</span>
            </div>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span>info@teramed.ao</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>+244 934 886 675</span>
              </div>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="md:hidden">
            <div className="flex flex-col space-y-2 text-xs">
              <div className="flex items-center justify-center gap-2">
                <MapPin className="w-3 h-3 flex-shrink-0" />
                <span className="text-center">Edifício Prometeus, Talatona, Luanda</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1">
                  <Mail className="w-3 h-3 flex-shrink-0" />
                  <span className="text-xs">info@teramed.ao</span>
                </div>
                <div className="flex items-center gap-1">
                  <Phone className="w-3 h-3 flex-shrink-0" />
                  <span className="text-xs">+244 934 886 675</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-white shadow-sm py-4 px-4 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <Image
              src="/Imagens/logo.png"
              alt="TERÁMED Logo"
              width={120}
              height={40}
              className="h-8 md:h-10 w-auto cursor-pointer"
              onClick={() => scrollToSection("inicio")}
            />
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#inicio"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("inicio");
              }}
              className="text-gray-700 hover:text-[#255459] font-medium transition-colors cursor-pointer"
            >
              INÍCIO
            </a>
            <a
              href="#sobre"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("sobre");
              }}
              className="text-gray-700 hover:text-[#255459] font-medium transition-colors cursor-pointer"
            >
              SOBRE
            </a>
            <a
              href="#sector"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("sector");
              }}
              className="text-gray-700 hover:text-[#255459] font-medium transition-colors cursor-pointer"
            >
              SECTOR
            </a>
            <a
              href="#solucoes"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("solucoes");
              }}
              className="text-gray-700 hover:text-[#255459] font-medium transition-colors cursor-pointer"
            >
              SOLUÇÕES
            </a>
            <a
              href="#carreiras"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("carreiras");
              }}
              className="text-gray-700 hover:text-[#255459] font-medium transition-colors cursor-pointer"
            >
              CARREIRAS
            </a>
          </div>

          <div className="flex items-center gap-3">
            <button
              className="md:hidden text-gray-600 cursor-pointer"
              onClick={toggleMenu}
            >
              {isMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Sidebar */}
        {isMenuOpen && (
          <>
            {/* Overlay */}
            <div
              className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
              onClick={() => setIsMenuOpen(false)}
            />

            {/* Sidebar */}
            <div className="fixed top-0 right-0 h-full w-80 bg-white shadow-lg z-50 md:hidden transform transition-transform duration-300 ease-in-out">
              <div className="p-6">
                {/* Header */}
                <div className="flex justify-between items-center mb-8">
                  <Image
                    src="/Imagens/logo.png"
                    alt="TERÁMED Logo"
                    width={120}
                    height={40}
                    className="h-8 w-auto"
                  />
                  <button
                    onClick={() => setIsMenuOpen(false)}
                    className="text-gray-600"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Navigation Links */}
                <nav className="space-y-6">
                  <a
                    href="#inicio"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection("inicio");
                    }}
                    className="block text-gray-700 hover:text-[#255459] font-medium transition-colors cursor-pointer py-2 border-b border-gray-100"
                  >
                    INÍCIO
                  </a>
                  <a
                    href="#sobre"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection("sobre");
                    }}
                    className="block text-gray-700 hover:text-[#255459] font-medium transition-colors cursor-pointer py-2 border-b border-gray-100"
                  >
                    SOBRE
                  </a>
                  <a
                    href="#sector"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection("sector");
                    }}
                    className="block text-gray-700 hover:text-[#255459] font-medium transition-colors cursor-pointer py-2 border-b border-gray-100"
                  >
                    SECTOR
                  </a>
                  <a
                    href="#solucoes"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection("solucoes");
                    }}
                    className="block text-gray-700 hover:text-[#255459] font-medium transition-colors cursor-pointer py-2 border-b border-gray-100"
                  >
                    SOLUÇÕES
                  </a>
                  <a
                    href="#carreiras"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection("carreiras");
                    }}
                    className="block text-gray-700 hover:text-[#255459] font-medium transition-colors cursor-pointer py-2 border-b border-gray-100"
                  >
                    CARREIRAS
                  </a>
                </nav>

                {/* Contact Information */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h3 className="text-sm font-semibold text-gray-900 mb-4">
                    CONTACTO
                  </h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-[#255459]" />
                      <a href="tel:+244934888675" className="text-gray-600">
                        +244 934 886 675
                      </a>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-[#255459]" />
                      <a
                        href="mailto:info@teramed.ao"
                        className="text-gray-600"
                      >
                        info@teramed.ao
                      </a>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-[#255459]" />
                      <span className="text-gray-600">
                       Edifício Prometeus, Talatona, Luanda
                      </span>
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="mt-6">
                  <Button
                    className="w-full bg-[#255459] hover:bg-[#1f4248] text-white px-6 py-3 rounded-md"
                    onClick={() => {
                      window.location.href = "mailto:info@teramed.ao";
                      setIsMenuOpen(false);
                    }}
                  >
                    Entre em contacto
                  </Button>
                </div>
              </div>
            </div>
          </>
        )}
      </nav>

      {/* Hero Section - Melhorado para responsividade */}
      <section
        id="inicio"
        className="relative bg-[#255459] text-white min-h-[600px] sm:min-h-[700px] md:min-h-[800px] flex items-center"
      >
        <div className="max-w-7xl mx-auto px-4 py-8 sm:py-12 md:py-16 lg:py-24 w-full">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Conteúdo de texto */}
            <div className="space-y-4 sm:space-y-6 order-2 lg:order-1">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                O futuro da saúde ao seu alcance, com soluções inteligente
              </h1>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-teal-100 leading-relaxed">
                Desenvolvemos soluções tecnológicas inovadoras para o sector da
                saúde, conectando pacientes e profissionais por meio de
                ferramentas eficientes, acessíveis e de alto padrão.
              </p>
              <div className="pt-2 sm:pt-4">
                <Button
                  className="bg-white text-[#255459] hover:bg-gray-100 px-6 sm:px-8 py-2 sm:py-3 text-base sm:text-lg font-medium rounded-full w-full sm:w-auto"
                  onClick={() =>
                    (window.location.href = "mailto:info@teramed.ao")
                  }
                >
                  Contacte-nos
                </Button>
              </div>
            </div>

            {/* Imagem */}
            <div className="relative order-1 lg:order-2">
              {/* Imagem visível em mobile também, mas menor */}
              <div className="block">
                <Image
                  src="/Imagens/banner.png"
                  alt="Three professional doctors in white coats"
                  width={600}
                  height={400}
                  className="w-full h-auto max-w-sm sm:max-w-md md:max-w-lg lg:max-w-full mx-auto"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="sobre" className="bg-white mt-16 sm:mt-24 md:mt-36 px-6 md:px-12 lg:px-24">
        <AboutUs />
      </section>
      <section id="sector" className="-mt-10 sm:-mt-16 md:-mt-20">
        <SectorSection />
      </section>
      <FidelitySection />
      <section id="solucoes">
        <SolutionsSection />
      </section>
      <section id="carreiras">
        <CareersSection />
      </section>
      <FAQSection />
      <Footer />
    </div>
  );
}
