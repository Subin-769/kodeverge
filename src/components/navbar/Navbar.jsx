import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Book, FileText } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);

  const navigate = useNavigate();

  // SCROLL DETECTION ONLY WHEN DROPDOWN IS CLOSED
  useEffect(() => {
    const handleScroll = () => {
      if (!resourcesOpen) setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [resourcesOpen]);

  // NAV ITEM COMPONENT
  const NavItem = ({ to, children, end = false }) => (
    <NavLink
      to={to}
      end={end}
      className="relative cursor-pointer"
      onClick={() => {
        setResourcesOpen(false);
        setOpen(false);
      }}
    >
      {({ isActive }) => (
        <span
          className={`relative font-semibold transition-colors ${isActive ? "text-[#0067B0]" : "text-gray-300 hover:text-[#4DADF0]"
            }`}
        >
          {children}
          <span
            className={`block h-[2px] mt-[3px] rounded-full transition-all duration-300 ${isActive ? "w-[18px] bg-[#4DADF0]" : "w-0 bg-[#4DADF0]"
              }`}
          />
        </span>
      )}
    </NavLink>
  );

  // NAVBAR STATE → BACKGROUND LOGIC
  const navbarBackground = resourcesOpen
    ? "bg-[#0A0A0A] relative overflow-hidden backdrop-blur-xl"
    : scrolled
      ? "bg-white shadow-md"
      : "bg-transparent";

  return (
    <header className="fixed top-0 inset-x-0 z-50 font-Poppins">
      {/* TOP NAVBAR */}
      <div
        className={`transition-all duration-300 ${navbarBackground}`}
        style={{ height: "80px" }}
      >
        {/* CIRCLE GLOW ONLY WHEN DROPDOWN OPEN */}
        {resourcesOpen && (
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -left-20 -top-10 w-96 h-96 bg-gradient-to-br from-[#40FF98] to-[#4DADF0] blur-[120px] opacity-40 rounded-full"></div>
            <div className="absolute left-1/3 -top-20 w-80 h-80 bg-gradient-to-br from-[#40FF98] to-[#4DADF0] blur-[100px] opacity-30 rounded-full"></div>
            <div className="absolute -right-20 -top-10 w-96 h-96 bg-gradient-to-br from-[#40FF98] to-[#4DADF0] blur-[120px] opacity-40 rounded-full"></div>
          </div>
        )}

        <div className="container mx-auto px-6 h-full flex items-center justify-between relative z-10">
          {/* LOGO */}
          <NavLink
            to="/"
            className="text-2xl font-bold"
            style={{
              color: resourcesOpen ? "white" : scrolled ? "black" : "white",
            }}
            onClick={() => setResourcesOpen(false)}
          >
            Logo
          </NavLink>

          {/* DESKTOP NAV LINKS */}
          <nav className="hidden md:flex items-center gap-10 text-white">
            <NavItem to="/" end>Home</NavItem>
            <NavItem to="/services">Service</NavItem>
            <NavItem to="/about">About</NavItem>
            <NavItem to="/portfolio">Portfolio</NavItem>

            {/* RESOURCES BUTTON */}
            <button
              className={`font-semibold transition-colors ${resourcesOpen
                ? "text-[#4DADF0]"
                : "text-gray-300 hover:text-[#4DADF0]"
                }`}
              onClick={() => {
                setResourcesOpen(!resourcesOpen);
                setOpen(false);
              }}
            >
              Resources
            </button>

            <NavItem to="/career">Career</NavItem>
            <NavItem to="/contact">Contact</NavItem>
          </nav>

          {/* CTA BUTTON */}
          <NavLink
            to="/get-started"
            className="px-6 py-2.5 rounded-lg font-bold text-white text-base hidden md:block"
            style={{ background: "linear-gradient(90deg, #00A84E, #0067B0)" }}
          >
            Get Started
          </NavLink>

          {/* MOBILE TOGGLE */}
          <button
            className="md:hidden p-2"
            style={{ color: resourcesOpen ? "white" : scrolled ? "black" : "white" }}
            onClick={() => {
              setOpen(!open);
              setResourcesOpen(false);
            }}
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor">
              {open ? (
                <path strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* RESOURCES DROPDOWN (FULL WIDTH DARK + SAME CIRCLE GLOW) */}
      {resourcesOpen && (
        <div className="absolute top-[80px] left-0 w-full bg-[#0A0A0A] overflow-hidden shadow-xl">
          <div className="relative container mx-auto px-6 py-12">
            {/* CIRCLE GLOWS */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute -left-20 -top-10 w-96 h-96 bg-gradient-to-br from-[#40FF98] to-[#4DADF0] opacity-[0.18] blur-3xl rounded-full"></div>
              <div className="absolute left-1/3 top-0 w-80 h-80 bg-gradient-to-br from-[#40FF98] to-[#4DADF0] opacity-[0.14] blur-2xl rounded-full"></div>
              <div className="absolute -right-20 -top-10 w-96 h-96 bg-gradient-to-br from-[#40FF98] to-[#4DADF0] opacity-[0.18] blur-3xl rounded-full"></div>
            </div>

            {/* OPTIONS */}
            <div className="relative z-10 flex gap-14 text-white">
              <div
                className="flex items-start gap-4 cursor-pointer p-4 rounded-xl hover:bg-white/5 transition-all"
                onClick={() => {
                  navigate("/blogs");
                  setResourcesOpen(false);
                }}
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#40FF98] to-[#4DADF0] flex items-center justify-center">
                  <Book className="w-5 h-5 text-[#111]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold">Blogs</h3>
                  <p className="text-white/70 text-sm max-w-xs">
                    Expert insights, guides, and trending topics.
                  </p>
                </div>
              </div>

              <div
                className="flex items-start gap-4 cursor-pointer p-4 rounded-xl hover:bg-white/5 transition-all"
                onClick={() => {
                  navigate("/case-study");
                  setResourcesOpen(false);
                }}
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#40FF98] to-[#4DADF0] flex items-center justify-center">
                  <FileText className="w-5 h-5 text-[#111]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold">Case Study</h3>
                  <p className="text-white/70 text-sm max-w-xs">
                    Real stories showing impact and results.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* MOBILE NAV */}
      {open && (
        <div className="md:hidden bg-[#0D0D0D] text-white border-t border-white/10">
          <div className="flex flex-col px-6 py-4 space-y-3">
            <NavItem to="/">Home</NavItem>
            <NavItem to="/services">Service</NavItem>
            <NavItem to="/about">About</NavItem>
            <NavItem to="/portfolio">Portfolio</NavItem>

            <button
              className="font-semibold"
              onClick={() => {
                setResourcesOpen(true);
                setOpen(false);
              }}
            >
              Resources
            </button>

            <NavItem to="/career">Career</NavItem>
            <NavItem to="/contact">Contact</NavItem>

            <NavLink
              to="/get-started"
              className="px-4 py-2 rounded-lg font-semibold text-white"
              style={{ background: "linear-gradient(90deg, #00A84E, #0067B0)" }}
            >
              Get Started
            </NavLink>
          </div>
        </div>
      )}
    </header>
  );
}
