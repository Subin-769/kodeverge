import React from "react";
import { Link } from "react-router-dom";

const JobApply = () => {
  return (
    <section className="w-full bg-white font-poppins">
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-14">

        {/* Back */}
        <div className="mb-10">
          <Link
            to="/careers"
            className="flex items-center gap-2 text-sm font-medium text-[#0067B0] hover:underline"
          >
            ← View All Jobs
          </Link>
        </div>

        {/* Job Title */}
        <div className="mb-12">
          <h1 className="text-3xl font-semibold text-gray-900 mb-3">
            Senior Interior Designer
          </h1>

          <div className="flex items-center gap-6 text-sm text-gray-600">
            <span className="flex items-center gap-2">
              🏢 Sales
            </span>
            <span className="flex items-center gap-2">
              📍 Kathmandu
            </span>
          </div>
        </div>

        {/* Form Header + Socials */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10">
          <h2 className="text-xl font-semibold text-gray-900">
            Apply For This Job
          </h2>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            {["f", "i", "in"].map((icon, index) => (
              <a
                key={index}
                href="#"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-[#0067B0] text-white text-xs font-semibold hover:opacity-90 transition"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        {/* Form */}
        <form className="space-y-10">

          {/* Resume */}
          <div>
            <label className="block text-sm font-medium text-gray-800 mb-3">
              Resume/CV <span className="text-red-500">*</span>
            </label>

            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <button
                type="button"
                className="border border-[#0067B0] text-[#0067B0] px-6 py-2.5 rounded-md text-sm font-medium hover:bg-[#0067B0]/10 transition w-fit"
              >
                Select Resume
              </button>

              <p className="text-xs text-gray-500">
                Upload in either DOC, DOCX or PDF file format (file size not more than 1MB)
              </p>
            </div>
          </div>

          {/* Name */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-800 mb-2">
                First Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="First Name"
                className="w-full bg-gray-100 border border-gray-300 rounded-md px-4 py-3 text-sm focus:outline-none focus:border-[#0067B0]"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-800 mb-2">
                Last Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Last Name"
                className="w-full bg-gray-100 border border-gray-300 rounded-md px-4 py-3 text-sm focus:outline-none focus:border-[#0067B0]"
              />
            </div>
          </div>

          {/* Contact */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-800 mb-2">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                placeholder="Email"
                className="w-full bg-gray-100 border border-gray-300 rounded-md px-4 py-3 text-sm focus:outline-none focus:border-[#0067B0]"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-800 mb-2">
                Mobile Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full bg-gray-100 border border-gray-300 rounded-md px-4 py-3 text-sm focus:outline-none focus:border-[#0067B0]"
              />
            </div>
          </div>

          {/* Submit */}
          <div>
            <button
              type="submit"
              className="bg-[#0067B0] hover:bg-[#00589a] text-white px-10 py-3 rounded-md text-sm font-semibold transition"
            >
              Submit
            </button>
          </div>

        </form>
      </div>
    </section>
  );
};

export default JobApply;