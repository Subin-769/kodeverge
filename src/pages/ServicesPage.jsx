import React from "react";
import { useNavigate } from "react-router-dom";

// Import images from public directory
const image1 = "/images/image1.png";
const image2 = "/images/image2.png";
const image3 = "/images/image3.png";
const image4 = "/images/image4.png";
const image5 = "/images/image5.png";
const image6 = "/images/image6.png";
const image7 = "/images/image7.png";
const image8 = "/images/image8.png";
const image0 = "/images/image0.png";

// Import SVG icons as React components
import RapidIcon from "../assets/SVG/rapid.svg?react";
import TeamIcon from "../assets/SVG/team.svg?react";
import InnovativeIcon from "../assets/SVG/innovative.svg?react";
import GrowthIcon from "../assets/SVG/growth.svg?react";
import FocusIcon from "../assets/SVG/focus.svg?react";
import AgileIcon from "../assets/SVG/agile.svg?react";

// Mock services data
const servicesData = [
  {
    id: "web-app",
    slug: "web-applications",
    title: "Custom web applications Development",
    text: "We craft tailored web solutions for performance, scalability, and exceptional user engagement. Every product is built to match your unique business needs and goals. Build scalable, high-performance web applications tailored to your business using modern frameworks and best practices.",
    img: image1,
    cta: "#web-apps"
  },
  {
    id: "mobile-app",
    slug: "mobile-applications",
    title: "Mobile applications Development",
    text: "From concept to launch, we deliver mobile apps for iOS and Android with seamless user experiences and powerful backend integration. Create engaging mobile experiences across iOS and Android platforms with native and cross-platform solutions.",
    img: image2,
    cta: "#mobile-apps"
  },
  {
    id: "saas",
    slug: "saas-products",
    title: "SaaS Products Development",
    text: "Build scalable SaaS platforms with robust architecture, multi-tenancy support, and seamless integrations. We help you launch and scale your software-as-a-service business.",
    img: image3,
    cta: "#saas"
  },
  {
    id: "digital-marketing",
    slug: "digital-marketing",
    title: "Digital Marketing & SEO",
    text: "Drive traffic and conversions with data-driven digital marketing strategies, SEO optimization, and content marketing that puts your brand in front of the right audience.",
    img: image4,
    cta: "#marketing"
  },
  {
    id: "cybersecurity",
    slug: "cybersecurity",
    title: "Cybersecurity Solutions",
    text: "Protect your digital assets with comprehensive security audits, penetration testing, and ongoing monitoring. We ensure your systems are secure from modern threats.",
    img: image5,
    cta: "#security"
  },
  {
    id: "ai-ml",
    slug: "ai-ml-solutions",
    title: "AI/ML Solutions",
    text: "Leverage artificial intelligence and machine learning to automate processes, gain insights from data, and build intelligent applications that adapt and learn.",
    img: image6,
    cta: "#ai-ml"
  },
  {
    id: "cloud-devops",
    slug: "cloud-devops",
    title: "Cloud Services & DevOps",
    text: "Optimize your infrastructure with cloud migration, containerization, CI/CD pipelines, and DevOps best practices for faster, more reliable deployments.",
    img: image7,
    cta: "#cloud"
  }
];

const menuItems = [
  { name: "Web Applications", id: "web-app" },
  { name: "Mobile Application", id: "mobile-app" },
  { name: "SaaS Products", id: "saas" },
  { name: "Digital Marketing & SEO", id: "digital-marketing" },
  { name: "Cybersecurity", id: "cybersecurity" },
  { name: "AI/ML", id: "ai-ml" },
  { name: "Cloud Services & DevOps", id: "cloud-devops" }
];

// Component: Services Submenu
function ServicesSubmenu() {
  const scrollToService = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const navHeight = 128;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="sticky top-16 z-40 bg-gradient-to-r from-[#30AA68] to-[#0067B0] shadow-md">
      <div className="container mx-auto px-6" style={{ maxWidth: '1450px' }}>
        <div className="overflow-x-auto">
          <div className="flex items-center justify-center whitespace-nowrap py-4 gap-3">

            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToService(item.id)}
                className="
    inline-flex items-center justify-center
    h-10 px-6
    text-white text-sm font-medium
    rounded-lg
    hover:bg-white/20
    transition-all duration-300
    leading-none
  "
              >
                <span>{item.name}</span>
                <span className="ml-1 text-xs translate-y-[1px]">↓</span>
              </button>

            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// Component: Why Choose Us
