export default function CareersSection() {
  return (
    <div className="relative h-[500px] w-full overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/Imagens/banner2.jpg')" }}
      >
        <div className="absolute inset-0 bg-[#255459] bg-opacity-50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-12 lg:px-24">
        <div className="max-w-3xl">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-8">
            JUNTA-TE A NÓS E
            <br />
            CONSTRÓI UMA
            <br />
            CARREIRA DE SUCESSO.
          </h2>
          <p className="text-white text-lg md:text-xl">
            Envie sua candidatura para o e-mail{" "}
            <a
              href="mailto:info@teramed.ao"
              className="text-white underline transition-colors duration-300"
            >
              info@teramed.ao
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
