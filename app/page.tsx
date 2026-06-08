import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F4F0E8] flex flex-col items-center px-6 pt-16 pb-12">
      <div className="max-w-2xl w-full text-center">

        {/* Logo */}
        <Image
          src="/willow-tallow-logo.PNG"
          alt="Willow & Tallow"
          width={300}
          height={300}
          priority
          className="mx-auto"
        />

        {/* Tagline */}
        <p className="text-[#7A8165] italic text-2xl -mt-2 mb-8">
          Rooted in Nature. Crafted with Tallow.
        </p>

        {/* Description */}
        <p className="text-gray-700 text-xl mb-2">
          Thoughtfully crafted skincare inspired by nature, tradition,
          and simple ingredients.
        </p>

        <p className="text-gray-700 text-xl mb-10">
          Our first collection is coming soon.
        </p>

        {/* Email Form */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full sm:w-80 rounded-full border border-gray-300 px-6 py-4 bg-white"
          />

          <button className="bg-[#4B5540] text-white rounded-full px-8 py-4 hover:opacity-90 transition">
            Join the Waitlist
          </button>
        </div>

        {/* Offer */}
        <p className="text-[#7A8165] text-lg mb-12">
          Join the waitlist and receive 15% off your first order at launch.
        </p>

        {/* Social */}
        <p className="text-[#7A8165] text-lg">
          Follow us on Instagram & TikTok @willowandtallow
        </p>

      </div>
    </main>
  );
}