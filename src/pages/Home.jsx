import React, { useEffect, useRef, useState } from "react";
import { MessageCircle, Pencil, Code, ExternalLink, Search, Wrench, RefreshCw, ArrowRight, User } from "lucide-react";

// Image paths from public directory
const MLImage = "/Images/ML.png";
const CloudImage = "/Images/Cloud.png";
const CyberImage = "/Images/cyber.png";
const DevelopmentImage = "/Images/development.png";
const GradRect = "/Images/grad rect.png";

const topics = [
  {
    category: "Data",
    title: "Analytics & AI/ML",
    tagline: "Turn data into actionable intelligence",
    description:
      "We help businesses make smarter decisions through the power of data. At Kode Verge, we design and implement analytics pipelines, dashboards, and AI/ML models that uncover trends, automate processes, and forecast outcomes. Whether you're looking to improve customer retention, streamline operations, or develop intelligent applications, we bring the technical expertise to transform raw data into valuable business intelligence.",
    image: MLImage,
  },
  {
    category: "Cloud",
    title: "Services & DevOps",
    tagline: "Modern infrastructure for faster, more reliable delivery",
    description:
      "Our cloud and DevOps solutions are built to help you deploy faster, scale smarter, and operate more efficiently. We help businesses migrate to the cloud, implement CI/CD pipelines, and adopt infrastructure as code—all while maintaining security, reliability, and performance. By combining agile development practices with automation tools and cloud-native technologies (AWS, Azure, Google Cloud), we empower your team to innovate without operational bottlenecks.",
    image: CloudImage,
  },
  {
    category: "Cybersecurity",
    title: "Services",
    tagline: "Protect your digital assets with confidence",
    description:
      "In an era of increasing cyber threats, your security posture matters more than ever. Kode Verge provides comprehensive cybersecurity services—from vulnerability assessments and penetration testing to security architecture design and compliance consulting. We help you identify risks, implement robust defenses, and build a security-first culture that protects your business, customers, and reputation.",
    image: CyberImage,
  },
  {
    category: "SaaS",
    title: "Product Development",
    tagline: "Scalable software, built for the cloud-first world",
    description:
      "SaaS is the future—and we're here to help you build it. Kode Verge specializes in developing cloud-based SaaS products that are robust, secure, and designed for scalability. From initial product discovery to development, deployment, and long-term support, we guide you through every phase of the SaaS lifecycle. Whether you're launching a new product or transforming a legacy system into a cloud platform, we deliver flexible, multi-tenant solutions that grow with your business.",
    image: DevelopmentImage,
  },
  {
    category: "Custom Web Application",
    title: "Development",
    tagline: "Tailored digital solutions for your business goals",
    description:
      "At Kode Verge, we build custom web applications that are crafted to solve real-world business challenges. Our team works closely with clients to understand their vision, processes, and user needs, ensuring that every feature we develop serves a purpose. From enterprise systems to client-facing platforms, we focus on performance, security, and user experience. Whether you're starting from scratch or need to modernize existing software, we turn complex ideas into functional, scalable applications.",
    image: MLImage,
  },
];

const processSteps = [
  {
    step: 1,
    title: "Discovery & Consultation",
    description:
      "Founded with just 12 rescued cows in a small shelter in Vrindavan. Our founder, started with a vision to protect abandoned cattle.",
    icon: Search,
    position: "left",
  },
  {
    step: 2,
    title: "Design & Prototyping",
    description:
      "Our creative team transforms ideas into intuitive, user-focused designs and prototypes, ensuring every detail aligns with your brand identity.",
    icon: Wrench,
    position: "right",
  },
  {
    step: 3,
    title: "Development & Implementation",
    description:
      "Using modern frameworks and best coding practices, we build secure, scalable, and high-performance solutions tailored to your needs.",
    icon: RefreshCw,
    position: "left",
  },
  {
    step: 4,
    title: "Testing & Launch",
    description:
      "We rigorously test your product, launch it seamlessly, and continuously monitor performance to ensure long-term growth and stability.",
    icon: ExternalLink,
    position: "right",
  },
];

const technologiesRow1 = [
  "Java", "Python", "C++", ".NET", "React", "Node.js", "JavaScript"
];

