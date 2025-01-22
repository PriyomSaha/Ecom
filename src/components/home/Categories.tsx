import React from "react";
import { Wine, GlassWater, Grape } from "lucide-react";

const categories = [
  {
    icon: <Wine className="h-8 w-8" />,
    name: "Red Wines",
    description: "Bold and sophisticated reds",
  },
  {
    icon: <GlassWater className="h-8 w-8" />,
    name: "White Wines",
    description: "Crisp and refreshing whites",
  },
  {
    icon: <Grape className="h-8 w-8" />,
    name: "Champagne",
    description: "Luxurious sparkling wines",
  },
];

export default function Categories() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Browse by Category
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
          {categories.map((category, index) => (
            <div
              key={index}
              className="text-center p-8 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 mb-6 bg-burgundy-100 text-burgundy-600 rounded-full">
                {category.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
              <p className="text-gray-600">{category.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
