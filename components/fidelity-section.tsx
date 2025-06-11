import Image from "next/image";

export default function FidelitySection() {
  return (
    <div className="relative h-screen max-h-[500px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <video
          src="/Videos/6426922_People_Animation_1280x720.mp4"
          autoPlay
          loop
          muted
          className="w-full h-full object-cover"
          style={{ filter: "brightness(0.5)" }}
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 md:px-12 lg:px-24 max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-2xl lg:text-3xl xl:text-5xl font-bold text-white leading-tight">
          CONFIE EM NÓS PARA AJUDAR TODOS
          <br />E FAZER COM QUE AS COISAS
          <br />
          FIQUEM BEM NOVAMENTE.
        </h1>
      </div>

      {/* Animated elements to enhance the tech feel */}
      <div className="absolute inset-0 z-5 pointer-events-none">
        {/* Floating tech elements */}
        <div
          className="absolute top-1/4 left-1/4 w-4 h-4 rounded-full animate-pulse"
          style={{ backgroundColor: "rgba(33, 151, 78, 0.3)" }}
        ></div>
        <div
          className="absolute top-1/3 right-1/4 w-6 h-6 rounded-full animate-pulse delay-1000"
          style={{ backgroundColor: "rgba(33, 151, 78, 0.2)" }}
        ></div>
        <div
          className="absolute bottom-1/3 left-1/3 w-3 h-3 rounded-full animate-pulse delay-500"
          style={{ backgroundColor: "rgba(33, 151, 78, 0.4)" }}
        ></div>
        <div
          className="absolute bottom-1/4 right-1/3 w-5 h-5 rounded-full animate-pulse delay-1500"
          style={{ backgroundColor: "rgba(33, 151, 78, 0.25)" }}
        ></div>
      </div>
    </div>
  );
}
