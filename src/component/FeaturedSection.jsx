import { useNavigate } from "react-router-dom";


const FeaturedSection = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-[#3b2f2f] text-white py-20 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT SIDE – TEXT */}
        <div>
          <p className="text-orange-400 uppercase tracking-widest mb-3">
            Featured Special
          </p>

          <h2 className="text-3xl md:text-5xl font-serif mb-6 leading-tight">
            Serving up Something for Everyone.
          </h2>

          <p className="text-gray-200 mb-8 leading-relaxed">
            From bold brews to sweet sips, every drink at our Coffee Shop is
            crafted with care and community in mind. Whether you're grabbing
            your go-to latte or trying something new, there's something here
            for everyone.
          </p>

          {/* LEFT BUTTON */}
          <button
            type="button"
            onClick={() => navigate("/menu")}
            className="border border-white px-6 py-3 hover:bg-white hover:text-black transition"
          >
            Start a Pickup Order →
          </button>
        </div>

        {/* RIGHT SIDE – CARD */}
        <div className="bg-white text-black rounded-3xl shadow-xl overflow-hidden max-w-md mx-auto">

          {/* Top Image */}
          <div className="bg-[#ead6b5] flex justify-center py-6">
            <img
              src="https://images.unsplash.com/photo-1509042239860-f550ce710b93"
              alt="Latte"
              className="w-24 h-24 rounded-full object-cover"
            />
          </div>

          {/* Card Content */}
          <div className="p-8">
            <h3 className="text-2xl font-serif mb-3">
              The “Tavern's Favorite” Signature Latte
            </h3>

            <p className="text-lg font-semibold mb-4">$5.00</p>

            <p className="text-sm mb-2">☕ Caffeine Level 100 mg</p>

            <p className="text-gray-600 mb-6">
              Our strong latte with any available syrup. We got you.
            </p>

           
            <button
              type="button"
              onClick={() => navigate("/menu")}
              className="text-[#5b3a29] font-medium underline hover:opacity-80"
            >
              Order Ahead →
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default FeaturedSection;
