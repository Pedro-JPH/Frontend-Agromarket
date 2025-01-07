"use client";

import { Leaf, Sprout, Sun, Truck } from "lucide-react";

const features = [
  {
    icon: <Leaf className="h-8 w-8 text-green-600" />,
    title: "100% Organic",
    description: "All our products are certified organic and sustainably grown",
  },
  {
    icon: <Truck className="h-8 w-8 text-green-600" />,
    title: "Fast Delivery",
    description: "Same-day delivery for local orders",
  },
  {
    icon: <Sprout className="h-8 w-8 text-green-600" />,
    title: "Fresh Products",
    description: "Direct from farm to your table",
  },
  {
    icon: <Sun className="h-8 w-8 text-green-600" />,
    title: "Sustainable Farming",
    description: "Supporting local farmers and sustainable practices",
  },
];

export function FeaturesSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}