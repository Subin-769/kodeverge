import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, Calendar, Building2, CheckCircle } from "lucide-react";
import { caseStudies } from "@/data/caseStudyData";

const CaseStudyDetail = () => {
  const { slug } = useParams();
  const caseStudy = caseStudies.find((study) => study.slug === slug);

  if (!caseStudy) {
    return <Navigate to="/case-studies" replace />;
  }

  const relatedStudies = caseStudies
    .filter((study) => study.id !== caseStudy.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      {/* Back Navigation */}
      <div className="container mx-auto px-4 pt-8">
        <Link
          to="/case-studies"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors font-poppins"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Case Studies
        </Link>
      </div>

      {/* Hero Section */}
      <section className="py-12 md:py-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <span className="inline-block px-4 py-2 text-sm font-medium bg-primary/10 text-primary rounded-full mb-6 font-poppins">
              {caseStudy.category}
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground font-poppins">
              {caseStudy.title}
            </h1>
            <p className="text-lg text-muted-foreground font-poppins">
              {caseStudy.description}
            </p>
          </div>

          {/* Project Info */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <div className="flex items-center gap-2 text-muted-foreground font-poppins">
              <Building2 className="w-5 h-5 text-primary" />
              <span>{caseStudy.client}</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground font-poppins">
              <Calendar className="w-5 h-5 text-primary" />
              <span>{caseStudy.duration}</span>
            </div>
          </div>

          {/* Hero Image */}
          <div className="max-w-5.5xl mx-auto overflow-hidden">
            <img
              src={caseStudy.image}
              alt={caseStudy.title}
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-12 md:py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          {/* Challenge */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 gradient-text font-poppins">
              The Challenge
            </h2>
            <p className="text-muted-foreground leading-relaxed font-poppins">
              {caseStudy.challenge}
            </p>
          </div>

          {/* Solution */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 gradient-text font-poppins">
              Our Solution
            </h2>
            <p className="text-muted-foreground leading-relaxed font-poppins">
              {caseStudy.solution}
            </p>
          </div>

          {/* Technologies */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 gradient-text font-poppins">
              Technologies Used
            </h2>
            <div className="flex flex-wrap gap-3">
              {caseStudy.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium font-poppins"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Results */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 gradient-text font-poppins">
              Results & Impact
            </h2>
            <div className="space-y-4">
              {caseStudy.results.map((result, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 bg-card rounded-lg border border-border"
                >
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-card-foreground font-poppins">{result}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related Case Studies */}
      <section className="py-12 md:py-16 px-4 bg-muted/50">
        <div className="container mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center gradient-text font-poppins">
            Related Case Studies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {relatedStudies.map((study) => (
              <Link
                key={study.id}
                to={`/case-studies/${study.slug}`}
                className="group bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-border"
              >
                <div className="relative overflow-hidden aspect-video bg-muted">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-card-foreground group-hover:text-primary transition-colors font-poppins">
                    {study.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 px-4">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground font-poppins">
            Ready to Transform Your Business?
          </h2>
          <p className="text-muted-foreground mb-8 font-poppins">
            Let's discuss how we can help you achieve similar results.
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-3 gradient-bg text-primary-foreground font-medium rounded-full hover:opacity-90 transition-opacity duration-300 font-poppins"
          >
            Start Your Project
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CaseStudyDetail;