import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { caseStudies } from "@/data/caseStudyData";

const ITEMS_PER_PAGE = 6;

const CaseStudy = () => {
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + ITEMS_PER_PAGE);
  };

  const visibleCaseStudies = caseStudies.slice(0, visibleCount);
  const hasMore = visibleCount < caseStudies.length;

  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <section className="py-16 md:py-24 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 gradient-text font-poppins">
            Case Studies
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground font-poppins">
            Real stories of how KodeVerge transforms ideas into impactful solutions.
          </p>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="pb-16 md:pb-24 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {visibleCaseStudies.map((study) => (
              <article
                key={study.id}
                className="group bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-border"
              >
                {/* Image */}
                <div className="relative overflow-hidden aspect-video bg-muted">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 text-xs font-medium bg-primary text-primary-foreground rounded-full font-poppins">
                      {study.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-card-foreground group-hover:text-primary transition-colors font-poppins">
                    {study.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3 font-poppins">
                    {study.description}
                  </p>
                  <Link
                    to={`/case-studies/${study.slug}`}
                    className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all duration-300 font-poppins"
                  >
                    Read Full Story
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Load More Button */}
          {hasMore && (
            <div className="text-center mt-12">
              <button
                onClick={handleLoadMore}
                className="px-8 py-3 gradient-bg text-primary-foreground font-medium rounded-full hover:opacity-90 transition-opacity duration-300 font-poppins"
              >
                Load More
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default CaseStudy;