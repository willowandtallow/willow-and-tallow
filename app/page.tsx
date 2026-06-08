import Image from "next/image";
export default function Home() {
  return (
    <main className="min-h-screen bg-[#F5F1E8] flex items-center justify-center px-6">
      <section className="max-w-3xl text-center">
<h1 className="text-6xl md:text-7xl font-serif tracking-[0.2em] text-[#3F4738] mb-6">
  WILLOW & TALLOW
</h1>

        <p className="text-xl md:text-2xl italic text-[#6F775A] mb-10">
          Rooted in Nature. Crafted with Tallow.
        </p>

        <p className="text-lg text-[#4B4B4B] leading-8 mb-12">
          Thoughtfully crafted skincare inspired by nature,
          tradition, and simple ingredients.
          <br />
          Our first collection is coming soon.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-5 py-4 rounded-full border border-[#D5D0C8] bg-white min-w-[300px]"
          />

          <button className="px-8 py-4 rounded-full bg-[#3F4738] text-white hover:opacity-90 transition">
            Join the Waitlist
          </button>
        </div>

        <p className="text-[#6F775A]">
          Join the waitlist and receive 15% off your first order at launch.
        </p>

        <div className="mt-12 text-sm tracking-wide text-[#6F775A]">
Follow us on Instagram & TikTok
@willowandtallow
        </div>
      </section>
    </main>
  );
}