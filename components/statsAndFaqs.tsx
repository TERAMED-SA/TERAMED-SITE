import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function StatsAndFaq() {
  return (
    <section className="w-full bg-white text-gray-900 py-20 px-6">
      <div className="w-[80%] mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <div className="shadow-2xl p-3 rounded-md">
            <h4 className="text-4xl font-bold" style={{ color: "#21974E" }}>
              75K+
            </h4>
            <p className="text-muted-foreground">Utilizadores Ativos</p>
            <p className="text-sm text-muted-foreground mt-1">
              Milhares de pacientes e profissionais de saúde utilizam nossas
              soluções diariamente.
            </p>
          </div>
          <div className="shadow-2xl p-3 rounded-md">
            <h4 className="text-4xl font-bold" style={{ color: "#21974E" }}>
              500+
            </h4>
            <p className="text-muted-foreground">Instituições Parceiras</p>
            <p className="text-sm text-muted-foreground mt-1">
              Clínicas, hospitais e empresas confiam nas nossas soluções de
              sistemas de saúde.
            </p>
          </div>
          <div className="shadow-2xl p-3 rounded-md">
            <h4 className="text-4xl font-bold" style={{ color: "#21974E" }}>
              24/7
            </h4>
            <p className="text-muted-foreground">Suporte Médico</p>
            <p className="text-sm text-muted-foreground mt-1">
              Atendimento médico disponível 24 horas por dia através da nossa
              plataforma de telemedicina.
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Perguntas Frequentes
            </h2>
            <div
              className="w-16 h-1 mx-auto mb-6"
              style={{ backgroundColor: "#21974E" }}
            ></div>
          </div>

          <Accordion type="single" collapsible defaultValue="item-1">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left">
                Como a TERAMED garante a segurança dos dados médicos?
              </AccordionTrigger>
              <AccordionContent>
                Utilizamos criptografia de ponta e seguimos protocolos
                internacionais de segurança para proteger todos os dados médicos
                e informações pessoais dos utilizadores.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left">
                Quanto tempo demora a implementação dos sistemas?
              </AccordionTrigger>
              <AccordionContent>
                O tempo de implementação varia conforme a complexidade da
                solução, mas geralmente entre 2 a 8 semanas, incluindo
                treinamento da equipa.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left">
                Os sistemas funcionam em dispositivos móveis?
              </AccordionTrigger>
              <AccordionContent>
                Sim, todas as nossas soluções são otimizadas para funcionar
                perfeitamente em smartphones, tablets e computadores.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger className="text-left">
                A TERAMED oferece treinamento para as equipas?
              </AccordionTrigger>
              <AccordionContent>
                Sim, fornecemos treinamento completo para todas as equipas que
                utilizarão nossos sistemas, garantindo uma transição suave e
                eficiente.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
}
