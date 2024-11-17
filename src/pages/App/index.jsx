import HeaderBase from "../../components/HeaderBase";
// import bgHero from "../../assets/bg-hero.jpg";
import briquette1 from "../../assets/briquette_1.jpg";
import briquette2 from "../../assets/briquette_2.jpg";
// import briquette3 from "../../assets/briquette_3.jpg";
import briquette4 from "../../assets/briquette_4.jpg";
import pohon from "../../assets/pohon.png";
import proses1 from "../../assets/prosses/1.jpg";
import proses2 from "../../assets/prosses/2.jpg";
import proses3 from "../../assets/prosses/3.jpg";
import proses4 from "../../assets/prosses/4.jpg";
import proses5 from "../../assets/prosses/5.jpg";
import proses6 from "../../assets/prosses/6.jpg";
import proses7 from "../../assets/prosses/7.jpg";
import proses8 from "../../assets/prosses/8.jpg";
import proses9 from "../../assets/prosses/9.jpg";
import proses10 from "../../assets/prosses/10.jpg";
import proses11 from "../../assets/prosses/11.jpg";
import proses12 from "../../assets/prosses/12.jpg";
import proses13 from "../../assets/prosses/13.jpg";
import proses14 from "../../assets/prosses/14.jpg";
import shipping from "../../assets/prosses/shipping.png";
import { FaInstagram, FaLinkedin, FaWhatsappSquare } from "react-icons/fa";
import { MdOutgoingMail } from "react-icons/md";
import Footer from "../../components/Footer";
import ButtomNav from "../../components/BottomNav";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import burn from "../../assets/Burn.jpg";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Durasi animasi dalam milidetik
      once: false, // Animasi diulang setiap kali elemen muncul
    });
  }, []);
  return (
    <>
      <div className="block">
        <HeaderBase />
        {/* HERO */}
        <section
          className="hero h-screen relative flex-flex-col justify-end items-end pb-24 md:pb-0 md:justify-center md:items-center bg-cover bg-center bg-no-repeat md:mt-[5.5rem]"
          style={{
            backgroundImage: `url(${burn})`,
          }}>
          {/* Overlay untuk efek gelap */}
          <div className="absolute inset-0 bg-black bg-opacity-60 w-full"></div>

          {/* Konten */}
          <div className="relative z-10 hero-content text-neutral-content text-center mt-36">
            <div className="max-w-4xl ">
              {/* Heading dengan animasi */}
              <h1
                className="mb-5 text-3xl md:text-5xl font-bold text-green-200"
                data-aos="fade-up" // Animasi heading dari bawah ke atas
              >
                Premium Briquettes
              </h1>

              {/* Paragraf dengan animasi */}
              <p
                className="mb-5 lg:text-2xl text-green-200"
                data-aos="fade-up"
                data-aos-delay="200" // Penundaan animasi
              >
                High-quality, eco-friendly briquettes designed for efficiency
                and sustainability. Trusted by businesses worldwide.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-green-50 flex flex-col md:flex-row px-6 md:px-8 lg:px-20 py-28">
          {/* Gambar */}
          <div
            className="flex-1 flex justify-center items-center mb-12 md:mb-0"
            data-aos="fade-right" // Animasi masuk dari kanan
          >
            <img
              src={pohon}
              alt="Briquette 1"
              className="object-cover w-[70%]"
              data-aos="zoom-in" // Efek zoom-in pada gambar
              data-aos-delay="200" // Penundaan 200ms
            />
          </div>

          {/* Konten Teks */}
          <div className="flex-1 flex flex-col gap-12">
            {/* Heading */}
            <h2
              className="text-3xl font-bold text-amber-950"
              data-aos="fade-up" // Animasi masuk dari bawah
            >
              Leading Manufacturer and exporter coconut charcoal briquettes
            </h2>

            {/* Paragraf Utama */}
            <p
              className="text-gray-600"
              data-aos="fade-up"
              data-aos-delay="200" // Penundaan 200ms
            >
              PT. Habibi Briquette is a trusted name in the world of coconut
              charcoal briquettes, recognized as a premier manufacturer and
              exporter in Indonesia. Located in Padang, West Sumatera, our
              factory specializes in crafting high-quality briquettes for
              Shisha, Hookah, and Barbeque. With a focus on precision and
              excellence, we serve to various grades and specifications to meet
              global standards.
            </p>

            {/* Poin-poin */}
            <div>
              <p
                className="mb-4 font-bold"
                data-aos="fade-up"
                data-aos-delay="300" // Penundaan 300ms
              >
                100% Coconut shell materials
              </p>
              <p
                className="mb-4 font-bold"
                data-aos="fade-up"
                data-aos-delay="400" // Penundaan 400ms
              >
                Smokeless, odorless, low ash content
              </p>
              <p
                className="font-bold"
                data-aos="fade-up"
                data-aos-delay="500" // Penundaan 500ms
              >
                Long burning time, quick ignition time
              </p>
            </div>

            {/* Tombol */}
            <div
              data-aos="fade-up"
              data-aos-delay="600" // Penundaan 600ms
            >
              <button className="border-2 bg-amber-950 border-red-400 py-2 px-12 rounded-lg text-white font-bold btn">
                More
              </button>
            </div>
          </div>
        </section>

        <section className="min-h-[91vh] flex flex-col py-12 items-center mb-4 px-6 md:px-8 lg:px-20">
          <div className="max-w-5xl text-center" data-aos="fade-up">
            <h3 className="font-bold text-amber-950 text-3xl md:text-6xl mb-8">
              Our Product
            </h3>
            <p className="font-semibold text-gray-500 md:text-xl">
              Any type of our Coconut Charcoal Briquettes. Our product made from
              coconut shell as the raw material. As a totally natural and
              eco-friendly. Resulting in eco-friendly briquettes, that are free
              from chemicals and toxic
            </p>
          </div>
          <div
            className="w-full mt-12 flex flex-col items-center md:flex-row gap-4"
            data-aos="fade-up"
            data-aos-delay="200">
            {/* Produk 1 */}
            <div
              className="w-full md:w-96 md:h-96 rounded-md overflow-hidden relative group"
              data-aos="zoom-in"
              data-aos-delay="500">
              <figure className="w-full h-full m-0">
                <img
                  src={burn}
                  alt="Briquette 3"
                  className="object-cover w-full h-full"
                />
              </figure>
              <div className="absolute inset-0 bg-black bg-opacity-50 text-white flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-xl">Burning Time : 6 – 8 Hours</span>
              </div>
            </div>
            {/* Produk 2 */}
            <div
              className="w-full md:w-96 md:h-96 rounded-md overflow-hidden relative group"
              data-aos="zoom-in"
              data-aos-delay="400">
              <figure className="w-full h-full m-0">
                <img
                  src={briquette2}
                  alt="Briquette 2"
                  className="object-cover w-full h-full"
                />
              </figure>
              <div className="absolute inset-0 bg-black bg-opacity-50 text-white flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-xl">100% COCONUT SHELL Materials</span>
              </div>
            </div>
            {/* Produk 3 */}
            <div
              className="w-full md:w-96 md:h-96 rounded-md overflow-hidden relative group"
              data-aos="zoom-in"
              data-aos-delay="300">
              <figure className="w-full h-full m-0">
                <img
                  src={briquette1}
                  alt="Briquette 1"
                  className="object-cover w-full h-full"
                />
              </figure>
              <div className="absolute inset-0 bg-black bg-opacity-50 text-white flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-xl">SMOKELESS</span>
              </div>
            </div>
            {/* Produk 4 */}
            <div
              className="w-full md:w-96 md:h-96 rounded-md overflow-hidden relative group"
              data-aos="zoom-in"
              data-aos-delay="600">
              <figure className="w-full h-full m-0">
                <img
                  src={briquette4}
                  alt="Briquette 4"
                  className="object-cover w-full h-full"
                />
              </figure>
              <div className="absolute inset-0 bg-black bg-opacity-50 text-white flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-xl">Odorless</span>
              </div>
            </div>
          </div>
        </section>

        <section className="min-h-[80vh] mb-16 flex items-center flex-col bg-green-50 px-6 md:px-8 lg:px-20">
          {/* Paragraf Utama */}
          <p
            className="text-gray-600 md:text-xl mb-2"
            data-aos="fade-up" // Animasi muncul dari bawah
          >
            100% Coconut Shell Materials
          </p>

          {/* Heading */}
          <h3
            className="font-bold text-2xl text-center md:text-5xl text-amber-950 mb-4"
            data-aos="fade-up"
            data-aos-delay="200" // Penundaan animasi
          >
            The Advantages of <br className="md:hidden" /> Our Product
          </h3>

          {/* Deskripsi */}
          <div
            className="w-[100%] md:w-[50%] text-center text-gray-600 md:text-xl"
            data-aos="fade-up"
            data-aos-delay="400" // Penundaan animasi
          >
            <p>
              We Produce and deliver the best product of coconut charcoal
              briquettes to around the world by using 100% coconut shell raw
              materials from Indonesia
            </p>
          </div>

          {/* Keuntungan Produk */}
          <div
            className="grid gap-8 mt-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
            data-aos="fade-up"
            data-aos-delay="600" // Penundaan animasi
          >
            {[
              "SMOKELESS",
              "ODORLESS",
              "NO SPARK",
              "FREE CHEMICALS & TOXIC",
              "ASH CONTENT 1.8% - 2.5%",
              "QUICK IGNITION TIME < 5 Minutes",
              "100% COCONUT SHELL Materials",
              "LONG BURNING TIME > 90 Minutes",
            ].map((text, index) => (
              <div
                key={index}
                className="w-52 h-24 md:w-60 md:h-32 rounded-md text-lg overflow-hidden relative border-2 border-amber-800 bg-white opacity-40 hover:border-red-500 transition-all duration-300 flex items-center justify-center text-center hover:opacity-100 hover:font-bold hover:cursor-pointer hover:ease-in-out"
                data-aos="zoom-in" // Animasi zoom-in
                data-aos-delay={index * 200} // Penundaan animasi bertingkat
              >
                {text}
              </div>
            ))}
          </div>
        </section>

        <section className="min-h-[80v] flex flex-col gap-12 px-6 md:px-8 lg:px-20">
          {/* Heading */}
          <h3
            className="text-4xl font-bold text-amber-950 text-center"
            data-aos="fade-up">
            Our Production Process
          </h3>

          {/* Grid Proses */}
          <div
            className="w-full mt-12 grid grid-col md:grid-cols-3 lg:grid-cols-4 gap-4"
            data-aos="fade-up"
            data-aos-delay="200">
            {[
              {
                src: proses1,
                text: "Coconut Shell",
                span: "col-span-4 md:col-span-1",
              },
              {
                src: proses2,
                text: "Burning",
                span: "col-span-4 md:col-span-1",
              },
              {
                src: proses3,
                text: "After Burning",
                span: "col-span-4 md:col-span-1",
              },
              {
                src: proses4,
                text: "Collect Charcoal",
                span: "col-span-4 md:col-span-1",
              },
              {
                src: proses5,
                text: "Molding",
                span: "col-span-4 md:col-span-1 md:col-span-2",
              },
              {
                src: proses6,
                text: "After Molding",
                span: "col-span-4 md:col-span-1",
              },
              {
                src: proses7,
                text: "Shelves Arrange",
                span: "col-span-4 md:col-span-1",
              },
              {
                src: proses8,
                text: "Sun Drying",
                span: "col-span-4 md:col-span-1",
              },
              { src: proses9, text: "Sort", span: "col-span-4 md:col-span-1" },
              {
                src: proses10,
                text: "Finished Product",
                span: "col-span-4 md:col-span-1",
              },
              {
                src: proses11,
                text: "Packing",
                span: "col-span-4 md:col-span-1",
              },
              {
                src: proses12,
                text: "Packing",
                span: "col-span-4 md:col-span-1",
              },
              {
                src: proses13,
                text: "Ready To Ship",
                span: "col-span-4 md:col-span-1",
              },
              {
                src: proses14,
                text: "Ready To Delivery",
                span: "col-span-4 md:col-span-2",
              },
              {
                src: shipping,
                text: "International Shipping",
                span: "col-span-4",
              },
            ].map((process, index) => (
              <div
                key={index}
                className={`w-full h-96 rounded-md overflow-hidden relative group ${
                  process.span || "md:col-span-1"
                }`}
                data-aos="zoom-in"
                data-aos-delay={index * 100} // Penundaan bertingkat
              >
                <figure className="w-full h-full m-0">
                  <img
                    src={process.src}
                    alt={process.text}
                    className="object-cover w-full h-full"
                  />
                </figure>
                <div className="absolute inset-0 bg-black bg-opacity-50 text-white flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-xl">{process.text}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="min-h-[80vh] px-6 md:px-8 lg:px-20">
          <h3
            className="text-3xl font-bold text-center mt-16
          ">
            INTEREST TO WORK WITH US?
          </h3>
          <div className=" py-12 px-8 flex items-center justify-center gap-8">
            <FaInstagram className="text-7xl hover:text-pink-500 hover:cursor-pointer hover:scale-110 hover:transition-transform hover:delay-150" />
            <FaLinkedin className="text-7xl hover:text-blue-400 hover:cursor-pointer hover:scale-110 hover:transition-transform hover:delay-150" />
            <Link
              to={
                "https://api.whatsapp.com/send?phone=6285363287733&text=Hello%20I%20want%20to%20ask%20about%20Charcoal%20Products%20."
              }>
              <FaWhatsappSquare className="text-7xl hover:text-green-500 hover:cursor-pointer hover:scale-110 hover:transition-transform hover:delay-150" />
            </Link>
            <MdOutgoingMail className="text-7xl hover:text-red-300 hover:cursor-pointer hover:scale-110 hover:transition-transform hover:delay-150" />
          </div>
          <div className="flex flex-col items-center gap-12 my-12">
            <h3 className="text-3xl font-bold">FAQ & MOQ</h3>
            <div className=" w-full md:w-[50%] flex flex-col gap-8">
              <div className="bg-green-300 collapse">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-green-400 font-bold text-amber-900 peer-checked:text-white peer-checked:bg-amber-900 ">
                  MOQ
                </div>
                <div className="collapse-content bg-green-400 font-bold text-amber-900 peer-checked:text-white peer-checked:bg-amber-900 ">
                  <p>Our minimum order quantity is 1 x 20 ft container</p>
                </div>
              </div>
              <div className="bg-green-300 collapse">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-green-400 font-bold text-amber-900 peer-checked:text-white peer-checked:bg-amber-900 ">
                  First Order Shipment
                </div>
                <div className="collapse-content bg-green-400 font-bold text-amber-900 peer-checked:text-white peer-checked:bg-amber-900 ">
                  <p>
                    The first order will be processed within 2 weeks to 1 month
                  </p>
                </div>
              </div>
              <div className="bg-green-300 collapse">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-green-400 font-bold text-amber-900 peer-checked:text-white peer-checked:bg-amber-900 ">
                  Shipping
                </div>
                <div className="collapse-content bg-green-400 font-bold text-amber-900 peer-checked:text-white peer-checked:bg-amber-900 ">
                  <p>Freight On Board (FOB) and Exwork (EXW)</p>
                </div>
              </div>
              <div className="bg-green-300 collapse">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-green-400 font-bold text-amber-900 peer-checked:text-white peer-checked:bg-amber-900 ">
                  Free Sample Product
                </div>
                <div className="collapse-content bg-green-400 font-bold text-amber-900 peer-checked:text-white peer-checked:bg-amber-900 ">
                  <p>
                    Sure, we can provide you free sample product. Please contact
                    us.
                  </p>
                </div>
              </div>
              <div className="bg-green-300 collapse">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-green-400 font-bold text-amber-900 peer-checked:text-white peer-checked:bg-amber-900 ">
                  Payment Methode
                </div>
                <div className="collapse-content bg-green-400 font-bold text-amber-900 peer-checked:text-white peer-checked:bg-amber-900 ">
                  <p>We use the bank transfer payment methode (T/T)</p>
                  <p>
                    Payment settlement should be made 7 days before loading the
                    container
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
        <ButtomNav />
      </div>
    </>
  );
}

export default App;
