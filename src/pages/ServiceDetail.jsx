import React from "react";
import { useParams } from "react-router-dom";

// Component: Hero Section
function HeroSection() {
  return (
    <section className="h-screen flex items-center bg-white">
      <div className="w-full px-16">
        <div className="flex items-center gap-24 max-w-[1400px] mx-auto">
          {/* Left Content */}
          <div className="flex-1">
            <h1 className="text-7xl font-bold leading-tight mb-8">
              <span className="text-[#1e88e5]">Custom Web </span>
              <span className="text-[#14b8a6]">Applications</span>
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed mb-12 max-w-xl">
              Build powerful, scalable web applications that drive business growth. Our
              expert team creates responsive, fast, and secure web solutions tailored to
              your specific needs.
            </p>

            {/* Stats */}
            <div className="flex gap-20">
              <div>
                <div className="text-5xl font-bold text-[#1e88e5] mb-2">50+</div>
                <div className="text-sm text-gray-700">Web Projects</div>
              </div>
              <div>
                <div className="text-5xl font-bold text-[#1e88e5] mb-2">99%</div>
                <div className="text-sm text-gray-700">Uptime</div>
              </div>
              <div>
                <div className="text-5xl font-bold text-[#1e88e5] mb-2">3x</div>
                <div className="text-sm text-gray-700">Faster Loading</div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex-1">
            <img
              src="/images/image 14.png"
              alt="Dashboard Analytics"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// Component: Process Section
function ProcessSection() {
  return (
    <section className="h-screen flex flex-col justify-center bg-gradient-to-br from-[#0d1f1f] via-[#1a2e2e] to-[#0a1a1a]">
      <div className="w-full px-16">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-5xl font-bold text-white mb-5">
            How we build smarter, together
          </h2>
          <p className="text-gray-300 max-w-4xl mx-auto text-base leading-relaxed">
            When strategy, creativity, and execution are aligned, solutions don't just work—they thrive. That's why at
            KodeVerf, we take the time to understand your goals before writing a single line of code.
          </p>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gray-700 mb-14 max-w-[1300px] mx-auto"></div>

        {/* Process Flow */}
        <div className="relative max-w-[1300px] mx-auto mb-12 px-8">
          <div className="flex justify-between items-center relative" style={{height: '160px'}}>
            {/* Connecting Lines */}
            <svg className="absolute inset-0 w-full h-full" style={{zIndex: 0}}>
              <path
                d="M 60 130 L 160 130 Q 180 130 190 110 L 190 50 L 280 50"
                fill="none"
                stroke="#4b5563"
                strokeWidth="2"
              />
              <path
                d="M 360 50 L 450 50 Q 470 50 480 70 L 480 130 L 580 130"
                fill="none"
                stroke="#4b5563"
                strokeWidth="2"
              />
              <path
                d="M 660 130 L 760 130 Q 780 130 790 110 L 790 50 L 880 50"
                fill="none"
                stroke="#4b5563"
                strokeWidth="2"
              />
              <path
                d="M 960 50 L 1050 50 Q 1070 50 1080 70 L 1080 130 L 1180 130"
                fill="none"
                stroke="#4b5563"
                strokeWidth="2"
              />
            </svg>

            {/* Discovery - Bottom Left */}
            <div className="flex flex-col items-center" style={{zIndex: 1, position: 'relative', top: '40px'}}>
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-500 flex items-center justify-center text-2xl shadow-lg">
                🔍
              </div>
              <div className="text-yellow-400 text-sm font-medium mt-3 italic">Discovery</div>
            </div>

            {/* Planning - Top */}
            <div className="flex flex-col items-center" style={{zIndex: 1, position: 'relative', top: '-50px'}}>
              <div className="text-green-400 text-sm font-medium mb-3 italic">Planning</div>
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-400 to-green-500 flex items-center justify-center text-2xl shadow-lg">
                📊
              </div>
            </div>

            {/* Design - Bottom */}
            <div className="flex flex-col items-center" style={{zIndex: 1, position: 'relative', top: '40px'}}>
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-400 to-cyan-500 flex items-center justify-center text-2xl shadow-lg">
                💡
              </div>
              <div className="text-cyan-400 text-sm font-medium mt-3 italic">Design</div>
            </div>

            {/* Development - Top */}
            <div className="flex flex-col items-center" style={{zIndex: 1, position: 'relative', top: '-50px'}}>
              <div className="text-purple-400 text-sm font-medium mb-3 italic">Development</div>
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-400 to-purple-500 flex items-center justify-center text-2xl shadow-lg">
                ⚙️
              </div>
            </div>

            {/* Content - Bottom */}
            <div className="flex flex-col items-center" style={{zIndex: 1, position: 'relative', top: '40px'}}>
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-pink-400 to-pink-500 flex items-center justify-center text-2xl shadow-lg">
                📄
              </div>
              <div className="text-pink-400 text-sm font-medium mt-3 italic">Content</div>
            </div>

            {/* Testing - Top */}
            <div className="flex flex-col items-center" style={{zIndex: 1, position: 'relative', top: '-50px'}}>
              <div className="text-orange-400 text-sm font-medium mb-3 italic">Testing</div>
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-400 to-orange-500 flex items-center justify-center text-2xl shadow-lg">
                📋
              </div>
            </div>

            {/* Launch & Maintenance - Bottom Right */}
            <div className="flex flex-col items-center" style={{zIndex: 1, position: 'relative', top: '40px'}}>
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-teal-400 to-teal-500 flex items-center justify-center text-2xl shadow-lg">
                🚀
              </div>
              <div className="text-teal-400 text-xs font-medium mt-3 italic text-center">
                Launch &<br/>Maintenance
              </div>
            </div>
          </div>
        </div>

        {/* Process Cards */}
        <div className="grid grid-cols-3 max-w-[1300px] mx-auto rounded-2xl overflow-hidden shadow-2xl mt-16">
          <div className="bg-[#0f4848] p-10">
            <h3 className="text-white font-bold mb-5 text-xl">
              <span className="text-[#4ade80]">Discovery</span> & Strategy
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              We start by uncovering your exact needs—whether it's a custom web app, a mobile platform, or a cloud-based
              solution. Our team blends design thinking, architecture planning, and technical research to validate ideas and
              set a clear blueprint. This ensures we're building the right thing, the right way.
            </p>
          </div>

          <div className="bg-[#0e5c5c] p-10">
            <h3 className="text-[#4ade80] font-bold mb-5 text-xl">Milestones</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              We chart a clear delivery roadmap with well-defined checkpoints. At each milestone, we evaluate progress,
              adjust priorities, and fine-tune the plan. This approach ensures transparency, predictable outcomes, and
              flexibility to adapt to new insights.
            </p>
          </div>

          <div className="bg-[#0a3535] p-10">
            <h3 className="text-[#4ade80] font-bold mb-5 text-xl">Iterations</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Launching a product is just the beginning. We continuously improve your solution through agile
              iterations—enhancing features, optimizing performance, and adapting to evolving market demands. Our agile
              delivery model means your project keeps pace with your business.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// Component: What We Offer
function WhatWeOffer() {
  const offerings = [
    {
      icon: "📱",
      title: "Responsive Design",
      description: "Mobile-first approach ensuring perfect display across all devices and screen sizes.",
    },
    {
      icon: "⚡",
      title: "Performance Optimization",
      description: "Lightning-fast load times and smooth interactions for exceptional user experience.",
    },
    {
      icon: "🔒",
      title: "Security First",
      description: "Enterprise-grade security measures to protect your data and user privacy.",
    },
    {
      icon: "☁️",
      title: "Cloud Integration",
      description: "Seamless cloud deployment and scalable infrastructure for growth.",
    },
    {
      icon: "🎨",
      title: "Custom UI/UX",
      description: "Beautiful, intuitive interfaces designed specifically for your brand.",
    },
    {
      icon: "🔧",
      title: "Ongoing Support",
      description: "Continuous maintenance and updates to keep your application running smoothly.",
    },
  ];

  return (
    <section className="h-screen flex items-center bg-white">
      <div className="w-full px-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            What We Offer
          </h2>
          <p className="text-gray-600 text-base">
            Comprehensive web development services to bring your vision to life
          </p>
        </div>

        {/* Offerings Grid */}
        <div className="grid grid-cols-3 gap-8 max-w-[1400px] mx-auto">
          {offerings.map((offer, index) => (
            <div
              key={index}
              className="text-center p-8 border-t-4 border-[#14b8a6] bg-white shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-50 rounded-lg mb-6">
                <span className="text-3xl">{offer.icon}</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{offer.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {offer.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Component: Stats Section
function StatsSection() {
  const stats = [
    { value: "1+", label: "Years on the market" },
    { value: "50+", label: "People on Board" },
    { value: "98%", label: "Client Satisfaction" },
    { value: "10+", label: "Projects Delivered" },
  ];

  return (
    <section className="h-screen flex items-center bg-gray-50">
      <div className="w-full px-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            How We Are Making a Change
          </h2>
          <p className="text-gray-600 text-base max-w-3xl mx-auto">
            Our comprehensive system transforms traditional operations through technology,
            care, and community engagement.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="flex justify-center gap-8 max-w-[1400px] mx-auto">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white border-t-4 border-[#14b8a6] px-20 py-12 text-center shadow-md min-w-[240px]"
            >
              <div className="text-5xl font-bold text-gray-900 mb-3">{stat.value}</div>
              <div className="text-gray-600 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Component: Testimonial Section
function TestimonialSection() {
  return (
    <section className="h-screen flex items-center bg-white">
      <div className="w-full px-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900">
            How Our Expertise{" "}
            <span className="text-[#14b8a6]">Transformed Businesses</span>
          </h2>
        </div>

        {/* Testimonial Card */}
        <div className="max-w-[1200px] mx-auto bg-gray-50 rounded-2xl p-12 flex gap-12 items-center shadow-lg">
          {/* Image */}
          <div className="flex-shrink-0">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
              alt="Rajesh Sharma"
              className="w-40 h-40 rounded-2xl object-cover"
            />
          </div>

          {/* Content */}
          <div className="flex-1">
            <div className="text-[#14b8a6] text-6xl mb-6 font-serif">"</div>
            <p className="text-gray-700 leading-relaxed mb-8 text-base">
              Working with KodeVerge has been a game-changer for our business. Their team not only delivered a stunning
              and user-friendly web application, but they also guided us with expert insights on cloud deployment, SEO, and
              security. The attention to detail and dedication to our success were unmatched. We now have a product that's
              fast, scalable, and truly represents our brand.
            </p>
            <div className="flex items-center justify-between">
              <div>
                <div className="font-bold text-[#14b8a6] text-lg">Rajesh Sharma</div>
                <div className="text-gray-500 text-sm">CEO</div>
              </div>
              <div className="text-4xl">🍎</div>
            </div>
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-3 mt-10">
          <div className="w-3 h-3 rounded-full bg-[#14b8a6]"></div>
          <div className="w-3 h-3 rounded-full bg-gray-300"></div>
          <div className="w-3 h-3 rounded-full bg-gray-300"></div>
        </div>
      </div>
    </section>
  );
}

// Main Service Detail Page
export default function ServiceDetail() {
  const { slug } = useParams();

  return (
    <div className="bg-white">
      <HeroSection />
      <ProcessSection />
      <WhatWeOffer />
      <StatsSection />
      <TestimonialSection />
    </div>
  );
}