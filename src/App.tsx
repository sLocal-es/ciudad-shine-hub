import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
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
import Sistema from "@/pages/Sistema";
import BlogIndex from "@/pages/BlogIndex";
import BlogPostPage from "@/pages/BlogPost";
import NotFound from "@/pages/NotFound";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const queryClient = new QueryClient();

const AnalyticsScripts = () => {
  useEffect(() => {
    // Google Analytics 4
    if (!document.getElementById('ga-script')) {
      const gaScript = document.createElement('script');
      gaScript.async = true;
      gaScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-FM0CL24HP8';
      gaScript.id = 'ga-script';
      document.head.appendChild(gaScript);

      const gaConfig = document.createElement('script');
      gaConfig.id = 'ga-config';
      gaConfig.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-FM0CL24HP8');
      `;
      document.head.appendChild(gaConfig);
    }

    // Microsoft Clarity
    if (!document.getElementById('clarity-script')) {
      const clarityScript = document.createElement('script');
      clarityScript.id = 'clarity-script';
      clarityScript.innerHTML = `
        (function(c,l,a,r,i,t,y){
          c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
          t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
          y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        })(window, document, "clarity", "script", "vv3etdqmge");
      `;
      document.head.appendChild(clarityScript);
    }
  }, []);

  return null;
};

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
};

const MainLayout = () => (
  <>
    <Navbar />
    <main><Outlet /></main>
    <Footer />
  </>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <AnalyticsScripts />
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          {/* Standalone landing — no navbar/footer */}
          <Route path="/sistema" element={<Sistema />} />

          {/* Standard layout */}
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/como-funciona" element={<ComoFunciona />} />
            <Route path="/planes" element={<Planes />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/posicionamiento-local" element={<PosicionamientoLocal />} />
            <Route path="/como-ve-google-mi-web" element={<ComoVeGoogleMiWeb />} />
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
            {/* Sector pages (level 2) — new slugs */}
            <Route path="/seo-para-fontaneros" element={<SectorPage />} />
            <Route path="/seo-para-reformas" element={<SectorPage />} />
            <Route path="/seo-para-pintores" element={<SectorPage />} />
            <Route path="/seo-para-clinicas" element={<SectorPage />} />
            <Route path="/seo-para-fisioterapeutas" element={<SectorPage />} />
            <Route path="/seo-para-entrenadores" element={<SectorPage />} />
            <Route path="/seo-para-yoga" element={<SectorPage />} />
            {/* Sector + City pages (level 3) */}
            <Route path="/:sector/:ciudad" element={<SectorCityPage />} />
            {/* Blog */}
            <Route path="/blog" element={<BlogIndex />} />
            <Route path="/blog/:slug" element={<BlogPostPage />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
