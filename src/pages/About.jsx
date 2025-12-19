import React, { useState, useEffect, useRef } from "react";
import aboutVideo from "../assets/Videos/aboutus.mp4";

export default function AboutUs() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isFixed, setIsFixed] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(false);
  const containerRef = useRef(null);
  const [videoHeight, setVideoHeight] = useState(0);

  useEffect(() => {
    // Calculate and store initial video height
    const calculateVideoHeight = () => {
      const maxWidth = 1450;
      const aspectRatio = 30 / 100; // paddingTop 30%
      const height = maxWidth * aspectRatio;
      setVideoHeight(height);
    };

    calculateVideoHeight();
    window.addEventListener('resize', calculateVideoHeight);

    return () => window.removeEventListener('resize', calculateVideoHeight);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const containerTop = containerRef.current.offsetTop;
      const scrollY = window.scrollY;
      const triggerPoint = containerTop - 56;
      const animationDuration = 600;

      if (scrollY >= triggerPoint && scrollY < triggerPoint + animationDuration) {
        setIsFixed(true);
        setAnimationComplete(false);
        const progress = (scrollY - triggerPoint) / animationDuration;
        const easedProgress = progress < 0.5 
          ? 2 * progress * progress 
          : 1 - Math.pow(-2 * progress + 2, 2) / 2;
        setScrollProgress(Math.min(Math.max(easedProgress, 0), 1));
      } else if (scrollY < triggerPoint) {
        setIsFixed(false);
        setAnimationComplete(false);
        setScrollProgress(0);
      } else {
        setIsFixed(false);
        setAnimationComplete(true);
        setScrollProgress(1);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const videoWidthPercent = 100 - (scrollProgress * 50);
  const videoContainerLeft = scrollProgress * 50;
  const videoRoundedness = scrollProgress * 16;

  // Sample team data
  const teamMembers = [
    { name: "Devendra Sharma", role: "Founder & Chairman", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop" },
    { name: "Priya Patel", role: "Operations Director", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop" },
    { name: "Devendra Sharma", role: "Founder & Chairman", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop" },
    { name: "Devendra Sharma", role: "Founder & Chairman", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop" },
    { name: "Devendra Sharma", role: "Founder & Chairman", image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&h=400&fit=crop" },
    { name: "Devendra Sharma", role: "Founder & Chairman", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop" },
    { name: "Devendra Sharma", role: "Founder & Chairman", image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&h=400&fit=crop" },
    { name: "Devendra Sharma", role: "Founder & Chairman", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop" }
  ];

  return (
    <div className="bg-white">

      {/* ORIGINAL ANIMATION SECTION - UNCHANGED */}
      <div ref={containerRef} className="relative" style={{ minHeight: '167vh' }}>
        
        <div 
          className={`${isFixed ? 'fixed' : 'absolute'} w-full`}
          style={{ 
            zIndex: isFixed ? 40 : 1,
            top: isFixed ? '56px' : '550px', // 👈 SMALL SPACING
            left: 0,
            height: '100vh'
          }}
        >

          <div className="container mx-auto px-6 py-10 h-full flex flex-col justify-center">
            
            {/* FIRST SECTION */}
            <div 
              className="text-center mb-14"
              style={{
                opacity: 1 - (scrollProgress * 1.5),
                transform: `translateY(-${scrollProgress * 120}px)`,
                pointerEvents: scrollProgress > 0.7 ? 'none' : 'auto',
                transition: 'opacity 0.2s ease-out, transform 0.2s ease-out'
              }}
            >              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-7">
                Technology That{" "}
                <span className="bg-gradient-to-r from-[#30AA68] to-[#0067B0] bg-clip-text text-transparent">
                  Drives Tomorrow
                </span>
              </h1>
              
              <p className="text-[#616161] text-lg md:text-l font-normal max-w-7xl mx-auto leading-relaxed mt-4">
                At KodeVerge, innovation fuels everything we do. We're more than just developers — we're your strategic technology partner, committed to turning bold ideas into impactful digital solutions. Founded by a team of visionary engineers, designers, and strategists, KodeVerge has grown into a powerhouse of creativity and technical expertise. Over the years, we've delivered numerous high-performing products for businesses across industries. At KodeVerge, innovation fuels everything we do. We're more than just developers — we're your strategic technology partner, committed to turning bold ideas into impactful digital solutions.
              </p>
            </div>

            {/* Container for video and mission text */}
            <div className="relative w-full mx-auto flex items-center" style={{ maxWidth: "1450px", minHeight: `${videoHeight}px` }}>
              
              {/* VIDEO SECTION */}
              <div 
                className="overflow-hidden shadow-2xl absolute"
                style={{ 
                  width: `${videoWidthPercent}%`,
                  left: `${videoContainerLeft}%`,
                  height: `${videoHeight}px`,
                  maxWidth: '1450px',
                  borderRadius: `${videoRoundedness}px`,
                  transition: 'width 0.05s linear, left 0.05s linear, border-radius 0.2s ease, box-shadow 0.2s ease'
                }}
              >
                <div className="relative w-full h-full">
                  <video
                    src={aboutVideo}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute top-0 left-0 w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Placeholder */}
              <div style={{ height: `${videoHeight}px` }}></div>

              {/* SECOND SECTION - Our Mission */}
              <div 
                className="absolute left-0 w-[45%] pr-10 flex flex-col justify-center"
                style={{
                  top: '50%',
                  transform: `translate(${(1 - scrollProgress) * -80}px, -50%)`,
                  opacity: scrollProgress * 1.3,
                  pointerEvents: scrollProgress < 0.4 ? 'none' : 'auto',
                  transition: 'transform 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                }}
              >
                <p className="text-gray-600 text-base font-medium mb-2">Our Mission</p>
                
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold leading-tight mb-4">
                  Building Digital{" "}
                  <span className="bg-gradient-to-r from-[#30AA68] to-[#0067B0] bg-clip-text text-transparent">
                    Excellence
                  </span>
                </h2>
                
                <p className="text-[#616161] text-sm md:text-base font-normal leading-relaxed mb-4">
                  At KodeVerge, our mission is to empower businesses with technology that solves today's challenges and anticipates tomorrow's opportunities. We craft digital solutions that merge intuitive design with powerful, secure, and scalable technology.
                </p>
                
                <p className="text-[#616161] text-sm md:text-base font-normal leading-relaxed mb-5">
                  By combining technical expertise with creative problem-solving, we enable our clients to innovate faster, operate smarter, and achieve more than they thought possible.
                </p>

                <a 
                  href="#get-started"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#30AA68] to-[#0067B0] text-white font-semibold text-base shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 w-fit"
                >
                  Get Started
                  <svg 
                    className="w-4 h-4" 
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
          </div>
        </div>
      </div>

      {/* NEW SECTIONS START HERE */}
      
      {/* How We Are Making a Change Section */}
        <div
          className="relative pt-28 pb-16 mt-28"
          style={{ background: 'linear-gradient(180deg, #1A1A1A 0%, #0F2820 100%)' }}
        >
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              How We Are Making a Change
            </h2>
            <p className="text-gray-300 max-w-3xl mx-auto text-base md:text-lg">
              Our comprehensive system transforms traditional geohole operations through technology, care, and community engagement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {/* Stat Card 1 */}
            <div className="bg-white rounded-2xl p-8 text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <h3 className="text-5xl font-bold mb-3" style={{ background: 'linear-gradient(135deg, #40FF98 0%, #4DADF0 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                1+
              </h3>
              <p className="text-gray-700 font-medium text-lg">Years of Innovation</p>
            </div>

            {/* Stat Card 2 */}
            <div className="bg-white rounded-2xl p-8 text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <h3 className="text-5xl font-bold mb-3" style={{ background: 'linear-gradient(135deg, #40FF98 0%, #4DADF0 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                50+
              </h3>
              <p className="text-gray-700 font-medium text-lg">Skilled Experts</p>
            </div>

            {/* Stat Card 3 */}
            <div className="bg-white rounded-2xl p-8 text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <h3 className="text-5xl font-bold mb-3" style={{ background: 'linear-gradient(135deg, #40FF98 0%, #4DADF0 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                98%
              </h3>
              <p className="text-gray-700 font-medium text-lg">Client Satisfaction</p>
            </div>

            {/* Stat Card 4 */}
            <div className="bg-white rounded-2xl p-8 text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <h3 className="text-5xl font-bold mb-3" style={{ background: 'linear-gradient(135deg, #40FF98 0%, #4DADF0 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                10+
              </h3>
              <p className="text-gray-700 font-medium text-lg">Projects Delivered</p>
            </div>
          </div>
        </div>
      </div>

      {/* Our Teams Section */}
 {/* Our Teams Section */}
<div className="relative py-28 bg-[#F5F5F5]">
  <div className="container mx-auto px-6">
    
    {/* Section Header */}
    <div className="text-center mb-20">
      <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
        Our Teams
      </h2>
      <p className="text-gray-600 text-lg max-w-2xl mx-auto">
        The visionaries behind our success
      </p>
    </div>

    {/* Team Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="
                  group bg-white rounded-3xl p-8 text-center
                  shadow-[0_10px_30px_rgba(0,0,0,0.08)]
                  hover:shadow-[0_20px_50px_rgba(0,0,0,0.15)]
                  transition-all duration-300 ease-out
                  hover:-translate-y-3
                "
              >
                {/* Avatar */}
                <div className="relative mb-6 mx-auto w-32 h-32 rounded-full overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="
                      w-full h-full object-cover
                      transition-transform duration-300
                      group-hover:scale-110
                    "
                  />
                </div>

                {/* Name */}
                <h3 className="text-lg font-bold text-gray-900 mb-1">
                  {member.name}
                </h3>

                {/* Role */}
                <p className="text-gray-600 text-sm">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}