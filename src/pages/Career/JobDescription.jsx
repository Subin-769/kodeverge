import React from "react";
import { Link } from "react-router-dom";

const JobDescription = () => {
    
  return (
    <section className="w-full bg-gray-50 font-poppins">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-14">

        {/* Back Link */}
        <div className="mb-10">
          <Link to="/career/jobs"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#0067B0] hover:underline"
          >
            ← View All Jobs
          </Link>
        </div>

        {/* Header Card (NO APPLY BUTTON HERE) */}
<div className="bg-white rounded-2xl shadow-sm p-8 mb-12 border border-gray-100">
  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">

    {/* Job Info */}
    <div>
      <h1 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
        Senior Interior Designer
      </h1>

      <div className="flex flex-wrap items-center gap-5 text-sm text-gray-600">
        <span className="flex items-center gap-2 bg-gray-100 px-3 py-1.5 rounded-full">
          🏢 Sales
        </span>
        <span className="flex items-center gap-2 bg-gray-100 px-3 py-1.5 rounded-full">
          📍 Kathmandu
        </span>
      </div>
    </div>

    {/* Social Links */}
    <div className="flex items-center gap-4">
      {/* Facebook */}
      <a
        href="#"
        className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-200 text-gray-600 hover:text-[#0067B0] hover:border-[#0067B0] transition"
        aria-label="Facebook"
      >
        <svg
          className="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987H7.898V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
        </svg>
      </a>

      {/* Instagram */}
      <a
        href="#"
        className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-200 text-gray-600 hover:text-[#00A84E] hover:border-[#00A84E] transition"
        aria-label="Instagram"
      >
        <svg
          className="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M7.75 2h8.5C19.55 2 22 4.45 22 7.75v8.5C22 19.55 19.55 22 16.25 22h-8.5C4.45 22 2 19.55 2 16.25v-8.5C2 4.45 4.45 2 7.75 2zm0 1.5A4.26 4.26 0 003.5 7.75v8.5A4.26 4.26 0 007.75 20.5h8.5a4.26 4.26 0 004.25-4.25v-8.5a4.26 4.26 0 00-4.25-4.25h-8.5z" />
          <path d="M12 7a5 5 0 100 10 5 5 0 000-10zm0 1.5a3.5 3.5 0 110 7 3.5 3.5 0 010-7z" />
          <circle cx="17.5" cy="6.5" r="1.2" />
        </svg>
      </a>

      {/* LinkedIn */}
      <a
        href="#"
        className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-200 text-gray-600 hover:text-[#0067B0] hover:border-[#0067B0] transition"
        aria-label="LinkedIn"
      >
        <svg
          className="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM0 8h5v16H0V8zm7.5 0h4.8v2.2h.07c.67-1.27 2.3-2.6 4.73-2.6 5.06 0 6 3.33 6 7.66V24h-5v-6.75c0-1.61-.03-3.68-2.24-3.68-2.25 0-2.6 1.75-2.6 3.56V24h-5V8z" />
        </svg>
      </a>

      {/* X (Twitter) */}
      <a
        href="#"
        className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-200 text-gray-600 hover:text-black hover:border-black transition"
        aria-label="X"
      >
        <svg
          className="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M18.244 2H21l-6.5 7.432L22 22h-6.5l-5.1-6.69L4.5 22H2l6.92-7.914L2 2h6.66l4.6 6.06L18.244 2z" />
        </svg>
      </a>
    </div>

  </div>
</div>


        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">

            {/* About Us */}
            <div className="bg-white rounded-2xl shadow-sm p-8 border border-gray-100">
              <h2 className="text-xl font-semibold text-gray-900 mb-5">
                About Us
              </h2>

              <div className="space-y-4 text-gray-700 text-sm leading-relaxed">
                <p>
                  Livspace is Asia’s largest and fastest-growing home interiors and renovation
                  platform, delivering end-to-end home interior and renovation solutions.
                </p>

                <p>
                  Founded in 2015, Livspace has transformed over 100,000 homes across 80+ cities
                  and operates 110+ Experience Centres with a strong focus on innovation and execution.
                </p>

                <p>
                  Backed by marquee investors, the company continues to strengthen its dominance
                  as the largest employer of interior designers in the region.
                </p>

                <p>
                  Learn more:
                  <a
                    href="#"
                    className="text-[#0067B0] ml-1 font-medium hover:underline"
                  >
                    company/about-us
                  </a>
                </p>
              </div>
            </div>

            {/* Job Description */}
            <div className="bg-white rounded-2xl shadow-sm p-8 border border-gray-100">
              <h2 className="text-xl font-semibold text-gray-900 mb-5">
                Job Description
              </h2>

              <div className="space-y-4 text-gray-700 text-sm leading-relaxed">
                <p>
                  As a Senior Interior Designer, you will own residential and commercial design
                  projects end-to-end, from concept creation to final execution.
                </p>

                <p>
                  You will collaborate closely with clients, lead design teams, and apply strong
                  technical expertise across materials, modular solutions, and construction detailing.
                </p>

                <p>
                  This role requires leadership, creativity, and a deep understanding of client
                  needs to consistently deliver high-quality outcomes.
                </p>
              </div>
            </div>

            {/* Responsibilities */}
            <div className="bg-white rounded-2xl shadow-sm p-8 border border-gray-100">
              <h2 className="text-xl font-semibold text-gray-900 mb-5">
                Key Responsibilities
              </h2>

              <ul className="space-y-3 text-gray-700 text-sm list-disc pl-5">
                <li>Lead concept development, space planning, and moodboard presentations</li>
                <li>Translate client requirements into functional and aesthetic design solutions</li>
                <li>Oversee modular planning for kitchens, wardrobes, and custom furniture</li>
                <li>Review technical drawings, elevations, 3D renders, and BOQs</li>
                <li>Coordinate site measurements, civil works, and on-site execution</li>
                <li>Ensure seamless coordination across design, procurement, and vendor teams</li>
                <li>Maintain project timelines, budgets, and client satisfaction</li>
                <li>Mentor junior designers and ensure quality control</li>
                <li>Present design ideas and close deals through strong communication</li>
              </ul>
            </div>
          </div>

          {/* Sticky Apply Card */}
          <div className="lg:col-span-1">
            <div className="sticky top-28 bg-gradient-to-br from-[#0067B0]/90 to-[#00A84E]/90 rounded-2xl p-8 text-white shadow-lg">
              <h3 className="text-lg font-semibold mb-4">
                Ready to apply?
              </h3>
              <p className="text-sm mb-6 opacity-90">
                Join our team and help create beautiful, functional spaces.
              </p>
         <Link
  to="/career/jobs/apply"
  className="block text-center w-full bg-white text-[#0067B0] py-3 rounded-lg text-sm font-semibold hover:bg-gray-100 transition"
>
  Apply Now
</Link>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default JobDescription;