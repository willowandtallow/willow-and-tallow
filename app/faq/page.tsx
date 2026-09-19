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
    <main className="overflow-x-hidden bg-[#F5F0E7] text-[#343A31]">
      {/* =====================================================
          HERO
      ===================================================== */}
      <section
        className={`
          relative
          min-h-[58vh]
          overflow-hidden
          bg-cover
          bg-center
          bg-no-repeat
        `}
        style={{
          backgroundImage: "url('/willow-background.png')",
        }}
      >
        <div className="absolute inset-0 bg-[#F6F0E6]/20" />

        <div
          className={`
            absolute
            inset-x-0
            bottom-0
            h-48
            bg-gradient-to-b
            from-transparent
            via-[#F5F0E7]/45
            to-[#F5F0E7]
          `}
        />

        <div
          className={`
            relative
            z-10
            mx-auto
            flex
            min-h-[58vh]
            max-w-7xl
            items-center
            justify-center
            px-6
            pb-16
            pt-32
            text-center
            md:px-10
          `}
        >
          <div className="max-w-4xl">
            <div className="animate-[heroFade_1100ms_cubic-bezier(0.22,1,0.36,1)_0.1s_both]">
              <span
                className={`
                  inline-flex
                  rounded-full
                  border
                  border-[#B9B8A8]/70
                  bg-[#F5F0E7]/55
                  px-5
                  py-2
                  text-[9px]
                  uppercase
                  tracking-[0.36em]
                  text-[#747B68]
                  backdrop-blur-sm
                `}
              >
                Willow & Tallow
              </span>
            </div>

            <div className="animate-[heroFade_1100ms_cubic-bezier(0.22,1,0.36,1)_0.2s_both]">
              <h1
                className={`
                  mt-7
                  font-serif
                  text-5xl
                  leading-[1.05]
                  tracking-[-0.035em]
                  text-[#363D33]
                  sm:text-6xl
                  md:text-7xl
                `}
              >
                Frequently Asked
                <br />
                Questions
              </h1>
            </div>

            <div className="animate-[heroFade_1100ms_cubic-bezier(0.22,1,0.36,1)_0.3s_both]">
              <p
                className={`
                  mx-auto
                  mt-7
                  max-w-xl
                  text-[17px]
                  leading-8
                  text-[#60675A]
                  md:text-lg
                `}
              >
                Everything you need to know about our products, ingredients,
                care, and orders.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          INTRO
      ===================================================== */}
      <section
        className={`
          bg-[#F5F0E7]
          px-6
          pb-20
          pt-10
          text-center
          md:px-10
          md:pb-24
          md:pt-14
        `}
      >
        <Reveal>
          <div className="mx-auto max-w-3xl">
            <span
              className={`
                inline-flex
                rounded-full
                border
                border-[#C7C2B6]
                bg-[#EEE8DE]/70
                px-5
                py-2
                text-[9px]
                uppercase
                tracking-[0.36em]
                text-[#7C8270]
              `}
            >
              Good to Know
            </span>

            <h2
              className={`
                mt-7
                font-serif
                text-4xl
                leading-tight
                text-[#383E35]
                md:text-5xl
              `}
            >
              Questions, answered simply.
            </h2>

            <p
              className={`
                mx-auto
                mt-6
                max-w-2xl
                text-[17px]
                leading-8
                text-[#696F63]
              `}
            >
              Explore answers about our ingredients, products, care,
              shipping, and orders.
            </p>

            <div className="mx-auto mt-10 h-px w-14 bg-[#A8AA99]" />
          </div>
        </Reveal>
      </section>

      {/* =====================================================
          FAQ SECTION
      ===================================================== */}
      <section
        className={`
          bg-[#EEE8DE]
          px-5
          py-20
          md:px-10
          md:py-28
        `}
      >
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <div className="mb-12 text-center">
              <span
                className={`
                  inline-flex
                  rounded-full
                  border
                  border-[#C7C2B6]
                  bg-[#F5F0E7]/60
                  px-5
                  py-2
                  text-[9px]
                  uppercase
                  tracking-[0.36em]
                  text-[#7C8270]
                `}
              >
                Frequently Asked
              </span>

              <h2
                className={`
                  mt-7
                  font-serif
                  text-4xl
                  text-[#373E34]
                  md:text-5xl
                `}
              >
                Everything in one place.
              </h2>
            </div>
          </Reveal>

          {/* FAQ CARDS */}
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <Reveal
                key={faq.question}
                delay={(index % 4) * 55}
              >
                <details
                  className={`
                    group
                    overflow-hidden
                    rounded-[24px]
                    border
                    border-[#D5CEC2]
                    bg-[#F8F4EC]
                    shadow-[0_8px_30px_rgba(70,64,55,0.035)]
                    transition-all
                    duration-500
                    open:shadow-[0_15px_40px_rgba(70,64,55,0.07)]
                  `}
                >
                  <summary
                    className={`
                      flex
                      cursor-pointer
                      list-none
                      items-center
                      justify-between
                      gap-6
                      px-6
                      py-6
                      marker:hidden
                      sm:px-8
                      md:py-7
                    `}
                  >
                    <div className="flex items-center gap-5">
                      <span
                        className={`
                          hidden
                          min-w-[28px]
                          text-[9px]
                          tracking-[0.2em]
                          text-[#9A9D8E]
                          sm:block
                        `}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span
                        className={`
                          font-serif
                          text-xl
                          leading-snug
                          text-[#3B4238]
                          md:text-[1.4rem]
                        `}
                      >
                        {faq.question}
                      </span>
                    </div>

                    {/* PLUS / MINUS */}
                    <span
                      className={`
                        relative
                        flex
                        h-10
                        w-10
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-[#B6B5A5]
                        bg-[#F5F0E7]/65
                        text-[#596252]
                        transition-all
                        duration-300
                        group-open:rotate-180
                        group-open:bg-[#E9E3D8]
                      `}
                    >
                      <span className="absolute h-px w-3.5 bg-current" />

                      <span
                        className={`
                          absolute
                          h-3.5
                          w-px
                          bg-current
                          transition-all
                          duration-300
                          group-open:rotate-90
                          group-open:opacity-0
                        `}
                      />
                    </span>
                  </summary>

                  <div
                    className={`
                      border-t
                      border-[#DED7CB]
                      px-6
                      pb-7
                      pt-6
                      sm:px-8
                      sm:pl-[76px]
                      md:pb-8
                    `}
                  >
                    <p
                      className={`
                        max-w-3xl
                        text-[15px]
                        leading-8
                        text-[#666C60]
                        md:text-[16px]
                      `}
                    >
                      {faq.answer}
                    </p>
                  </div>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          CONTACT CTA
      ===================================================== */}
      <section
        className={`
          bg-[#F5F0E7]
          px-5
          py-20
          md:px-10
          md:py-28
        `}
      >
        <Reveal>
          <div
            className={`
              mx-auto
              max-w-6xl
              rounded-[38px]
              border
              border-[#D5CEC2]
              bg-[#EEE8DE]
              px-7
              py-20
              text-center
              shadow-[0_15px_50px_rgba(65,60,50,0.05)]
              md:px-12
              md:py-24
            `}
          >
            <span
              className={`
                inline-flex
                rounded-full
                border
                border-[#C6C1B4]
                bg-[#F5F0E7]/60
                px-5
                py-2
                text-[9px]
                uppercase
                tracking-[0.36em]
                text-[#7B816E]
              `}
            >
              Need a Little More Help?
            </span>

            <h2
              className={`
                mx-auto
                mt-7
                max-w-3xl
                font-serif
                text-4xl
                leading-tight
                text-[#373D34]
                md:text-5xl
              `}
            >
              We would love to hear from you.
            </h2>

            <p
              className={`
                mx-auto
                mt-7
                max-w-xl
                text-[17px]
                leading-8
                text-[#686E62]
                md:text-lg
              `}
            >
              Send us a message about our products, ingredients, or anything
              else you would like to know.
            </p>

            <Link
              href="/contact"
              className={`
                group
                mt-9
                inline-flex
                items-center
                gap-3
                rounded-full
                bg-[#56604E]
                px-8
                py-4
                text-[9px]
                uppercase
                tracking-[0.27em]
                text-[#F7F2EA]
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:bg-[#454E40]
              `}
            >
              Contact Us

              <span
                className={`
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                `}
              >
                →
              </span>
            </Link>

            <a
              href="mailto:contact@willowandtallow.com"
              className={`
                mx-auto
                mt-6
                block
                w-fit
                text-sm
                text-[#626A5B]
                underline
                decoration-[#A6AA99]
                underline-offset-4
                transition-colors
                duration-300
                hover:text-[#3F473B]
              `}
            >
              contact@willowandtallow.com
            </a>
          </div>
        </Reveal>
      </section>

      {/* =====================================================
          HERO ANIMATION
      ===================================================== */}
      <style jsx global>{`
        @keyframes heroFade {
          0% {
            opacity: 0;
            transform: translateY(12px);
          }

          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        summary::-webkit-details-marker {
          display: none;
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