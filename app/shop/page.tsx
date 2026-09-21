"use client";

import Image from "next/image";
import Link from "next/link";
import Reveal from "../components/Reveal";

/* =====================================================
   PRODUCTS
===================================================== */

const products = [
  {
    name: "Whipped Tallow Balm",
    description:
      "A rich, nourishing balm made for simple everyday moisture and comforting care.",
    image: "/whipped-tallow-balm.png",
    label: "Deep Nourishment",
  },
  {
    name: "Tallow Lip Balm",
    description:
      "A simple everyday essential designed to keep lips feeling soft, smooth, and protected.",
    image: "/tallow-lip-balm.png",
    label: "Everyday Protection",
  },
  {
    name: "Tallow Soap",
    description:
      "A gentle, thoughtfully made cleansing bar inspired by traditional ingredients and simple routines.",
    image: "/tallow-soap.png",
    label: "Gentle Cleansing",
  },
];

export default function ShopPage() {
  return (
    <main className="overflow-hidden bg-[#FAF9F5] text-[#343934]">
      {/* =====================================================
          HERO
      ===================================================== */}

{/* =====================================================
    SHOP HERO — COMPACT EDITORIAL
===================================================== */}

<section
  className={`
    relative
    overflow-hidden
    border-b
    border-[#E1DFD8]
    bg-[#FAF9F5]
    px-6
    pb-10
    pt-32
    sm:px-10
    sm:pb-12
    sm:pt-36
    lg:px-14
    lg:pb-12
    lg:pt-36
    xl:px-20
  `}
>
  <div
    className={`
      relative
      z-10
      mx-auto
      max-w-[1450px]
    `}
  >
    <Reveal>
      {/* LABEL */}
      <div
        className={`
          flex
          items-center
          justify-center
          gap-3
        `}
      >
        <span className="h-px w-7 bg-[#9CA194]" />

        <p
          className={`
            text-[7px]
            font-medium
            uppercase
            tracking-[0.4em]
            text-[#7C8277]
          `}
        >
          Willow &amp; Tallow
        </p>

        <span className="h-px w-7 bg-[#9CA194]" />
      </div>

      {/* HEADING */}
      <h1
        className={`
          mx-auto
          mt-5
          max-w-[850px]
          text-center
          font-serif
          text-[3.25rem]
          font-normal
          leading-[0.94]
          tracking-[-0.045em]
          text-[#333833]
          sm:text-[4rem]
          lg:text-[4.7rem]
        `}
      >
        The everyday{" "}
        <span className="italic text-[#747C6A]">
          essentials.
        </span>
      </h1>

      {/* DESCRIPTION */}
      <p
        className={`
          mx-auto
          mt-5
          max-w-[520px]
          text-center
          text-[13px]
          leading-6
          text-[#6B7168]
          sm:text-[14px]
        `}
      >
        A considered collection of nourishing skincare,
        thoughtfully made for simple everyday routines.
      </p>

      {/* STATUS */}
      <div
        className={`
          mx-auto
          mt-6
          flex
          w-fit
          items-center
          gap-3
        `}
      >
        <span
          className={`
            h-1.5
            w-1.5
            rounded-full
            bg-[#7D8574]
          `}
        />

        <span
          className={`
            text-[7px]
            font-medium
            uppercase
            tracking-[0.28em]
            text-[#7D8378]
          `}
        >
          Collection Coming Soon
        </span>
      </div>
    </Reveal>
  </div>

  {/* BOTTOM ACCENT */}
  <div
    className={`
      absolute
      bottom-0
      left-1/2
      h-[3px]
      w-20
      -translate-x-1/2
      bg-[#B7BDAE]
    `}
  />
</section>

      {/* =====================================================
          COLLECTION
      ===================================================== */}

      <section
        className={`
          bg-[#FAF9F5]
          px-6
          py-20
          sm:px-10
          lg:px-14
          lg:py-28
          xl:px-20
        `}
      >
        <div className="mx-auto max-w-[1450px]">
          {/* HEADER */}
          <Reveal>
            <div
              className={`
                mb-12
                flex
                flex-col
                gap-5
                sm:flex-row
                sm:items-end
                sm:justify-between
                lg:mb-16
              `}
            >
              <div>
                <p
                  className={`
                    text-[8px]
                    font-medium
                    uppercase
                    tracking-[0.4em]
                    text-[#82887B]
                  `}
                >
                  Everyday Essentials
                </p>

                <h2
                  className={`
                    mt-4
                    font-serif
                    text-[2.9rem]
                    font-normal
                    leading-[0.98]
                    tracking-[-0.04em]
                    text-[#383D37]
                    sm:text-[3.7rem]
                  `}
                >
                  Made for the{" "}
                  <span className="italic text-[#747C6A]">
                    everyday.
                  </span>
                </h2>
              </div>

              <p
                className={`
                  max-w-[380px]
                  text-[13px]
                  leading-6
                  text-[#747A70]
                  sm:text-right
                `}
              >
                A small collection designed to make your routine
                feel simple, considered, and nourishing.
              </p>
            </div>
          </Reveal>

          {/* =====================================================
              PRODUCTS
          ===================================================== */}

          <div
            className={`
              grid
              gap-x-7
              gap-y-16
              md:grid-cols-3
              lg:gap-x-9
            `}
          >
            {products.map((product, index) => (
              <Reveal
                key={product.name}
                delay={index * 40}
              >
                <article className="group">
                  {/* IMAGE */}
                  <div
                    className={`
                      relative
                      aspect-[4/5]
                      overflow-hidden
                      bg-[#EFEBE3]
                      ${
                        index === 0
                          ? "rounded-t-[120px]"
                          : index === 1
                            ? "rounded-[6px]"
                            : "rounded-tl-[110px] rounded-br-[110px]"
                      }
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
                        duration-[1400ms]
                        ease-out
                        group-hover:scale-[1.025]
                      `}
                    />

                    {/* STATUS */}
                    <div
                      className={`
                        absolute
                        bottom-4
                        left-4
                        bg-[#FAF9F5]/92
                        px-4
                        py-2.5
                        text-[7px]
                        font-medium
                        uppercase
                        tracking-[0.27em]
                        text-[#5F665C]
                        backdrop-blur-sm
                      `}
                    >
                      Coming Soon
                    </div>
                  </div>

                  {/* PRODUCT COPY */}
                  <div className="pt-6">
                    <p
                      className={`
                        text-[8px]
                        font-medium
                        uppercase
                        tracking-[0.31em]
                        text-[#858B7E]
                      `}
                    >
                      {product.label}
                    </p>

                    <h3
                      className={`
                        mt-3
                        font-serif
                        text-[2rem]
                        font-normal
                        tracking-[-0.03em]
                        text-[#383D37]
                        lg:text-[2.15rem]
                      `}
                    >
                      {product.name}
                    </h3>

                    <p
                      className={`
                        mt-3
                        max-w-[350px]
                        text-[13px]
                        leading-6
                        text-[#70766D]
                      `}
                    >
                      {product.description}
                    </p>

                    <div
                      className={`
                        mt-6
                        flex
                        items-center
                        gap-4
                      `}
                    >
                      <span
                        className={`
                          text-[8px]
                          font-medium
                          uppercase
                          tracking-[0.27em]
                          text-[#62695F]
                        `}
                      >
                        Launching Soon
                      </span>

                      <span
                        className={`
                          h-px
                          w-9
                          bg-[#A0A598]
                          transition-all
                          duration-500
                          group-hover:w-14
                        `}
                      />
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          PHILOSOPHY — SAGE FEATURE
      ===================================================== */}

      <section
        className={`
          bg-[#FAF9F5]
          px-6
          pb-20
          sm:px-10
          lg:px-14
          lg:pb-28
          xl:px-20
        `}
      >
        <Reveal>
          <div
            className={`
              relative
              mx-auto
              max-w-[1450px]
              overflow-hidden
              bg-[#E4E7DC]
              px-7
              py-12
              sm:px-10
              lg:px-14
              lg:py-14
            `}
          >
            {/* LARGE TYPOGRAPHIC DETAIL */}
            <div
              className={`
                pointer-events-none
                absolute
                -right-5
                -top-16
                hidden
                font-serif
                text-[15rem]
                italic
                leading-none
                text-[#D4D8CB]
                lg:block
              `}
            >
              W
            </div>

            <div
              className={`
                relative
                z-10
                grid
                gap-9
                lg:grid-cols-[0.45fr_1.15fr_0.7fr]
                lg:items-center
                lg:gap-14
              `}
            >
              <div>
                <p
                  className={`
                    text-[8px]
                    font-medium
                    uppercase
                    tracking-[0.4em]
                    text-[#72796C]
                  `}
                >
                  Our Approach
                </p>

                <div className="mt-5 h-px w-12 bg-[#969D8D]" />
              </div>

              <h2
                className={`
                  max-w-[660px]
                  font-serif
                  text-[2.8rem]
                  font-normal
                  leading-[0.97]
                  tracking-[-0.04em]
                  text-[#373D36]
                  sm:text-[3.5rem]
                  lg:text-[3.9rem]
                `}
              >
                Good skincare doesn&apos;t
                <br className="hidden sm:block" />
                need to feel{" "}
                <span className="italic text-[#707867]">
                  complicated.
                </span>
              </h2>

              <p
                className={`
                  max-w-[350px]
                  text-[13px]
                  leading-6
                  text-[#676E64]
                `}
              >
                Willow &amp; Tallow is built around a smaller,
                more considered approach — purposeful ingredients
                and products you&apos;ll actually want to use.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* =====================================================
          LAUNCH / FINAL CTA
      ===================================================== */}

      <section
        className={`
          relative
          overflow-hidden
          border-t
          border-[#E1DFD8]
          bg-[#F5F2EB]
          px-6
          py-20
          sm:px-10
          lg:px-14
          lg:py-24
          xl:px-20
        `}
      >
        <div className="mx-auto max-w-[1450px]">
          <Reveal>
            <div
              className={`
                grid
                gap-10
                lg:grid-cols-[1.2fr_0.8fr]
                lg:items-end
                lg:gap-20
              `}
            >
              <div>
                <p
                  className={`
                    text-[8px]
                    font-medium
                    uppercase
                    tracking-[0.42em]
                    text-[#81877A]
                  `}
                >
                  Coming Soon
                </p>

                <h2
                  className={`
                    mt-5
                    max-w-[760px]
                    font-serif
                    text-[3.2rem]
                    font-normal
                    leading-[0.95]
                    tracking-[-0.045em]
                    text-[#353A34]
                    sm:text-[4rem]
                    lg:text-[4.7rem]
                  `}
                >
                  The beginning of
                  <br />
                  something{" "}
                  <span className="italic text-[#747C6A]">
                    simple.
                  </span>
                </h2>
              </div>

              <div>
                <p
                  className={`
                    max-w-[430px]
                    text-[14px]
                    leading-7
                    text-[#6D7369]
                  `}
                >
                  Our first collection is currently taking shape.
                  Stay connected for launch updates and what&apos;s
                  coming next.
                </p>

                <Link
                  href="/contact"
                  className={`
                    group
                    mt-7
                    inline-flex
                    items-center
                    gap-5
                    bg-[#596251]
                    px-7
                    py-4
                    text-[8px]
                    font-medium
                    uppercase
                    tracking-[0.28em]
                    text-white
                    transition-all
                    duration-500
                    hover:bg-[#464E41]
                  `}
                >
                  Stay in Touch

                  <span
                    className={`
                      transition-transform
                      duration-500
                      group-hover:translate-x-1
                    `}
                  >
                    →
                  </span>
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* =====================================================
          GLOBAL STYLES
      ===================================================== */}

      <style jsx global>{`
        ::selection {
          background: #d8d9cc;
          color: #353a32;
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