import Link from "next/link";

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
    <main className="bg-[#F5F0E7] text-[#343A31]">
      {/* HERO */}
      <section
        className="relative min-h-[56vh] overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/willow-background.png')",
        }}
      >
        <div className="absolute inset-0 bg-[#F6F0E6]/20" />

        <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-b from-transparent via-[#F5F0E7]/50 to-[#F5F0E7]" />

        <div className="relative z-10 mx-auto flex min-h-[56vh] max-w-7xl items-center justify-center px-6 pb-14 pt-32 text-center md:px-10">
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
              Everything you need to know about our products, ingredients,
              care, and orders.
            </p>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="px-6 pb-14 pt-10 md:px-10 md:pb-20 md:pt-14">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-[10px] uppercase tracking-[0.4em] text-[#858A78]">
            Good to know
          </p>

          <h2 className="mt-5 font-serif text-3xl text-[#383E35] md:text-4xl">
            Questions, answered simply.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-[#696F63]">
            Tap any question below to learn more.
          </p>
        </div>
      </section>

      {/* FAQS */}
      <section className="px-6 pb-28 md:px-10 md:pb-36">
        <div className="mx-auto max-w-4xl border-t border-[#CEC8BC]">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group border-b border-[#CEC8BC]"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-8 py-7 md:py-8">
                <span className="font-serif text-xl leading-snug text-[#3B4238] md:text-2xl">
                  {faq.question}
                </span>

                <span className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#A8AA99] text-[#596252]">
                  <span className="absolute h-px w-3 bg-current" />

                  <span className="absolute h-3 w-px bg-current transition-transform duration-300 group-open:rotate-90 group-open:opacity-0" />
                </span>
              </summary>

              <div className="max-w-3xl pb-8 pr-10">
                <p className="text-[16px] leading-8 text-[#666C60] md:text-lg">
                  {faq.answer}
                </p>
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section className="border-t border-[#D2CBC0] bg-[#ECE6DC] px-6 py-20 md:px-10 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[10px] uppercase tracking-[0.4em] text-[#7B816E]">
            Need a little more help?
          </p>

          <h2 className="mt-5 font-serif text-4xl text-[#373D34] md:text-5xl">
            We would love to hear from you.
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-[#686E62]">
            Send us a message about your order, our products, or anything else
            you would like to know.
          </p>

          <Link
            href="/contact"
            className="mt-9 inline-block border border-[#65705C] px-8 py-4 text-xs uppercase tracking-[0.28em] text-[#46503F] transition hover:bg-[#E3DDD2]"
          >
            Contact Us
          </Link>

          <a
            href="mailto:contact@willowandtallow.com"
            className="mt-6 block text-sm text-[#626A5B] underline decoration-[#A6AA99] underline-offset-4"
          >
            contact@willowandtallow.com
          </a>
        </div>
      </section>
    </main>
  );
}