import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FadeInWhenVisible } from "../FadeInWhenVisible";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "How can you create OMs 5X faster than traditional methods?",
    answer: "Our AI technology automates the most time-consuming parts of OM creation: data processing, content writing, and design layout. Simply upload your property data, and our system will generate professional tables, market analysis, and property descriptions in minutes. With direct Canva integration for final touches, what typically takes 10-20 hours can be completed in just 15 minutes.",
    value: "item-1",
  },
  {
    question: "What makes your 15-minute OMs as good as traditionally created ones?",
    answer: "Our AI has been trained on thousands of professional OMs to ensure industry-standard quality. It combines your property data with market intelligence to create accurate, compelling content. Plus, you maintain full control - our AI gets you 95% there, and you can easily refine any element through our Canva integration. The result is a professional OM that maintains your brand standards while saving you countless hours.",
    value: "item-2",
  },
  {
    question: "What types of property data can I import?",
    answer: "We support all major data formats including Excel spreadsheets, PDFs, and images. Our AI can process financial data, property specifications, market information, and photos. The system automatically generates professional tables, demographic analyses, and amenity maps. For Enterprise clients, we also offer direct integrations with popular CRE platforms like CoStar and Crexi.",
    value: "item-3",
  },
  {
    question: "How do you ensure my brand consistency?",
    answer: "You can upload your existing OM templates, and our system will maintain your firm's branding, including logos, colors, fonts, and layout preferences. Pro and Enterprise plans allow you to save multiple templates for different property types. Every OM generated will consistently reflect your brand identity while benefiting from our AI-powered content generation.",
    value: "item-4",
  },
  {
    question: "What happens if the AI-generated content needs adjustments?",
    answer: "We've made editing incredibly simple through our Canva integration. Once your OM is generated, you can open it directly in Canva to fine-tune any element - from text and tables to images and layouts. This gives you the perfect balance of AI efficiency and human control, ensuring every OM meets your exact requirements.",
    value: "item-5",
  },
];

export const FAQSection = () => {
  return (
    <section id="faq" className="container md:w-[700px] py-24 sm:py-32">
      <FadeInWhenVisible>
        <div className="text-center mb-8">
          <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
            FAQ
          </h2>

          <h2 className="text-3xl md:text-4xl text-center font-bold">
            Common Questions About Our AI OM Generator
          </h2>
        </div>
      </FadeInWhenVisible>

      <Accordion type="single" collapsible className="AccordionRoot">
        {FAQList.map(({ question, answer, value }, index) => (
          <FadeInWhenVisible key={value} delay={index * 0.1}>
            <AccordionItem value={value}>
              <AccordionTrigger className="text-left">
                {question}
              </AccordionTrigger>

              <AccordionContent>{answer}</AccordionContent>
            </AccordionItem>
          </FadeInWhenVisible>
        ))}
      </Accordion>
    </section>
  );
};
