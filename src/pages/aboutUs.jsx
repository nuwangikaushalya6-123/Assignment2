
import React from "react";
import coffeeImage from "../assets/coffee2.jpg";
import coffeeImage3 from "../assets/image3.jpg";
import coffeeImage4 from "../assets/image4.jpg";
import OldShop from "../assets/oldShop.jpg";

const About = () => {
  return (
    <div className="pt-2">
      {/* About Us Section */}
      <section className="text-center py-2  px-4">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>

      </section>

      <div className="bg-[#f7f3ef]">
        <div className="max-w-7xl mx-auto px-8 py-20 grid md:grid-cols-2 items-center gap-10">

          {/* LEFT SIDE – IMAGE */}
          <div className="flex justify-center">
            <img
              src={OldShop}
              alt="Our Vision"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* RIGHT SIDE – TEXT */}
          <div>
            <p className="text-sm uppercase tracking-wide text-brown-900 mb-3">
              Our History
            </p>

            <h2 className="text-4xl md:text-5xl font-serif leading-tight mb-6">
              A Coffeehouse That Builds Community.
            </h2>

            <p className="text-gray-700 max-w-lg">
              Founded with a passion for great coffee and stronger communities, The Tavern Coffee House began as a small neighborhood café with a big purpose. Over the years, we have grown into a welcoming space where people gather to connect, create, and celebrate everyday moments. Every table tells a story, and every cup we serve reflects our commitment to quality, care, and community. From humble beginnings to becoming a hub for local culture and connection, our history is built on warmth, dedication, and a love for coffee.
            </p>
          </div>

        </div>
      </div>

      {/* Our Vision Section */}

      <div className="max-w-7xl mx-auto px-8 py-20 grid md:grid-cols-2 items-center gap-10">

        {/* LEFT SIDE – TEXT */}
        <div>
          <p className="text-sm uppercase tracking-wide text-brown-900 mb-3">
            Our Mission
          </p>

          <h1 className="text-4xl md:text-6xl font-serif leading-tight mb-6">
            Brewing Hope in the heart of Buckeye
          </h1>

          <p className="text-gray-700 mb-6 max-w-lg">
            The Tavern Coffeehouse exists to bring hope back to Buckeye through strong coffee, stronger jobs, to build the strongest community. We’re here to brew change — starting with quality coffee and extending into meaningful work opportunities. Our space is designed to be a launchpad for local growth, a gathering spot for connection, and a symbol of what’s possible when hope is reignited in a neighborhood.
          </p>


        </div>

        {/* RIGHT SIDE – IMAGE */}
        <div className="flex justify-center">
          <img
            src={coffeeImage}
            alt="Coffee Shop"
            className="w-full h-full object-cover cursor-pointer hover:opacity-90 transition"
          />
        </div>

      </div>

      {/* Our Vision Section */}
      <div className="bg-[#f7f3ef]">
        <div className="max-w-7xl mx-auto px-8 py-20 grid md:grid-cols-2 items-center gap-10">

          {/* LEFT SIDE – IMAGE */}
          <div className="flex justify-center">
            <img
              src={coffeeImage3}
              alt="Our Vision"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* RIGHT SIDE – TEXT */}
          <div>
            <p className="text-sm uppercase tracking-wide text-brown-900 mb-3">
              Our Vision
            </p>

            <h2 className="text-4xl md:text-5xl font-serif leading-tight mb-6">
              A Coffeehouse That Builds Community
            </h2>

            <p className="text-gray-700 max-w-lg">
              Our vision is to create more than just a coffee shop. We strive to be a
              place where conversations spark change, relationships grow stronger,
              and every cup of coffee fuels purpose. Through intentional design,
              meaningful employment, and exceptional coffee, we aim to inspire hope
              and unity in every community we serve.
            </p>
          </div>

        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 py-20 grid md:grid-cols-2 items-center gap-10">

        {/* LEFT SIDE – TEXT */}
        <div>
          <p className="text-sm uppercase tracking-wide text-brown-900 mb-3">
            Our value
          </p>

          <h1 className="text-4xl md:text-6xl font-serif leading-tight mb-6">
            Coffee That Means More.
          </h1>

          <p className="text-gray-700 mb-6 max-w-lg">
            We are more than a coffee shop. Every cup we serve supports local growth, meaningful employment, and a stronger community. Our coffee fuels purpose, not just mornings.
          </p>


        </div>

        {/* RIGHT SIDE – IMAGE */}
        <div className="flex justify-center">
          <img
            src={coffeeImage4}
            alt="Coffee Shop"
            className="w-full h-full object-cover cursor-pointer hover:opacity-90 transition"
          />
        </div>

      </div>


    </div>


  );
};

export default About;
