import React, { useState } from "react";


// Import images
// Import images
const image9 = "/Images/image9.png";
const image10 = "/Images/image10.png";
const image11 = "/Images/image11.png";
const image12 = "/Images/image12.png";
const image13 = "/Images/image13.png";
import CardGrid from "../components/CardGrid";

// Blog data with imported images
const blogPosts = [
  {
    id: 1,
    date: "Jan 2, 2024",
    title: "How ERP Systems Are Revolutionizing Small Businesses",
    excerpt: "Enterprise Resource Planning (ERP) systems are no longer just for Fortune 500 companies. With cloud-based, modular ERP solutions, small businesses now have access to real-time analytics...",
    image: image9,
    category: "Products"
  },
  {
    id: 2,
    date: "Jan 2, 2024",
    title: "Why Cybersecurity Should Be a Priority for Every Business in 2025",
    excerpt: "Cyber threats are evolving faster than ever. With phishing attacks, ransomware, and zero-day vulnerabilities on the rise, every organization...",
    image: image10,
    category: "Data & AI"
  },
  {
    id: 3,
    date: "Jan 2, 2024",
    title: "How Analytics is Changing the Game",
    excerpt: "Gone are the days of gut-feel decision-making. With modern analytics tools, companies can predict trends, reduce churn, and optimize marketing spend...",
    image: image11,
    category: "Data & AI"
  },
  {
    id: 4,
    date: "Jan 2, 2024",
    title: "Building Scalable Web Applications in 2025",
    excerpt: "Whether you're developing a SaaS platform or an e-commerce site, scalability is key. In 2025, the development landscape includes smarter DevOps practices...",
    image: image12,
    category: "DevOps"
  },
  {
    id: 5,
    date: "Jan 2, 2024",
    title: "The Role of Artificial Intelligence in Customer Support",
    excerpt: "AI isn't just about robots and futuristic ideas—it's transforming customer support in real ways. Chatbots, predictive assistance, and AI-driven analytics are reducing...",
    image: image13,
    category: "Data & AI"
  }
];

const categories = ["All", "Products", "Data & AI", "DevOps"];

