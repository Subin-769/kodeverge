// src/components/ServicesSection.jsx
import React from "react";

export default function ServicesSection() {
  return (
    <section className="bg-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left large image */}
          <div className="order-2 lg:order-1">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src="/images/image1.png"
                alt="Services visual"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Right floating card */}
          <div className="order-1 lg:order-2 relative">
            <div className="bg-white p-8 rounded-lg shadow-xl transform lg:-translate-y-10">
              <h2 className="text-2xl md:text-3xl font-bold text-[#0f4c81]">
                Custom web applications Development
              </h2>
              <p className="mt-4 text-gray-600">
                We craft tailored web solutions for performance, scalability, and exceptional user engagement. Every product is built to match your unique business needs and goals. Build scalable, high-performance web applications tailored to your business using modern frameworks and best practices.
              </p>

              <a href="/services" className="inline-block mt-6 text-blue-600 font-medium">
                Read More →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
