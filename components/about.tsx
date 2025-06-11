import { Target, Users } from "lucide-react";
import { Badge } from "./ui/badge";
import { Card } from "./ui/card";

export default function AboutSection() {
  return (
    <section className="py-16 bg-gray-50 mt-[66rem]">
      <div className="container w-[80%] mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Badge className="mb-4 bg-teal-100 text-teal-800 px-2 font-bold">TRABALHANDO DESDE 2014</Badge>
            <h2 className="text-5xl font-bold mb-6 text-gray-900">
              Ter uma boa saúde é o seu melhor investimento
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Com mais de uma década de experiência no setor da saúde, nós nos dedicamos
              a oferecer as melhores soluções tecnológicas para transformar a maneira como
              os cuidados de saúde são entregues. Nossa missão é criar um futuro onde a
              tecnologia e a medicina trabalhem juntas para proporcionar cuidados
              excepcionais e acessíveis a todos.
            </p>
            <div className="flex items-center space-x-4 text-sm text-gray-500">
              <div className="flex items-center space-x-1">
                <Users className="h-4 w-4" />
                <span>Tecnologia de Alto Padrão</span>
              </div>
              <div className="flex items-center space-x-1">
                <Target className="h-4 w-4" />
                <span>Experiência e Especialização</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <Card className="text-center h-52 flex flex-col justify-center items-center p-6 duration-300 hover:scale-110 hover:shadow-lg transition-shadow shadow-none border-none">
              <div className="bg-teal-600 rounded-full p-4 w-24 h-24 mx-auto mb-4 flex items-center justify-center">
                <img className='' src="/Icones/healthcare (1).png" alt="" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">SOBRE A TERAMED</h3>
            </Card>

            <Card className="text-center h-52 flex flex-col justify-center items-center p-6 duration-300 hover:scale-110 hover:shadow-lg transition-shadow shadow-none border-none">
              <div className="bg-teal-600 rounded-full p-4 w-24 h-24 mx-auto mb-4 flex items-center justify-center">
                <img className='' src="/Icones/target (1).png" alt="" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">MISSÃO</h3>
            </Card>

            <Card className="text-center h-52 bg-teal-800 flex flex-col justify-center items-center p-6 duration-300 hover:scale-110 hover:shadow-lg transition-shadow shadow-none border-none">
              <div className="bg-white rounded-full p-4 w-24 h-24  mx-auto mb-4 flex items-center justify-center">
                <img className='' src="/Icones/eye (1).png" alt="" />
              </div>
              <h3 className="font-semibold text-white mb-2">VISÃO</h3>
            </Card>

            <Card className="text-center h-52 flex flex-col justify-center items-center p-6 duration-300 hover:scale-110 hover:shadow-lg transition-shadow shadow-none border-none">
              <div className="bg-teal-600 rounded-full p-4 w-24 h-24 mx-auto mb-4 flex items-center justify-center">
                <img className='' src="/Icones/achievement.png" alt="" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">VALORES</h3>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}