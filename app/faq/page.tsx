"use client";

import { useState } from "react";
import Link from "next/link";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What is tallow skincare?",
    answer:
      "Tallow is a rendered animal fat traditionally used in soaps, balms, and skin preparations. At Willow & Tallow, we use it as the foundation for rich, simple skincare designed to feel nourishing and comforting.",
  },
  {
    question: "What skin types are your products made for?",
    answer:
      "Our products are designed with everyday nourishment in mind and may be especially appealing to dry or sensitive-feeling skin. As with any skincare product, we recommend reviewing the ingredient list and patch testing before regular use.",
  },
  {
    question: "Are your products made with botanical ingredients?",
    answer:
      "Yes. Our approach combines traditional tallow-based skincare with thoughtfully chosen botanical ingredients to create simple, intentional formulas.",
  },
  {
    question: "Do your products contain unnecessary fillers?",
    answer:
      "Our philosophy is centered around simplicity. We aim to keep formulas purposeful and avoid adding ingredients simply for the sake of making a product more complicated.",
  },
  {
    question: "How should I use the Tallow Balm?",
    answer:
      "Warm a small amount between clean fingertips and gently massage it into the skin. Because the balm is rich, a little goes a long way. You can adjust the amount based on how your skin feels.",
  },
  {
    question: "Can I use tallow balm on my face?",
    answer:
      "Many people choose to use tallow-based balms on both the face and body. Skin needs vary, so we recommend starting with a small amount and patch testing before applying it more broadly.",
  },
  {
    question: "How should I store my Willow & Tallow products?",
    answer:
      "Store products in a cool, dry place away from direct sunlight and excessive heat. Keeping the lid securely closed between uses also helps protect the product.",
  },
  {
    question: "Do your products have an expiration date?",
    answer:
      "Each product should include its recommended shelf life or use-by guidance on the packaging. Because our formulas are intentionally simple, proper storage is important.",
  },
  {
    question: "Are Willow & Tallow products tested on animals?",
    answer:
      "Add your final cruelty-free policy here once your product sourcing and testing process is finalized so the statement accurately reflects your practices.",
  },
  {
    question: "Where do you ship?",
    answer:
      "Shipping availability and rates are shown during checkout. As Willow & Tallow grows, additional shipping destinations may become available.",
  },
  {
    question: "How long will my order take to arrive?",
    answer:
      "Processing and delivery times may vary depending on order volume and destination. Tracking information will be provided once your order has shipped.",
  },
  {
    question: "What is your return policy?",
    answer:
      "For hygiene and product safety reasons, return eligibility may depend on whether an item has been opened or used. Please review our full policy before placing an order.",
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <main className="bg-[#F5F0E7] text-[#343A31]">
      {/* HERO */}
      <section
        className="relative min-h-[58vh] overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/willow-background.png')",
        }}
      >
        <div className="absolute inset-0 bg-[#F6F0E6]/28" />

        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-[#F5F0E7]" />

        <div className="relative z-10 mx-auto flex min-h-[58vh] max-w-7xl items-center justify-center px-6 pb-16 pt-32 text-center md:px-10">
          <div className="max-w-3xl">
            <p className="text-[10px] uppercase tracking-[0.42em] text-[#747B68]">
              Willow & Tallow
            </p>

            <h1 className="mt-6 font-serif text-5xl leading-tight tracking-[-0.03em] text-[#363D33] md:text-7xl">
              Frequently Asked
              <br />
              Questions
            </h1>

            <p className="mx-auto mt-7 max-w-xl text-lg leading-8 text-[#60675A]">
              A few simple answers about our products, ingredients, rituals,
              shipping, and care.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ INTRO */}
      <section className="px-6 pb-12 pt-8 md:px-10 md:pb-16 md:pt-14">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-[10px] uppercase tracking-[0.38em] text-[#828776]">
            Good to know
          </p>

          <h2 className="mt-5 font-serif text-3xl text-[#383E35] md:text-4xl">
            Everything you may be wondering.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-[#696F63]">
            We believe skincare should feel uncomplicated. The same goes for
            finding the information you need.
          </p>
        </div>
      </section>

      {/* FAQ LIST */}
      <section className="px-6 pb-24 md:px-10 md:pb-32">
        <div className="mx-auto max-w-4xl border-t border-[#CFC8BC]">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={faq.question} className="border-b border-[#CFC8BC]">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-8 py-7 text-left md:py-8"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-xl leading-snug text-[#3B4238] md:text-2xl">
                    {faq.question}
                  </span>

                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#A8AA99] text-[#5B6454]">
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                  </span>
                </button>

                <div
                  className={`grid transition-all duration-300 ${
                    isOpen ? "grid-rows-[1fr] pb-7" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-3xl pr-12 text-[16px] leading-8 text-[#666C60] md:text-lg">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="border-t border-[#D2CBC0] bg-[#ECE6DC] px-6 py-20 md:px-10 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[10px] uppercase tracking-[0.4em] text-[#7B816E]">
            Still curious?
          </p>

          <h2 className="mt-5 font-serif text-4xl text-[#373D34] md:text-5xl">
            We’re here to help.
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-[#686E62]">
            Have a question we did not answer here? Reach out and we’ll be happy
            to help.
          </p>

          <Link
            href="/contact"
            className="mt-9 inline-block border border-[#65705C] px-8 py-4 text-xs uppercase tracking-[0.28em] text-[#46503F] transition hover:bg-[#E3DDD2]"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  );
}