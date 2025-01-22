import React from "react";
import { ArrowRight } from "lucide-react";
import Button from "../ui/Button";

export default function Hero() {
  return (
    <div
      className="relative h-[600px] bg-cover bg-center"
      style={{
        backgroundImage:
          'url("https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&q=80")',
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="max-w-2xl text-white">
          <h1 className="text-5xl font-bold mb-6">Discover Premium Wines</h1>
          <p className="text-xl mb-8">
            Explore our curated collection of finest wines from around the world
          </p>
          <Button
            text={"Shop Now"}
            type={"button"}
            onClick={() => {}}
            variant={"secondary"}
            icon={<ArrowRight className="h-5 w-5" />}
          ></Button>
        </div>
      </div>
    </div>
  );
}
