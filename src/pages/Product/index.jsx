import { FaInstagram, FaLinkedin, FaWhatsappSquare } from "react-icons/fa";
import Footer from "../../components/Footer";
import HeaderBase from "../../components/HeaderBase";
import { MdOutgoingMail } from "react-icons/md";
import bgKelapa from "../../assets/bg-kelapa.jpg";
import burn from "../../assets/Burn.jpg";
import briquette from "../../assets/prosses/10.jpg";
import packing from "../../assets/prosses/13.jpg";
import bigPacking from "../../assets/prosses/12.jpg";
import vidio from "../../assets/1116.mp4";
import bgHero from "../../assets/bg-hero.jpg";
import sFit from "../../assets/20ft.jpg";
import bFit from "../../assets/40ft.webp";
import { useRef, useState } from "react";
import ButtomNav from "../../components/BottomNav";

import { gsap } from "gsap";

import AOS from "aos";
import "aos/dist/aos.css";

import { useEffect } from "react";
import { Link } from "react-router-dom";

function Product() {
  const specs = [
    { label: "Material", value: " 100% Coconut Charcoal Briquettes" },
    { label: "Caloric Value", value: " 7000 - 7200 Kilo Calori" },
    { label: "Total Moisture", value: " 7%" },
    { label: "Ash Content", value: " 2% (White Ash)" },
    { label: "Fixed Carbon", value: " 80 - 85%" },
    { label: "Size", value: " 2.5 x 2.5 x 2.5 cm (can be customized)" },
  ];
  // const [isPlaying, setIsPlaying] = useState(true); // Status play/pause
  const [isLoading, setIsLoading] = useState(true); // Status loading
  const videoRef = useRef(null); // Referensi ke elemen video

  const handleFullscreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      } else if (videoRef.current.webkitRequestFullscreen) {
        videoRef.current.webkitRequestFullscreen();
      } else if (videoRef.current.mozRequestFullScreen) {
        videoRef.current.mozRequestFullScreen();
      } else if (videoRef.current.msRequestFullscreen) {
        videoRef.current.msRequestFullscreen();
      }
    }
  };

  const handleVideoCanPlay = () => {
    setIsLoading(false); // Hapus loading ketika video siap diputar
  };

  useEffect(() => {
    AOS.init({
      duration: 1000, // Durasi animasi dalam milidetik
      once: false, // Animasi hanya terjadi sekali
    });
  }, []);

  return (
    <div>
      <HeaderBase />
      <section
        style={{
          backgroundImage: `url(${bgKelapa})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: "#1a202c", // Warna dasar untuk mencegah hitam total
        }}
        className="relative min-h-[45vh] mt-16 px-6 md:px-8 lg:px-20 flex items-center">
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-50 border border-white/40 rounded-lg"></div>

        {/* Content */}
        <div
          data-aos="fade-up" // Tambahkan animasi hanya pada elemen konten
          className="relative z-10 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-green-200">
            Shisha Briquette Charcoal
          </h1>
          <p className="text-lg text-gray-200 mt-2">
            Cube Shape Coconut Charcoal
          </p>
          <div
            className="grid grid-flow-col gap-4 mt-4 justify-center"
            data-aos="fade-up" // Tambahkan animasi untuk ikon sosial
            data-aos-delay="200">
            <FaInstagram className="text-2xl md:text-5xl text-white hover:text-pink-500 hover:cursor-pointer hover:scale-110 hover:transition-transform hover:delay-150" />
            <FaLinkedin className="text-2xl md:text-5xl text-white hover:text-blue-400 hover:cursor-pointer hover:scale-110 hover:transition-transform hover:delay-150" />
            <Link
              to={
                "https://api.whatsapp.com/send?phone=6285363287733&text=Hello%20I%20want%20to%20ask%20about%20Charcoal%20Products%20."
              }>
              <FaWhatsappSquare className="text-2xl md:text-5xl text-white hover:text-green-500 hover:cursor-pointer hover:scale-110 hover:transition-transform hover:delay-150" />
            </Link>
            <MdOutgoingMail className="text-2xl md:text-5xl text-white hover:text-red-300 hover:cursor-pointer hover:scale-110 hover:transition-transform hover:delay-150" />
          </div>
        </div>
      </section>

      <section className="min-h-[80vh] flex px-6 md:px-8 lg:px-20 py-12 overflow-hidden">
        <section
          className="min-h-[80vh] flex flex-col md:flex-row gap-12"
          data-aos="fade-up">
          {/* Bagian Kiri: Gambar */}
          <div
            className="flex-1 grid grid-cols-2 gap-4"
            data-aos="fade-right"
            data-aos-delay="200">
            <img
              src={burn}
              alt="Burn Process"
              className="w-full h-auto rounded-md shadow-md"
              data-aos="zoom-in"
              data-aos-delay="100"
            />
            <img
              src={briquette}
              alt="Briquette Process"
              className="w-full h-auto rounded-md shadow-md"
              data-aos="zoom-in"
              data-aos-delay="300"
            />
            <img
              src={packing}
              alt="Packing Process"
              className="w-full h-auto rounded-md shadow-md"
              data-aos="zoom-in"
              data-aos-delay="500"
            />
            <img
              src={bigPacking}
              alt="Big Packing"
              className="w-full h-auto rounded-md shadow-md"
              data-aos="zoom-in"
              data-aos-delay="700"
            />
          </div>

          {/* Bagian Kanan: Tulisan */}
          <div
            className="flex-1 flex flex-col justify-center"
            data-aos="fade-left"
            data-aos-delay="200">
            <h2
              className="md:text-3xl font-semibold text-gray-700 mb-4"
              data-aos="fade-up"
              data-aos-delay="300">
              Cube
            </h2>
            <h1
              className="text-2xl md:text-5xl font-bold text-gray-900 mb-6"
              data-aos="fade-up"
              data-aos-delay="400">
              SHISHA BRIQUETTE CHARCOAL
            </h1>
            <p
              className="md:text-lg text-gray-600 leading-relaxed"
              data-aos="fade-up"
              data-aos-delay="500">
              Coconut Charcoal Briquettes from PT. Barokah Coco Indonesia are
              very suitable to be used as Shisha / Hookah. The briquettes that
              we produce contain non-volatile materials, little smoke, pure
              white ash, and are odorless when burned. Our briquettes provide
              high heat but are durable when used for smoking. The strength of
              our briquettes does not break when dropped 3 x 1 meter.
            </p>
          </div>
        </section>
      </section>
      <section className="flex items-center justify-center h-screen px-6 md:px-8 lg:px-20 relative pb-12">
        <div className="w-full h-full relative">
          {/* Loading Indicator */}
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10">
              <span className="loading loading-dots loading-lg text-white"></span>
            </div>
          )}

          {/* Video */}
          <video
            src={vidio}
            autoPlay
            loop
            muted
            ref={videoRef}
            className="w-full h-full object-cover"
            onCanPlay={handleVideoCanPlay} // Hilangkan loading ketika video siap
          ></video>

          {/* Kontrol Video */}
          <div className="justify-center items-center bottom-4 left-4 flex gap-4 bg-black bg-opacity-50 px-4 py-2 rounded-lg">
            {/* Tombol Fullscreen */}
            <button
              onClick={handleFullscreen}
              className="text-white text-lg font-semibold px-4 py-2 bg-gray-700 rounded hover:bg-gray-600">
              Fullscreen
            </button>
          </div>
        </div>
      </section>

      <section
        className="py-20 bg-fixed bg-cover bg-center relative mt-12"
        style={{
          backgroundImage: `url(${bgHero})`,
        }}>
        {/* Overlay untuk latar belakang gelap */}
        <div className="absolute inset-0 bg-black opacity-60"></div>

        {/* Konten */}
        <div
          className="relative p-6 max-w-xl mx-auto bg-white shadow-[0_0_15px_#fff] rounded-lg z-10"
          data-aos="fade-up" // Animasi untuk seluruh kotak
        >
          <h2
            className="text-2xl font-semibold text-gray-500 mb-4 text-center"
            data-aos="fade-up"
            data-aos-delay="200" // Penundaan animasi
          >
            Briquette Charcoal
          </h2>
          <h1
            className="text-3xl font-bold text-amber-950 mb-6 text-center"
            data-aos="fade-up"
            data-aos-delay="400">
            SPECIFICATION
          </h1>
          <ul className="space-y-3">
            {specs.map((spec, index) => (
              <li
                key={index}
                className="flex flex-col sm:flex-row items-start sm:items-center text-gray-700"
                data-aos="fade-up"
                data-aos-delay={600 + index * 200} // Penundaan bertingkat untuk setiap elemen
              >
                <span className="text-green-500 mr-3 mb-2 sm:mb-0 sm:block hidden">
                  &#x2714;
                </span>
                <span className="font-medium mr-1 text-sm sm:text-base">
                  {spec.label}:
                </span>
                <span className="text-sm sm:text-base">{spec.value}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-16 px-6 bg-gray-100 text-center">
        <h2 className="md:text-2xl font-semibold text-gray-800 mb-2">Need</h2>
        <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
          SPECIAL REQUEST SPECIFICATION?
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          We can fulfill special requests according to the specifications you
          want with certain conditions and minimum order quantity.
        </p>
        <Link
          to={
            "https://api.whatsapp.com/send?phone=6285363287733&text=Hello%20I%20want%20to%20ask%20about%20Charcoal%20Products%20."
          }>
          <button className="px-8 py-3 text-white bg-amber-700 rounded-lg hover:bg-amber-900 hover:scale-105 transform transition-all duration-300 active:scale-95">
            Discuss With Us
          </button>
        </Link>
      </section>
      <section className="py-16 px-6 bg-green-50">
        <h2 className="text-4xl font-bold text-center text-amber-950 mb-8">
          Shipment Capacity
        </h2>
        <div className="space-y-12 flex flex-col justify-center items-center">
          {/* 20ft Container */}
          <div className="flex items-center justify-between space-x-8">
            <div className="flex-1 max-w-xs">
              <img
                src={sFit}
                alt="20ft Container"
                className="w-full h-auto rounded-lg shadow-lg object-cover"
              />
            </div>
            <div className="flex-1 text-gray-700">
              <p className="text-2xl font-semibold mb-2">Container 20 ft</p>
              <p className="text-xl">Maximum Capacity: 18 Tons</p>
            </div>
          </div>

          {/* 40ft Container */}
          <div className="flex items-center justify-between space-x-8">
            <div className="flex-1 max-w-xs">
              <img
                src={bFit}
                alt="40ft Container"
                className="w-full h-auto rounded-lg shadow-lg object-cover"
              />
            </div>
            <div className="flex-1 text-gray-700">
              <p className="text-2xl font-semibold mb-2">Container 40 ft</p>
              <p className="text-xl">Maximum Capacity: 25 - 28 Tons</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      <ButtomNav />
    </div>
  );
}

export default Product;
