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
import Career from "./pages/Career/Career.jsx";
import JobDetail from "./pages/Career/JobDetail.jsx";
import ServiceDetail from "./pages/ServiceDetail";

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

      </Routes>

      <Footer />
    </BrowserRouter>
  );
}
