import { Send } from "lucide-react";


 type Testimonial = {
        id: number;
        text: string;
        name: string;
        location: string;
        image: string;
        active?: boolean;
    };

      const testimonials: Testimonial[] = [
        {
            id: 1,
            text:
                "Their Service make me happy because they solutions for your Business and we create ideas and solution for your problem and make growth Solutions offer range of services to their and I am really happy with their service.",
            name: "Arnav Shah",
            location: "Mumbai, India",
            image: "/100.jpg",
            active: true,
        },
        {
            id: 2,
            text:
                "Their Service make me happy because they solutions for your Business and we create ideas and solution for your problem and make growth Solutions offer range of services.",
            name: "Shruti Sinha",
            location: "Pune, India",
            image: "/200.jpg",
        },
        {
            id: 3,
            text:
                "Their Service make me happy because they solutions for your Business and we create ideas and solution for your problem and make growth Solutions offer range of services to their and I am really happy with their service.",
            name: "K. Nishant",
            location: "Bengaluru, India",
            image: "/300.jpg",
        },
    ];

export default function LogoDesignHero() {
  return (
    <section className="bg-[#0f172a] text-white">
      {/* ================= HERO SECTION ================= */}
      <div className="min-h-screen bg-gradient-to-r from-[#0f172a] via-[#111827] to-[#1f2937] flex items-center px-8 py-48">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div>
            <p className="text-yellow-500 uppercase tracking-widest text-sm mb-4">
              Respoke Visual Identity
            </p>

            <h1 className="text-5xl md:text-6xl font-serif leading-tight mb-6">
              The Face of <br />
              <span className="text-yellow-500">Your Brand</span>
            </h1>

            <p className="text-gray-300 mb-8 max-w-md">
              Crafting visual identities that resonate and endure. Elegant serif
              typography with golden accents for modern luxury.
            </p>

            <button className="bg-yellow-500 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-400 transition">
              Order Now →
            </button>
          </div>

          {/* Right Image */}
          <div className="flex justify-center">
            <img
              src="/logoDesign.webp"
              alt="Logo Design"
              className="w-[300px] md:w-[380px] drop-shadow-2xl"
            />
          </div>
        </div>
      </div>

      {/* ================= POPULAR SERVICES ================= */}
      <section className="py-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Logo Design Categories
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {/* Card 1 - Symbol Logo */}
          <div className="group h-60 [perspective:1000px]">
            <div className="relative h-full w-full transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              {/* Front */}
              <div className="absolute w-full h-full bg-white text-black rounded-xl shadow-xl border-2 border-yellow-500 flex flex-col justify-center items-center [backface-visibility:hidden]">
                <h3 className="text-lg font-semibold">Symbol / Iconic Logo</h3>
                <p className="text-sm mt-2">Apple, Nike, McDonald's</p>
              </div>

              {/* Back */}
              <div className="absolute w-full h-full bg-yellow-500 text-black rounded-xl shadow-xl flex flex-col justify-center items-center [backface-visibility:hidden] [transform:rotateY(180deg)]">
                <h4 className="text-lg font-bold">Symbol Logo</h4>
                <p className="text-sm mt-2 px-4 text-center">
                  Simple visual symbols that represent brand identity without text.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2 - Illustrative Logo */}
          <div className="group h-60 [perspective:1000px]">
            <div className="relative h-full w-full transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              <div className="absolute w-full h-full bg-white text-black rounded-xl shadow-xl border-2 border-yellow-500 flex flex-col justify-center items-center [backface-visibility:hidden]">
                <h3 className="text-lg font-semibold">Illustrative Logo</h3>
                <p className="text-sm mt-2">Creative & Detailed Design</p>
              </div>

              <div className="absolute w-full h-full bg-yellow-500 text-black rounded-xl shadow-xl flex flex-col justify-center items-center [backface-visibility:hidden] [transform:rotateY(180deg)]">
                <h4 className="text-lg font-bold">Illustrative</h4>
                <p className="text-sm mt-2 px-4 text-center">
                  Custom illustrated graphics used to represent a brand creatively.
                </p>
              </div>
            </div>
          </div>

          {/* Card 3 - Typographical Logo */}
          <div className="group h-60 [perspective:1000px]">
            <div className="relative h-full w-full transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              <div className="absolute w-full h-full bg-white text-black rounded-xl shadow-xl border-2 border-yellow-500 flex flex-col justify-center items-center [backface-visibility:hidden]">
                <h3 className="text-lg font-semibold">Typographical Logo</h3>
                <p className="text-sm mt-2">FedEx, Disney, Google</p>
              </div>

              <div className="absolute w-full h-full bg-yellow-500 text-black rounded-xl shadow-xl flex flex-col justify-center items-center [backface-visibility:hidden] [transform:rotateY(180deg)]">
                <h4 className="text-lg font-bold">Typographical</h4>
                <p className="text-sm mt-2 px-4 text-center">
                  Text-based logos focusing on brand name using unique fonts.
                </p>
              </div>
            </div>
          </div>

          {/* Card 4 - Abstract Logo */}
          <div className="group h-60 [perspective:1000px]">
            <div className="relative h-full w-full transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              <div className="absolute w-full h-full bg-white text-black rounded-xl shadow-xl border-2 border-yellow-500 flex flex-col justify-center items-center [backface-visibility:hidden]">
                <h3 className="text-lg font-semibold">Abstract Logo</h3>
                <p className="text-sm mt-2">Adidas, BP, Pepsi</p>
              </div>

              <div className="absolute w-full h-full bg-yellow-500 text-black rounded-xl shadow-xl flex flex-col justify-center items-center [backface-visibility:hidden] [transform:rotateY(180deg)]">
                <h4 className="text-lg font-bold">Abstract</h4>
                <p className="text-sm mt-2 px-4 text-center">
                  Unique shapes and symbols representing brand meaning visually.
                </p>
              </div>
            </div>
          </div>

          {/* Card 5 - 3D Logo */}
          <div className="group h-60 [perspective:1000px]">
            <div className="relative h-full w-full transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              <div className="absolute w-full h-full bg-white text-black rounded-xl shadow-xl border-2 border-yellow-500 flex flex-col justify-center items-center [backface-visibility:hidden]">
                <h3 className="text-lg font-semibold">3D Logo</h3>
                <p className="text-sm mt-2">Mercedes, Xbox</p>
              </div>

              <div className="absolute w-full h-full bg-yellow-500 text-black rounded-xl shadow-xl flex flex-col justify-center items-center [backface-visibility:hidden] [transform:rotateY(180deg)]">
                <h4 className="text-lg font-bold">3D Logo</h4>
                <p className="text-sm mt-2 px-4 text-center">
                  Logos designed with depth, shadow, and 3D effects.
                </p>
              </div>
            </div>
          </div>

          {/* Card 6 - Mascot Logo */}
          <div className="group h-60 [perspective:1000px]">
            <div className="relative h-full w-full transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              <div className="absolute w-full h-full bg-white text-black rounded-xl shadow-xl border-2 border-yellow-500 flex flex-col justify-center items-center [backface-visibility:hidden]">
                <h3 className="text-lg font-semibold">Mascot Logo</h3>
                <p className="text-sm mt-2">KFC, Planters</p>
              </div>

              <div className="absolute w-full h-full bg-yellow-500 text-black rounded-xl shadow-xl flex flex-col justify-center items-center [backface-visibility:hidden] [transform:rotateY(180deg)]">
                <h4 className="text-lg font-bold">Mascot Logo</h4>
                <p className="text-sm mt-2 px-4 text-center">
                  Character-based logos that represent brand personality.
                </p>
              </div>
            </div>
          </div>

          {/* Card 7 - Combination Mark */}
          <div className="group h-60 [perspective:1000px]">
            <div className="relative h-full w-full transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              <div className="absolute w-full h-full bg-white text-black rounded-xl shadow-xl border-2 border-yellow-500 flex flex-col justify-center items-center [backface-visibility:hidden]">
                <h3 className="text-lg font-semibold">Combination Mark</h3>
                <p className="text-sm mt-2">MasterCard, Puma</p>
              </div>

              <div className="absolute w-full h-full bg-yellow-500 text-black rounded-xl shadow-xl flex flex-col justify-center items-center [backface-visibility:hidden] [transform:rotateY(180deg)]">
                <h4 className="text-lg font-bold">Combination</h4>
                <p className="text-sm mt-2 px-4 text-center">
                  Mix of symbol + typography together in one logo.
                </p>
              </div>
            </div>
          </div>

          {/* Card 8 - Origami Logo */}
          <div className="group h-60 [perspective:1000px]">
            <div className="relative h-full w-full transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              <div className="absolute w-full h-full bg-white text-black rounded-xl shadow-xl border-2 border-yellow-500 flex flex-col justify-center items-center [backface-visibility:hidden]">
                <h3 className="text-lg font-semibold">Origami Logo</h3>
                <p className="text-sm mt-2">Modern Fold Style</p>
              </div>

              <div className="absolute w-full h-full bg-yellow-500 text-black rounded-xl shadow-xl flex flex-col justify-center items-center [backface-visibility:hidden] [transform:rotateY(180deg)]">
                <h4 className="text-lg font-bold">Origami Design</h4>
                <p className="text-sm mt-2 px-4 text-center">
                  Folded paper style modern creative logo concepts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= Our works ================= */}