// Component: Featured Blog Card (with overlay design)
function FeaturedBlogCard({ post, onClick }) {
  return (
    <div
      onClick={onClick}
      className="relative overflow-hidden cursor-pointer group h-full"
    >
      <img
        src={post.image}
        alt={post.title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 brightness-75"
      />
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
        <span className="text-xs font-semibold uppercase tracking-wider opacity-90">{post.date}</span>
        <h3 className="text-xl font-bold mt-2 mb-2 line-clamp-2 group-hover:text-[#00A84E] transition-colors">
          {post.title}
        </h3>
        <p className="text-xs opacity-80 line-clamp-2">{post.excerpt}</p>
      </div>
    </div>
  );
}

// Component: Regular Blog Card (Unique Design)
function BlogCard({ title, date, image, category, excerpt, onClick }) {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer group mb-12"
    >
      <div className="relative pb-[90px]">
        {/* Image - Full Width - Darker and Sharp corners */}
        <div className="relative overflow-hidden h-64 bg-gray-100">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover brightness-75"
          />
        </div>

        {/* White Rectangle Overlay - 80-85% width, extends from left - Sharp corners */}
        <div
          className="absolute bg-white px-0 py-6"
          style={{
            bottom: "-20px",
            left: "0",
            width: "93%",
            zIndex: 5
          }}
        >

          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs text-gray-500 font-medium">{date}</span>
            <span className="px-2 py-0.5 text-xs font-semibold" style={{ color: "#0067B0", backgroundColor: "#0067B0" + "15" }}>
              {category}
            </span>
          </div>

          <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-[#0067B0] transition-colors">
            {title}
          </h3>

          <p className="text-gray-600 text-xs line-clamp-2">
            {excerpt}
          </p>
        </div>
      </div>

      {/* Text Below Image - Aligned with left edge */}
      <div
        className="mt-6 pl-0"
        style={{ width: "80%" }}
      >

        <div className="flex items-center gap-2 font-semibold text-sm text-[#0067B0]">
          <span>Read More</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

// Component: Blog Detail Page
function BlogDetailPage({ post, onBack }) {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-5xl mx-auto px-6 py-12">
        <button
          onClick={onBack}
          className="mb-8 font-semibold flex items-center gap-2 hover:gap-3 transition-all"
          style={{ color: "#0067B0" }}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          <span>Back to Blogs</span>
        </button>

        <div className="mb-6">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-sm text-gray-500 font-medium">{post.date}</span>
            <span className="px-3 py-1 text-xs font-semibold rounded-full" style={{ color: "#0067B0", backgroundColor: "#0067B0" + "15" }}>
              {post.category}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{post.title}</h1>
        </div>

        <div className="mb-10">
          <img src={post.image} alt={post.title} className="w-full h-[500px] object-cover rounded-xl" />
        </div>

        <div className="prose prose-lg max-w-none">
          <p className="text-gray-700 leading-relaxed mb-6 text-lg">
            In order to increase energy production, it isn't always necessary to build a new power plant from scratch; repowering can be used in certain cases. Indeed, this solution makes it possible to install more modern, high-performance components or adopt more advanced technology or existing plants. Operating efficiency is thus improved and the so-called "useful life" of a plant is extended, while environmental impact is reduced, as are costs.
          </p>

          <div className="border-l-4 p-6 my-8 bg-gray-50 rounded-r-lg" style={{ borderLeftColor: "#0067B0" }}>
            <h3 className="text-xl font-bold text-gray-900 mb-3">More than 20 hybrid plants have already been built</h3>
            <p className="text-gray-700 leading-relaxed">
              In order to increase energy production, it isn't always necessary to build a new power plant from scratch; repowering can be used in certain cases. Indeed, this solution makes it possible to install more modern, high-performance components or adopt more advanced technology or existing plants. Operating efficiency is thus improved and the so-called "useful life" of a plant is extended, while environmental impact is reduced, as are costs.
            </p>
          </div>

          <p className="text-gray-700 leading-relaxed mb-6 text-lg">
            In order to increase energy production, it isn't always necessary to build a new power plant from scratch; repowering can be used in certain cases. Indeed, this solution makes it possible to install more modern, high-performance components or adopt more advanced technology or existing plants. Operating efficiency is thus improved and the so-called "useful life" of a plant is extended, while environmental impact is reduced, as are costs.
          </p>

          <div className="border-l-4 p-6 my-8 bg-gray-50 rounded-r-lg" style={{ borderLeftColor: "#00A84E" }}>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Innovation drives sustainable solutions</h3>
            <p className="text-gray-700 leading-relaxed">
              In order to increase energy production, it isn't always necessary to build a new power plant from scratch; repowering can be used in certain cases. Indeed, this solution makes it possible to install more modern, high-performance components or adopt more advanced technology or existing plants. Operating efficiency is thus improved and the so-called "useful life" of a plant is extended, while environmental impact is reduced, as are costs.
            </p>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Related News</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <CardGrid
              items={blogPosts.slice(0, 3)}
              Component={BlogCard}
              onItemClick={() => {
                onBack();
                setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

// Main App Component
export default function App() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedBlog, setSelectedBlog] = useState(null);

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = activeCategory === "All" || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  if (selectedBlog) {
    return <BlogDetailPage post={selectedBlog} onBack={() => setSelectedBlog(null)} />;
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with white background and gradient text */}
      <div className="bg-white py-12 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{
              background: "linear-gradient(135deg, #0067B0 0%, #00A84E 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text"
            }}
          >
            Blogs
          </h1>
          <p className="text-xs text-gray-500 max-w-3xl mx-auto">
            Real stories of how KodeVerge transforms ideas into impactful solutions.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Filters and Search */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6 mb-12 bg-white p-6 rounded-full shadow-md">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2.5 rounded-full font-semibold transition-all ${activeCategory === category
                  ? "text-white shadow-md"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                style={activeCategory === category ? {
                  background: "linear-gradient(135deg, #0067B0 0%, #00A84E 100%)"
                } : {}}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="relative w-full lg:w-80">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-5 py-3 pl-12 bg-gray-50 border border-gray-200 rounded-full focus:outline-none focus:border-[#0067B0] text-gray-700"
            />
            <svg
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>

        {/* Featured Stories Title - Reduced text size */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Featured Stories</h2>
          <div className="h-0.5 w-24 bg-gradient-to-r from-[#0067B0] to-[#00A84E]"></div>
        </div>

        {filteredPosts.length > 0 ? (
          <>
            {/* Featured Blog Grid - 5 images layout - Reduced sizes */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-20">
              {/* Large Left Post */}
              {filteredPosts[0] && (
                <div className="lg:col-span-8" style={{ height: "450px" }}>
                  <FeaturedBlogCard
                    post={filteredPosts[0]}
                    onClick={() => setSelectedBlog(filteredPosts[0])}
                  />
                </div>
              )}

              {/* Right Side - 2 posts stacked */}
              <div className="lg:col-span-4 space-y-6">
                {filteredPosts[1] && (
                  <div style={{ height: "214px" }}>
                    <FeaturedBlogCard
                      post={filteredPosts[1]}
                      onClick={() => setSelectedBlog(filteredPosts[1])}
                    />
                  </div>
                )}
                {filteredPosts[2] && (
                  <div style={{ height: "214px" }}>
                    <FeaturedBlogCard
                      post={filteredPosts[2]}
                      onClick={() => setSelectedBlog(filteredPosts[2])}
                    />
                  </div>
                )}
              </div>

              {/* Bottom - 2 posts side by side */}
              <div className="lg:col-span-12 grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredPosts[3] && (
                  <div style={{ height: "250px" }}>
                    <FeaturedBlogCard
                      post={filteredPosts[3]}
                      onClick={() => setSelectedBlog(filteredPosts[3])}
                    />
                  </div>
                )}
                {filteredPosts[4] && (
                  <div style={{ height: "250px" }}>
                    <FeaturedBlogCard
                      post={filteredPosts[4]}
                      onClick={() => setSelectedBlog(filteredPosts[4])}
                    />
                  </div>
                )}
              </div>
            </div>

            {/* Explore More Blogs Section */}
            <div className="mt-20">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Explore More Blogs</h2>
                <div className="h-0.5 w-24 bg-gradient-to-r from-[#0067B0] to-[#00A84E]"></div>
              </div>

              <div className="mt-8">
                <CardGrid
                  items={[...Array(12)].map((_, i) => ({
                    ...blogPosts[i % 5],
                    id: i // Ensure unique IDs for the example array
                  }))}
                  Component={BlogCard}
                  onItemClick={(item) => setSelectedBlog(item)}
                />
              </div>
            </div>
          </>
        ) : (
          <div className="text-center py-20">
            <p className="text-xl text-gray-500">No blogs found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
}