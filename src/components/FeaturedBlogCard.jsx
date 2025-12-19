import React from "react";

export default function FeaturedBlogCard({ image, title, date, description, onClick, className = "" }) {
  return (
    <div 
      onClick={onClick}
      className={`relative cursor-pointer group overflow-hidden rounded-none ${className}`}
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
      
      {/* Content */}
      <div className="relative h-full flex flex-col justify-end p-8 text-white">
        <p className="text-xs font-normal mb-3">{date}</p>
        <h3 className="text-[22px] font-bold leading-tight mb-4">{title}</h3>
        <p className="text-[13px] font-normal leading-[25px] opacity-90">{description}</p>
      </div>
    </div>
  );
}