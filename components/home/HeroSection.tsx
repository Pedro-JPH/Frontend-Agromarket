"use client";

import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative h-[600px] flex items-center justify-center">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-5xl font-bold mb-6">Fresh from Our Fields</h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Discover the finest selection of organic produce and agricultural products,
          delivered fresh from local farms to your doorstep.
        </p>
        <Button size="lg" className="bg-green-600 hover:bg-green-700">
          Browse Products
        </Button>
      </div>
    </section>
  );
}