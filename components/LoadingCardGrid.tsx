import React from "react";
import LoadingCard from "./LoadingCard";
import LoadingContent from "./LoadingContent";

const LoadingCardGrid: React.FC<{ numCards: number }> = ({ numCards }) => {
  const cards = Array.from({ length: numCards });
  return (
    <div className="grid-cols-1 grid-rows-2 md:grid md:gap-8 md:grid-cols-3 md:grid-rows-1 h-[calc(100%-64px)]">
      <aside className="flex flex-row overflow-x-auto snap-x md:overflow-scroll md:pr-4 md:flex-col mb-4">
        {cards.map((_, index) => (
          <LoadingCard key={index} />
        ))}
      </aside>
      <main className="col-span-2">
        <LoadingContent />
      </main>
    </div>
  );
};

export default LoadingCardGrid;
