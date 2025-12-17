import Image1 from "../assets/g1.jpg";
import Image2 from "../assets/g2.jpg";
import Image3 from "../assets/g3.jpg";
import Image4 from "../assets/g4.jpg";
import Image5 from "../assets/g5.jpg";
import Image6 from "../assets/g6.jpg";


const services = [
  { 
    image: Image1, 
  },
  {
    image: Image2,
  },
  {
    image: Image3,
  },
  {
    image: Image4,
  },
  {
    image: Image5,
  },
  {
    image: Image6,
  },
];

const galary = () => {
  return (
    <section className="p-5 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8">Our Gallary</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={service.image}
              
              className="w-full h-48 object-cover"
            />
            
          </div>
        ))}
      </div>
    </section>
  );
};

export default galary;
