// src/components/ServiceCard.jsx
import React from "react";

function Icon({ name }) {
  // simple inline SVGs — swap or expand as needed
  switch (name) {
    case "web-app":
      return (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M3 12h18M3 6h18M3 18h18" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "mobile-app":
      return (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="7" y="2" width="10" height="20" rx="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M11 18h2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "ai-data":
      return (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="3" />
          <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5 5l2 2M17 17l2 2M5 19l2-2M17 7l2-2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "cloud-devops":
      return (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M20 17.58A5 5 0 0 0 18 7H17a5 5 0 0 0-9.9 1" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M3 20h18" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    default:
      return (
        <div className="w-8 h-8 rounded bg-gray-100 flex items-center justify-center">⚙️</div>
      );
  }
}

export default function ServiceCard({ id, title, desc, bullets = [] }) {
  return (
    <article className="bg-white border rounded-lg p-6 hover:shadow-lg transition">
      <div className="flex items-center gap-4 mb-4">
        <div className="p-3 rounded-lg bg-primary/10 text-primary inline-flex">
          <Icon name={id} />
        </div>
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      </div>

      <p className="text-sm text-gray-600 mb-4">{desc}</p>

      {bullets.length > 0 && (
        <ul className="text-sm text-gray-600 list-disc ml-5 space-y-1">
          {bullets.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
      )}
    </article>
  );
}
