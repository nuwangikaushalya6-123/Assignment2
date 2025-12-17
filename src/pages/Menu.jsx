
import React from "react";
import CoffeeCard from "../component/CoffeeCard.jsx";
import iceCoffee from "../assets/iceCoffee.jpg";
import IcedLatte from "../assets/IcedLatte.jpg";
import IcedMocha from "../assets/IcedMocha.jpg";
import ColdBrew from "../assets/ColdBrew.jpg";
import HotChocolate from "../assets/HotChocolate.jpg";
import MatchaLatte from "../assets/MatchaLatte.jpg";
import ChaiLatte from "../assets/ChaiLatte.jpg";
import VanillaMilk from "../assets/VanillaMilk.jpg";
import StrawberryMilkshake from "../assets/StrawberryMilkshake.jpg";
import Croissant from "../assets/Croissant.jpg";
import ChocolateMuffin from "../assets/ChocolateMuffin.jpg";
import BlueberryMuffin from "../assets/BlueberryMuffin.jpg";
import CinnamonRoll from "../assets/CinnamonRoll.jpg";




const icedCoffees = [
  {
    id: 1,
    name: "Iced Americano",
    description: "Bold espresso poured over ice for a smooth, refreshing taste.",
    price: "LKR 850",
    image: iceCoffee,
  },
  {
    id: 2,
    name: "Iced Latte",
    description: "Chilled milk blended with rich espresso and ice.",
    price: "LKR 950",
    image: IcedLatte,
  },
  {
    id: 3,
    name: "Iced Mocha",
    description: "Espresso, chocolate, and milk served cold over ice.",
    price: "LKR 1,050",
    image: IcedMocha,
  },
  {
    id: 4,
    name: "Cold Brew",
    description: "Slow-brewed coffee for a smooth and naturally sweet flavor.",
    price: "LKR 1,100",
    image: ColdBrew,
  },
];


const nonCoffees = [
  {
    id: 5,
    name: "Hot Chocolate",
    description: "Rich and creamy chocolate drink topped with smooth foam.",
    price: "LKR 900",
    image: HotChocolate,
  },
  {
    id: 102,
    name: "Matcha Latte",
    description: "Premium matcha blended with steamed milk.",
    price: "LKR 950",
    image: MatchaLatte,
  },
  {
    id: 103,
    name: "Chai Latte",
    description: "Spiced tea infused with milk for a comforting flavor.",
    price: "LKR 850",
    image: ChaiLatte,
  },
  {
    id: 104,
    name: "Vanilla Milk",
    description: "Smooth milk flavored with natural vanilla essence.",
    price: "LKR 750",
    image: VanillaMilk,
  },

];

const bakeryItems = [
  {
    id: 201,
    name: "Croissant",
    description: "Flaky and buttery classic French pastry.",
    price: "LKR 400",
    image: Croissant,
  },
  {
    id: 202,
    name: "Chocolate Muffin",
    description: "Rich chocolate muffin with a moist, tender crumb.",
    price: "LKR 450",
    image: ChocolateMuffin,
  },
  {
    id: 203,
    name: "Blueberry Muffin",
    description: "Fresh blueberries baked into a soft muffin.",
    price: "LKR 450",
    image: BlueberryMuffin,
  },
  {
    id: 204,
    name: "Cinnamon Roll",
    description: "Sweet and soft roll with cinnamon and sugar swirls.",
    price: "LKR 500",
    image: CinnamonRoll,
  },
];




const Menu = () => {
  return (
    <div className="pt-20 max-w-7xl mx-auto px-8 py-16">


      {/* Iced Coffee */}
      <h1 className="text-4xl font-serif mb-10 text-center">Iced Coffee</h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {icedCoffees.map((coffee) => (
          <CoffeeCard key={coffee.id} {...coffee} />
        ))}
      </div>

      {/* Non-Coffee */}
      <h1 className="text-4xl font-serif mb-10 mt-20 text-center">Non-Coffee</h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {nonCoffees.map((drink) => (
          <CoffeeCard key={drink.id} {...drink} />
        ))}
      </div>

      {/* Bakery / Pastries Header */}
      <h1 className="text-4xl font-serif mb-10 mt-20 text-center">Bakery & Pastries</h1>

      {/* Bakery Cards Grid */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {bakeryItems.map((item) => (
          <CoffeeCard key={item.id} {...item} />
        ))}
      </div>


    </div>
  );
};

export default Menu;
