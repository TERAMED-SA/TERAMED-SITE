import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, MapPin, Mail, Phone, Shield, User, Users, HomeIcon, GraduationCap, Menu, X } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <header className="z-50 bg-white/10 backdrop-blur sticky top-0">
        <div className="w-full bg-white py-4 backdrop-blur-lg ">
          <div className="container w-[80%] mx-auto px-4 flex justify-between items-center text-sm text-white">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <MapPin className="h-4 w-4 text-slate-900" />
                <span className="text-slate-900 font-semibold">Via Luanda Sul, Luanda</span>
              </div>
              <div className="flex items-center space-x-1">
                <Mail className="h-4 w-4 text-slate-900" />
                <span className="text-slate-900 font-semibold">info@teramed.ao</span>
              </div>
            </div>
            <div className="flex items-center space-x-1">
              <Phone className="h-4 w-4 text-slate-900" />
              <span className="text-slate-900 font-semibold">+244 934 888 675</span>
            </div>
          </div>
        </div>

        <div className="bg-teal-900 backdrop-blur-md">
          <nav className="py-4">
            <div className="container w-[80%] mx-auto px-4 flex justify-between items-center text-white">
              <div className="text-2xl font-bold text-teal-400">
                <Image alt="logo" src="/Icones/LOGO TERAMED 2.png" width={50} height={100} className="scale-[4] ml-10 " />
              </div>
              <div className="hidden md:flex space-x-8">
                <a href="#" className="hover:text-teal-400 transition-colors">INICIO</a>
                <a href="#" className="hover:text-teal-400 transition-colors">SOBRE</a>
                <a href="#" className="hover:text-teal-400 transition-colors">SECTOR</a>
                <a href="#" className="hover:text-teal-400 transition-colors">SOLUCOES</a>
                <a href="#" className="hover:text-teal-400 transition-colors">CARREIRAS</a>
              </div>
              <div className="hidden md:block">
                <Button className="bg-teal-500 hover:bg-teal-600 rounded-3xl py-2 text-white px-6">Entre em contacto</Button>
              </div>
              <button className="md:hidden text-white" onClick={toggleMenu}>
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
            {isMenuOpen && (
              <div className="md:hidden bg-slate-800 py-4">
                <div className="container w-[80%] mx-auto px-4 flex flex-col space-y-2 text-white">
                  <a href="#" className="py-2 hover:text-teal-400 transition-colors">Service</a>
                  <a href="#" className="py-2 hover:text-teal-400 transition-colors">Specialities</a>
                  <a href="#" className="py-2 hover:text-teal-400 transition-colors">How it work</a>
                  <a href="#" className="py-2 hover:text-teal-400 transition-colors">About</a>
                  <a href="#" className="py-2 hover:text-teal-400 transition-colors">Contact</a>
                  <Button className="bg-teal-500 hover:bg-teal-600 text-white px-6 mt-4 w-fit">Entre em contacto</Button>
                </div>
              </div>
            )}
          </nav>
        </div>
      </header>

      <section className="bg-gradient-to-r absolute top-0 left-0 from-teal-600 to-teal-800 text-white py-20  overflow-hidden">
        <div className="container w-[80%] mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-26 items-center">
            <div className="relative z-10 w-[90%]">
              <h1 className="text-4xl md:text-5xl font-semibold mb-6 leading-tight">
                O futuro da saúde ao seu alcance com soluções inteligentes.
              </h1>
              <p className="text-xl mb-8 text-teal-100 leading-relaxed">
                Desenvolvemos soluções tecnológicas inovadoras para o sector da saúde, conectando pacientes e profissionais por meio de ferramentas eficientes, acessíveis e de alto padrão.
              </p>
            </div>
            <div className="relative flex justify-center">
              <div className="relative mt-10">
                <img
                  src="/Imagens/banner.png"
                  alt="Professional therapist"
                  className="rounded-lg max-w-full h-auto w-[32rem] object-cover"
                  id="hero-image"
                />
                {/* Caixa 1 - Direita */}
                <div
                  className="absolute animate-float1 top-24 -right-32 bg-white/20 backdrop-blur-lg rounded-lg p-3 text-white shadow-lg"
                  style={{ width: 160 }}
                >
                  <div className="flex items-center space-x-2">
                    <Shield className="h-4 w-4" />
                    <div className="text-sm">
                      <div className="font-semibold">24/7 customer</div>
                      <div>support</div>
                    </div>
                  </div>
                  {/* Linha SVG */}
                  <svg
                    className="absolute pointer-events-none"
                    style={{ left: '-60px', top: '30px' }}
                    width="60"
                    height="2"
                  >
                    <line
                      x1="60"
                      y1="1"
                      x2="0"
                      y2="1"
                      stroke="white"
                      strokeWidth="2"
                      strokeDasharray="4 2"
                    />
                  </svg>
                </div>

                {/* Caixa 2 - Esquerda */}
                <div
                  className="absolute animate-float2 top-56 -left-32 bg-white/20 backdrop-blur-lg rounded-lg p-3 text-white shadow-lg"
                  style={{ width: 260 }}
                >
                  <div className="flex flex-col justify-center space-x-2">
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="flex -space-x-2">
                        <img
                          src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=50"
                          alt="User 1"
                          className="w-8 h-8 rounded-full border-2 border-white object-cover" />
                        <img
                          src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=50"
                          alt="User 2"
                          className="w-8 h-8 rounded-full border-2 border-white object-cover" />
                        <img
                          src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=50"
                          alt="User 1"
                          className="w-8 h-8 rounded-full border-2 border-white object-cover" />
                        <img
                          src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=50"
                          alt="User 2"
                          className="w-8 h-8 rounded-full border-2 border-white object-cover" />
                        <img
                          src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=50"
                          alt="User 3"
                          className="w-8 h-8 rounded-full border-2 border-white object-cover" />
                        <div className="w-8 h-8 rounded-full bg-teal-500 border-2 border-white flex items-center justify-center text-xs font-bold">
                          75K
                        </div>
                      </div>
                    </div>
                    <div className="text-sm">
                      <div className="font-semibold">Satisfied users</div>
                      <div>globally</div>
                    </div>
                  </div>
                  {/* Linha SVG */}
                  <svg
                    className="absolute pointer-events-none"
                    style={{ right: '-60px', top: '30px' }}
                    width="60"
                    height="2"
                  >
                    <line
                      x1="0"
                      y1="1"
                      x2="60"
                      y2="1"
                      stroke="white"
                      strokeWidth="2"
                      strokeDasharray="4 2"
                    />
                  </svg>
                </div>

                {/* Caixa 3 - Baixo */}
                <div
                  className="absolute animate-float3 bottom-0 left-1/2 -translate-x-1/2 bg-white/20 backdrop-blur-lg rounded-lg p-4 text-white shadow-lg"
                  style={{ width: 200 }}
                >
                  <div className="flex items-center space-x-2 mb-2">
                    <Users className="h-4 w-4" />
                    <span className="font-semibold">+75K Usuários</span>
                  </div>
                  {/* Linha SVG */}
                  <svg
                    className="absolute pointer-events-none"
                    style={{ top: '-30px', left: '50%', transform: 'translateX(-50%)' }}
                    width="2"
                    height="30"
                  >
                    <line
                      x1="1"
                      y1="30"
                      x2="1"
                      y2="0"
                      stroke="white"
                      strokeWidth="2"
                      strokeDasharray="4 2"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mt-16">
            {[{
              title: "Individual Counselling",
              description: "Individual counselling provides personalised support.",
              icon: <User className="h-6 w-6 text-teal-200" />
            }, {
              title: "Couple Counselling",
              description: "Every couple, at one point or another, faces challenges.",
              icon: <Users className="h-6 w-6 text-teal-200" />
            }, {
              title: "Family Counselling",
              description: "Family counselling plays a crucial role in promoting.",
              icon: <HomeIcon className="h-6 w-6 text-teal-200" />
            }, {
              title: "Teens Counselling",
              description: "Your space to talk about what's going on.",
              icon: <GraduationCap className="h-6 w-6 text-teal-200" />
            }].map((item, idx) => (
              <Card key={idx} className="bg-white/20 backdrop-blur-lg border-white/20 text-white hover:bg-white/20 transition-all duration-300 shadow-lg hover:scale-125 hover:z-50">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    {item.icon}
                    <h3 className="font-semibold">{item.title}</h3>
                  </div>
                  <p className="text-teal-100 text-sm mb-4">{item.description}</p>
                  <Button variant="ghost" size="sm" className="text-white hover:bg-white/20 p-0">
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section >
    </>
  );
}
