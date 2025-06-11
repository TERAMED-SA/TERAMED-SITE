export default function SolutionsSection() {
  const solutions = [
    {
      title: "BAIKA CORPORATE",
      icon: <CorporateIcon />,
      description:
        "É a solução da Teramed, ajuda empresas e instituições a cuidarem da saúde dos seus colaboradores de forma moderna.",
    },
    {
      title: "TELEMEDICINA",
      icon: <TelemedicineIcon />,
      description:
        "Atendimento médico 24h ilimitado. Aqui, o utilizador pode consultar-se a qualquer hora com os nossos clínicos gerais.",
    },
    {
      title: "CLINICAS E HOSPITAIS",
      icon: <HospitalIcon />,
      description:
        "A Teramed implementa um sistema digital inteligente para marcação de consultas em unidades de saúde públicas e privadas.",
    },
  ];

  return (
    <div className="bg-white py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Nossas <span style={{ color: "#255459" }}>Soluções</span>
          </h2>
          <div
            className="w-32 h-1 mx-auto mt-2 mb-8"
            style={{ backgroundColor: "#255459" }}
          ></div>
          <p className="text-gray-700 max-w-3xl mx-auto">
            As soluções da <span className="font-bold">TERAMED</span> integram
            tecnologia e inovação para transformar o acesso à saúde.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-8 flex flex-col items-center text-center transition-all duration-300 hover:shadow-lg"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-6">
                {solution.title}
              </h3>
              <div className="mb-6 relative">
                <div
                  className="w-32 h-32 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "#255459" }}
                >
                  <div className="text-white w-16 h-16">{solution.icon}</div>
                </div>
                <div className="absolute inset-0 border-2 border-gray-100 rounded-full"></div>
              </div>
              <p className="text-gray-600">{solution.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function CorporateIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2a3 3 0 0 0-3 3v1h6V5a3 3 0 0 0-3-3Z" />
      <path d="M19 5H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Z" />
      <path d="M13 14H7a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2Z" />
      <path d="M19 14h-2a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2Z" />
      <circle cx="12" cy="8" r="1" />
      <path d="M7.5 12h9" />
      <path d="M11 16.5v3" />
      <path d="M17 16.5v3" />
    </svg>
  );
}

function TelemedicineIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="14" height="10" x="5" y="4" rx="1" />
      <path d="M12 14v4" />
      <path d="M8 18h8" />
      <path d="m9 7 2 2 4-4" />
      <path d="M7 14h1" />
      <path d="M16 14h1" />
    </svg>
  );
}

function HospitalIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 21h18" />
      <path d="M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16" />
      <path d="M9 21v-4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v4" />
      <path d="M10 9h4" />
      <path d="M12 7v4" />
    </svg>
  );
}
