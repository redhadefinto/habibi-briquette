import { FaInstagram, FaLinkedin, FaWhatsappSquare } from "react-icons/fa";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { MdOutgoingMail, MdOutlineFactory } from "react-icons/md";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer bg-green-950 text-neutral-content p-10 flex flex-col lg:flex-row">
      <aside className="flex-1 ">
        <svg
          width="50"
          height="50"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          fillRule="evenodd"
          clipRule="evenodd"
          className="fill-current">
          <path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
        </svg>
        <p className="mt-4 font-bold">
          PT. Habibi Briquette | ready to fulfill your <br /> request with prime
          quality briquettes
        </p>
      </aside>
      <div className=" flex flex-[1.5] flex-col md:flex-row gap-8">
        <div className="flex-1">
          <HiOutlineBuildingOffice2 className="text-6xl" />
          <p className="mt-4">
            Jl. Penjernihan 1 No 6, Gunung Pangilun, Padang City, West Sumatera,
            Indonesia
          </p>
        </div>
        <div className="flex-1">
          <MdOutlineFactory className="text-6xl" />
          <p className="mt-4">
            Jl. By Pass, Batipuh Panjang, Kec. Koto Tangah, Kota Padang,
            Sumatera Barat 25586
          </p>
        </div>
      </div>
      <nav className="flex-1 flex flex-col justify-center items-center w-full">
        <h6 className="footer-title">Social</h6>
        <div className="grid grid-flow-col gap-4">
          <FaInstagram className="text-5xl hover:text-pink-500 hover:cursor-pointer hover:scale-110 hover:transition-transform hover:delay-150" />
          <FaLinkedin className="text-5xl hover:text-blue-400 hover:cursor-pointer hover:scale-110 hover:transition-transform hover:delay-150" />
          <Link
            to={
              "https://api.whatsapp.com/send?phone=6285363287733&text=Hello%20I%20want%20to%20ask%20about%20Charcoal%20Products%20."
            }>
            <FaWhatsappSquare className="text-5xl hover:text-green-500 hover:cursor-pointer hover:scale-110 hover:transition-transform hover:delay-150" />
          </Link>
          <Link to={"mailto:habibibriquette@gmail.com"}>
            <MdOutgoingMail className="text-5xl hover:text-red-300 hover:cursor-pointer hover:scale-110 hover:transition-transform hover:delay-150" />
          </Link>
        </div>
      </nav>
    </footer>
  );
}

export default Footer;
