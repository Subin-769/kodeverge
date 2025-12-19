import React from "react";
import { ArrowRight } from "lucide-react";

export default function BlogCard({ image, title, date, description, onClick }) {
  return (
    <div 
      onClick={onClick}
      className="cursor-pointer group relative"
    >
      {/* Image Container */}
      <div className="relative h-[187px] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Text Container */}
      <div className="relative -mt-12 ml-0 mr-4 bg-white p-4 shadow-sm">
        {/* Title */}
        <h3 className="text-[11px] font-bold text-black mb-2 leading-tight">
          {title}
        </h3>

        {/* Date with underline */}
        <div className="mb-3">
          <time className="text-[11px] font-semibold text-black">
            {date}
          </time>
          <div className="h-[2px] w-12 bg-[#002147] mt-1"></div>
        </div>

        {/* Description */}
        <p className="text-[9px] font-medium text-black leading-[22px] mb-3">
          {description}
        </p>

        {/* Read More Link */}
        <div className="flex items-center gap-2 text-[10px] font-semibold text-[#002147] group-hover:gap-3 transition-all">
          <span>Read More</span>
          <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.5} />
        </div>
      </div>
    </div>
  );
}