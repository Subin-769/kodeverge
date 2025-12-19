import React from "react";

export default function CardGrid({ items = [], Component, onItemClick }) {
  return (
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((it) => (
        <Component key={it.id} {...it} onClick={() => onItemClick && onItemClick(it)} />
      ))}
    </div>
  );
}
