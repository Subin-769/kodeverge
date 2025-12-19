import React from "react";
import { Facebook, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-white relative overflow-hidden">
      {/* Gradient Circle Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full bg-gradient-to-br from-[#40FF98] to-[#4DADF0] opacity-10 blur-[120px]"></div>

      <div className="container mx-auto px-6 py-12 relative z-10">
        {/* Top Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16 mb-14">
          {/* Brand Section */}
          <div className="pr-6">
            <h2 className="text-2xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-[#FFFFFF] to-[#ADADAD] bg-clip-text text-transparent">
                INNOVATING THE FUTURE
              </span>
            </h2>
            <p className="text-2xl font-bold bg-gradient-to-r from-[#FFFFFF] to-[#ADADAD] bg-clip-text text-transparent mt-1">
              THROUGH TECHNOLOGY
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Company</h3>
            <ul className="space-y-3">
              <li>
                <a href="/about" className="text-[#ADADAD] hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="/portfolio" className="text-[#ADADAD] hover:text-white transition-colors">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="/contact" className="text-[#ADADAD] hover:text-white transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="/blogs" className="text-[#ADADAD] hover:text-white transition-colors">
                  Blogs
                </a>
              </li>
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Services</h3>
            <ul className="space-y-3">
              <li>
                <a href="/services/web-development" className="text-[#ADADAD] hover:text-white transition-colors">
                  Web App Development
                </a>
              </li>
              <li>
                <a href="/services/digital-marketing" className="text-[#ADADAD] hover:text-white transition-colors">
                  Digital Marketing & SEO
                </a>
              </li>
              <li>
                <a href="/services/saas" className="text-[#ADADAD] hover:text-white transition-colors">
                  SaaS Products
                </a>
              </li>
              <li>
                <a href="/services/ai-analytics" className="text-[#ADADAD] hover:text-white transition-colors">
                  AI & Data Analytics
                </a>
              </li>
              <li>
                <a href="/services/cloud-devops" className="text-[#ADADAD] hover:text-white transition-colors">
                  Cloud & DevOps
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Contacts</h3>
            <ul className="space-y-3">
              <li>
                <a href="mailto:example@gmail.com" className="text-[#ADADAD] hover:text-white transition-colors">
                  example@gmail.com
                </a>
              </li>
              <li className="text-[#ADADAD]">
                S. Home, 3rd Floor - Sundhara<br />
                - 11, Kathmandu, Nepal
              </li>
              <li>
                <a href="tel:9801234567" className="text-[#ADADAD] hover:text-white transition-colors">
                  9801234567
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mb-6"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo/Brand */}
          <div>
            <h3 className="text-xl font-medium tracking-widest bg-gradient-to-r from-[#FFFFFF] to-[#ADADAD] bg-clip-text text-transparent">
              H I V E O R A
            </h3>
          </div>

          {/* Legal Links */}
          <div className="flex gap-8">
            <a href="/privacy" className="text-[#ADADAD] hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="/terms" className="text-[#ADADAD] hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4">
            <a
              href="#"
              className="w-11 h-11 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gradient-to-r hover:from-[#40FF98] hover:to-[#4DADF0] transition-all duration-300"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-11 h-11 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gradient-to-r hover:from-[#40FF98] hover:to-[#4DADF0] transition-all duration-300"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-11 h-11 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gradient-to-r hover:from-[#40FF98] hover:to-[#4DADF0] transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-11 h-11 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gradient-to-r hover:from-[#40FF98] hover:to-[#4DADF0] transition-all duration-300"
              aria-label="X/Twitter"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}