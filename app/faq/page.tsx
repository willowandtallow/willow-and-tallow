"use client";

import Link from "next/link";
import Reveal from "../components/Reveal";

const faqs = [
  {
    question: "What is tallow skincare?",
    answer:
      "Tallow is rendered animal fat that has traditionally been used in soaps, balms, and skin preparations. Willow & Tallow uses tallow as the foundation for rich, simple skincare designed to feel nourishing and comforting on the skin.",
  },
  {
    question: "Why use tallow in skincare?",
    answer:
      "Tallow creates a rich, protective texture that works beautifully in balms and moisturizers. We use it as part of our simpler approach to skincare, pairing traditional ingredients with thoughtfully selected botanical ingredients.",
  },
  {
    question: "What skin types can use tallow balm?",
    answer:
      "Tallow balm may be especially appealing to dry, dehydrated, or sensitive-feeling skin because of its rich texture. Everyone's skin is different, so we recommend reviewing the full ingredient list and patch testing before regular use.",
  },
  {
    question: "Can I use Tallow Balm on my face?",
    answer:
      "Yes, our Tallow Balm can be used on the face as well as areas of the body that need additional moisture. Start with a very small amount and gently massage it into clean skin. Because the balm is rich, a little goes a long way.",
  },
  {
    question: "How do I use Tallow Balm?",
    answer:
      "Warm a small amount between clean fingertips, then gently massage it into the skin. It can be used as part of your morning or evening routine, or whenever your skin needs extra nourishment.",
  },
  {
    question: "Can I use Tallow Balm every day?",
    answer:
      "Yes. You can adjust how often you use it based on your skin's needs. Some people may prefer a small amount daily, while others may reach for a richer balm when their skin feels especially dry.",
  },
  {
    question: "Are your products made with botanical ingredients?",
    answer:
      "Our approach combines tallow with thoughtfully selected botanical ingredients. Exact ingredients vary by product, so always check the individual product page and packaging for the complete ingredient list.",
  },
  {
    question: "Do your products contain unnecessary fillers?",
    answer:
      "Our philosophy is centered around intentional formulation. We aim to choose ingredients because they serve a purpose rather than adding ingredients simply to make a formula more complicated.",
  },
  {
    question: "How should I store my products?",
    answer:
      "Keep Willow & Tallow products in a cool, dry place away from direct sunlight and excessive heat. Always close the container securely after use and avoid introducing water or moisture into the product.",
  },
  {
    question: "Why can the texture of my balm change?",
    answer:
      "Natural balms can respond to temperature changes. Warmer conditions may soften the balm, while cooler temperatures may make it firmer. This does not necessarily mean the product has gone bad. Store it in a cool, dry location for the most consistent texture.",
  },
  {
    question: "Where does Willow & Tallow ship?",
    answer:
      "Available shipping destinations and rates will be shown during checkout. As Willow & Tallow grows, additional shipping options may be added.",
  },
  {
    question: "How long does shipping take?",
    answer:
      "Orders require processing before shipment, followed by carrier transit time. Once your order ships, tracking information will be sent using the email provided at checkout.",
  },
  {
    question: "How can I track my order?",
    answer:
      "Once your order has been shipped, you will receive tracking information by email. You can use the tracking link provided to follow your package with the shipping carrier.",
  },
  {
    question: "Can I change or cancel an order?",
    answer:
      "Contact us as soon as possible after placing your order. We will do our best to help, but orders that have already been processed or shipped may no longer be eligible for changes or cancellation.",
  },
  {
    question: "What is your return policy?",
    answer:
      "Because skincare products are personal-use items, return eligibility may depend on the condition of the product and whether it has been opened or used. Please contact us with your order details if you experience an issue.",
  },
  {
    question: "How can I contact Willow & Tallow?",
    answer:
      "You can reach us through our Contact page or by emailing contact@willowandtallow.com. We are happy to help with product questions, orders, or anything else you may need.",
  },
];

