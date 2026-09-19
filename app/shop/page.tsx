"use client";

import Image from "next/image";
import Link from "next/link";
import Reveal from "../components/Reveal";

const products = [
  {
    name: "Whipped Tallow Balm",
    description:
      "A rich, nourishing balm made for simple everyday moisture and comforting care.",
    image: "/whipped-tallow-balm.png",
    status: "available",
    href: "/shop/tallow-balm",
    label: "Deep Nourishment",
  },
  {
    name: "Tallow Lip Balm",
    description:
      "A simple everyday essential designed to keep lips feeling soft, smooth, and protected.",
    image: "/tallow-lip-balm.png",
    status: "coming-soon",
    href: "#",
    label: "Everyday Protection",
  },
  {
    name: "Tallow Soap",
    description:
      "A gentle, thoughtfully made cleansing bar inspired by traditional ingredients and simple routines.",
    image: "/tallow-soap.png",
    status: "coming-soon",
    href: "#",
    label: "Gentle Cleansing",
  },
];

export default function ShopPage() {
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
        <div className="absolute inset-0 bg-[#F6F0E6]/15" />

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
          <div className="max-w-3xl">
            <div className="animate-[heroFade_1000ms_ease-out_0.1s_both]">
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

            <div className="animate-[heroFade_1000ms_ease-out_0.2s_both]">
              <h1
                className={`
                  mt-7
                  font-serif
                  text-5xl
                  leading-[1.05]
                  tracking-[-0.03em]
                  text-[#363D33]
                  sm:text-6xl
                  md:text-7xl
                `}
              >
                The Collection
              </h1>
            </div>

            <div className="animate-[heroFade_1000ms_ease-out_0.3s_both]">
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
                Thoughtful skincare made simply, with nourishing ingredients
                and an intentional approach to everyday care.
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
              Shop Willow & Tallow
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
              Simple essentials for slower routines.
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
              Our collection is growing slowly and intentionally, one
              thoughtful product at a time.
            </p>

            <div className="mx-auto mt-10 h-px w-14 bg-[#A8AA99]" />
          </div>
        </Reveal>
      </section>

      {/* =====================================================
          PRODUCTS
      ===================================================== */}
      <section
        className={`
          bg-[#EEE8DE]
          px-5
          py-24
          md:px-10
          md:py-32
        `}
      >
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="mb-14 text-center">
              <p
                className={`
                  text-[9px]
                  uppercase
                  tracking-[0.36em]
                  text-[#7C8270]
                `}
              >
                Our Essentials
              </p>

              <h2
                className={`
                  mt-5
                  font-serif
                  text-4xl
                  text-[#363C33]
                  md:text-5xl
                `}
              >
                Made for everyday care.
              </h2>
            </div>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product, index) => (
              <Reveal
                key={product.name}
                delay={index * 100}
                className="h-full"
              >
                <article
                  className={`
                    group
                    flex
                    h-full
                    flex-col
                    overflow-hidden
                    rounded-[32px]
                    border
                    border-[#D5CEC2]
                    bg-[#F8F4EC]
                    p-3
                    shadow-[0_12px_40px_rgba(70,64,55,0.04)]
                    transition-all
                    duration-500
                    hover:-translate-y-1
                    hover:shadow-[0_22px_60px_rgba(70,64,55,0.09)]
                  `}
                >
                  {/* IMAGE */}
                  <div
                    className={`
                      relative
                      aspect-[4/5]
                      overflow-hidden
                      rounded-[25px]
                      bg-[#E4DDD1]
                    `}
                  >
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className={`
                        object-cover
                        transition-transform
                        duration-[1000ms]
                        ease-out
                        group-hover:scale-[1.035]
                      `}
                    />

                    <div
                      className={`
                        absolute
                        left-5
                        top-5
                        rounded-full
                        border
                        border-white/40
                        bg-[#F5F0E7]/90
                        px-4
                        py-2
                        text-[8px]
                        uppercase
                        tracking-[0.26em]
                        text-[#56604E]
                        shadow-sm
                        backdrop-blur-md
                      `}
                    >
                      {product.status === "available"
                        ? "Available"
                        : "Coming Soon"}
                    </div>
                  </div>

                  {/* CONTENT */}
                  <div
                    className={`
                      flex
                      flex-1
                      flex-col
                      px-4
                      pb-6
                      pt-7
                      sm:px-5
                    `}
                  >
                    <p
                      className={`
                        text-[9px]
                        uppercase
                        tracking-[0.3em]
                        text-[#888C7C]
                      `}
                    >
                      {product.label}
                    </p>

                    <h3
                      className={`
                        mt-3
                        font-serif
                        text-[2rem]
                        leading-tight
                        text-[#383F35]
                      `}
                    >
                      {product.name}
                    </h3>

                    <p
                      className={`
                        mt-4
                        text-[15px]
                        leading-7
                        text-[#696F63]
                      `}
                    >
                      {product.description}
                    </p>

                    <div className="mt-auto pt-7">
                      {product.status === "available" ? (
                        <Link
                          href={product.href}
                          className={`
                            group/button
                            inline-flex
                            items-center
                            gap-3
                            rounded-full
                            bg-[#56604E]
                            px-6
                            py-3.5
                            text-[9px]
                            uppercase
                            tracking-[0.25em]
                            text-[#F7F2EA]
                            transition-all
                            duration-300
                            hover:bg-[#454E40]
                          `}
                        >
                          View Product

                          <span
                            className={`
                              transition-transform
                              duration-300
                              group-hover/button:translate-x-1
                            `}
                          >
                            →
                          </span>
                        </Link>
                      ) : (
                        <span
                          className={`
                            inline-flex
                            rounded-full
                            border
                            border-[#D0C9BD]
                            bg-[#EEE8DE]/70
                            px-5
                            py-3
                            text-[9px]
                            uppercase
                            tracking-[0.25em]
                            text-[#8A8D7D]
                          `}
                        >
                          Coming Soon
                        </span>
                      )}
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          COMING SOON
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
              More is on the way
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
              Growing slowly.
              <br />
              Making thoughtfully.
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
              Lip balm, soap, and more Willow & Tallow essentials are currently
              in the works.
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
                border
                border-[#68705E]
                bg-[#F5F0E7]/40
                px-7
                py-4
                text-[9px]
                uppercase
                tracking-[0.27em]
                text-[#46503F]
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:bg-[#F5F0E7]
              `}
            >
              Stay in Touch

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
          </div>
        </Reveal>
      </section>

      {/* HERO ANIMATION */}
      <style jsx global>{`
        @keyframes heroFade {
          0% {
            opacity: 0;
            transform: translateY(28px);
          }

          100% {
            opacity: 1;
            transform: translateY(0);
          }
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