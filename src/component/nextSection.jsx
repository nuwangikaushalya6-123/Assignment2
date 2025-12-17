import { useNavigate } from "react-router-dom";
import CofeeBag from "../assets/cofeeBag1.jpg";

const NextSection = () => {
  const navigate = useNavigate();

  return (
    <>
      
      <section className="hidden md:block bg-[#6b4a4f] text-white py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 gap-10 items-center">

          {/* IMAGE */}
          <div className="flex justify-start">
            <img
              src={CofeeBag}
              alt="Takeout Food"
              className="w-[420px]"
            />
          </div>

          {/* TEXT */}
          <div className="space-y-4">
            <h2 className="text-5xl font-serif mb-6 leading-tight">
              Tasty Food Delivered Fast
            </h2>

            <p className="text-gray-200 mb-8 leading-relaxed">
              We deliver fresh meals right to your door. Hot and ready!
            </p>

            <button
              onClick={() => navigate("/menu")}
              className="border border-white px-6 py-3 hover:bg-white hover:text-black transition"
            >
              View Menu →
            </button>
          </div>

        </div>
      </section>

     
<section className="block md:hidden bg-[#6b4a4f] text-white py-16 px-6">
  <div className="max-w-xl mx-auto text-center space-y-8">

    {/* HEADING */}
    <h2 className="text-3xl font-serif leading-tight">
      Tasty Food Delivered Fast
    </h2>

    {/* PARAGRAPH */}
    <p className="text-gray-200 leading-relaxed">
      We deliver fresh meals right to your door. Hot and ready!
    </p>

    {/* IMAGE */}
    <div className="flex justify-center">
      <img
        src={CofeeBag}
        alt="Takeout Food"
        className="w-[260px]"
      />
    </div>

    {/* BUTTON */}
    <button
      onClick={() => navigate("/menu")}
      className="border border-white px-6 py-3 hover:bg-white hover:text-black transition"
    >
      View Menu →
    </button>

  </div>
</section>

    </>
  );
};

export default NextSection;
