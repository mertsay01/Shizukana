import { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

function Faq() {
  const faqs = [
    {
      question: "Where is Shizukana tea sourced?",
      answer:
        "All our teas are sourced directly from small, ethical farms across Japan, mainly in Kyoto, Uji, and Kagoshima.",
    },
    {
      question: "Do you ship internationally?",
      answer:
        "Yes! We currently ship to over 25 countries worldwide with tracked delivery options.",
    },
    {
      question: "What’s the difference between matcha and hojicha?",
      answer:
        "Matcha is a vibrant green powdered tea made from shade-grown leaves. Hojicha is a roasted green tea with a warm, nutty flavor and lower caffeine.",
    },
    {
      question: "Can I return my order?",
      answer:
        "If you're not satisfied, you can return your item within 14 days of delivery. Please see our Shipping & Returns page for details.",
    },
    {
      question: "How should I store my tea?",
      answer:
        "We recommend storing tea in a cool, dry place away from direct sunlight. Reseal pouches tightly after each use to preserve freshness.",
    },
    {
      question: "Is your packaging eco-friendly?",
      answer:
        "Yes. Our pouches are made from biodegradable materials and shipped in recyclable boxes. Sustainability is central to our mission.",
    },
    {
      question: "How many servings are in one pouch?",
      answer:
        "Each pouch contains roughly 30 servings, depending on your preferred strength and brewing method.",
    },
    {
      question: "Do you offer gift wrapping?",
      answer:
        "Yes, during checkout you can select gift packaging and include a personalized note. Ideal for birthdays or tea lovers!",
    },
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <>
      <Navbar />
      <section className="mt-20 bg-washi text-black px-6 py-20 font-roboto-condensed">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-[45px] md:text-5xl font-bold mb-12 text-center">
            Frequently Asked <span className="text-sakura">Questions</span>
          </h1>

          <div className="space-y-6">
            {faqs.map((item, index) => (
              <div
                key={index}
                className="border-b border-matcha pb-4 cursor-pointer"
                onClick={() => toggle(index)}
              >
                <h3 className="text-2xl font-semibold flex justify-between items-center">
                  {item.question}
                  <span className="text-kin text-2xl">
                    {activeIndex === index ? "−" : "+"}
                  </span>
                </h3>
                {activeIndex === index && (
                  <p className="mt-3 text-black text-lg leading-relaxed">
                    {item.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Faq;
