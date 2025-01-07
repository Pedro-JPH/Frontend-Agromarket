"use client";

import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="bg-green-600 py-20 text-white">
      <div className="max-w-4xl mx-auto text-center px-4">
        <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
        <p className="text-xl mb-8">
          Join our community of conscious consumers and support local agriculture.
        </p>
        <Button
          size="lg"
          variant="secondary"
          className="bg-white text-green-600 hover:bg-gray-100"
        >
          Sign Up Now
        </Button>
      </div>
    </section>
  );
}