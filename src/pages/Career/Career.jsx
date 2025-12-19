import React, { useState } from 'react';
import career from "../../assets/Images/career.png";
import car1 from "../../assets/Images/car1.png";
import car2 from "../../assets/Images/car2.png";
import car3 from "../../assets/Images/car3.png";
import car4 from "../../assets/Images/car4.png";
import car5 from "../../assets/Images/car5.png";
import car6 from "../../assets/Images/car6.png";
import innovationIcon from "../../assets/SVG/innovation.svg";
import spiritIcon from "../../assets/SVG/spirit.svg";
import agileIcon from "../../assets/SVG/agile.svg";
import focusIcon from "../../assets/SVG/focus.svg";
import benefitIcon from "../../assets/SVG/benefit.svg";
import growthIcon from "../../assets/SVG/growth.svg";
import balanceIcon from "../../assets/SVG/balance.svg";
import webImg from "../../assets/Images/web.png";
import appImg from "../../assets/Images/app.png";
import saasImg from "../../assets/Images/saas.png";

export default function Career() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      img: webImg,
      title: "Web Development",
      desc: "Building responsive, scalable web apps using modern frameworks"
    },
    {
      img: appImg,
      title: "Mobile App Development",
      desc: "Creating innovative mobile solutions for iOS and Android platforms"
    },
    {
      img: saasImg,
      title: "SaaS Solutions",
      desc: "Developing scalable Software-as-a-Service products"
    }
  ];
  
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };
  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };
  
  const cultureValues = [
    {
      icon: innovationIcon,
      title: "Innovation Driven",
      description: "We believe in the power of innovative thinking where every idea matters, and innovation is not just part of our work, it's at the heart of everything we do."
    },
    {
      icon: spiritIcon,
      title: "Collaborative Spirit",
      description: "Our team thrives on collaboration, fostering open communication, mutual respect, and harnessing diverse experiences and expertise to excel."
    },
    {
      icon: agileIcon,
      title: "Agile Excellence",
      description: "We prioritize adaptability and continuous improvement, empowering our teams to quickly respond to challenges and drive impactful innovation at every stage."
    }
  ];
  
  const whyJoinUs = [
    {
      icon: focusIcon,
      title: "Innovation Focus",
      description: "Work with cutting-edge tech in web development, mobile apps, AI/ML cybersecurity, and cloud solutions"
    },
    {
      icon: benefitIcon,
      title: "Competitive Benefits",
      description: "Comprehensive packages including health coverage, performance bonuses, learning budgets, and flexible work arrangements."
    },
    {
      icon: growthIcon,
      title: "Career Growth",
      description: "Clear advancement paths, mentorship programs, and leadership opportunities in our rapidly growing company."
    },
    {
      icon: balanceIcon,
      title: "Work-Life Balance",
      description: "Flexible schedules, remote work options, unlimited PTO, and a culture that respects your personal time and well-being."
    }
  ];
  
  return (
    <div className="bg-white">
      {/* ========== Hero Section ========== */}
      <section className="relative w-full" style={{ height: '70vh', marginTop: '80px' }}>
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src={career} 
            alt="Career" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"></div>
        </div>
        
        <div className="relative z-10 h-full flex flex-col justify-end pb-20" style={{ maxWidth: '1450px', margin: '0 auto', padding: '0 24px' }}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 max-w-4xl">
            <span className="text-white">Shape the Future with </span>
            <span className="bg-gradient-to-r from-[#30AA68] to-[#0067B0] bg-clip-text text-transparent">KodeVerge</span>
          </h1>
          <p className="text-white text-lg md:text-xl font-normal max-w-2xl leading-relaxed mb-10">
            Join a team of passionate innovators building tomorrow's technology solutions where you can create impact and see ideas come to life.
          </p>
          <a 
            href="/career/job-detail"
            className="inline-flex items-center gap-3 px-10 py-4 rounded-full bg-gradient-to-r from-[#30AA68] to-[#0067B0] text-white font-semibold text-base shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 w-fit group"
          >
            View Open Positions
            <svg 
              className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M13 7l5 5m0 0l-5 5m5-5H6" 
              />
            </svg>
          </a>
        </div>
      </section>

      {/* ========== Our Unique Culture Section ========== */}
      <section className="py-24 bg-white relative">
        <div style={{ maxWidth: '1450px', margin: '0 auto', padding: '0 24px' }}>
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              Our Unique <span className="bg-gradient-to-r from-[#0067B0] to-[#30AA68] bg-clip-text text-transparent">Culture</span>
            </h2>
            <p className="text-[#616161] text-lg md:text-xl font-normal max-w-4xl mx-auto leading-relaxed">
              At KodeVerge, we foster an environment where creativity meets innovation, and every team member is empowered to push boundaries and make exceptional solutions.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {cultureValues.map((value, index) => (
              <div 
                key={index}
                className="relative bg-white border-2 border-gray-100 rounded-2xl overflow-hidden group hover:border-transparent hover:shadow-2xl transition-all duration-500"
              >
                {/* Animated gradient border */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#0067B0] via-[#30AA68] to-[#0067B0] opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                <div className="absolute inset-[2px] bg-white rounded-2xl"></div>
                
                <div className="relative p-10 text-center">
                  <div className="w-16 h-16 flex items-center justify-center mb-6 mx-auto rounded-full bg-gradient-to-br from-[#0067B0]/10 to-[#30AA68]/10 group-hover:scale-110 transition-transform duration-500">
                    <img src={value.icon} alt={value.title} className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-800 group-hover:bg-gradient-to-r group-hover:from-[#0067B0] group-hover:to-[#30AA68] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                    {value.title}
                  </h3>
                  <p className="text-[#616161] text-base leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== Life at Hiveora Section ========== */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-[#0067B0]/5 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-[#30AA68]/5 to-transparent rounded-full blur-3xl"></div>
        
        <div style={{ maxWidth: '1450px', margin: '0 auto', padding: '0 24px' }} className="relative z-10">
          {/* Section Header */}
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              Life at <span className="bg-gradient-to-r from-[#0067B0] to-[#30AA68] bg-clip-text text-transparent">Hiveora</span>
            </h2>
            <p className="text-[#616161] text-lg md:text-xl font-normal max-w-4xl mx-auto leading-relaxed">
              Experience our vibrant workplace culture where innovation meets collaboration in a dynamic and supportive environment.
            </p>
          </div>
          
          {/* Image Grid - Fixed Height and Gaps */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6" style={{ height: 'auto' }}>
            {/* Left Column - Tall Image */}
            <div className="md:col-span-4 h-[500px] md:h-[600px]">
              <div className="relative h-full rounded-2xl overflow-hidden shadow-xl group">
                <img 
                  src={car1} 
                  alt="Office environment" 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute bottom-6 left-6 right-6">
                    <p className="text-white font-semibold text-lg">Modern Workspace</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Middle Column */}
            <div className="md:col-span-5 flex flex-col gap-6 h-auto md:h-[600px]">
              {/* Top Wide Image */}
              <div className="h-[250px] md:flex-1">
                <div className="relative h-full rounded-2xl overflow-hidden shadow-xl group">
                  <img 
                    src={car2} 
                    alt="Team collaboration" 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute bottom-6 left-6 right-6">
                      <p className="text-white font-semibold text-lg">Team Collaboration</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Bottom Two Images */}
              <div className="grid grid-cols-2 gap-6 h-[250px] md:flex-1">
                <div className="relative rounded-2xl overflow-hidden shadow-xl group">
                  <img 
                    src={car3} 
                    alt="Modern office" 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-white font-semibold text-sm">Innovation Hub</p>
                    </div>
                  </div>
                </div>
                <div className="relative rounded-2xl overflow-hidden shadow-xl group">
                  <img 
                    src={car4} 
                    alt="Team meeting" 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-white font-semibold text-sm">Creative Sessions</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Column */}
            <div className="md:col-span-3 flex flex-col gap-6 h-auto md:h-[600px]">
              <div className="h-[250px] md:flex-1">
                <div className="relative h-full rounded-2xl overflow-hidden shadow-xl group">
                  <img 
                    src={car5} 
                    alt="Creative workspace" 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute bottom-6 left-6 right-6">
                      <p className="text-white font-semibold text-base">Learning Space</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-[250px] md:flex-1">
                <div className="relative h-full rounded-2xl overflow-hidden shadow-xl group">
                  <img 
                    src={car6} 
                    alt="Collaborative session" 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute bottom-6 left-6 right-6">
                      <p className="text-white font-semibold text-base">Team Building</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Bottom Supporting Text */}
          <div className="text-center mt-16 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-[#0067B0]/10 to-[#30AA68]/10 rounded-full mb-6">
              <div className="w-2 h-2 bg-gradient-to-r from-[#0067B0] to-[#30AA68] rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold bg-gradient-to-r from-[#0067B0] to-[#30AA68] bg-clip-text text-transparent">
                WORK ENVIRONMENT
              </span>
            </div>
            <p className="text-[#616161] text-lg leading-relaxed">
              We invest in our team's growth and well-being to create an environment where everyone can thrive, innovate, and achieve their full potential.
            </p>
          </div>
        </div>
      </section>

      {/* ========== Why Join Us Section ========== */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Top gradient line */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#0067B0] to-transparent"></div>
        
        {/* Background decoration */}
        <div className="absolute top-20 right-0 w-96 h-96 bg-gradient-to-bl from-[#30AA68]/5 to-transparent rounded-full blur-3xl"></div>
        
        <div style={{ maxWidth: '1450px', margin: '0 auto', padding: '0 24px' }} className="relative z-10">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-[#0067B0]/10 to-[#30AA68]/10 rounded-full mb-6">
              <svg className="w-5 h-5 text-[#0067B0]" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="text-sm font-semibold bg-gradient-to-r from-[#0067B0] to-[#30AA68] bg-clip-text text-transparent">
                BENEFITS & PERKS
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              Why Join <span className="bg-gradient-to-r from-[#0067B0] to-[#30AA68] bg-clip-text text-transparent">KodeVerge?</span>
            </h2>
            <p className="text-[#616161] text-lg md:text-xl font-normal max-w-3xl mx-auto leading-relaxed">
              Discover what makes KodeVerge an exceptional place to build your career and grow as a professional.
            </p>
          </div>
          
          {/* Benefits Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {whyJoinUs.map((item, index) => (
              <div 
                key={index}
                className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 h-full flex flex-col items-center text-center cursor-pointer overflow-hidden"
              >
                {/* Animated background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#0067B0]/5 to-[#30AA68]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Icon container */}
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#0067B0] to-[#30AA68] rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                  <div className="relative w-20 h-20 flex items-center justify-center rounded-full bg-gradient-to-br from-[#0067B0] to-[#30AA68] shadow-lg group-hover:shadow-2xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 transform">
                    <img 
                      src={item.icon} 
                      alt={item.title} 
                      className="w-10 h-10 filter brightness-0 invert" 
                    />
                  </div>
                </div>
                
                {/* Content */}
                <h3 className="relative text-xl font-bold mb-4 text-gray-800 group-hover:bg-gradient-to-r group-hover:from-[#0067B0] group-hover:to-[#30AA68] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300 z-10">
                  {item.title}
                </h3>
                
                <p className="relative text-[#616161] text-base leading-relaxed flex-grow z-10">
                  {item.description}
                </p>
                
                {/* Bottom accent */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1.5 bg-gradient-to-r from-[#0067B0] to-[#30AA68] group-hover:w-24 transition-all duration-500 rounded-t-full"></div>
              </div>
            ))}
          </div>
          
          {/* Call to Action */}
          <div className="text-center">
            <a 
              href="/career/job-detail"
              className="inline-flex items-center gap-3 px-12 py-5 rounded-full bg-gradient-to-r from-[#0067B0] to-[#30AA68] text-white font-bold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 group relative overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-[#30AA68] to-[#0067B0] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
              <span className="relative">Explore Career Opportunities</span>
              <svg 
                className="relative w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-300" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M13 7l5 5m0 0l-5 5m5-5H6" 
                />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* ========== Our Team, Your Future Section ========== */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-[#0067B0]/5 to-transparent rounded-full blur-3xl"></div>
        
        <div style={{ maxWidth: '1450px', margin: '0 auto', padding: '0 24px' }} className="relative z-10">
          {/* Section Header */}
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              Our Team, <span className="bg-gradient-to-r from-[#0067B0] to-[#30AA68] bg-clip-text text-transparent">Your Future</span>
            </h2>
            <p className="text-[#616161] text-lg md:text-xl font-normal max-w-4xl mx-auto leading-relaxed">
              From creative designers to meticulous engineers, our team is built on passion, precision, and purpose.
            </p>
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:flex gap-8 items-stretch">
            {/* Main Slider */}
            <div className="lg:w-2/3">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl h-[550px]">
                <div 
                  className="flex transition-transform duration-700 ease-in-out h-full"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {slides.map((slide, index) => (
                    <div key={index} className="w-full flex-shrink-0 h-full relative">
                      <img 
                        src={slide.img} 
                        alt={slide.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                      <div className="absolute bottom-0 left-0 right-0 p-10 text-white">
                        <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold mb-4">
                          0{index + 1} / 0{slides.length}
                        </div>
                        <h3 className="text-3xl font-bold mb-3">{slide.title}</h3>
                        <p className="text-white/90 text-lg max-w-2xl">{slide.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Side Navigation Cards */}
            <div className="lg:w-1/3 flex flex-col gap-6">
              {slides.map((slide, index) => (
                <div 
                  key={index}
                  className={`flex items-center gap-5 p-6 rounded-2xl border-2 transition-all duration-500 cursor-pointer group ${
                    currentSlide === index 
                      ? 'border-transparent bg-gradient-to-r from-[#0067B0] to-[#30AA68] shadow-xl scale-105' 
                      : 'border-gray-200 bg-white hover:border-gray-300 hover:shadow-lg hover:scale-102'
                  }`}
                  onClick={() => setCurrentSlide(index)}
                >
                  <div className="flex-shrink-0 w-20 h-20 rounded-xl overflow-hidden shadow-md">
                    <img 
                      src={slide.img} 
                      alt={slide.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className={`font-bold text-lg mb-2 ${
                      currentSlide === index ? 'text-white' : 'text-gray-800'
                    }`}>
                      {slide.title}
                    </h4>
                    <p className={`text-sm line-clamp-2 ${
                      currentSlide === index ? 'text-white/90' : 'text-gray-600'
                    }`}>
                      {slide.desc}
                    </p>
                  </div>
                  {currentSlide === index && (
                    <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                  )}
                </div>
              ))}
         </div>
      </div>
    </div>
  </section>
</div>
);
}
