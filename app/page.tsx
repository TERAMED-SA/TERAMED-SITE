"use client";
import AboutUs from "@/components/about";
import CareersSection from "@/components/carrers-section";
import FAQSection from "@/components/faq-section";
import FidelitySection from "@/components/fidelity-section";
import Footer from "@/components/footer";
import SectorSection from "@/components/sector-section";
import SolutionsSection from "@/components/solutions-section";
import { Button } from "@/components/ui/button";
import { Search, Menu, MapPin, Mail, Phone } from "lucide-react";
import Image from "next/image";

export default function Component() {
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
      <nav className="bg-white shadow-sm py-4 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <Image
              src="/Imagens/logo.png"
              alt="TERÁMED Logo"
              width={120}
              height={40}
              className="h-10 w-auto"
            />
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#"
              className="text-gray-700 hover:text-[#255459] font-medium"
            >
              INÍCIO
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-[#255459] font-medium"
            >
              SOBRE
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-[#255459] font-medium"
            >
              SECTOR
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-[#255459] font-medium"
            >
              SOLUÇÕES
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-[#255459] font-medium"
            >
              CARREIRAS
            </a>
          </div>

          <div className="flex items-center gap-3">
            <Search className="w-5 h-5 text-gray-600 cursor-pointer" />
            <Menu className="w-5 h-5 text-gray-600 cursor-pointer" />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative bg-[#255459] text-white h-[800px]">
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
      </div>

      <AboutUs />
      <SectorSection />
      <FidelitySection />
      <SolutionsSection />
      <CareersSection />
      <FAQSection />
      <Footer />
    </div>
  );
}