export default function FAQPage() {
  return (
    <main className="overflow-x-hidden bg-[#FAF9F5] text-[#343A31]">
      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative overflow-hidden border-b border-[#E1E2DB] bg-[#FAF9F5] px-6 pb-14 pt-32 sm:px-10 sm:pt-36 lg:px-14 lg:pb-16 lg:pt-36 xl:px-20">
        <div className="mx-auto max-w-[1400px]">
          <Reveal>
            <div className="mx-auto max-w-[950px] text-center">
              <div className="flex items-center justify-center gap-3">
                <span className="h-px w-7 bg-[#A4AA9C]" />

                <span className="text-[7px] font-medium uppercase tracking-[0.42em] text-[#777E72]">
                  Good to Know
                </span>

                <span className="h-px w-7 bg-[#A4AA9C]" />
              </div>

              <h1 className="mt-5 font-serif text-[3.4rem] font-normal leading-[0.94] tracking-[-0.05em] text-[#333933] sm:text-[4.2rem] lg:text-[5rem]">
                Questions,
                <br />
                <span className="italic text-[#747C6A]">
                  answered simply.
                </span>
              </h1>

              <p className="mx-auto mt-6 max-w-[560px] text-[13px] leading-6 text-[#686F66] sm:text-[14px]">
                Everything you need to know about our ingredients, products,
                care, shipping, and orders.
              </p>
            </div>
          </Reveal>
        </div>

        <div className="absolute bottom-0 left-1/2 h-[3px] w-20 -translate-x-1/2 bg-[#B7BDAE]" />
      </section>

      {/* =====================================================
          FAQ INTRO
      ===================================================== */}

      <section className="bg-[#F5F3ED] px-6 py-14 sm:px-10 lg:px-14 lg:py-16 xl:px-20">
        <div className="mx-auto grid max-w-[1280px] gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
          <Reveal>
            <div>
              <p className="text-[8px] font-medium uppercase tracking-[0.38em] text-[#7C8377]">
                Frequently Asked
              </p>

              <div className="mt-4 h-px w-12 bg-[#AEB3A6]" />
            </div>
          </Reveal>

          <Reveal>
            <div className="max-w-[760px]">
              <h2 className="font-serif text-[2.6rem] leading-[1.04] tracking-[-0.04em] text-[#383E38] sm:text-[3.2rem] lg:text-[3.6rem]">
                Everything you need,
                <br />
                <span className="italic text-[#747C6A]">
                  all in one place.
                </span>
              </h2>

              <p className="mt-6 max-w-[590px] text-[14px] leading-7 text-[#686E65] sm:text-[15px]">
                Start with the most common questions about tallow skincare,
                then find details about product care, shipping, orders, and
                more below.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* =====================================================
          FAQ LIST
      ===================================================== */}

      <section className="bg-[#FAF9F5] px-6 py-16 sm:px-10 lg:px-14 lg:py-20 xl:px-20">
        <div className="mx-auto max-w-[1100px]">
          {/* SECTION HEADER */}

          <Reveal>
            <div className="grid gap-6 border-b border-[#D4D6CE] pb-8 md:grid-cols-[0.65fr_1.35fr] md:items-end">
              <div>
                <p className="text-[8px] font-medium uppercase tracking-[0.38em] text-[#7B8276]">
                  FAQ
                </p>
              </div>

              <div>
                <h2 className="font-serif text-[2.6rem] leading-[1] tracking-[-0.04em] text-[#383E38] sm:text-[3.2rem]">
                  A few things worth{" "}
                  <span className="italic text-[#747C6A]">
                    knowing.
                  </span>
                </h2>
              </div>
            </div>
          </Reveal>

          {/* QUESTIONS */}

          <div>
            {faqs.map((faq, index) => (
              <div
                key={faq.question}
                className="border-b border-[#D4D6CE]"
              >
                <Reveal delay={(index % 4) * 45}>
                  <details className="group">
                    <summary className="grid cursor-pointer list-none items-center gap-5 py-6 marker:hidden sm:py-7 md:grid-cols-[65px_1fr_44px] md:gap-8">
                      {/* NUMBER */}

                      <span className="hidden font-serif text-[13px] italic text-[#9CA196] md:block">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      {/* QUESTION */}

                      <h3 className="pr-3 font-serif text-[1.3rem] font-normal leading-[1.25] tracking-[-0.015em] text-[#3A413A] sm:text-[1.45rem]">
                        {faq.question}
                      </h3>

                      {/* PLUS / MINUS */}

                      <span className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#A8AEA1] text-[#596158] transition-all duration-300 group-open:border-[#747C69] group-open:bg-[#747C69] group-open:text-[#FAF9F5]">
                        <span className="absolute h-px w-3.5 bg-current" />

                        <span className="absolute h-3.5 w-px bg-current transition-all duration-300 group-open:rotate-90 group-open:opacity-0" />
                      </span>
                    </summary>

                    {/* ANSWER */}

                    <div className="pb-7 md:grid md:grid-cols-[65px_1fr_44px] md:gap-8 md:pb-8">
                      <div />

                      <div className="max-w-[760px] border-l border-[#C7CBC0] pl-5 sm:pl-6">
                        <p className="text-[14px] leading-7 text-[#666D64] sm:text-[15px]">
                          {faq.answer}
                        </p>
                      </div>

                      <div />
                    </div>
                  </details>
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          SUPPORT STATEMENT
      ===================================================== */}

      <section className="bg-[#F5F3ED] px-5 py-16 sm:px-10 lg:px-14 lg:py-20 xl:px-20">
        <div className="mx-auto max-w-[1280px]">
          <Reveal>
            <div className="relative overflow-hidden rounded-[34px] bg-[#747C69] px-8 py-14 sm:px-12 lg:px-16 lg:py-18">
              {/* ABSTRACT DETAILS */}

              <div className="pointer-events-none absolute -right-28 -top-40 h-[390px] w-[390px] rounded-full border border-[#A3AA99]/45" />

              <div className="pointer-events-none absolute -bottom-44 -right-10 h-[340px] w-[340px] rounded-full bg-[#818978]/45" />

              <div className="relative z-10 grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
                <div>
                  <p className="text-[8px] font-medium uppercase tracking-[0.38em] text-[#DDE1D7]">
                    Here to Help
                  </p>

                  <div className="mt-4 h-px w-10 bg-[#D4D9CE]/70" />
                </div>

                <div className="max-w-[720px]">
                  <h2 className="font-serif text-[2.7rem] leading-[1.02] tracking-[-0.04em] text-[#FAF9F5] sm:text-[3.4rem] lg:text-[3.9rem]">
                    Still have
                    <br />
                    <span className="italic text-[#E4E7DF]">
                      a question?
                    </span>
                  </h2>

                  <p className="mt-6 max-w-[540px] text-[14px] leading-7 text-[#E2E5DD] sm:text-[15px]">
                    If you cannot find what you are looking for, send us a
                    message. We are happy to help with products, ingredients,
                    orders, or anything else you would like to know.
                  </p>

                  <Link
                    href="/contact"
                    className="group mt-7 inline-flex items-center gap-4"
                  >
                    <span className="text-[8px] font-medium uppercase tracking-[0.3em] text-[#F2F3EE]">
                      Contact Us
                    </span>

                    <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#C7CCC1]/70 text-[#F5F6F2] transition-all duration-300 group-hover:bg-[#F4F4EF] group-hover:text-[#596158]">
                      <span className="transition-transform duration-300 group-hover:translate-x-0.5">
                        →
                      </span>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* =====================================================
          FINAL CONTACT
      ===================================================== */}

      <section className="border-t border-[#E1E1DA] bg-[#FAF9F5] px-6 py-14 sm:px-10 lg:px-14 lg:py-16 xl:px-20">
        <Reveal>
          <div className="mx-auto flex max-w-[1000px] flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
            <div>
              <p className="text-[8px] font-medium uppercase tracking-[0.36em] text-[#7C8377]">
                Willow &amp; Tallow Support
              </p>

              <p className="mt-3 font-serif text-[1.8rem] tracking-[-0.025em] text-[#373D37] sm:text-[2rem]">
                We&apos;re happy to help.
              </p>
            </div>

            <a
              href="mailto:contact@willowandtallow.com"
              className="group inline-flex items-center gap-4 border-b border-[#9DA497] pb-2"
            >
              <span className="text-[11px] tracking-[0.05em] text-[#596158]">
                contact@willowandtallow.com
              </span>

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>
        </Reveal>
      </section>

      <style jsx global>{`
        summary::-webkit-details-marker {
          display: none;
        }

        summary::marker {
          display: none;
          content: "";
        }

        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </main>
  );
}