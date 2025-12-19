import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";


const career = "/images/career.png";

export default function JobDetail() {
  const [selectedLocation, setSelectedLocation] = useState('All Locations');
  const [selectedDepartment, setSelectedDepartment] = useState('All Departments');
  const [selectedExperience, setSelectedExperience] = useState('All Levels');
  const navigate = useNavigate();


  // Sample job data
  const jobListings = [
    {
      id: 1,
      position: "Senior Interior Designer",
      location: "Kathmandu",
      department: "Sales",
      experience: "5+ years"
    },
    {
      id: 2,
      position: "Senior Interior Designer",
      location: "Kathmandu",
      department: "Sales",
      experience: "5+ years"
    },
    {
      id: 3,
      position: "Senior Interior Designer",
      location: "Kathmandu",
      department: "Sales",
      experience: "5+ years"
    },
    {
      id: 4,
      position: "Senior Interior Designer",
      location: "Kathmandu",
      department: "Sales",
      experience: "5+ years"
    },
    {
      id: 5,
      position: "Senior Interior Designer",
      location: "Kathmandu",
      department: "Sales",
      experience: "5+ years"
    },
    {
      id: 6,
      position: "Senior Interior Designer",
      location: "Kathmandu",
      department: "Sales",
      experience: "5+ years"
    },
    {
      id: 7,
      position: "Full Stack Developer",
      location: "Kathmandu",
      department: "Engineering",
      experience: "3+ years"
    },
    {
      id: 8,
      position: "UI/UX Designer",
      location: "Kathmandu",
      department: "Design",
      experience: "2+ years"
    },
    {
      id: 9,
      position: "DevOps Engineer",
      location: "Kathmandu",
      department: "Engineering",
      experience: "4+ years"
    },
    {
      id: 10,
      position: "Product Manager",
      location: "Kathmandu",
      department: "Product",
      experience: "6+ years"
    },
    {
      id: 11,
      position: "Marketing Specialist",
      location: "Remote",
      department: "Marketing",
      experience: "3+ years"
    },
    {
      id: 12,
      position: "Business Analyst",
      location: "Kathmandu",
      department: "Business",
      experience: "4+ years"
    }
  ];

  const locations = ['All Locations', ...new Set(jobListings.map(job => job.location))];
  const departments = ['All Departments', ...new Set(jobListings.map(job => job.department))];
  const experienceLevels = ['All Levels', ...new Set(jobListings.map(job => job.experience))];

  const filteredJobs = jobListings.filter(job => {
    const locationMatch = selectedLocation === 'All Locations' || job.location === selectedLocation;
    const departmentMatch = selectedDepartment === 'All Departments' || job.department === selectedDepartment;
    const experienceMatch = selectedExperience === 'All Levels' || job.experience === selectedExperience;
    return locationMatch && departmentMatch && experienceMatch;
  });

  return (
    <div className="bg-white min-h-screen">
      {/* ========== Hero Section ========== */}
      <section className="relative w-full" style={{ height: '50vh' }}>
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={career}
            alt="Careers"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"></div>
        </div>

        <div className="relative z-10 container mx-auto px-6 h-full flex flex-col justify-center items-center text-center" style={{ maxWidth: '1450px' }}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
            <span className="text-white">Build with us, </span>
            <span className="bg-gradient-to-r from-[#30AA68] to-[#0067B0] bg-clip-text text-transparent">Grow with us</span>
          </h1>
        </div>
      </section>

      {/* ========== Current Openings Section ========== */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6" style={{ maxWidth: '1450px' }}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
              <span className="bg-gradient-to-r from-[#0067B0] to-[#30AA68] bg-clip-text text-transparent">Current Openings</span>
            </h2>
            <p className="text-[#616161] text-lg md:text-xl">
              Discover exciting opportunities to grow your career with us
            </p>
          </div>

          {/* Job Count */}
          <div className="mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
              {filteredJobs.length} <span className="text-[#0067B0]">Open Positions</span>
            </h3>
          </div>

          {/* Filters */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {/* Location Filter */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Location</label>
              <div className="relative">
                <select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-xl appearance-none cursor-pointer focus:outline-none focus:border-[#0067B0] transition-all duration-300 text-gray-700 font-medium"
                >
                  {locations.map((location, index) => (
                    <option key={index} value={location}>{location}</option>
                  ))}
                </select>
                <svg className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>

            {/* Department Filter */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Department</label>
              <div className="relative">
                <select
                  value={selectedDepartment}
                  onChange={(e) => setSelectedDepartment(e.target.value)}
                  className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-xl appearance-none cursor-pointer focus:outline-none focus:border-[#0067B0] transition-all duration-300 text-gray-700 font-medium"
                >
                  {departments.map((department, index) => (
                    <option key={index} value={department}>{department}</option>
                  ))}
                </select>
                <svg className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>

            {/* Experience Level Filter */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Experience Level</label>
              <div className="relative">
                <select
                  value={selectedExperience}
                  onChange={(e) => setSelectedExperience(e.target.value)}
                  className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-xl appearance-none cursor-pointer focus:outline-none focus:border-[#0067B0] transition-all duration-300 text-gray-700 font-medium"
                >
                  {experienceLevels.map((level, index) => (
                    <option key={index} value={level}>{level}</option>
                  ))}
                </select>
                <svg className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>

          {/* Job Listings Table */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
            {/* Table Header */}
            <div className="bg-gradient-to-r from-[#0067B0] to-[#30AA68] text-white">
              <div className="grid grid-cols-12 gap-4 px-8 py-5 font-bold text-sm md:text-base">
                <div className="col-span-3">Position</div>
                <div className="col-span-2">Location</div>
                <div className="col-span-2">Department</div>
                <div className="col-span-3">Experience</div>
                <div className="col-span-2 text-center">Actions</div>
              </div>
            </div>

            {/* Table Body */}
            <div className="divide-y divide-gray-100">
              {filteredJobs.length > 0 ? (
                filteredJobs.map((job, index) => (
                  <div
                    key={job.id}
                    className="grid grid-cols-12 gap-4 px-8 py-6 hover:bg-gradient-to-r hover:from-[#0067B0]/5 hover:to-[#30AA68]/5 transition-all duration-300 group"
                  >
                    <div className="col-span-3 font-semibold text-gray-800 group-hover:text-[#0067B0] transition-colors duration-300">
                      {job.position}
                    </div>
                    <div className="col-span-2 text-gray-600 flex items-center gap-2">
                      <svg className="w-4 h-4 text-[#0067B0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {job.location}
                    </div>
                    <div className="col-span-2 text-gray-600 flex items-center gap-2">
                      <svg className="w-4 h-4 text-[#30AA68]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      {job.department}
                    </div>
                    <div className="col-span-3 text-gray-600 flex items-center gap-2">
                      <svg className="w-4 h-4 text-[#0067B0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {job.experience}
                    </div>
                    <div className="col-span-2 flex justify-center">
                      <button
                        onClick={() => navigate(`/career/jobs/${job.id}`)}
                        className="px-6 py-2 bg-gradient-to-r from-[#0067B0] to-[#30AA68] text-white font-semibold rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-sm"
                      >
                        View Job
                      </button>

                    </div>
                  </div>
                ))
              ) : (
                <div className="px-8 py-16 text-center">
                  <svg className="w-16 h-16 mx-auto mb-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                  </svg>
                  <p className="text-xl font-semibold text-gray-500">No positions found</p>
                  <p className="text-gray-400 mt-2">Try adjusting your filters</p>
                </div>
              )}
            </div>
          </div>

          {/* Bottom CTA Section */}
          <div className="mt-16 text-center bg-gradient-to-br from-[#0067B0]/5 to-[#30AA68]/5 rounded-3xl p-12 border border-gray-100">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              Don't see the right position?
            </h3>
            <p className="text-lg text-[#616161] mb-8 max-w-2xl mx-auto">
              We're always looking for talented individuals to join our team. Send us your resume and we'll keep you in mind for future opportunities.
            </p>
            <button
      onClick={() => navigate("/career/jobs/apply")}
      className="inline-flex items-center gap-3 px-10 py-4 rounded-full bg-gradient-to-r from-[#0067B0] to-[#30AA68] text-white font-bold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 group"
    >
      Submit Your Resume
    </button>


          </div>
        </div>
      </section>
    </div>
  );
}