"use client";

import { Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Leaf className="h-6 w-6 text-green-600" />
          <span className="text-xl font-bold text-gray-900">FreshHarvest</span>
        </div>
        <div className="hidden md:flex space-x-8">
          <a href="#" className="text-gray-600 hover:text-green-600">Home</a>
          <a href="#" className="text-gray-600 hover:text-green-600">Products</a>
          <a href="#" className="text-gray-600 hover:text-green-600">About</a>
          <a href="#" className="text-gray-600 hover:text-green-600">Contact</a>
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="ghost">Sign In</Button>
          <Button className="bg-green-600 hover:bg-green-700">Sign Up</Button>
        </div>
      </nav>
    </header>
  );
}