{/* ================= CREATIVE LOGO DESIGN WORKS ================= */}
<section className="py-20 px-6 bg-[#0f172a]">
  <h2 className="text-4xl font-bold text-center text-white mb-16">
    Our Creative Logo Design Works
  </h2>

  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
    {/* Logo Card 1 */}
    <div className="group relative overflow-hidden rounded-lg bg-gradient-to-br from-gray-800 to-gray-900 p-8 hover:scale-105 transition-transform duration-300">
      <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      <div className="relative bg-gray-200 rounded-lg shadow-2xl p-12 flex items-center justify-center h-64">
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 text-4xl font-bold">
            <span className="text-gray-800">scay</span>
            <span className="text-pink-500">❤️</span>
            <span className="text-gray-800">mple</span>
          </div>
          <div className="mt-4 h-1 w-32 mx-auto bg-pink-500 rounded"></div>
        </div>
      </div>
      
      <div className="absolute bottom-4 left-0 right-0 text-center">
        <div className="text-pink-400 text-sm font-semibold opacity-60">
          scay❤️mple
        </div>
      </div>
    </div>

    {/* Logo Card 2 */}
    <div className="group relative overflow-hidden rounded-lg bg-gradient-to-br from-gray-800 to-gray-900 p-8 hover:scale-105 transition-transform duration-300">
      <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      <div className="relative bg-gradient-to-br from-amber-900 via-amber-800 to-amber-900 rounded-lg shadow-2xl p-12 flex items-center justify-center h-64">
        <div className="text-center">
          <div className="w-24 h-24 mx-auto mb-4 bg-red-600 rounded-full flex items-center justify-center border-4 border-amber-700 shadow-lg">
            <span className="text-white text-3xl font-serif font-bold">RP</span>
          </div>
          <div className="text-white text-2xl font-bold tracking-widest mb-2">
            WOOD RP
          </div>
          <div className="flex justify-center gap-2 mt-4">
            <div className="w-8 h-8 bg-gray-300 rounded-full border-2 border-amber-700"></div>
            <div className="w-8 h-8 bg-gray-300 rounded-full border-2 border-amber-700"></div>
            <div className="w-8 h-8 bg-gray-300 rounded-full border-2 border-amber-700"></div>
            <div className="w-8 h-8 bg-gray-300 rounded-full border-2 border-amber-700"></div>
            <div className="w-8 h-8 bg-gray-300 rounded-full border-2 border-amber-700"></div>
          </div>
        </div>
      </div>
    </div>

    {/* Logo Card 3 */}
    <div className="group relative overflow-hidden rounded-lg bg-gradient-to-br from-gray-800 to-gray-900 p-8 hover:scale-105 transition-transform duration-300">
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      <div className="relative bg-gradient-to-br from-gray-300 via-gray-200 to-gray-300 rounded-lg shadow-2xl p-12 flex items-center justify-center h-64">
        <div className="relative">
          {/* Crown */}
          <div className="text-yellow-500 text-8xl font-bold flex items-center justify-center">
            <svg className="w-32 h-32" viewBox="0 0 100 100" fill="currentColor">
              <path d="M50 20 L30 40 L20 35 L15 50 L85 50 L80 35 L70 40 Z" />
              <circle cx="50" cy="25" r="5" />
              <circle cx="30" cy="38" r="4" />
              <circle cx="70" cy="38" r="4" />
            </svg>
          </div>
          
          {/* Infinity Symbol */}
          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
            <svg className="w-24 h-24 text-yellow-600" viewBox="0 0 100 50" fill="none" stroke="currentColor" strokeWidth="6">
              <path d="M 10 25 Q 25 10, 35 25 Q 45 40, 50 25 Q 55 10, 65 25 Q 75 40, 90 25" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    {/* // section 5 testimonial*/}

            <section className="bg-[#0f172a] py-20 px-6">
                {/* Heading */}
                <h2 className="text-4xl text-white text-center font-medium mb-14">
                    Testimonials
                </h2>

                {/* Cards */}
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((item) => (
                        <div
                            key={item.id}
                            className={`bg-[#15191f] rounded-2xl p-8 relative transition
              ${item.active ? "border border-yellow-500" : "border border-transparent"}
            `}
                        >
                            {/* Text */}
                            <p className="text-gray-300 text-sm leading-relaxed mb-8">
                                {item.text}
                            </p>

                            {/* Stars */}
                            <div className="flex gap-1 mb-6">
                                {Array.from({ length: 5 }).map((_, i) => (
                                    <span key={i} className="text-yellow-400 text-sm">★</span>
                                ))}
                            </div>

                            {/* User */}
                            <div className="flex items-center gap-4">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-12 h-12 rounded-full object-cover"
                                />

                                <div>
                                    <p className="text-white font-medium">{item.name}</p>
                                    <p className="text-gray-400 text-sm">{item.location}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>


              {/* // section 6 newsletter*/}

            <section className="relative bg-[#0f172a] py-28 px-6 flex justify-center items-center overflow-hidden">

                {/* Background big text */}
                <h1 className="absolute text-[120px] md:text-[160px] font-bold text-white/5 select-none">
                    Newsletter
                </h1>

                {/* Input Box */}
                <div className="relative w-full max-w-3xl">
                    <div className="flex items-center bg-[#11151a] border border-gray-700 rounded-full p-2 shadow-xl">

                        {/* Input */}
                        <input
                            type="email"
                            placeholder="Enter your Email Address"
                            className="flex-1 bg-transparent outline-none px-6 py-4 text-gray-300 placeholder-gray-500"
                        />

                        {/* Button */}
                        <button className="flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-black font-medium px-8 py-3 rounded-full transition">
                            <Send size={18} />
                            Subscribe
                        </button>
                    </div>
                </div>
            </section>
    </section>
  );
}