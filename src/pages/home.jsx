import { useNavigate } from "react-router-dom";
import BakerySection from "../component/BakerySection.jsx";
import FeaturedSection from "../component/FeaturedSection";
import NextSection from "../component/nextSection";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <section
        className="min-h-[80vh] bg-no-repeat bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://thetaverncoffee.com/wp-content/uploads/2025/05/bgtop.png)",
        }}
      >
        <div className="max-w-7xl mx-auto px-8 py-20 grid md:grid-cols-2 items-center gap-10">

          {/* LEFT */}
          <div>
            <h3 className="text-base sm:text-lg md:text-2xl lg:text-4xl font-serif mb-6">
              Welcome to Tavern Coffee House
            </h3>


            <h3 className="text-xl md:text-2xl font-serif leading-tight mb-6">
              Brewing Hope & <br />
              Great Coffee in the <br />
              Heart of Colombo
            </h3>

            <p className="text-gray-700 mb-6 max-w-lg">
              A cozy coffee shop serving freshly brewed coffee, warm moments,
              and a welcoming atmosphere for everyone.
            </p>

            <div className="flex gap-4">


              <button
                onClick={() => navigate("/menu")}
                className="bg-[#5b3a29] text-white px-6 py-3 hover:opacity-90 transition"
              >
                View Menu →
              </button>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1511920170033-f8396924c348"
              alt="Coffee Cup"
              className="w-[260px] md:w-[360px] max-h-[380px] object-cover rounded-lg shadow-lg"
            />

          </div>
        </div>
      </section>

      <FeaturedSection />
      <NextSection />
      <BakerySection />
    </>
  );
};

export default Home;
