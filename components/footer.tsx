import { Phone } from "lucide-react";
import Image from "next/image";

export default function Footer() {
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
                    href="#"
                    className="text-gray-600 hover:text-teal-800 transition-colors duration-200"
                  >
                    Saúde
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-teal-800 transition-colors duration-200"
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
                    href="#"
                    className="text-gray-600 hover:text-teal-800 transition-colors duration-200"
                  >
                    Início
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-teal-800 transition-colors duration-200"
                  >
                    Sobre nós
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-teal-800 transition-colors duration-200"
                  >
                    Sector de actuação
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-teal-800 transition-colors duration-200"
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
                Excelência decisivamente não homem ainda impressão para
                contrastado notavelmente.
              </p>
              <div className="inline-flex items-center gap-2 px-4 py-2 border-2 border-teal-800 rounded-md">
                <Phone className="h-4 w-4 text-teal-800" />
                <a
                  href="tel:+244934888675"
                  className="text-teal-800 font-semibold"
                >
                  +244 934 888 675
                </a>
              </div>
            </div>

            {/* Logo */}
            <div className="flex justify-center lg:justify-end">
              <div className="text-center">
                <div className="inline-block">
                  <Image
                    src="/Imagens/logo2.png"
                    alt="Teramed Logo"
                    className="h-16 w-auto mb-2"
                    width={100}
                    height={100}
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
              href="#"
              className="text-white text-sm hover:text-teal-300 transition-colors duration-200"
            >
              Licença
            </a>
            <a
              href="#"
              className="text-white text-sm hover:text-teal-300 transition-colors duration-200"
            >
              Suporte
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
