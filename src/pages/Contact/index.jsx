import Footer from "../../components/Footer";
import HeaderBase from "../../components/HeaderBase";
import social from "../../assets/social.jpg";
import { FaInstagram, FaLinkedin, FaWhatsappSquare } from "react-icons/fa";
import { MdOutgoingMail } from "react-icons/md";
import ButtomNav from "../../components/BottomNav";
import { Link } from "react-router-dom";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";

const ClickHandler = () => {
  useMapEvents({
    click(e) {
      console.log("Peta diklik pada:", e.latlng); // Menampilkan koordinat lokasi klik
    },
  });
  return null; // Komponen ini hanya untuk menangani event, jadi tidak perlu render apa pun
};

function Contact() {
  return (
    <div>
      <HeaderBase />
      <section
        style={{
          backgroundImage: `url(${social})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="relative min-h-[45vh] mt-20 px-20 flex items-center">
        {/* Glass Effect */}
        <div className="absolute inset-0 bg-black opacity-60 border border-white/40 rounded-lg"></div>

        {/* Content */}
        <div className="relative z-10">
          <h1 className="text-5xl font-bold text-green-200">
            Shisha Briquette Charcoal
          </h1>
          <p className="text-lg text-white mt-2">Cube Shape Coconut Charcoal</p>
          <div className="grid grid-flow-col mt-4">
            <FaInstagram className="text-5xl text-white hover:text-pink-500 hover:cursor-pointer hover:scale-110 hover:transition-transform hover:delay-150" />
            <FaLinkedin className="text-5xl text-white hover:text-blue-400 hover:cursor-pointer hover:scale-110 hover:transition-transform hover:delay-150" />
            <Link
              to={
                "https://api.whatsapp.com/send?phone=6285363287733&text=Hello%20I%20want%20to%20ask%20about%20Charcoal%20Products%20."
              }>
              <FaWhatsappSquare className="text-5xl text-white hover:text-green-500 hover:cursor-pointer hover:scale-110 hover:transition-transform hover:delay-150" />
            </Link>
            <Link to={"mailto:habibibriquette@gmail.com"}>
              <MdOutgoingMail className="text-5xl text-white hover:text-red-300 hover:cursor-pointer hover:scale-110 hover:transition-transform hover:delay-150" />
            </Link>
          </div>
        </div>
      </section>
      <section className="min-h-[50vh] flex px-6 md:px-8 lg:px-20 flex-col items-center justify-center space-y-6 bg-green-100">
        <div className="flex flex-col gap-8 w-[70%] md:w-[40%]">
          {/* Instagram Button */}
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-full md:w-auto px-6 py-3 bg-gradient-to-r from-pink-500 to-pink-700 text-white text-xl rounded-full shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300 transform">
            <FaInstagram className="mr-3 text-3xl" />
            Instagram
          </a>

          {/* LinkedIn Button */}
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-full md:w-auto px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white text-xl rounded-full shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300 transform">
            <FaLinkedin className="mr-3 text-3xl" />
            LinkedIn
          </a>

          {/* WhatsApp Button */}
          <a
            href="https://api.whatsapp.com/send?phone=6285363287733&text=Hello%20I%20want%20to%20ask%20about%20Charcoal%20Products%20."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-full md:w-auto px-6 py-3 bg-gradient-to-r from-green-500 to-green-700 text-white text-xl rounded-full shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300 transform">
            <FaWhatsappSquare className="mr-3 text-3xl" />
            WhatsApp
          </a>

          {/* Email Button */}
          <a
            href="mailto:habibibriquette@gmail.com"
            className="flex items-center justify-center w-full md:w-auto px-6 py-3 bg-gradient-to-r from-red-400 to-red-600 text-white text-xl rounded-full shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300 transform">
            <MdOutgoingMail className="mr-3 text-3xl" />
            Email
          </a>
        </div>
      </section>

      <div className="w-full h-screen flex justify-center items-center border-2 border-red-600">
        <div className="w-full h-[50%] md:w-[80%] md:h-[80%] px-4 py-4 md:py-12">
          <MapContainer
            center={[-0.9111958414504339, 100.36800164950732]} // Koordinat pusat awal peta
            zoom={14} // Tingkat zoom awal
            style={{ height: "100%", width: "100%" }}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" // URL layer ubin dari OpenStreetMap
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={[-0.9111958414504339, 100.36800164950732]}>
              <Popup>
                This is the center marker! <br /> Click anywhere on the map to
                see coordinates in the console.
              </Popup>
            </Marker>
            <ClickHandler /> {/* Menangani event klik pada peta */}
          </MapContainer>
        </div>
      </div>

      <Footer />
      <ButtomNav />
    </div>
  );
}

export default Contact;
