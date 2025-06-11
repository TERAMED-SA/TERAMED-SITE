import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function StatsAndFaq() {
  return (
    <section className="w-full bg-white text-gray-900 py-20 px-6">
      <div className="w-[80%] mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <div className="shadow-2xl p-3 rounded-md">
            <h4 className="text-4xl font-bold">500</h4>
            <p className="text-muted-foreground">Digital Experience</p>
            <p className="text-sm text-muted-foreground mt-1">
              We provide best customer imperatives without state of the art.
            </p>
          </div>
          <div className="shadow-2xl p-3 rounded-md">
            <h4 className="text-4xl font-bold">14M</h4>
            <p className="text-muted-foreground">Total Clients</p>
            <p className="text-sm text-muted-foreground mt-1">
              We have 14 Million clients all over the world. You can check our customer reviews.
            </p>
          </div>
          <div className="shadow-2xl p-3 rounded-md">
            <h4 className="text-4xl font-bold">15K</h4>
            <p className="text-muted-foreground">Digital Solutions</p>
            <p className="text-sm text-muted-foreground mt-1">
              Digital industry is growing fast and our finance industry must meet better solution.
            </p>
          </div>
        </div>

        
      </div>

    </section>
  )
}
