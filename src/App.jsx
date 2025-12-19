import { BrowserRouter, Routes, Route } from "react-router-dom";

// import Navbar from "./components/navbar/Navbar.jsx";
import Navbar from "./components/navbar/NavbarRefactored.jsx";
import Footer from "./components/footer/Footer.jsx";

import Home from "./pages/Home.jsx";
import ServicesPage from "./pages/ServicesPage.jsx";
import Contact from "./pages/Contact.jsx";
import Portfolio from "./pages/Portfolio.jsx";
import Blogs from "./pages/Blogs";
import AboutUs from "./pages/About.jsx";
import Career from "./pages/Career/Career";
import JobDetail from "./pages/Career/JobDetail";
import JobDescription from "./pages/Career/JobDescription";
import JobApply from "./pages/Career/JobApply";
import ServiceDetail from "./pages/ServiceDetail";
import CaseStudy from "./pages/CaseStudy.jsx";
import CaseStudyDetail from "./pages/CaseStudyDetail.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/services/:slug" element={<ServiceDetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/career" element={<Career />} />
        <Route path="/career/:id" element={<JobDetail />} />
  <Route path="/career/jobs/:id" element={<JobDescription />} />
  <Route path="/career/jobs/apply" element={<JobApply />} />


        <Route path="/case-studies" element={<CaseStudy />} />
        <Route path="/case-studies/:slug" element={<CaseStudyDetail />} />

      </Routes>

      <Footer />
    </BrowserRouter>
  );
}
