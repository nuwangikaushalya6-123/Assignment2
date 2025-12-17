import { useNavigate } from "react-router-dom";
import React from 'react';
import DineIn from "../assets/DineIn.jpg";
import Takeaway from "../assets/Takeaway.jpg";
import FreeWiFi from "../assets/FreeWiFi.jpg";
import StudySpace from "../assets/StudySpace.jpg";
import LiveMusic from "../assets/LiveMusic.jpg";


const EventImagePlaceholder = DineIn;


const HostEventSection = () => {
  const navigate = useNavigate();
  return (
    <>
      <h1 className="text-center text-4xl font-bold mb-4">Services</h1>
      <section className="bg-white py-2 md:py-10 relative overflow-hidden">



        {/*main container  */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-12 items-start">

          {/* left side: Text Content */}
          <div className="lg:w-1/2 order-2 lg:order-1">

            {/* Header */}
            <h1 className="text-4xl md:text-5xl font-serif text-stone-800 mb-6 leading-tight">
              Dine-In Experience
            </h1>

            {/* Subheader */}
            <p className="text-lg font-semibold text-stone-700 mb-6">
              Your Favorite Spot Awaits. <span className="underline decoration-yellow-600 decoration-2"></span>
            </p>

            {/* Body Paragraph 1 */}
            <p className="text-gray-600 mb-4 leading-relaxed">
              Take a moment to pause. Come inside, grab your preferred beverage, and sink into our cozy seating. Whether you’re staying for five minutes or an hour, our bright, welcoming interior is the perfect backdrop for your day. Experience the true comfort of The Tavern Coffee House.
            </p>


            {/* Black vertical line*/}
            <div className="border-l-4 border-stone-800 pl-4 mb-8">
              <p className="italic text-gray-700">
                Every table filled here is a new connection built, fueling our mission to foster stronger community bonds.
              </p>
            </div>

            {/* Call to Action Text */}
            <p className="text-gray-700 mb-8">
              <span className="font-semibold">Ready to book your time?</span> <a href="#" className="text-blue-600 underline hover:text-blue-800 transition-colors">Click here to reserve your space now.</a>
              <br />
              Let's make something meaningful—together.
            </p>


            <button
              type="button"
              onClick={() => {
                navigate("/contact");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="bg-stone-800 text-white py-3 px-6 text-lg font-medium shadow-lg hover:bg-stone-700 transition-colors flex items-center"
            >
              Book Now
              <span className="ml-2">→</span>
            </button>


          </div>

          {/* right: Image */}
          <div className="lg:w-1/2 order-1 lg:order-2">
            <img
              src={EventImagePlaceholder}
              alt="The Tavern Coffee House counter and seating area"
              className="w-full h-auto object-cover shadow-2xl"
            />
          </div>

        </div>


      </section>

      <section className="bg-[#f7f3ef] py-16 md:py-24 relative overflow-hidden">


        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-12 items-start">

          {/* 1. left side: Image (first order-1) */}
          <div className="lg:w-1/2 order-1 lg:order-1">
            <img
              src={Takeaway}
              alt="The Tavern Coffee House Dine-In Area"
              className="w-full h-auto object-cover shadow-2xl"
            />
          </div>

          {/* 2. right side: Text Content (view to second order-2) */}
          <div className="lg:w-1/2 order-2 lg:order-2">

            {/* Header */}
            <h1 className="text-4xl md:text-5xl font-serif text-stone-800 mb-6 leading-tight">
              Takeaway
            </h1>

            {/* Subheader/Bolding */}
            <p className="text-lg font-semibold text-stone-700 mb-6">
              Coffee to Fuel Your Day, Anywhere.
            </p>

            {/* Body Paragraph */}
            <p className="text-gray-600 mb-4 leading-relaxed">
              Don't let your busy schedule keep you from enjoying the best. Our takeaway options are designed for ultimate convenience, delivering the same delicious quality and warmth you find inside our shop, packaged perfectly for the road. Whether you're heading to the office, a picnic, or starting a long journey, we've got the fuel you need. Take us with you!
            </p>



            <div className="border-l-4 border-stone-800 pl-4 mb-8">
              <p className="italic text-gray-700">
                When you grab and go, you help us grow. Every quick transaction supports stronger job training and local programs.
              </p>
            </div>


            <p className="text-gray-700 mb-8">
              <span className="font-semibold">Ready to order your food?</span> <a href="#" className="text-blue-600 underline hover:text-blue-800 transition-colors">Click here to order your space food.</a>
              <br />
              Brewed Fresh, Ready When You Are.
            </p>


            <button
              type="button"
              onClick={() => navigate("/menu")}
              className="bg-stone-800 text-white py-3 px-6 text-lg font-medium shadow-lg hover:bg-stone-700 transition-colors flex items-center">
              View Menu
              <span className="ml-2">→</span>
            </button>



          </div>

        </div>
      </section>

      <section className="bg-white py-16 md:py-24 relative overflow-hidden">



        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-12 items-start">


          <div className="lg:w-1/2 order-2 lg:order-1">

            {/* Header */}
            <h1 className="text-4xl md:text-5xl font-serif text-stone-800 mb-6 leading-tight">
              Free Wi-Fi
            </h1>

            {/* Subheader/Bolding */}
            <p className="text-lg font-semibold text-stone-700 mb-6">
              Your Remote Office, Powered by Coffee. <span className="underline decoration-yellow-600 decoration-2"></span>
            </p>

            {/* Body Paragraph 1 */}
            <p className="text-gray-600 mb-4 leading-relaxed">
              Looking for a reliable workspace outside of the office or home? We offer fast and free Wi-Fi so you can connect, create, and collaborate without interruption. Settle into one of our cozy seating areas, enjoy unlimited access to our high-speed internet, and let the aroma of fresh coffee fuel your productivity. Whether you're catching up on emails, joining a virtual meeting, or tackling your next big project, The Tavern is your ideal remote HQ.
            </p>



            <div className="border-l-4 border-stone-800 pl-4 mb-8">
              <p className="italic text-gray-700">
                The time you spend connecting here invests directly in transforming careers and creating community opportunity.
              </p>
            </div>


            <p className="text-gray-700 mb-8">
              <span className="font-semibold">Ready to book your time?</span> <a href="#" className="text-blue-600 underline hover:text-blue-800 transition-colors">Click here to reserve your space now.</a>
              <br />
              Let's make something meaningful—together.
            </p>


            <button
              type="button"
              onClick={() => navigate("/contact")}
              className="bg-stone-800 text-white py-3 px-6 text-lg font-medium shadow-lg hover:bg-stone-700 transition-colors flex items-center">
              Book Now
              <span className="ml-2">→</span>
            </button>

          </div>


          <div className="lg:w-1/2 order-1 lg:order-2">
            <img
              src={FreeWiFi}
              alt="The Tavern Coffee House counter and seating area"
              className="w-full h-auto object-cover shadow-2xl"
            />
          </div>

        </div>


      </section>

      <section className="bg-[#f7f3ef] py-16 md:py-24 relative overflow-hidden">


        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-12 items-start">


          <div className="lg:w-1/2 order-1 lg:order-1">
            <img
              src={StudySpace}
              alt="The Tavern Coffee House Dine-In Area"
              className="w-full h-auto object-cover shadow-2xl"
            />
          </div>


          <div className="lg:w-1/2 order-2 lg:order-2">


            <h1 className="text-4xl md:text-5xl font-serif text-stone-800 mb-6 leading-tight">
              The Study Hub
            </h1>


            <p className="text-lg font-semibold text-stone-700 mb-6">
              Settle in, power up, and achieve deep focus.
            </p>


            <p className="text-gray-600 mb-4 leading-relaxed">
              We understand the need for a distraction-free zone where ideas can thrive. Our dedicated study space provides the perfect blend of quiet ambiance, comfortable seating, and essential amenities like fast, free Wi-Fi and accessible power outlets. Whether you're preparing for an exam, drafting a paper, or engaging in collaborative study sessions, we provide the ideal atmosphere—complemented by the steady supply of great coffee—to help you reach your goals.
            </p>



            <div className="border-l-4 border-stone-800 pl-4 mb-8">
              <p className="italic text-gray-700">
                The hours you spend connecting and learning here directly invest in transforming careers and creating local educational opportunities.
              </p>
            </div>


            <p className="text-gray-700 mb-8">
              <span className="font-semibold">Ready to book your time?</span> <a href="#" className="text-blue-600 underline hover:text-blue-800 transition-colors">Click here to reserve your space now.</a>
              <br />
              Let's make something meaningful—together.
            </p>


            <button
              type="button"
              onClick={() => navigate("/contact")}
              className="bg-stone-800 text-white py-3 px-6 text-lg font-medium shadow-lg hover:bg-stone-700 transition-colors flex items-center">
              Book Now
              <span className="ml-2">→</span>
            </button>

          </div>

        </div>
      </section>

      <section className="bg-white py-16 md:py-24 relative overflow-hidden">




        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-12 items-start">


          <div className="lg:w-1/2 order-2 lg:order-1">

            <h1 className="text-4xl md:text-5xl font-serif text-stone-800 mb-6 leading-tight">
              Live Music Nights
            </h1>


            <p className="text-lg font-semibold text-stone-700 mb-6">
              Where great coffee meets local artistry. <span className="underline decoration-yellow-600 decoration-2"></span>
            </p>


            <p className="text-gray-600 mb-4 leading-relaxed">
              Elevate your evening with the warmth of coffee and the energy of local talent. Our Live Music Nights transform The Tavern into an intimate venue, showcasing musicians from the Buckeye neighborhood and beyond. It’s the perfect way to unwind after a long week or discover your next favorite artist. Check our calendar for the schedule and join us for an evening of great sound, great company, and great coffee.
            </p>



            <div className="border-l-4 border-stone-800 pl-4 mb-8">
              <p className="italic text-gray-700">
                Every ticket bought and song enjoyed helps us provide paid performance opportunities for local artists and support community arts.
              </p>
            </div>


            <p className="text-gray-700 mb-8">
              <span className="font-semibold">Ready to book your time?</span> <a href="#" className="text-blue-600 underline hover:text-blue-800 transition-colors">Click here to reserve your space now.</a>
              <br />
              Let's make something meaningful—together.
            </p>


            <button
              type="button"
              onClick={() => navigate("/contact")}
              className="bg-stone-800 text-white py-3 px-6 text-lg font-medium shadow-lg hover:bg-stone-700 transition-colors flex items-center">
              Book Now
              <span className="ml-2">→</span>
            </button>

          </div>

          <div className="lg:w-1/2 order-1 lg:order-2">
            <img
              src={LiveMusic}
              alt="The Tavern Coffee House counter and seating area"
              className="w-full h-auto object-cover shadow-2xl"
            />
          </div>

        </div>


      </section>




    </>
  );
};

export default HostEventSection;