function WhyChooseUs() {
  const features = [
    {
      icon: RapidIcon,
      title: "Rapid Delivery",
      description: "Agile development processes ensure quick time-to-market without compromising quality."
    },
    {
      icon: TeamIcon,
      title: "Expert Team",
      description: "Seasoned professionals with deep expertise across multiple technologies."
    },
    {
      icon: InnovativeIcon,
      title: "Innovation Focus",
      description: "Stay ahead of the curve with cutting-edge technologies and innovative approaches."
    },
    {
      icon: GrowthIcon,
      title: "Client-Centric Approach",
      description: "Your success is our priority. We tailor solutions to meet your specific business objectives."
    },
    {
      icon: FocusIcon,
      title: "Security First",
      description: "Enterprise-grade security practices integrated into every solution we deliver."
    },
    {
      icon: AgileIcon,
      title: "Scalable Solutions",
      description: "Build for today, scale for tomorrow with architecture designed for growth."
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-[#0067B0]/5 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-[#30AA68]/5 to-transparent rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10" style={{ maxWidth: '1450px' }}>
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
            Why Choose <span className="bg-gradient-to-r from-[#0067B0] to-[#30AA68] bg-clip-text text-transparent">Us?</span>
          </h2>
          <p className="text-[#616161] text-lg md:text-xl font-normal max-w-3xl mx-auto leading-relaxed">
            We combine technical excellence with strategic thinking to deliver solutions that exceed expectations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative bg-white border-2 border-gray-100 rounded-2xl overflow-hidden group hover:border-transparent hover:shadow-2xl transition-all duration-500"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#0067B0] via-[#30AA68] to-[#0067B0] opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
              <div className="absolute inset-[2px] bg-white rounded-2xl"></div>

              <div className="relative p-8 text-center">
                <div className="w-16 h-16 flex items-center justify-center mb-6 mx-auto rounded-full bg-gradient-to-br from-[#0067B0]/10 to-[#30AA68]/10 group-hover:scale-110 transition-transform duration-500">
                  <feature.icon className="w-10 h-10" />
                </div>

                <h3 className="text-2xl font-bold mb-4 text-gray-800 group-hover:bg-gradient-to-r group-hover:from-[#0067B0] group-hover:to-[#30AA68] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                  {feature.title}
                </h3>

                <p className="text-[#616161] text-base leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Component: Development Process
function DevelopmentProcess() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#0067B0] to-transparent"></div>

      <div className="absolute top-20 right-0 w-96 h-96 bg-gradient-to-bl from-[#30AA68]/5 to-transparent rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10" style={{ maxWidth: '1450px' }}>
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-[#0067B0]/10 to-[#30AA68]/10 rounded-full mb-6">
            <svg className="w-5 h-5 text-[#0067B0]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
            </svg>
            <span className="text-sm font-semibold bg-gradient-to-r from-[#0067B0] to-[#30AA68] bg-clip-text text-transparent">
              OUR METHODOLOGY
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
            Our Development <span className="bg-gradient-to-r from-[#0067B0] to-[#30AA68] bg-clip-text text-transparent">Process</span>
          </h2>
          <p className="text-[#616161] text-lg md:text-xl font-normal max-w-3xl mx-auto leading-relaxed">
            Agile methodology that keeps projects on-track for on-time and on-budget delivery.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <img
            src={image8}
            alt="Agile Development Flow"
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}

// Component: Service Block - EXACT DESIGN WITH OVERLAPPING CARD + NAVIGATION
function ServiceBlock({ id, slug, title, text, img, cta, reverse = false }) {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate(`/services/${slug}`);
    window.scrollTo(0, 0);
  };

  return (
    <section id={id} className="py-32 bg-white">
      <div className="max-w-[90%] mx-auto">
        <div className="relative w-full" style={{ minHeight: '500px' }}>
          {!reverse ? (
            <>
              <div
                className="w-full group cursor-pointer"
                style={{ zIndex: 1 }}
                onClick={handleNavigation}
              >
                <img
                  src={img}
                  alt={title}
                  className="w-full object-cover transform group-hover:scale-[1.02] group-hover:shadow-xl transition-all duration-700"
                  style={{ height: '500px', width: '100%' }}
                />
              </div>

              <div className="absolute right-0 bottom-[-80px] w-[35%]" style={{ zIndex: 2 }}>
                <div className="relative">
                  <div className="absolute -bottom-4 -right-4 w-full h-full bg-gradient-to-br from-[#30AA68] to-[#0067B0] opacity-50" style={{ zIndex: 0 }}></div>

                  <div className="relative bg-white p-8 shadow-xl" style={{ zIndex: 1 }}>
                    <h3 className="text-xl font-bold bg-gradient-to-r from-[#0067B0] to-[#30AA68] bg-clip-text text-transparent mb-3 leading-tight">
                      {title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-5 text-sm">
                      {text}
                    </p>
                    <button
                      onClick={handleNavigation}
                      className="inline-flex items-center gap-2 text-[#0067B0] font-semibold hover:gap-3 transition-all text-sm cursor-pointer"
                    >
                      Read More
                      <span>→</span>
                    </button>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <div
                className="w-full group cursor-pointer"
                style={{ zIndex: 1 }}
                onClick={handleNavigation}
              >
                <img
                  src={img}
                  alt={title}
                  className="w-full object-cover transform group-hover:scale-[1.02] group-hover:shadow-xl transition-all duration-700"
                  style={{ height: '500px', width: '100%' }}
                />
              </div>

              <div className="absolute left-0 bottom-[-80px] w-[35%]" style={{ zIndex: 2 }}>
                <div className="relative">
                  <div className="absolute -bottom-4 -right-4 w-full h-full bg-gradient-to-br from-[#30AA68] to-[#0067B0] opacity-50" style={{ zIndex: 0 }}></div>

                  <div className="relative bg-white p-8 shadow-xl" style={{ zIndex: 1 }}>
                    <h3 className="text-xl font-bold bg-gradient-to-r from-[#0067B0] to-[#30AA68] bg-clip-text text-transparent mb-3 leading-tight">
                      {title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-5 text-sm">
                      {text}
                    </p>
                    <button
                      onClick={handleNavigation}
                      className="inline-flex items-center gap-2 text-[#0067B0] font-semibold hover:gap-3 transition-all text-sm cursor-pointer"
                    >
                      Read More
                      <span>→</span>
                    </button>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

// Main App Component
export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative w-full" style={{ height: '85vh' }}>
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={image0}
            alt="Services Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
        </div>

        <div
          className="relative z-10 mx-auto h-full flex flex-col justify-end pb-20"
          style={{ maxWidth: "1450px", paddingLeft: "6rem", paddingRight: "1.5rem" }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 max-w-4xl">
            <span className="text-white">Innovative Solutions for </span>
            <span className="bg-gradient-to-r from-[#30AA68] to-[#0067B0] bg-clip-text text-transparent">Digital Excellence</span>
          </h1>
          <p className="text-white text-lg md:text-xl font-normal max-w-3xl leading-relaxed">
            KodeVerge delivers cutting-edge digital solutions that empower your business to grow, adapt, and succeed in a competitive landscape. Transforming businesses through cutting-edge technology, strategic development, and unparalleled expertise across multiple domains.
          </p>
        </div>
      </section>

      <ServicesSubmenu />

      <section id="core-services" className="py-12 bg-white">
        <div className="container mx-auto px-6 text-center" style={{ maxWidth: '1450px' }}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
            Our Core <span className="bg-gradient-to-r from-[#0067B0] to-[#30AA68] bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-[#616161] text-lg md:text-xl font-normal max-w-4xl mx-auto leading-relaxed">
            From concept to deployment, we deliver comprehensive solutions that drive growth and innovation for your business.
          </p>
        </div>
      </section>

      {servicesData.map((service, index) => (
        <ServiceBlock
          key={service.id}
          id={service.id}
          slug={service.slug}
          title={service.title}
          text={service.text}
          img={service.img}
          cta={service.cta}
          reverse={index % 2 === 1}
        />
      ))}

      <WhyChooseUs />

      <DevelopmentProcess />
    </div>
  );
}