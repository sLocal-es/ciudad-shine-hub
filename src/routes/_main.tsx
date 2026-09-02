import { Outlet, createFileRoute } from "@tanstack/react-router";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnalisisGratuitoPopup from "@/components/AnalisisGratuitoPopup";

export const Route = createFileRoute("/_main")({
  component: MainLayout,
});

function MainLayout() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <AnalisisGratuitoPopup />
    </>
  );
}
