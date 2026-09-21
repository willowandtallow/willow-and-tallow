"use client";

import Image from "next/image";
import Link from "next/link";
import Reveal from "./components/Reveal";

/* =====================================================
   DATA
===================================================== */

const products = [
  {
    name: "Whipped Tallow Balm",
    subtitle: "Deep nourishment for everyday care.",
    image: "/whipped-tallow-balm.png",
  },
  {
    name: "Tallow Lip Balm",
    subtitle: "Simple, everyday protection.",
    image: "/tallow-lip-balm.png",
  },
  {
    name: "Tallow Soap",
    subtitle: "A gentle, nourishing cleanse.",
    image: "/tallow-soap.png",
  },
];

const values = [
  {
    number: "01",
    title: "Natural Ingredients",
    text: "Pure. Simple. Purposeful.",
  },
  {
    number: "02",
    title: "Skin-First Formulas",
    text: "Nourish. Support. Protect.",
  },
  {
    number: "03",
    title: "Thoughtfully Made",
    text: "Created with intention.",
  },
  {
    number: "04",
    title: "Simple by Nature",
    text: "Less noise. More care.",
  },
];

export default function Home() {
  return (
    <main className="overflow-hidden bg-[#FAF8F3] text-[#353A32]">
      {/* =====================================================
          HERO
      ===================================================== */}

      <section
        className={`
          relative
          min-h-[760px]
          overflow-hidden
          bg-[#FAF8F3]
          lg:min-h-[820px]
        `}
      >
        {/* DESKTOP HERO BACKGROUND */}
        <div
          className={`
            absolute
            inset-y-0
            right-0
            hidden
            w-[58%]
            lg:block
          `}
        >
          <Image
            src="/willow-hero-new.png"
            alt=""
            fill
            priority
            sizes="58vw"
            className="object-cover object-right"
          />
        </div>

        {/* MOBILE HERO BACKGROUND */}
        <div
          className={`
            absolute
            inset-x-0
            bottom-0
            h-[46%]
            lg:hidden
          `}
        >
          <Image
            src="/willow-hero-new.png"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-right"
          />

          <div
            className={`
              absolute
              inset-0
              bg-gradient-to-b
              from-[#FAF8F3]
              via-[#FAF8F3]/25
              to-transparent
            `}
          />
        </div>

        {/* ORGANIC HERO DIVIDER */}
        <div
          className={`
            pointer-events-none
            absolute
            bottom-0
            left-0
            top-0
            z-[1]
            hidden
            w-[56%]
            bg-[#FAF8F3]
            lg:block
          `}
          style={{
            clipPath:
              "polygon(0 0, 100% 0, 92% 9%, 83% 19%, 76% 30%, 72% 41%, 74% 52%, 79% 63%, 80% 75%, 76% 87%, 68% 100%, 0 100%)",
          }}
        />

        {/* HERO CONTENT */}
        <div
          className={`
            relative
            z-10
            mx-auto
            flex
            min-h-[760px]
            max-w-[1500px]
            items-start
            px-6
            pb-[350px]
            pt-24
            sm:px-10
            sm:pt-28
            lg:min-h-[820px]
            lg:items-center
            lg:px-14
            lg:pb-20
            lg:pt-20
            xl:px-20
          `}
        >
          <div className="max-w-[650px] lg:w-[46%]">
            <p
              className={`
                text-[10px]
                font-medium
                uppercase
                tracking-[0.42em]
                text-[#777D6D]
                sm:text-[11px]
              `}
            >
              Natural Skincare
            </p>

            <h1
              className={`
                mt-7
                font-serif
                text-[3.7rem]
                font-normal
                leading-[0.94]
                tracking-[-0.045em]
                text-[#333831]
                sm:text-[4.8rem]
                lg:text-[5.7rem]
                xl:text-[6.4rem]
              `}
            >
              Simple
              <br />
              Ingredients.
              <br />
              Lasting{" "}
              <span className="italic text-[#737B69]">
                Care.
              </span>
            </h1>

            <p
              className={`
                mt-8
                max-w-[500px]
                text-[15px]
                leading-7
                text-[#666C61]
                sm:text-[16px]
                sm:leading-8
              `}
            >
              Thoughtfully created skincare made with tallow,
              botanicals, and simple ingredients for everyday
              nourishment and uncomplicated care.
            </p>

            <Link
              href="/shop"
              className={`
                group
                mt-9
                inline-flex
                items-center
                gap-5
                rounded-full
                border
                border-[#72796B]
                px-7
                py-4
                text-[9px]
                font-medium
                uppercase
                tracking-[0.28em]
                text-[#4C5348]
                transition-all
                duration-500
                hover:bg-[#596251]
                hover:text-white
              `}
            >
              Shop the Collection

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

        {/* HERO SIDE NOTE */}
        <div
          className={`
            absolute
            bottom-24
            right-[4%]
            z-10
            hidden
            max-w-[150px]
            font-serif
            text-[19px]
            italic
            leading-relaxed
            text-[#69705F]
            xl:block
          `}
        >
          Skincare
          <br />
          in harmony
          <br />
          with nature.
        </div>
      </section>

      {/* =====================================================
          VALUES STRIP
      ===================================================== */}

      <section
        className={`
          border-y
          border-[#E4E0D8]
          bg-[#FCFAF6]
        `}
      >
        <div
          className={`
            mx-auto
            grid
            max-w-[1500px]
            grid-cols-2
            md:grid-cols-4
          `}
        >
          {values.map((value, index) => (
            <div
              key={value.title}
              className={`
                relative
                px-5
                py-9
                text-center
                sm:px-8
                md:py-11
                ${
                  index !== values.length - 1
                    ? "md:border-r md:border-[#DDD9D0]"
                    : ""
                }
              `}
            >
              <div
                className={`
                  mx-auto
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-full
                  bg-[#F1EFE8]
                  font-serif
                  text-sm
                  italic
                  text-[#747B6B]
                `}
              >
                {value.number}
              </div>

              <p
                className={`
                  mt-5
                  text-[8px]
                  font-medium
                  uppercase
                  tracking-[0.28em]
                  text-[#4F554C]
                `}
              >
                {value.title}
              </p>

              <p
                className={`
                  mt-2
                  text-[12px]
                  text-[#777C73]
                `}
              >
                {value.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* =====================================================
          PHILOSOPHY
      ===================================================== */}

      <section
        className={`
          relative
          overflow-hidden
          bg-[#F8F5EF]
        `}
      >
        <div
          className={`
            relative
            mx-auto
            min-h-[720px]
            w-full
            max-w-[1800px]
            lg:min-h-[760px]
          `}
        >
          <Image
            src="/willow-philosophy.png"
            alt=""
            fill
            sizes="100vw"
            className="object-cover object-center"
          />

          <div
            className={`
              relative
              z-10
              mx-auto
              flex
              min-h-[720px]
              max-w-[1500px]
              items-end
              px-6
              pb-12
              pt-[470px]
              sm:px-10
              lg:min-h-[760px]
              lg:items-center
              lg:px-14
              lg:pb-0
              lg:pt-0
              xl:px-20
            `}
          >
            <div
              className={`
                ml-auto
                w-full
                rounded-[30px]
                bg-[#FAF8F3]/90
                p-7
                backdrop-blur-[2px]
                sm:p-9
                lg:w-[52%]
                lg:max-w-[650px]
                lg:rounded-none
                lg:bg-transparent
                lg:p-0
                lg:backdrop-blur-none
              `}
            >
              <Reveal>
                <p
                  className={`
                    text-[9px]
                    font-medium
                    uppercase
                    tracking-[0.42em]
                    text-[#818777]
                  `}
                >
                  Our Philosophy
                </p>

                <h2
                  className={`
                    mt-6
                    font-serif
                    text-[3.4rem]
                    font-normal
                    leading-[0.96]
                    tracking-[-0.04em]
                    text-[#363B34]
                    sm:text-[4rem]
                    lg:text-[4.8rem]
                    xl:text-[5.2rem]
                  `}
                >
                  Care that
                  <br />
                  feels{" "}
                  <span className="italic text-[#737B69]">
                    good.
                  </span>
                </h2>

                <p
                  className={`
                    mt-7
                    max-w-[540px]
                    text-[15px]
                    leading-7
                    text-[#666D62]
                    sm:text-[16px]
                    sm:leading-8
                  `}
                >
                  We believe skincare should be simple,
                  effective, and beautifully thoughtful.
                  That&apos;s why we create products with
                  purposeful ingredients and uncomplicated
                  formulas designed to make everyday care feel a
                  little more intentional.
                </p>

                <Link
                  href="/about"
                  className={`
                    group
                    mt-8
                    inline-flex
                    items-center
                    gap-5
                    rounded-full
                    border
                    border-[#858B7E]
                    px-7
                    py-4
                    text-[9px]
                    font-medium
                    uppercase
                    tracking-[0.28em]
                    text-[#50574D]
                    transition-all
                    duration-500
                    hover:bg-[#596251]
                    hover:text-white
                  `}
                >
                  Our Story

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

                <div
                  className={`
                    mt-12
                    flex
                    items-center
                    gap-5
                  `}
                >
                  <div className="h-px w-10 bg-[#A5A99D]" />

                  <p
                    className={`
                      text-[8px]
                      uppercase
                      leading-5
                      tracking-[0.3em]
                      text-[#7B8174]
                    `}
                  >
                    People
                    <br />
                    Animals
                    <br />
                    The Planet
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          COLLECTION
      ===================================================== */}

      <section
        className={`
          bg-[#F6F2EA]
          px-6
          py-24
          sm:px-10
          lg:px-14
          lg:py-32
        `}
      >
        <div className="mx-auto max-w-[1450px]">
          <Reveal>
            <div
              className={`
                flex
                flex-col
                justify-between
                gap-8
                sm:flex-row
                sm:items-end
              `}
            >
              <div>
                <p
                  className={`
                    text-[9px]
                    font-medium
                    uppercase
                    tracking-[0.42em]
                    text-[#838878]
                  `}
                >
                  The Essentials
                </p>

                <h2
                  className={`
                    mt-5
                    max-w-[650px]
                    font-serif
                    text-[3.4rem]
                    font-normal
                    leading-[0.98]
                    tracking-[-0.035em]
                    text-[#373C35]
                    md:text-[4.5rem]
                  `}
                >
                  Everyday rituals,
                  <br />
                  made simple.
                </h2>
              </div>

              <Link
                href="/shop"
                className={`
                  group
                  inline-flex
                  items-center
                  gap-3
                  pb-2
                  text-[9px]
                  uppercase
                  tracking-[0.28em]
                  text-[#596054]
                `}
              >
                Shop All

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
          </Reveal>

          <div
            className={`
              mt-14
              grid
              gap-10
              md:grid-cols-3
            `}
          >
            {products.map((product, index) => (
              <Reveal
                key={product.name}
                delay={index * 25}
              >
                <article className="group">
                  <div
                    className={`
                      relative
                      aspect-[1.05/1]
                      overflow-hidden
                      rounded-[46%_46%_24px_24px]
                      bg-[#ECE6DC]
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
                  </div>

                  <div className="px-2 pt-7 text-center">
                    <h3
                      className={`
                        font-serif
                        text-[1.65rem]
                        text-[#3D423B]
                      `}
                    >
                      {product.name}
                    </h3>

                    <p
                      className={`
                        mt-2
                        text-[13px]
                        leading-6
                        text-[#747970]
                      `}
                    >
                      {product.subtitle}
                    </p>

                    <Link
                      href="/shop"
                      className={`
                        group/link
                        mt-6
                        inline-flex
                        items-center
                        gap-3
                        border-b
                        border-[#999D91]
                        pb-1.5
                        text-[8px]
                        uppercase
                        tracking-[0.3em]
                        text-[#555C51]
                      `}
                    >
                      Explore

                      <span
                        className={`
                          transition-transform
                          duration-500
                          group-hover/link:translate-x-1
                        `}
                      >
                        →
                      </span>
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          IMPACT / A BRIGHTER TOMORROW
      ===================================================== */}

      <section
        className={`
          relative
          min-h-[560px]
          overflow-hidden
          bg-[#858A76]
          lg:min-h-[620px]
        `}
      >
        <Image
          src="/willow-impact.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center"
        />

        <div
          className={`
            relative
            z-10
            mx-auto
            flex
            min-h-[560px]
            max-w-[1500px]
            items-end
            px-6
            pb-10
            pt-[360px]
            sm:px-10
            lg:min-h-[620px]
            lg:items-center
            lg:px-14
            lg:pb-0
            lg:pt-0
            xl:px-20
          `}
        >
          <div
            className={`
              ml-auto
              w-full
              rounded-[28px]
              bg-[#777D6B]/92
              p-7
              text-[#F8F5ED]
              backdrop-blur-[2px]
              sm:p-9
              lg:w-[50%]
              lg:max-w-[620px]
              lg:rounded-none
              lg:bg-transparent
              lg:p-0
              lg:backdrop-blur-none
            `}
          >
            <Reveal>
              <p
                className={`
                  text-[9px]
                  font-medium
                  uppercase
                  tracking-[0.42em]
                  text-[#EEECE3]
                `}
              >
                A Brighter Tomorrow
              </p>

              <h2
                className={`
                  mt-6
                  font-serif
                  text-[3.3rem]
                  font-normal
                  leading-[0.98]
                  tracking-[-0.035em]
                  text-[#FAF8F2]
                  sm:text-[3.8rem]
                  lg:text-[4.4rem]
                  xl:text-[4.8rem]
                `}
              >
                Small choices
                <br />
                make a big difference.
              </h2>

              <p
                className={`
                  mt-7
                  max-w-[500px]
                  text-[15px]
                  leading-7
                  text-[#F1EFE8]/90
                  sm:text-[16px]
                  sm:leading-8
                `}
              >
                We&apos;re committed to creating thoughtful
                skincare with simple ingredients, intentional
                formulas, and a gentler approach to everyday
                care.
              </p>

              <Link
                href="/about"
                className={`
                  group
                  mt-9
                  inline-flex
                  items-center
                  gap-5
                  rounded-full
                  border
                  border-white/60
                  px-7
                  py-4
                  text-[9px]
                  font-medium
                  uppercase
                  tracking-[0.28em]
                  text-white
                  transition-all
                  duration-500
                  hover:bg-white
                  hover:text-[#626A59]
                `}
              >
                Our Philosophy

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
            </Reveal>
          </div>
        </div>
      </section>

      {/* =====================================================
          SIMPLE BY NATURE — EDITORIAL
      ===================================================== */}

      <section
        className={`
          relative
          overflow-hidden
          bg-[#F8F5EF]
          px-6
          py-16
          sm:px-10
          lg:px-14
          lg:py-20
        `}
      >
        {/* SOFT ABSTRACT SHAPE — LEFT */}
        <div
          className={`
            pointer-events-none
            absolute
            -left-[170px]
            -top-[210px]
            h-[460px]
            w-[460px]
            rounded-[45%_55%_60%_40%/55%_40%_60%_45%]
            bg-[#EAE6DD]
            lg:h-[540px]
            lg:w-[540px]
          `}
        />

        {/* SAGE ABSTRACT SHAPE — RIGHT */}
        <div
          className={`
            pointer-events-none
            absolute
            -right-[170px]
            -bottom-[240px]
            h-[480px]
            w-[480px]
            rotate-[-10deg]
            rounded-[58%_42%_38%_62%/46%_58%_42%_54%]
            bg-[#DDE0D4]
            lg:h-[560px]
            lg:w-[560px]
          `}
        />

        {/* THIN ABSTRACT OVAL */}
        <div
          className={`
            pointer-events-none
            absolute
            -right-[20px]
            top-[5%]
            hidden
            h-[350px]
            w-[175px]
            rotate-[17deg]
            rounded-[50%]
            border
            border-[#ADB2A4]/40
            lg:block
          `}
        />

        <div
          className={`
            relative
            z-10
            mx-auto
            max-w-[1250px]
          `}
        >
          <Reveal>
            <div
              className={`
                grid
                gap-10
                lg:grid-cols-[0.55fr_1.45fr]
                lg:items-center
                lg:gap-16
              `}
            >
              {/* LEFT */}
              <div>
                <p
                  className={`
                    text-[8px]
                    font-medium
                    uppercase
                    tracking-[0.42em]
                    text-[#7E8475]
                  `}
                >
                  The Willow &amp; Tallow Way
                </p>

                <div className="mt-5 h-px w-14 bg-[#A2A79A]" />

                <p
                  className={`
                    mt-6
                    max-w-[230px]
                    font-serif
                    text-[1.1rem]
                    italic
                    leading-[1.5]
                    text-[#767D6E]
                  `}
                >
                  Thoughtful ingredients.
                  <br />
                  Simple rituals.
                  <br />
                  Intentional care.
                </p>
              </div>

              {/* RIGHT */}
              <div>
                <h2
                  className={`
                    max-w-[780px]
                    font-serif
                    text-[3.2rem]
                    font-normal
                    leading-[0.94]
                    tracking-[-0.045em]
                    text-[#373C35]
                    sm:text-[4rem]
                    lg:text-[4.8rem]
                  `}
                >
                  Simple by{" "}
                  <span className="italic text-[#747C6A]">
                    nature.
                  </span>
                </h2>

                <p
                  className={`
                    mt-6
                    max-w-[620px]
                    text-[14px]
                    leading-7
                    text-[#686F64]
                    sm:text-[15px]
                  `}
                >
                  We believe skincare feels better when it&apos;s
                  uncomplicated. From thoughtful ingredients to slower
                  everyday rituals, Willow &amp; Tallow is rooted in
                  simplicity, nature, and care that feels intentional.
                </p>

                <Link
                  href="/journal"
                  className={`
                    group
                    mt-7
                    inline-flex
                    items-center
                    gap-4
                    text-[8px]
                    font-medium
                    uppercase
                    tracking-[0.28em]
                    text-[#4F564C]
                  `}
                >
                  <span
                    className={`
                      border-b
                      border-[#8F9588]
                      pb-1.5
                      transition-colors
                      duration-500
                      group-hover:border-[#4F564C]
                    `}
                  >
                    Explore the Journal
                  </span>

                  <span
                    className={`
                      flex
                      h-9
                      w-9
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-[#979C90]
                      text-sm
                      transition-all
                      duration-500
                      group-hover:translate-x-1
                      group-hover:bg-[#596251]
                      group-hover:text-white
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
          FINAL CTA — SAGE STATEMENT CARD
      ===================================================== */}

      <section
        className={`
          relative
          overflow-hidden
          bg-[#FAF8F3]
          px-5
          py-14
          sm:px-8
          lg:px-12
          lg:py-16
        `}
      >
        <Reveal>
          <div
            className={`
              relative
              mx-auto
              max-w-[1350px]
              overflow-hidden
              rounded-[36px]
              bg-[#747C69]
              px-7
              py-14
              text-[#F8F5EF]
              sm:px-12
              lg:min-h-[430px]
              lg:rounded-[52px]
              lg:px-16
              lg:py-16
              xl:px-20
            `}
          >
            {/* LARGE ABSTRACT CIRCLE */}
            <div
              className={`
                pointer-events-none
                absolute
                -right-[120px]
                -top-[170px]
                h-[390px]
                w-[390px]
                rounded-full
                bg-[#E6E4D9]/15
                sm:h-[470px]
                sm:w-[470px]
                lg:-right-[80px]
                lg:-top-[230px]
                lg:h-[600px]
                lg:w-[600px]
              `}
            />

            {/* INNER OUTLINE CIRCLE */}
            <div
              className={`
                pointer-events-none
                absolute
                -right-[30px]
                top-[35px]
                hidden
                h-[320px]
                w-[320px]
                rounded-full
                border
                border-[#F6F3EB]/20
                lg:block
              `}
            />

            {/* SMALL FLOATING CREAM CIRCLE */}
            <div
              className={`
                pointer-events-none
                absolute
                right-[12%]
                top-[23%]
                hidden
                h-20
                w-20
                rounded-full
                bg-[#F0EDE4]
                lg:block
              `}
            >
              <div
                className={`
                  absolute
                  left-1/2
                  top-1/2
                  h-[1px]
                  w-7
                  -translate-x-1/2
                  -translate-y-1/2
                  rotate-[-35deg]
                  bg-[#747C69]
                `}
              />
            </div>

            {/* CONTENT */}
            <div
              className={`
                relative
                z-10
                flex
                min-h-[300px]
                flex-col
                justify-between
                lg:min-h-[300px]
              `}
            >
              {/* TOP LABEL */}
              <div className="flex items-center gap-4">
                <p
                  className={`
                    text-[8px]
                    font-medium
                    uppercase
                    tracking-[0.42em]
                    text-[#ECEAE2]/80
                  `}
                >
                  Willow &amp; Tallow
                </p>

                <div className="h-px w-10 bg-[#ECEAE2]/40" />
              </div>

              {/* MAIN CONTENT */}
              <div
                className={`
                  mt-14
                  flex
                  flex-col
                  gap-10
                  lg:mt-10
                  lg:flex-row
                  lg:items-end
                  lg:justify-between
                `}
              >
                <div>
                  <h2
                    className={`
                      max-w-[760px]
                      font-serif
                      text-[3.4rem]
                      font-normal
                      leading-[0.91]
                      tracking-[-0.05em]
                      text-[#FAF8F3]
                      sm:text-[4.4rem]
                      lg:text-[5.2rem]
                    `}
                  >
                    Your skin.
                    <br />

                    <span className="italic text-[#E5E4D8]">
                      Simply cared for.
                    </span>
                  </h2>

                  <p
                    className={`
                      mt-6
                      max-w-[480px]
                      text-[14px]
                      leading-7
                      text-[#F3F0E8]/75
                    `}
                  >
                    Thoughtfully made essentials for simple,
                    nourishing everyday care.
                  </p>
                </div>

                <Link
                  href="/shop"
                  className={`
                    group
                    flex
                    w-fit
                    items-center
                    gap-5
                    rounded-full
                    bg-[#F6F3EC]
                    py-2
                    pl-6
                    pr-2
                    text-[8px]
                    font-medium
                    uppercase
                    tracking-[0.28em]
                    text-[#4F574B]
                    transition-all
                    duration-500
                    hover:bg-white
                  `}
                >
                  Shop Collection

                  <span
                    className={`
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-full
                      bg-[#747C69]
                      text-sm
                      text-white
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

            {/* BOTTOM DETAIL */}
            <div
              className={`
                pointer-events-none
                absolute
                bottom-6
                right-8
                hidden
                text-[7px]
                uppercase
                tracking-[0.34em]
                text-[#F4F1E9]/40
                lg:block
              `}
            >
              Naturally Simple · Thoughtfully Made
            </div>
          </div>
        </Reveal>
      </section>

      {/* =====================================================
          GLOBAL HOMEPAGE STYLES
      ===================================================== */}

      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }

        ::selection {
          background: #d8d9cc;
          color: #353a32;
        }

        @media (prefers-reduced-motion: reduce) {
          html {
            scroll-behavior: auto;
          }

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