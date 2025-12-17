import muffin from "../assets/muffinandcoffee.png"; 
import { useNavigate } from "react-router-dom";

const BakerySection = () => {
  const navigate = useNavigate();
  return (
    <section className="relative bg-[#faf7f4] overflow-hidden">
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-20 bg-repeat"
        style={{
          backgroundImage:
            "url('https://www.transparenttextures.com/patterns/food.png')",
        }}
      ></div>

      <div className="relative max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
        
        {/* Left Content */}
        <div>
          <p className="uppercase tracking-wide text-sm text-brown-600 mb-3">
            Baked Goods, Pastries, & Sandwiches
          </p>

          <h1 className="font-serif text-4xl md:text-5xl text-[#3b2f2f] leading-tight mb-6">
            Better Together: The <br />
            Tavern × Hunny Bunny’s <br />
            Bakery
          </h1>

          <p className="text-gray-700 max-w-lg mb-8">
            Every pastry we serve is handcrafted by Hunny Bunny Bakery, a local
            gem we’re proud to support. It's a sweet partnership that supports
            local business and builds up Buckeye — one bite at a time.
          </p>

          <button
          type="button"
          onClick={() => navigate("/menu")}
          className="bg-[#3b2f2f] text-white border border-black px-6 py-3">
            Order Now →
          </button>
        </div>

        {/* Right Image */}
        <div className="relative flex justify-center">
          <img
            src={muffin}
            alt="Blueberry Muffin"
            className="w-[320px] md:w-[420px] drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default BakerySection;
