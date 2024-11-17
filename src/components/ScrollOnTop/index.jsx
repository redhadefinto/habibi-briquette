import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

// Aktifkan plugin ScrollToPlugin
gsap.registerPlugin(ScrollToPlugin);

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    gsap.to(window, { scrollTo: { y: 0 }, duration: 1 }); // Scroll ke atas dengan durasi 1 detik
  }, [pathname]);

  return null;
};

export default ScrollToTop;
