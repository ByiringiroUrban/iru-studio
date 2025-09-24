import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import WhoWeAre from "./pages/about/WhoWeAre";
import WhyChooseUs from "./pages/about/WhyChooseUs";
import ServicesLanding from "./pages/services/ServicesLanding";
import ArtsCreativeDesign from "./pages/services/ArtsCreativeDesign";
import Photography from "./pages/services/Photography";
import Videography from "./pages/services/Videography";
import EditingRetouching from "./pages/services/EditingRetouching";
import AudioProduction from "./pages/services/AudioProduction";
import Dancing from "./pages/services/Dancing";
import Contact from "./pages/Contact";
import Internships from "./pages/Internships";
import InternshipDetail from "./pages/InternshipDetail";
import Pricing from "./pages/Pricing";
import BookNow from "./pages/BookNow";
import Gallery from "./pages/Gallery";
import Search from "./pages/Search";
import { AnimatePresence, motion } from "framer-motion";
import { pageTransition, fadeIn } from "@/lib/animations";
import Frames from "./pages/Frames";
import Chatbot from "./components/Chatbot";
import { AuthProvider } from "./context/AuthContext";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ForgotPassword from "./pages/auth/ForgotPassword";
import UserDashboard from "./pages/dashboard/UserDashboard";
import AdminDashboard from "./pages/dashboard/AdminDashboard";
import Settings from "./pages/Settings";

const queryClient = new QueryClient();

const AppRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <motion.div key={location.pathname} variants={fadeIn} initial="hidden" animate="visible" exit={{ opacity: 0 }}>
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot" element={<ForgotPassword />} />
          <Route path="/dashboard" element={<UserDashboard />} />
          <Route path="/dashboard/admin" element={<AdminDashboard />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/about/who-we-are" element={<WhoWeAre />} />
          <Route path="/about/why-choose-us" element={<WhyChooseUs />} />
          <Route path="/services" element={<ServicesLanding />} />
          <Route path="/services/arts-creative-design" element={<ArtsCreativeDesign />} />
          <Route path="/services/photography" element={<Photography />} />
          <Route path="/services/videography" element={<Videography />} />
          <Route path="/services/editing-retouching" element={<EditingRetouching />} />
          <Route path="/services/audio-production" element={<AudioProduction />} />
          <Route path="/services/dancing" element={<Dancing />} />
          <Route path="/internships" element={<Internships />} />
          <Route path="/internships/:slug" element={<InternshipDetail />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/pricing/frames" element={<Frames />} />
          <Route path="/search" element={<Search />} />
          <Route path="/book-now" element={<BookNow />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AuthProvider>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">
              <AppRoutes />
            </main>
            <Footer />
            <Chatbot />
          </div>
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
