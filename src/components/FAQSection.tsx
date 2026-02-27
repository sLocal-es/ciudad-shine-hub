import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQItem {
  q: string;
  a: string;
}

interface FAQSectionProps {
  title: string;
  items: FAQItem[];
}

const FAQSection = ({ title, items }: FAQSectionProps) => (
  <section className="py-16">
    <div className="container">
      <h2 className="font-heading text-2xl md:text-3xl mb-8">{title}</h2>
      <Accordion type="single" collapsible className="space-y-3">
        {items.map((item, i) => (
          <AccordionItem
            key={i}
            value={`faq-${i}`}
            className="border border-border rounded-xl px-5 data-[state=open]:border-primary transition-colors"
          >
            <AccordionTrigger className="font-body text-left text-sm md:text-base hover:no-underline [&>svg]:text-primary">
              {item.q}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-sm leading-relaxed">
              {item.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQSection;
