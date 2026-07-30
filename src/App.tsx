import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { AnimatePresence, motion } from "framer-motion";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import ScrollToTop from "@/components/ScrollToTop";
import Index from "./pages/Index";
import CalculatorPage from "./pages/CalculatorPage";
import CalculatorDetailPage from "./pages/CalculatorDetailPage";
import ProductDetail from "./pages/ProductDetail";
import BookingSuccess from "./pages/BookingSuccess";
import LeveringPage from "./pages/LeveringPage";
import PackageDetailPage from "./pages/PackageDetailPage";
import AfhalenPage from "./pages/AfhalenPage";
import ShopPage from "./pages/ShopPage";
import OverOnsPage from "./pages/OverOnsPage";
import RealisatiesPage from "./pages/RealisatiesPage";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";
import NieuwbouwPage from "./pages/NieuwbouwPage";
import WaterschadePage from "./pages/WaterschadePage";
import RenovatiePage from "./pages/RenovatiePage";
import MachinesPage from "./pages/MachinesPage";
import PrijzenPage from "./pages/PrijzenPage";
import ReserverenPage from "./pages/ReserverenPage";

const queryClient = new QueryClient();

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <Routes location={location}>
          <Route path="/" element={<Index />} />
          <Route path="/levering" element={<LeveringPage />} />
          <Route path="/levering/pakket/:packageId" element={<PackageDetailPage />} />
          <Route path="/afhalen" element={<AfhalenPage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/over-ons" element={<OverOnsPage />} />
          <Route path="/realisaties" element={<RealisatiesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/calculator" element={<CalculatorPage />} />
          <Route path="/calculator/detail" element={<CalculatorDetailPage />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/booking/success" element={<BookingSuccess />} />
          <Route path="/nieuwbouw" element={<NieuwbouwPage />} />
          <Route path="/waterschade" element={<WaterschadePage />} />
          <Route path="/renovatie" element={<RenovatiePage />} />
          <Route path="/machines" element={<MachinesPage />} />
          <Route path="/prijzen" element={<PrijzenPage />} />
          <Route path="/reserveren" element={<ReserverenPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
};

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <FloatingWhatsApp />
          <AnimatedRoutes />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
