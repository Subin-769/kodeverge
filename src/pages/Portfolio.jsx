import React, { useState, useEffect } from "react";
import { Monitor, Smartphone, ShoppingCart, Package, Code } from "lucide-react";
// import laptop from "@/assets/Images/laptop.png";

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("All Projects");
  const [isSticky, setIsSticky] = useState(false);

  const tabs = [
    "All Projects",
    "Web Applications",
    "Mobile Apps",
    "SaaS Products",
    "E-Commerce",
    "AI/ML"
  ];

  const projects = [
    {
      id: 1,
      title: "NextGen Banking Platform",
      company: "FinanceFlow Inc.",
      description: "A comprehensive digital banking solution featuring real-time transactions, AI-powered fraud detection, and seamless mobile experience. Built with React, Node.js, and advanced security protocols.",
      metrics: [
        { value: "300%", label: "User Growth" },
        { value: "99.9%", label: "Uptime" },
        { value: "$2M+", label: "Transactions" }
      ],
      image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=800&h=600&fit=crop",
      categories: ["Web Applications", "SaaS Products"]
    },
    {
      id: 2,
      title: "SmartHealth Telemedicine App",
      company: "HealthTech Solutions",
      description: "Revolutionary healthcare platform connecting patients with doctors through video consultations, AI symptom analysis, and electronic health records management.",
      metrics: [
        { value: "50K+", label: "Active Users" },
        { value: "4.8/5", label: "Rating" },
        { value: "10K+", label: "Consultations" }
      ],
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop",
      categories: ["Mobile Apps", "AI/ML"]
    },
    {
      id: 3,
      title: "E-Shop Marketplace",
      company: "RetailX Commerce",
      description: "Multi-vendor e-commerce platform with advanced inventory management, real-time analytics, payment gateway integration, and personalized shopping experiences.",
      metrics: [
        { value: "500+", label: "Vendors" },
        { value: "$5M+", label: "Revenue" },
        { value: "200K+", label: "Products" }
      ],
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop",
      categories: ["E-Commerce", "Web Applications"]
    },
    {
      id: 4,
      title: "CloudOps DevSecOps Platform",
      company: "TechScale Inc.",
      description: "Enterprise-grade DevOps automation platform with CI/CD pipelines, container orchestration, security scanning, and comprehensive monitoring solutions.",
      metrics: [
        { value: "85%", label: "Deploy Speed" },
        { value: "99.99%", label: "Availability" },
        { value: "100+", label: "Enterprises" }
      ],
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop",
      categories: ["SaaS Products", "Web Applications"]
    },
    {
      id: 5,
      title: "AI Content Generator",
      company: "ContentAI Labs",
      description: "Intelligent content creation platform powered by machine learning, generating blog posts, social media content, and marketing copy with natural language processing.",
      metrics: [
        { value: "1M+", label: "Content Pieces" },
        { value: "95%", label: "Accuracy" },
        { value: "30K+", label: "Users" }
      ],
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
      categories: ["AI/ML", "SaaS Products"]
    },
    {
      id: 6,
      title: "FitTrack Wellness App",
      company: "WellnessX",
      description: "Comprehensive fitness and nutrition tracking mobile application with personalized workout plans, meal planning, progress analytics, and social features.",
      metrics: [
        { value: "100K+", label: "Downloads" },
        { value: "4.7/5", label: "App Rating" },
        { value: "75%", label: "Daily Active" }
      ],
      image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&h=600&fit=crop",
      categories: ["Mobile Apps"]
    }
  ];

  const filteredProjects = activeTab === "All Projects" 
    ? projects 
    : projects.filter(project => project.categories.includes(activeTab));

  // Scroll effect for sticky filter
  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById('hero-section');
      if (heroSection) {
        const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
        setIsSticky(window.scrollY > heroBottom - 80);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Space for navbar */}
      <div className="h-20"></div>

      {/* MAIN CONTAINER */}
      <div className="container mx-auto px-6 py-12">

        {/* HERO SECTION */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight drop-shadow-sm">
            <span className="bg-gradient-to-r from-[#0067B0] to-[#00A84E] bg-clip-text text-transparent">
              Our Work Speaks For Itself
            </span>
          </h1>

          <p className="text-gray-700 text-base md:text-lg max-w-4xl mx-auto leading-relaxed mt-4">
            Discover how we've helped businesses transform their digital presence with innovative
            solutions. From startups to enterprises, our portfolio showcases the impact of cutting-edge
            technology and thoughtful design.
          </p>
        </div>

        {/* STICKY FILTER TABS */}
        <div 
          className={`${
            isSticky ? 'fixed top-20 left-0 right-0 bg-white shadow-md z-40' : 'relative'
          } transition-all duration-300`}
        >
          <div className="container mx-auto px-6 py-6">
            <div className="flex flex-wrap justify-center gap-3">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-2.5 rounded-full font-medium transition-all ${
                    activeTab === tab
                      ? "bg-[#0067B0] text-white shadow-md"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Spacer when filter is sticky */}
        {isSticky && <div className="h-20"></div>}

        {/* FEATURED PROJECTS SECTION WITH GRAY BACKGROUND */}
        <div className="bg-[#EEEEEE] rounded-3xl p-8 md:p-12 mb-16">
          {/* FEATURED PROJECTS HEADER */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
              Featured Projects
            </h2>
            <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
              Our most impactful work that transformed businesses and created exceptional user experiences.
            </p>
          </div>

          {/* PROJECTS GRID */}
          <div className="space-y-16">
            {filteredProjects.slice(0, 2).map((project, index) => (
              <div
                key={project.id}
                className={`grid lg:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Image */}
                <div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-[400px] object-cover"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className="bg-white rounded-2xl p-8 shadow-md">
                    <h3 className="text-3xl font-bold text-gray-800 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-[#0067B0] font-semibold text-lg mb-4">
                      {project.company}
                    </p>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Metrics */}
                    <div className="grid grid-cols-3 gap-4">
                      {project.metrics.map((metric, idx) => (
                        <div
                          key={idx}
                          className="bg-[#EEEEEE] rounded-lg p-4 text-center"
                        >
                          <div className="text-2xl font-bold bg-gradient-to-r from-[#0067B0] to-[#00A84E] bg-clip-text text-transparent mb-1">
                            {metric.value}
                          </div>
                          <div className="text-xs text-gray-600 font-medium">
                            {metric.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* THREE COLUMN CARDS SECTION */}
        {filteredProjects.length > 2 && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {filteredProjects.slice(2).map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all hover:-translate-y-1"
              >
                {/* Image */}
                <div className="overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-[220px] object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-1">
                    {project.title}
                  </h3>
                  <p className="text-[#0067B0] font-semibold text-sm mb-3">
                    {project.company}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Learn More Button */}
                  <button className="text-[#0067B0] font-semibold text-sm hover:underline flex items-center gap-1">
                    Learn More
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* HERO SECTION WITH CTA BANNER */}
        <div id="hero-section" className="bg-gray-50 py-8">
          <div className="container mx-auto px-6">
            {/* WRAPPER TO CONTROL OVERFLOW WITHOUT MOVING RECTANGLE */}
            <div className="relative">
              {/* CTA Banner (Rectangle Box) */}
              <div className="bg-gradient-to-r from-[#002147] to-[#00A84E] rounded-3xl shadow-2xl mb-12 overflow-visible relative z-0 p-10">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  {/* LEFT CONTENT */}
                  <div className="text-white">
                    <h1 className="text-xl md:text-2xl lg:text-3xl font-bold mb-6 leading-tight">
                      Let's Build Your Digital Success Together
                    </h1>
                    <p className="text-white/90 text-base md:text-lg leading-relaxed mb-8">
                      Join our growing list of happy clients. We offer reliable software 
                      development, digital marketing, web design, and more—right here in Nepal.
                    </p>
                    <button className="bg-white text-[#0067B0] px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl">
                      Contact Us
                    </button>
                  </div>
                </div>
              </div>

              {/* IMAGE FLOATING OUTSIDE RECTANGLE */}
              <div className="absolute right-0 top-0 -translate-y-14 z-10 flex justify-end w-full pointer-events-none">
                <img src = "./laptop.png"
                  alt="Digital Analytics Dashboard"
                  className="w-full max-w-2xl drop-shadow-2xl"
                  style={{ maxHeight: "1200px", objectFit: "contain" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}