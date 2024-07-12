import React from "react";
import { Image01, Image02, Image03, Image04 } from "./_assets";
import Image from "next/image";

const GridPage = () => {
  const images = [Image01, Image02, Image03, Image04];

  return (
    <main className="min-h-screen">
      <h1 className="text-3xl text-center mb-10">Create a Grid of squares</h1>

      <div className="grid grid-cols-4 gap-4">
        {images.map((image, index) => (
          <div key={index} className="relative pb-[100%]">
            <Image src={image} alt={`Image ${index + 1}`} fill />
          </div>
        ))}
      </div>
    </main>
  );
};

export default GridPage;
