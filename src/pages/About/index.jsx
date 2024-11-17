import HeaderBase from "../../components/HeaderBase";
import Footer from "../../components/Footer";
import {
  FaCheckCircle,
  FaInstagram,
  FaLinkedin,
  FaWhatsappSquare,
} from "react-icons/fa";
import { MdOutgoingMail } from "react-icons/md";
import office from "../../assets/office.jpg";
import briquette from "../../assets/briquette_4.jpg";
import { IoRocketOutline } from "react-icons/io5";
import ButtomNav from "../../components/BottomNav";
import { Link } from "react-router-dom";

function About() {
  return (
    <>
      <HeaderBase />
      <section
        style={{
          backgroundImage: `url(${office})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="relative min-h-[45vh] mt-20 px-6 md:px-8 lg:px-20 flex items-center">
        {/* Glass Effect */}
        <div className="absolute inset-0 bg-black opacity-50 border border-white/40 rounded-lg"></div>

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
            <MdOutgoingMail className="text-5xl text-white hover:text-red-300 hover:cursor-pointer hover:scale-110 hover:transition-transform hover:delay-150" />
          </div>
        </div>
      </section>
      <section className="py-16  bg-gray-50 flex flex-col md:flex-row items-center px-6 md:px-8 lg:px-20">
        {/* Left side (Text description) */}
        <div className="flex-1 mb-8 md:mb-0 md:pr-8">
          <h1 className="text-3xl font-semibold text-gray-800 mb-4">About</h1>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            HABIBI BRIQUETTE
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            Habibi Briquette specializes in high-quality Coconut Briquette
            Charcoal, crafted using the finest raw materials from Indonesia
            tropical climate. Our products are made with precision, ensuring
            consistent quality and performance.
          </p>
          <p className="text-lg text-gray-700">
            Indonesia abundant coconut supply allows us to meet large-scale
            demands, delivering up to tens of tons per month. We focus on
            providing sustainable, eco-friendly charcoal that offers cleaner
            burns and longer-lasting heat for both industrial and personal use.
          </p>
        </div>

        {/* Right side (Image) */}
        <div className="flex-1">
          <img
            src={briquette}
            alt="Habibi Briquette Charcoal"
            className="w-full h-auto rounded-lg shadow-lg object-cover"
          />
        </div>
      </section>

      <section className="py-16 px-6 bg-green-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Vision Section (Right Side) */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex gap-4 mb-12 items-center">
              <IoRocketOutline className=" text-indigo-600 text-7xl mr-4" />
              <div className="flex flex-col">
                <p className="text-3xl font-semibold text-gray-800 mb-4">Our</p>
                <p className="text-5xl font-bold ">VISION</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 mb-8">
              <p className="text-lg text-gray-700 max-w-lg">
                To be the global leader in Coconut Charcoal Briquette
                production, showcasing the finest of Indonesia's natural
                resources to the world. We aim to not only be a trusted supplier
                but to elevate the reputation of Indonesian-made products,
                proving that our nation holds immense potential in producing
                world-class, sustainable goods.
              </p>
            </div>
          </div>

          {/* Mission Section (Left Side) */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex flex-col mb-12">
              <p className="text-3xl font-semibold text-gray-800 mb-4">Our</p>
              <p className="text-5xl font-bold ">MISSION</p>
            </div>
            <div className="space-y-6">
              <div className="flex items-start space-x-8">
                <FaCheckCircle className="text-9xl md:text-7xl text-green-600" />
                <p className="text-lg text-gray-700">
                  <strong>Build Strong Partnerships:</strong> Forge lasting
                  relationships with local and global partners, ensuring access
                  to the best raw materials and crafting top-tier products that
                  meet international standards.
                </p>
              </div>
              <div className="flex items-start space-x-8">
                <FaCheckCircle className="text-9xl md:text-7xl text-green-600" />
                <p className="text-lg text-gray-700">
                  <strong>Commit to Excellence:</strong> Implement rigorous
                  quality control practices, guided by our experienced team,
                  ensuring every briquette is crafted with precision and
                  perfection.
                </p>
              </div>
              <div className="flex items-start space-x-8">
                <FaCheckCircle className="text-9xl md:text-7xl text-green-600" />
                <p className="text-lg text-gray-700">
                  <strong>Empower the Community:</strong> Invest in the
                  surrounding communities by creating jobs, enhancing skills,
                  and fostering sustainable growth, allowing them to thrive
                  alongside our success.
                </p>
              </div>
              <div className="flex items-start space-x-8">
                <FaCheckCircle className="text-9xl md:text-7xl text-green-600" />
                <p className="text-lg text-gray-700">
                  <strong>Foster Clear Communication:</strong> Establish
                  transparent and effective communication with all stakeholders,
                  ensuring seamless collaboration and understanding with our
                  partners and clients.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      <ButtomNav />
    </>
  );
}

export default About;