const technologiesRow2 = [
  "PHP", "C++", "JavaScript", "React", "Node.js", "JavaScript", "C++"
];

const testimonials = [
  {
    id: 1,
    quote: "Working with KodeVerge has been a game-changer for our business. Their team not only delivered a stunning and user-friendly web application, but they also guided us with expert insights on cloud deployment, SEO, and security. The attention to detail and dedication to our success were unmatched. We now have a product that's fast, scalable, and truly represents our brand.",
    name: "Rajesh Sharma",
    position: "CEO"
  },
  {
    id: 2,
    quote: "The level of professionalism and technical expertise at KodeVerge is outstanding. They transformed our outdated system into a modern, efficient platform. The team was responsive, creative, and truly understood our vision. Our customers love the new interface, and we've seen significant improvements in performance.",
    name: "Priya Patel",
    position: "CTO"
  },
  {
    id: 3,
    quote: "KodeVerge exceeded our expectations in every way. From initial consultation to final deployment, they were with us every step of the way. Their innovative solutions and dedication to quality have helped us scale our business rapidly. I highly recommend them to anyone looking for top-tier development services.",
    name: "Amit Kumar",
    position: "Founder"
  }
];

export default function Home() {
  const sectionRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Scroll animation for Technological Expertise section
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const section = sectionRef.current;
      const rect = section.getBoundingClientRect();
      const sectionHeight = section.offsetHeight;
      const viewportHeight = window.innerHeight;

      const scrolled = -rect.top;
      const scrollableHeight = sectionHeight - viewportHeight;
      const progress = Math.max(0, Math.min(1, scrolled / scrollableHeight));

      setScrollProgress(progress);

      const topicIndex = Math.min(
        Math.floor(progress * topics.length),
        topics.length - 1
      );
      setActiveIndex(topicIndex);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Auto-change testimonials every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const getTopicProgress = (index) => {
    const topicProgress = scrollProgress * topics.length;
    const relativeProgress = topicProgress - index;

    if (relativeProgress < -0.5) return { opacity: 0, y: 60 };
    if (relativeProgress > 0.5) return { opacity: 0, y: -60 };

    const opacity = 1 - Math.abs(relativeProgress) * 2;
    const y = relativeProgress * -120;

    return { opacity: Math.max(0, opacity), y };
  };

  return (
    <div className="bg-white">
      {/* Hero Section with Video */}
      <div className="relative w-full h-screen">
        <video
          src="/src/assets/Videos/tech.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        />

        {/* Text Overlay on Video */}
        <div className="absolute inset-0 flex items-end bg-black bg-opacity-40">
          <div className="container mx-auto px-6 pb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 text-white max-w-2xl">
              Build{" "}
              <span className="bg-gradient-to-r from-[#30AA68] to-[#0067B0] bg-clip-text text-transparent">
                Code
              </span>
            </h1>

            <p className="text-white text-base md:text-lg font-normal max-w-xl leading-relaxed">
              At Kode Verge, we don't just build digital products — we bring
              ideas to life through collaboration, clarity, and a relentless
              drive to innovate with purpose.
            </p>
          </div>
        </div>
      </div>

      {/* What We Do Section */}
      <div className="bg-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            {/* Gradient Banner with Heading */}
            <div className="relative mb-6 shadow-lg overflow-hidden">
              {/* Background Image */}
              <img
                src={GradRect}
                alt="Gradient background"
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Content Overlay */}
              <div className="relative p-12 pt-15">
                <div className="relative z-10">
                  <span className="inline-block bg-white bg-opacity-20 text-white text-sm font-semibold px-4 py-2 rounded-full mb-6">
                    What we do
                  </span>

                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight max-w-3xl">
                    Empowering Businesses Through Intelligent Technology
                  </h2>
                </div>
              </div>
            </div>

            {/* Four Service Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Custom-Built Solutions */}
              <div className="group bg-white border border-gray-200 rounded-2xl p-10 hover:shadow-2xl hover:border-[#30AA68] hover:-translate-y-2 transition-all duration-300 cursor-pointer">
                <div className="w-16 h-16 bg-gradient-to-br from-[#30AA68] to-[#0067B0] rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                    />
                  </svg>
                </div>

                <h3 className="text-xl font-bold mb-4 text-gray-900 group-hover:text-[#30AA68] transition-colors">
                  Custom-Built Solutions
                </h3>

                <p className="text-[#616161] text-sm leading-relaxed">
                  We build tailor-made web and mobile applications that
                  perfectly align with your business requirements
                </p>
              </div>

              {/* AI & Data Intelligence */}
              <div className="group bg-white border border-gray-200 rounded-2xl p-10 hover:shadow-2xl hover:border-[#30AA68] hover:-translate-y-2 transition-all duration-300 cursor-pointer">
                <div className="w-16 h-16 bg-gradient-to-br from-[#30AA68] to-[#0067B0] rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>

                <h3 className="text-xl font-bold mb-4 text-gray-900 group-hover:text-[#30AA68] transition-colors">
                  AI & Data Intelligence
                </h3>

                <p className="text-[#616161] text-sm leading-relaxed">
                  Harness the power of artificial intelligence and machine
                  learning to unlock insights from your data
                </p>
              </div>

              {/* Cloud & Infrastructure */}
              <div className="group bg-white border border-gray-200 rounded-2xl p-10 hover:shadow-2xl hover:border-[#30AA68] hover:-translate-y-2 transition-all duration-300 cursor-pointer">
                <div className="w-16 h-16 bg-gradient-to-br from-[#30AA68] to-[#0067B0] rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                    />
                  </svg>
                </div>

                <h3 className="text-xl font-bold mb-4 text-gray-900 group-hover:text-[#30AA68] transition-colors">
                  Cloud & Infrastructure
                </h3>

                <p className="text-[#616161] text-sm leading-relaxed">
                  Modernize your infrastructure with scalable cloud solutions,
                  DevOps practices, and robust architecture
                </p>
              </div>

              {/* Digital Security & Growth */}
              <div className="group bg-white border border-gray-200 rounded-2xl p-10 hover:shadow-2xl hover:border-[#30AA68] hover:-translate-y-2 transition-all duration-300 cursor-pointer">
                <div className="w-16 h-16 bg-gradient-to-br from-[#30AA68] to-[#0067B0] rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>

                <h3 className="text-xl font-bold mb-4 text-gray-900 group-hover:text-[#30AA68] transition-colors">
                  Digital Security & Growth
                </h3>

                <p className="text-[#616161] text-sm leading-relaxed">
                  Protect your digital assets with comprehensive cybersecurity
                  solutions while boosting your online presence
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trusted By Section */}
      <div className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            {/* Heading */}
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-700 mb-16">
              Trusted by <span className="text-[#0067B0]">100+</span>{" "}
              organizations, from innovative startups
              <br />
              to established enterprises
            </h2>

            {/* Logo Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-16 gap-y-12 items-center justify-items-center">
              {/* Microsoft Logo */}
              <div className="grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
                <svg className="h-10" viewBox="0 0 278 60" fill="none">
                  <rect width="28" height="28" fill="#F25022" />
                  <rect x="32" width="28" height="28" fill="#7FBA00" />
                  <rect y="32" width="28" height="28" fill="#00A4EF" />
                  <rect x="32" y="32" width="28" height="28" fill="#FFB900" />
                  <text
                    x="70"
                    y="40"
                    fill="#5E5E5E"
                    fontSize="28"
                    fontWeight="600"
                    fontFamily="Arial"
                  >
                    Microsoft
                  </text>
                </svg>
              </div>

              {/* Google Logo */}
              <div className="grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
                <svg className="h-10" viewBox="0 0 200 60" fill="none">
                  <text
                    y="40"
                    fill="#4285F4"
                    fontSize="32"
                    fontWeight="700"
                    fontFamily="Arial"
                  >
                    G
                  </text>
                  <text
                    x="25"
                    y="40"
                    fill="#EA4335"
                    fontSize="32"
                    fontWeight="700"
                    fontFamily="Arial"
                  >
                    o
                  </text>
                  <text
                    x="50"
                    y="40"
                    fill="#FBBC04"
                    fontSize="32"
                    fontWeight="700"
                    fontFamily="Arial"
                  >
                    o
                  </text>
                  <text
                    x="75"
                    y="40"
                    fill="#4285F4"
                    fontSize="32"
                    fontWeight="700"
                    fontFamily="Arial"
                  >
                    g
                  </text>
                  <text
                    x="100"
                    y="40"
                    fill="#34A853"
                    fontSize="32"
                    fontWeight="700"
                    fontFamily="Arial"
                  >
                    l
                  </text>
                  <text
                    x="115"
                    y="40"
                    fill="#EA4335"
                    fontSize="32"
                    fontWeight="700"
                    fontFamily="Arial"
                  >
                    e
                  </text>
                </svg>
              </div>

              {/* Apple Logo */}
              <div className="grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
                <svg className="h-12" viewBox="0 0 50 60" fill="#000">
                  <path d="M42.5,29.3c0-6.8,5.5-10.1,5.8-10.3c-3.1-4.6-8-5.2-9.7-5.3c-4.1-0.4-8.1,2.4-10.2,2.4c-2.1,0-5.3-2.4-8.7-2.3 c-4.5,0.1-8.6,2.6-10.9,6.6c-4.7,8.1-1.2,20.1,3.3,26.7c2.2,3.2,4.9,6.8,8.4,6.7c3.3-0.1,4.6-2.1,8.6-2.1s5.2,2.1,8.7,2 c3.6-0.1,5.9-3.3,8.1-6.5c2.6-3.7,3.6-7.3,3.7-7.5C49.5,39.6,42.5,36.8,42.5,29.3z" />
                  <path d="M35.2,9.5c1.8-2.2,3.1-5.3,2.7-8.4c-2.6,0.1-5.8,1.8-7.7,4c-1.7,2-3.2,5.2-2.8,8.2C30.2,13.5,33.3,11.7,35.2,9.5z" />
                </svg>
              </div>

              {/* Google Logo (duplicate for grid) */}
              <div className="grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
                <svg className="h-10" viewBox="0 0 200 60" fill="none">
                  <text
                    y="40"
                    fill="#4285F4"
                    fontSize="32"
                    fontWeight="700"
                    fontFamily="Arial"
                  >
                    G
                  </text>
                  <text
                    x="25"
                    y="40"
                    fill="#EA4335"
                    fontSize="32"
                    fontWeight="700"
                    fontFamily="Arial"
                  >
                    o
                  </text>
                  <text
                    x="50"
                    y="40"
                    fill="#FBBC04"
                    fontSize="32"
                    fontWeight="700"
                    fontFamily="Arial"
                  >
                    o
                  </text>
                  <text
                    x="75"
                    y="40"
                    fill="#4285F4"
                    fontSize="32"
                    fontWeight="700"
                    fontFamily="Arial"
                  >
                    g
                  </text>
                  <text
                    x="100"
                    y="40"
                    fill="#34A853"
                    fontSize="32"
                    fontWeight="700"
                    fontFamily="Arial"
                  >
                    l
                  </text>
                  <text
                    x="115"
                    y="40"
                    fill="#EA4335"
                    fontSize="32"
                    fontWeight="700"
                    fontFamily="Arial"
                  >
                    e
                  </text>
                </svg>
              </div>

              {/* Microsoft Logo (duplicate) */}
              <div className="grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
                <svg className="h-10" viewBox="0 0 278 60" fill="none">
                  <rect width="28" height="28" fill="#F25022" />
                  <rect x="32" width="28" height="28" fill="#7FBA00" />
                  <rect y="32" width="28" height="28" fill="#00A4EF" />
                  <rect x="32" y="32" width="28" height="28" fill="#FFB900" />
                  <text
                    x="70"
                    y="40"
                    fill="#5E5E5E"
                    fontSize="28"
                    fontWeight="600"
                    fontFamily="Arial"
                  >
                    Microsoft
                  </text>
                </svg>
              </div>

              {/* Google Logo (duplicate) */}
              <div className="grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
                <svg className="h-10" viewBox="0 0 200 60" fill="none">
                  <text
                    y="40"
                    fill="#4285F4"
                    fontSize="32"
                    fontWeight="700"
                    fontFamily="Arial"
                  >
                    G
                  </text>
                  <text
                    x="25"
                    y="40"
                    fill="#EA4335"
                    fontSize="32"
                    fontWeight="700"
                    fontFamily="Arial"
                  >
                    o
                  </text>
                  <text
                    x="50"
                    y="40"
                    fill="#FBBC04"
                    fontSize="32"
                    fontWeight="700"
                    fontFamily="Arial"
                  >
                    o
                  </text>
                  <text
                    x="75"
                    y="40"
                    fill="#4285F4"
                    fontSize="32"
                    fontWeight="700"
                    fontFamily="Arial"
                  >
                    g
                  </text>
                  <text
                    x="100"
                    y="40"
                    fill="#34A853"
                    fontSize="32"
                    fontWeight="700"
                    fontFamily="Arial"
                  >
                    l
                  </text>
                  <text
                    x="115"
                    y="40"
                    fill="#EA4335"
                    fontSize="32"
                    fontWeight="700"
                    fontFamily="Arial"
                  >
                    e
                  </text>
                </svg>
              </div>

              {/* Apple Logo (duplicate) */}
              <div className="grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
                <svg className="h-12" viewBox="0 0 50 60" fill="#000">
                  <path d="M42.5,29.3c0-6.8,5.5-10.1,5.8-10.3c-3.1-4.6-8-5.2-9.7-5.3c-4.1-0.4-8.1,2.4-10.2,2.4c-2.1,0-5.3-2.4-8.7-2.3 c-4.5,0.1-8.6,2.6-10.9,6.6c-4.7,8.1-1.2,20.1,3.3,26.7c2.2,3.2,4.9,6.8,8.4,6.7c3.3-0.1,4.6-2.1,8.6-2.1s5.2,2.1,8.7,2 c3.6-0.1,5.9-3.3,8.1-6.5c2.6-3.7,3.6-7.3,3.7-7.5C49.5,39.6,42.5,36.8,42.5,29.3z" />
                  <path d="M35.2,9.5c1.8-2.2,3.1-5.3,2.7-8.4c-2.6,0.1-5.8,1.8-7.7,4c-1.7,2-3.2,5.2-2.8,8.2C30.2,13.5,33.3,11.7,35.2,9.5z" />
                </svg>
              </div>

              {/* Google Logo (duplicate) */}
              <div className="grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
                <svg className="h-10" viewBox="0 0 200 60" fill="none">
                  <text
                    y="40"
                    fill="#4285F4"
                    fontSize="32"
                    fontWeight="700"
                    fontFamily="Arial"
                  >
                    G
                  </text>
                  <text
                    x="25"
                    y="40"
                    fill="#EA4335"
                    fontSize="32"
                    fontWeight="700"
                    fontFamily="Arial"
                  >
                    o
                  </text>
                  <text
                    x="50"
                    y="40"
                    fill="#FBBC04"
                    fontSize="32"
                    fontWeight="700"
                    fontFamily="Arial"
                  >
                    o
                  </text>
                  <text
                    x="75"
                    y="40"
                    fill="#4285F4"
                    fontSize="32"
                    fontWeight="700"
                    fontFamily="Arial"
                  >
                    g
                  </text>
                  <text
                    x="100"
                    y="40"
                    fill="#34A853"
                    fontSize="32"
                    fontWeight="700"
                    fontFamily="Arial"
                  >
                    l
                  </text>
                  <text
                    x="115"
                    y="40"
                    fill="#EA4335"
                    fontSize="32"
                    fontWeight="700"
                    fontFamily="Arial"
                  >
                    e
                  </text>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Technological Expertise Section */}
      <div
        ref={sectionRef}
        className="relative bg-[#1A1A1A]"
        style={{ height: `${100 + topics.length * 100}vh` }}
      >
        {/* Fixed container */}
        <div className="sticky top-0 h-screen overflow-hidden">
          {/* Neon background effects */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div
              className="absolute w-[600px] h-[600px] rounded-full opacity-30 blur-[150px] -translate-x-1/3 translate-y-1/4"
              style={{
                background:
                  "radial-gradient(circle, #30AA68 0%, transparent 70%)",
              }}
            />
            <div
              className="absolute w-[600px] h-[600px] rounded-full opacity-30 blur-[150px] translate-x-1/3 -translate-y-1/4"
              style={{
                background:
                  "radial-gradient(circle, #0067B0 0%, transparent 70%)",
              }}
            />
          </div>

          {/* Centered Section header */}
          <div className="absolute top-8 md:top-12 left-0 right-0 z-20">
            <div className="container mx-auto px-6 text-center">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3">
                <span className="bg-gradient-to-r from-[#30AA68] to-[#0067B0] bg-clip-text text-transparent">
                  Technological expertise
                </span>{" "}
                and business Insight
              </h2>
              <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto mb-6">
                We transform ambitious ideas into powerful digital solutions,
                leveraging cutting-edge technology to drive innovation and
                accelerate your business growth.
              </p>
              {/* Faded line separator */}
              <div className="flex items-center justify-center max-w-xl mx-auto">
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-600/30 to-gray-600/50" />
                <div className="w-2 h-2 rounded-full bg-[#30AA68] mx-4" />
                <div className="flex-1 h-px bg-gradient-to-l from-transparent via-gray-600/30 to-gray-600/50" />
              </div>
            </div>
          </div>

          {/* Progress indicator */}
          <div className="absolute right-8 top-1/2 -translate-y-1/2 z-20 hidden md:flex flex-col gap-3">
            {topics.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${index === activeIndex
                    ? "bg-[#30AA68] scale-150"
                    : "bg-gray-500/30"
                  }`}
              />
            ))}
          </div>

          {/* Content container */}
          <div className="container mx-auto px-6 h-full flex items-center pt-16 md:pt-24">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 w-full pt-20">
              {/* Left side - Text content */}
              <div className="relative h-[400px] flex items-center">
                {topics.map((topic, index) => {
                  const { opacity, y } = getTopicProgress(index);

                  return (
                    <div
                      key={index}
                      className="absolute inset-0 flex flex-col justify-center transition-all duration-500 ease-out"
                      style={{
                        opacity,
                        transform: `translateY(${y}px)`,
                        pointerEvents: index === activeIndex ? "auto" : "none",
                      }}
                    >
                      <span className="text-[#30AA68] font-semibold text-lg mb-2">
                        {topic.category}
                      </span>
                      <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                        {topic.title}
                      </h3>
                      <p className="text-xl md:text-2xl text-[#0067B0] font-medium mb-6">
                        {topic.tagline}
                      </p>
                      <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-xl">
                        {topic.description}
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* Right side - Glass card with image */}
              <div className="relative h-[400px] lg:h-[500px] flex items-center justify-center">
                <div
                  className="w-full h-full p-6 md:p-8 relative overflow-hidden rounded-2xl border border-white/10"
                  style={{
                    background: "rgba(255, 255, 255, 0.05)",
                    backdropFilter: "blur(20px)",
                  }}
                >
                  {topics.map((topic, index) => {
                    const { opacity, y } = getTopicProgress(index);

                    return (
                      <div
                        key={index}
                        className="absolute inset-6 md:inset-8 flex items-center justify-center transition-all duration-500 ease-out"
                        style={{
                          opacity,
                          transform: `translateY(${y}px)`,
                        }}
                      >
                        <img
                          src={topic.image}
                          alt={`${topic.category} ${topic.title}`}
                          className="w-full h-full object-contain rounded-xl"
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Process Section */}
      <div className="bg-white py-20 md:py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            {/* Header */}
            <div className="text-center max-w-2xl mx-auto mb-16 md:mb-24">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1A1A1A] mb-4">
                Our Process
              </h2>
              <p className="text-[#616161] text-base md:text-lg">
                Key milestones that have shaped CodeVerge into the company we are today.
              </p>
            </div>

            {/* Timeline */}
            <div className="relative">
              {/* Vertical dotted line */}
              <div className="absolute left-1/2 top-0 bottom-32 w-px border-l-2 border-dashed border-[#0067B0] transform -translate-x-1/2 hidden md:block" />

              {/* Curved connector line */}
              <svg
                className="absolute left-1/2 bottom-0 transform -translate-x-1/2 hidden md:block"
                width="200"
                height="150"
                viewBox="0 0 200 150"
                fill="none"
              >
                <path
                  d="M100 0 L100 50 Q100 100 50 100 L0 100"
                  stroke="#0067B0"
                  strokeWidth="2"
                  strokeDasharray="8 8"
                  fill="none"
                />
              </svg>

              {processSteps.map((step) => {
                const IconComponent = step.icon;
                return (
                  <div key={step.step} className="relative mb-20 last:mb-0">
                    {/* Step content */}
                    <div className="flex items-start">
                      {step.position === "left" ? (
                        <>
                          {/* Left content - right aligned to center line */}
                          <div className="w-full md:w-[calc(50%-40px)] md:pr-12 text-left md:text-right">
                            <span className="text-[#0067B0] font-semibold text-sm mb-2 block">
                              Step {step.step}
                            </span>
                            <h3 className="text-xl font-bold text-[#1A1A1A] mb-3">
                              {step.title}
                            </h3>
                            <p className="text-[#616161] text-sm leading-relaxed">
                              {step.description}
                            </p>
                          </div>

                          {/* Icon */}
                          <div className="absolute left-1/2 top-0 transform -translate-x-1/2 hidden md:flex z-10">
                            <div className="w-14 h-14 rounded-full bg-[#0067B0] flex items-center justify-center shadow-lg border-4 border-white">
                              <IconComponent className="w-6 h-6 text-white" strokeWidth={2} />
                            </div>
                          </div>

                          {/* Empty right space */}
                          <div className="hidden md:block w-[calc(50%-40px)]" />
                        </>
                      ) : (
                        <>
                          {/* Empty left space */}
                          <div className="hidden md:block w-[calc(50%-40px)]" />

                          {/* Icon */}
                          <div className="absolute left-1/2 top-0 transform -translate-x-1/2 hidden md:flex z-10">
                            <div className="w-14 h-14 rounded-full bg-[#0067B0] flex items-center justify-center shadow-lg border-4 border-white">
                              <IconComponent className="w-6 h-6 text-white" strokeWidth={2} />
                            </div>
                          </div>

                          {/* Right content - left aligned, shifted right */}
                          <div className="w-full md:w-[calc(50%-40px)] md:pl-12 md:ml-16 text-left">
                            <span className="text-[#0067B0] font-semibold text-sm mb-2 block">
                              Step {step.step}
                            </span>
                            <h3 className="text-xl font-bold text-[#1A1A1A] mb-3">
                              {step.title}
                            </h3>
                            <p className="text-[#616161] text-sm leading-relaxed">
                              {step.description}
                            </p>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                );
              })}

              {/* Get Started Button - connected to the curved line */}
              <div className="mt-8 md:absolute md:left-0 md:bottom-8">
                <button className="px-8 py-4 bg-gradient-to-r from-[#30AA68] to-[#0067B0] text-white font-semibold rounded-full hover:opacity-90 transition-opacity inline-flex items-center gap-3 text-base shadow-lg">
                  Get Started
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section with wavy borders */}
      <div className="relative">
        {/* Gradient background section with wavy borders */}
        <div className="relative">
          {/* Top wavy border */}
          <div className="absolute top-0 left-0 right-0 z-10">
            <svg
              viewBox="0 0 1440 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full"
            >
              <path
                d="M0 60V30C240 10 480 0 720 10C960 20 1200 40 1440 30V60H0Z"
                fill="white"
              />
            </svg>
          </div>

          {/* Image positioned top right */}
          <div className="absolute top-0 right-0 w-1/2 h-full hidden lg:block">
            <img
              src={MLImage}
              alt="Technology illustration"
              className="w-full h-full object-cover opacity-20"
            />
          </div>

          <div className="bg-gradient-to-r from-[#0067B0] to-[#30AA68] pt-24 pb-32">
            <div className="container mx-auto px-6">
              {/* Left content */}
              <div className="max-w-2xl relative z-10">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
                  Build Smarter, Move Faster
                </h2>
                <p className="text-white/90 text-lg md:text-xl leading-relaxed mb-8">
                  At Kodeverge, we empower businesses to design and deliver the digital solutions of the future. By blending startup agility with enterprise-grade precision and deep technical expertise, we help you turn bold ideas into powerful, scalable realities.
                </p>
                <button className="px-8 py-4 bg-white text-[#0067B0] font-bold rounded-full hover:bg-gray-100 transition-colors inline-flex items-center gap-3 text-base shadow-lg">
                  GET STARTED
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Bottom wavy border */}
          <div className="absolute bottom-0 left-0 right-0 z-10">
            <svg
              viewBox="0 0 1440 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full"
            >
              <path
                d="M0 0V30C240 50 480 60 720 50C960 40 1200 20 1440 30V0H0Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Tech Stack Section */}
      <div className="bg-white py-20">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1A1A1A] mb-4">
              Your Stack, Our Expertise
            </h2>
            <p className="text-[#616161] text-base md:text-lg">
              No matter the language, framework, or platform—Kode Verge has the technical depth to deliver high-quality solutions tailored to your specific stack and business goals.
            </p>
          </div>

          {/* Scrolling Tech Stack - Row 1 */}
          <div className="overflow-hidden mb-4">
            <div className="flex animate-scroll whitespace-nowrap">
              {technologiesRow1.map((tech, idx) => (
                <div
                  key={`row1-${idx}`}
                  className="inline-flex items-center justify-center px-8 py-4 mx-3 bg-gray-100 rounded-full text-[#1A1A1A] font-semibold text-lg hover:bg-gradient-to-r hover:from-[#30AA68] hover:to-[#0067B0] hover:text-white transition-all duration-300 cursor-pointer"
                >
                  {tech}
                </div>
              ))}
              {/* Duplicate for seamless loop */}
              {technologiesRow1.map((tech, idx) => (
                <div
                  key={`row1-dup-${idx}`}
                  className="inline-flex items-center justify-center px-8 py-4 mx-3 bg-gray-100 rounded-full text-[#1A1A1A] font-semibold text-lg hover:bg-gradient-to-r hover:from-[#30AA68] hover:to-[#0067B0] hover:text-white transition-all duration-300 cursor-pointer"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>

          {/* Scrolling Tech Stack - Row 2 (Reverse Direction) */}
          <div className="overflow-hidden">
            <div className="flex animate-scroll-reverse whitespace-nowrap">
              {technologiesRow2.map((tech, idx) => (
                <div
                  key={`row2-${idx}`}
                  className="inline-flex items-center justify-center px-8 py-4 mx-3 bg-gray-100 rounded-full text-[#1A1A1A] font-semibold text-lg hover:bg-gradient-to-r hover:from-[#30AA68] hover:to-[#0067B0] hover:text-white transition-all duration-300 cursor-pointer"
                >
                  {tech}
                </div>
              ))}
              {/* Duplicate for seamless loop */}
              {technologiesRow2.map((tech, idx) => (
                <div
                  key={`row2-dup-${idx}`}
                  className="inline-flex items-center justify-center px-8 py-4 mx-3 bg-gray-100 rounded-full text-[#1A1A1A] font-semibold text-lg hover:bg-gradient-to-r hover:from-[#30AA68] hover:to-[#0067B0] hover:text-white transition-all duration-300 cursor-pointer"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

      {/* Testimonials Section */}
      <div className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1A1A1A]">
              What Our Clients Say
            </h2>
          </div>

          {/* Testimonial Card */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 flex flex-col md:flex-row gap-8 items-start">
              {/* Profile Icon */}
              <div className="flex-shrink-0">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-[#30AA68] to-[#0067B0] flex items-center justify-center">
                  <User className="w-10 h-10 md:w-12 md:h-12 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                {/* Quote Icon */}
                <span className="text-6xl md:text-7xl text-[#0067B0] font-serif leading-none">"</span>

                {/* Testimonial Text */}
                <p className="text-[#616161] text-base md:text-lg leading-relaxed mb-6 -mt-4">
                  {testimonials[currentTestimonial].quote}
                </p>

                {/* Name and Position */}
                <div>
                  <h4 className="text-xl font-bold text-[#1A1A1A]">
                    {testimonials[currentTestimonial].name}
                  </h4>
                  <p className="text-[#616161]">
                    {testimonials[currentTestimonial].position}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`h-3 rounded-full transition-all ${currentTestimonial === index
                    ? 'bg-[#0067B0] w-8'
                    : 'bg-gray-300 w-3 hover:bg-gray-400'
                  }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
