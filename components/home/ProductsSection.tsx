"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const featuredProducts = [
  {
    id: 1,
    name: "Organic Tomatoes",
    description: "Fresh, locally grown organic tomatoes",
    price: "$4.99/lb",
    image: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&q=80&w=500",
  },
  {
    id: 2,
    name: "Premium Rice",
    description: "High-quality long-grain rice",
    price: "$12.99/kg",
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&q=80&w=500",
  },
  {
    id: 3,
    name: "Fresh Corn",
    description: "Sweet and tender corn, freshly harvested",
    price: "$0.99/ear",
    image: "https://images.unsplash.com/photo-1551754655-cd27e38d2076?auto=format&fit=crop&q=80&w=500",
  },
];

export function ProductsSection() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <Card key={product.id} className="overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-green-600">
                    {product.price}
                  </span>
                  <Button variant="outline">Add to Cart</Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}