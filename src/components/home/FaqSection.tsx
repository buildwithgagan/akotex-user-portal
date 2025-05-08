
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from "react-router-dom";

const faqs = [
  {
    question: "How do I start investing with Akotex?",
    answer: "Getting started is easy. Simply create an account, complete our risk assessment questionnaire, and make your initial deposit. Our team will then build a personalized investment portfolio based on your financial goals and risk tolerance."
  },
  {
    question: "What is the minimum amount to start investing?",
    answer: "Our investment options start at $500 for our Crypto Assets portfolio, $1,000 for Indices & ETFs, and $2,500 for Real Estate investments. We offer flexible options to accommodate different investment budgets."
  },
  {
    question: "How is my investment secured?",
    answer: "We employ bank-level security measures including 256-bit encryption, two-factor authentication, and comply with all relevant financial regulations. Your investments are also protected by our comprehensive insurance policies. Learn more about our security measures on our Security page."
  },
  {
    question: "Can I withdraw my investment at any time?",
    answer: "Yes, you can request a withdrawal at any time through your dashboard. Standard withdrawals are processed within 3-5 business days. Some investment options may have specific terms regarding early withdrawal fees or lock-in periods."
  },
  {
    question: "What are the fees for investing with Akotex?",
    answer: "Our fee structure is transparent with no hidden charges. We charge an annual management fee ranging from 0.5% to 1.2% depending on your investment portfolio and amount. There are no setup fees or withdrawal charges for standard processing."
  },
  {
    question: "How is my portfolio performance measured?",
    answer: "Portfolio performance is measured through various metrics including absolute returns, risk-adjusted returns, and benchmark comparisons. You can view detailed performance reports in your dashboard, updated daily with comprehensive monthly and quarterly reports."
  },
];

const FaqSection = () => {
  const [openItem, setOpenItem] = useState<string | null>("item-0");

  const handleToggle = (value: string) => {
    setOpenItem(openItem === value ? null : value);
  };

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-600">
            Find answers to common questions about investing with Akotex
          </p>
        </div>

        <Accordion
          type="single"
          collapsible
          className="w-full"
          value={openItem || undefined}
          onValueChange={(value) => handleToggle(value)}
        >
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border-b border-gray-200 last:border-0"
            >
              <AccordionTrigger className="text-left text-lg font-medium py-5 hover:text-akotex-red transition-colors">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pb-5">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-10 text-center">
          <p className="text-lg mb-4">
            Still have questions? We're here to help.
          </p>
          <Link 
            to="/contact" 
            className="text-akotex-red font-medium hover:underline inline-flex items-center"
          >
            Contact our support team
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-4 w-4 ml-1" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M9 5l7 7-7 7" 
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
