import React, { useState } from "react";
import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin, Github, ChevronDown, ChevronUp } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    company: "",
    email: "",
    service: "",
    message: "",
  });

  const [openFaq, setOpenFaq] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    alert("Thank you for contacting us! We will get back to you soon.");
    setFormData({
      name: "",
      phone: "",
      company: "",
      email: "",
      service: "",
      message: "",
    });
  };

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "What services does KodeVerge offer?",
      answer: "We provide a wide range of technology solutions, including custom web and mobile app development, product development, digital marketing & SEO, cybersecurity, cloud services & DevOps, and data analytics & AI/ML."
    },
    {
      question: "How does KodeVerge ensure the quality of its projects?",
      answer: "We follow industry best practices and rigorous testing methodologies to ensure the highest quality standards for all our projects."
    },
    {
      question: "Can KodeVerge work with startups as well as large enterprises?",
      answer: "Yes, we work with businesses of all sizes, from startups to large enterprises, providing tailored solutions for each client's unique needs."
    },
    {
      question: "What is the typical project timeline?",
      answer: "Project timelines vary based on complexity and scope. We provide detailed project plans with clear milestones during the consultation phase."
    },
    {
      question: "Do you provide ongoing support after project completion?",
      answer: "Yes, we offer comprehensive maintenance and support packages to ensure your digital solutions continue to perform optimally."
    }
  ];

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
              Let's Build Something Amazing Together
            </span>
          </h1>

          <p className="text-gray-700 text-base md:text-lg max-w-3xl mx-auto leading-relaxed mt-4">
            Ready to transform your ideas into digital reality? Get in touch with
            our team of experts and let's discuss your next project.
          </p>
        </div>

        {/* CONTENT GRID */}
        <div className="grid lg:grid-cols-2 gap-12">

          {/* LEFT INFO BOX */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 space-y-10">

            {/* Location */}
            <div className="flex gap-4">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-[#0067B0]" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#0067B0] mb-2">Our Location</h3>
                <p className="text-gray-600">Yogikuti-3, Butwal, Rupandehi, Nepal</p>
                <p className="text-gray-600">Corporate Office: Kathmandu, Nepal</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex gap-4">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-[#0067B0]" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#0067B0] mb-2">Phone Numbers</h3>
                <p className="text-gray-600">+977 9857043891</p>
                <p className="text-gray-600">+977 9840677581</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex gap-4">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-[#0067B0]" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#0067B0] mb-2">Email Address</h3>
                <p className="text-gray-600">adminktm@demo.com</p>
                <p className="text-gray-600">info@demo.com</p>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center flex-shrink-0">
                <Facebook className="w-6 h-6 text-[#0067B0]" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#0067B0] mb-3">Connect With Us</h3>
                <div className="flex gap-3">
                  <a 
                    href="#" 
                    className="w-10 h-10 rounded-full bg-[#0067B0] flex items-center justify-center text-white hover:opacity-80 transition-opacity"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a 
                    href="#" 
                    className="w-10 h-10 rounded-full bg-[#0067B0] flex items-center justify-center text-white hover:opacity-80 transition-opacity"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a 
                    href="#" 
                    className="w-10 h-10 rounded-full bg-[#0067B0] flex items-center justify-center text-white hover:opacity-80 transition-opacity"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a 
                    href="#" 
                    className="w-10 h-10 rounded-full bg-[#0067B0] flex items-center justify-center text-white hover:opacity-80 transition-opacity"
                    aria-label="GitHub"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT FORM BOX */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <div className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white focus:ring-2 focus:ring-[#0067B0] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your number"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white focus:ring-2 focus:ring-[#0067B0] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Your company name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white focus:ring-2 focus:ring-[#0067B0] focus:outline-none"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white focus:ring-2 focus:ring-[#0067B0] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Service You Need</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white focus:ring-2 focus:ring-[#0067B0] focus:outline-none"
                    style={{ color: formData.service === "" ? "#9ca3af" : "#4b5563" }}
                  >
                    <option value="" style={{ color: "#9ca3af" }}>Choose a service</option>
                    <option value="Website" style={{ color: "#4b5563" }}>Website Development</option>
                    <option value="Mobile App" style={{ color: "#4b5563" }}>Mobile App Development</option>
                    <option value="Branding" style={{ color: "#4b5563" }}>Branding & UI/UX</option>
                    <option value="Software" style={{ color: "#4b5563" }}>Custom Software</option>
                    <option value="E-commerce" style={{ color: "#4b5563" }}>E-commerce Development</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  placeholder="Write your message..."
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white focus:ring-2 focus:ring-[#0067B0] focus:outline-none resize-none"
                ></textarea>
              </div>

              <button
                onClick={handleSubmit}
                className="w-full bg-[#0067B0] text-white py-3 rounded-lg text-lg font-semibold hover:bg-[#005a9c] transition-colors"
              >
                Send Message
              </button>
            </div>
          </div>
        </div>

        {/* MAP SECTION */}
        <div className="mt-20">
          <div className="w-full h-[450px] bg-gray-200 rounded-2xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.5045890877547!2d85.32080731506272!3d27.666567982796626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19d0b3c5f7ab%3A0x5f5f5f5f5f5f5f5f!2sChyasal%2C%20Lalitpur%2044600!5e0!3m2!1sen!2snp!4v1234567890123"
              className="w-full h-full border-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Chyasal, Lalitpur Location Map"
            ></iframe>
          </div>
        </div>

        {/* FAQ SECTION */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight drop-shadow-sm">
              <span className="bg-gradient-to-r from-[#0067B0] to-[#00A84E] bg-clip-text text-transparent">
                FAQs for KodeVerge
              </span>
            </h2>
            <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              Here's what most clients ask us – and what you should know too.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                  <button
                    className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gray-50 rounded-lg transition-colors"
                    onClick={() => toggleFaq(index)}
                  >
                    <span className="font-medium text-gray-800 text-lg">
                      {index + 1}. {faq.question}
                    </span>
                    {openFaq === index ? (
                      <ChevronUp className="w-6 h-6 text-[#0067B0] flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-[#0067B0] flex-shrink-0" />
                    )}
                  </button>
                  {openFaq === index && (
                    <div className="px-6 pb-5">
                      <p className="text-gray-600 leading-relaxed text-base">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}