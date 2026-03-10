import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Home from "@/pages/Home";
import ComoFunciona from "@/pages/ComoFunciona";
import Planes from "@/pages/Planes";
import Contacto from "@/pages/Contacto";
import PosicionamientoLocal from "@/pages/PosicionamientoLocal";
import ServicePage from "@/pages/ServicePage";
import CityPage from "@/pages/CityPage";
import SectorPage from "@/pages/SectorPage";
import SectorCityPage from "@/pages/SectorCityPage";
import ComoVeGoogleMiWeb from "@/pages/ComoVeGoogleMiWeb";
import NotFound from "@/pages/NotFound";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const queryClient = new QueryClient();

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/como-funciona" element={<ComoFunciona />} />
            <Route path="/planes" element={<Planes />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/posicionamiento-local" element={<PosicionamientoLocal />} />
            <Route path="/aparecer-en-google-maps" element={<ServicePage />} />
            <Route path="/seo-para-negocios-locales" element={<ServicePage />} />
            <Route path="/ficha-google-mi-negocio" element={<ServicePage />} />
            <Route path="/como-salir-primero-en-google" element={<ServicePage />} />
            <Route path="/seo-local-madrid" element={<CityPage />} />
            <Route path="/seo-local-barcelona" element={<CityPage />} />
            <Route path="/seo-local-valencia" element={<CityPage />} />
            <Route path="/seo-local-sevilla" element={<CityPage />} />
            <Route path="/seo-local-malaga" element={<CityPage />} />
            <Route path="/seo-local-zaragoza" element={<CityPage />} />
            <Route path="/seo-local-bilbao" element={<CityPage />} />
            <Route path="/seo-local-murcia" element={<CityPage />} />
            <Route path="/mas-clientes-para-fontaneros" element={<SectorPage />} />
            <Route path="/mas-clientes-para-reformas" element={<SectorPage />} />
            <Route path="/mas-clientes-para-pintores" element={<SectorPage />} />
            <Route path="/mas-pacientes-para-clinicas" element={<SectorPage />} />
            <Route path="/mas-pacientes-para-fisioterapeutas" element={<SectorPage />} />
            <Route path="/mas-clientes-entrenador-personal" element={<SectorPage />} />
            <Route path="/mas-alumnos-para-yoga" element={<SectorPage />} />
            <Route path="/mas-clientes-para-:sector/:ciudad" element={<SectorCityPage />} />
            <Route path="/mas-pacientes-para-:sector/:ciudad" element={<SectorCityPage />} />
            <Route path="/mas-alumnos-para-:sector/:ciudad" element={<SectorCityPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
