import { Outlet } from "react-router-dom";
import Footer from "../pages/shared/Footer/Footer";
import Navbar from "../pages/shared/Navbar/Navbar";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Aos from "aos";
const MainLayout = () => {
  useEffect(() => {
    AOS.init({
      duration: 500,
      once: true,
    });
    Aos.refresh();
    return () => {
      AOS.refresh();
    };
  }, []);
  return (
    <>
      <Navbar />
      <div className="min-h-[calc(100vh-220px)] container mx-auto">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default MainLayout;
