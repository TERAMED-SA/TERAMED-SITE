'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import {
  Phone,
  Mail,
  Users,
  Target,
  Eye,
  Heart,
  Building2,
  VideoIcon,
  Hospital,
  ChevronRight,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Stethoscope,
  Laptop,
} from 'lucide-react';
import HeroSection from '@/components/hero';
import AboutSection from '@/components/about';

export default function Home() {

  return (
    <div className="min-h-screen bg-white">
      <HeroSection />

      <AboutSection />

      <section className="py-16">
        <div className="container w-[80%] mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">
            Sector de Actuação
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-teal-500 to-teal-700 flex items-center justify-center">
                <Stethoscope className="h-16 w-16 text-white" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-4 text-teal-600">Saúde</h3>
                <p className="text-gray-600">
                  Soluções inovadoras para profissionais de saúde, clínicas e hospitais,
                  melhorando a qualidade do atendimento e a eficiência operacional.
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
                <Hospital className="h-16 w-16 text-white" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-4 text-blue-600">Saúde</h3>
                <p className="text-gray-600">
                  Gestão hospitalar avançada com sistemas integrados para otimizar
                  processos e melhorar a experiência do paciente.
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center">
                <Laptop className="h-16 w-16 text-white" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-4 text-purple-600">Tecnologia</h3>
                <p className="text-gray-600">
                  Desenvolvimento de software médico especializado, telemedicina e
                  soluções digitais para o futuro da saúde.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="w-[78%] mx-auto rounded-2xl py-20 bg-gradient-to-r from-slate-800 to-slate-900 text-white h-[32rem] relative overflow-hidden">

        <img src="/Imagens/2149611193.jpg" alt="" className='absolute -top-32 left-0' />
        <div className='fixed top-0 left-0 w-full bg-black z-50'></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl font-bold mb-8">
            CONFIE EM NÓS PARA AJUDAR TODOS<br />
            E FAZER COM QUE AS COISAS<br />
            FIQUEM BEM NOVAMENTE.
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Nossa equipe especializada está sempre pronta para oferecer as melhores
            soluções em tecnologia médica, garantindo excelência e confiabilidade.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container w-[80%] mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Nossas Soluções</h2>
            <p className="text-gray-600">
              As soluções da TERAMED oferecem tecnologia e inovação para transformar o sector da saúde.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-8 hover:shadow-xl transition-shadow">
              <div className="bg-teal-600 rounded-full p-6 w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <Building2 className="h-10 w-10 text-white" />
              </div>
              <CardTitle className="mb-4">BANCA CORPORATIVA</CardTitle>
              <CardDescription>
                Soluções financeiras especializadas para o setor de saúde,
                oferecendo serviços bancários corporativos adaptados às necessidades
                específicas de clínicas e hospitais.
              </CardDescription>
            </Card>

            <Card className="text-center p-8 hover:shadow-xl transition-shadow">
              <div className="bg-blue-600 rounded-full p-6 w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <VideoIcon className="h-10 w-10 text-white" />
              </div>
              <CardTitle className="mb-4">TELEMEDICINA</CardTitle>
              <CardDescription>
                Plataforma avançada de telemedicina que permite consultas remotas,
                monitoramento de pacientes e colaboração entre profissionais de saúde
                em tempo real.
              </CardDescription>
            </Card>

            <Card className="text-center p-8 hover:shadow-xl transition-shadow">
              <div className="bg-purple-600 rounded-full p-6 w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <Hospital className="h-10 w-10 text-white" />
              </div>
              <CardTitle className="mb-4">CLÍNICAS E HOSPITAIS</CardTitle>
              <CardDescription>
                Sistema integrado de gestão hospitalar que otimiza processos,
                melhora a experiência do paciente e aumenta a eficiência operacional
                das instituições de saúde.
              </CardDescription>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-teal-600 text-white">
        <div className="container w-[80%] mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                JUNTA-TE A NÓS E<br />
                CONSTRÓI UMA<br />
                CARREIRA DE SUCESSO.
              </h2>
              <p className="text-xl text-teal-100 mb-8">
                Estás uma oportunidade para te juntar à nossa empresa e
                construir uma carreira de sucesso no setor da saúde.
              </p>
              <Button size="lg" className="bg-white text-teal-600 hover:bg-gray-100">
                Ver Oportunidades
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/7578810/pexels-photo-7578810.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Medical career opportunities"
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container w-[80%] mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">FAQS</h2>
              <p className="text-gray-600 mb-8">
                Encontre respostas para as perguntas mais frequentes sobre a TERAMED.
              </p>
              <img
                src="https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Medical consultation"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>

            <div>
              <Accordion type="single" collapsible className="space-y-2">
                <AccordionItem value="item-1" className="bg-white py-2 rounded-lg px-6">
                  <AccordionTrigger className="text-left">
                    Que serviços oferece a TERAMED?
                  </AccordionTrigger>
                  <AccordionContent>
                    A TERAMED oferece soluções tecnológicas completas para o setor da saúde,
                    incluindo sistemas de gestão hospitalar, telemedicina, e soluções de
                    banca corporativa especializadas.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="bg-white py-2 rounded-lg px-6">
                  <AccordionTrigger className="text-left">
                    Que tipos de clientes atendem?
                  </AccordionTrigger>
                  <AccordionContent>
                    Atendemos clínicas, hospitais, consultórios médicos, laboratórios e
                    profissionais de saúde independentes que buscam soluções tecnológicas
                    inovadoras.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="bg-white py-2 rounded-lg px-6">
                  <AccordionTrigger className="text-left">
                    Como posso entrar em contacto?
                  </AccordionTrigger>
                  <AccordionContent>
                    Pode contactar-nos através do nosso telefone +351 234 567 890,
                    email contato@teramed.pt ou visitando o nosso escritório em Lisboa.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className="bg-white py-2 rounded-lg px-6">
                  <AccordionTrigger className="text-left">
                    O que faz única a TERAMED?
                  </AccordionTrigger>
                  <AccordionContent>
                    Nossa experiência de mais de uma década, tecnologia de ponta,
                    e foco exclusivo no setor da saúde nos permite oferecer soluções
                    verdadeiramente especializadas e eficazes.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5" className="bg-white py-2 rounded-lg px-6">
                  <AccordionTrigger className="text-left">
                    Oferecem suporte técnico?
                  </AccordionTrigger>
                  <AccordionContent>
                    Sim, oferecemos suporte técnico especializado 24/7 para garantir
                    que nossos clientes tenham sempre o apoio necessário para suas operações.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6" className="bg-white py-2 rounded-lg px-6">
                  <AccordionTrigger className="text-left">
                    É que têm uma aplicação móvel?
                  </AccordionTrigger>
                  <AccordionContent>
                    Sim, desenvolvemos aplicações móveis especializadas que permitem
                    aos profissionais de saúde acessar suas ferramentas de trabalho
                    em qualquer lugar.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-slate-900 text-white pt-16 pb-8">
        <div className="container w-[80%] mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-teal-400 mb-6">TERAMED</h3>
              <p className="text-gray-300 mb-6">
                Soluções tecnológicas inovadoras para transformar o futuro da saúde
                com excelência e confiabilidade.
              </p>
              <div className="flex space-x-4">
                <Facebook className="h-6 w-6 text-gray-400 hover:text-teal-400 cursor-pointer transition-colors" />
                <Twitter className="h-6 w-6 text-gray-400 hover:text-teal-400 cursor-pointer transition-colors" />
                <Linkedin className="h-6 w-6 text-gray-400 hover:text-teal-400 cursor-pointer transition-colors" />
                <Instagram className="h-6 w-6 text-gray-400 hover:text-teal-400 cursor-pointer transition-colors" />
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Sector de Actuação</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-teal-400 transition-colors">Saúde</a></li>
                <li><a href="#" className="hover:text-teal-400 transition-colors">Tecnologia</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Links Úteis</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-teal-400 transition-colors">Sobre</a></li>
                <li><a href="#" className="hover:text-teal-400 transition-colors">Soluções</a></li>
                <li><a href="#" className="hover:text-teal-400 transition-colors">Sector de actuação</a></li>
                <li><a href="#" className="hover:text-teal-400 transition-colors">Nossas Soluções</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Atendimento</h4>
              <div className="space-y-3 text-gray-300">
                <p>Segunda-feira - Domingo 24h</p>
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span>+351 234 567 890</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <span>contato@teramed.pt</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; Copyright 2024. Todos os direitos reservados pela Empresa Comercial de Saúde, SA</p>
          </div>
        </div>
      </footer>
    </div>
  );
}