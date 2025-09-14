import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import WhoWeAre from "./pages/about/WhoWeAre";
import WhyChooseUs from "./pages/about/WhyChooseUs";
import OurTeam from "./pages/about/OurTeam";
import ServicesLanding from "./pages/services/ServicesLanding";
import Photography from "./pages/services/Photography";
import Videography from "./pages/services/Videography";
import EditingRetouching from "./pages/services/EditingRetouching";
import AudioProduction from "./pages/services/AudioProduction";
import Contact from "./pages/Contact";
import Internships from "./pages/Internships";
import InternshipDetail from "./pages/InternshipDetail";
import Pricing from "./pages/Pricing";
import BookNow from "./pages/BookNow";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about/who-we-are" element={<WhoWeAre />} />
              <Route path="/about/why-choose-us" element={<WhyChooseUs />} />
              <Route path="/about/our-team" element={<OurTeam />} />
              <Route path="/services" element={<ServicesLanding />} />
              <Route path="/services/photography" element={<Photography />} />
              <Route path="/services/videography" element={<Videography />} />
              <Route path="/services/editing-retouching" element={<EditingRetouching />} />
              <Route path="/services/audio-production" element={<AudioProduction />} />
              <Route path="/internships" element={<Internships />} />
              <Route path="/internships/:slug" element={<InternshipDetail />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/book-now" element={<BookNow />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
