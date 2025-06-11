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
      {/* Header Bar */}
      <div className="bg-slate-800 text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            <span>Via Luanda Sul, Luanda</span>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>info@teramed.ao</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>+244 934 888 675</span>
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
              className="h-10 w-auto cursor-pointer"
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
                        +244 934 888 675
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
                        Via Luanda Sul, Luanda
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

      {/* Hero Section */}
      <section
        id="inicio"
        className="relative bg-[#255459] text-white h-[800px]"
      >
        <div className="max-w-7xl mx-auto px-4 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="mb-20 lg:mb-40 space-y-6">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                O futuro da saúde ao seu alcance, com soluções inteligente
              </h1>
              <p className="text-lg lg:text-xl text-teal-100 leading-relaxed">
                Desenvolvemos soluções tecnológicas inovadoras para o sector da
                saúde, conectando pacientes e profissionais por meio de
                ferramentas eficientes, acessíveis e de alto padrão.
              </p>
              <Button
                className="bg-white text-[#255459] hover:bg-gray-100 px-8 py-3 text-lg font-medium rounded-full"
                onClick={() =>
                  (window.location.href = "mailto:info@teramed.ao")
                }
              >
                Contacte-nos
              </Button>
            </div>
            <div className="relative hidden lg:block">
              <Image
                src="/Imagens/banner.png"
                alt="Three professional doctors in white coats"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="sobre" className="bg-white mt-36 px-6 md:px-12 lg:px-24">
        <AboutUs />
      </section>
      <section id="sector" className="-mt-20">
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
