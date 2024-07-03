"use client";

import React from "react";
import { useDogStore } from "./_store";
import usePersistStore from "./helpers/usePersistStore";

const Page = () => {
  const store = usePersistStore(useDogStore, (state) => state);

  return (
    <main className="min-h-screen flex flex-col justify-center items-center">
      <h1>Zustand</h1>

      <p>
        How many dogs are there in out Store?{" "}
        <span className="text-lg font-bold">{store?.dogs}</span>
      </p>

      <div className="mt-4">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          onClick={store?.increase}
        >
          Increase
        </button>
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
          onClick={store?.decrease}
        >
          Decrease
        </button>
      </div>
    </main>
  );
};

export default Page;
