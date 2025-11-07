import { ArrowDown } from "lucide-react";
import { Link } from "react-router-dom";

import HeroSlider from "./HeroSlider";
import OverlapAvatars from "./HeroOverlapAvatars";

const Hero = () => {
  return (
    <section className="min-h-screen min-w-screen py-22 flex flex-col items-center justify gap-12 text-center">
      <Link
        to={""}
        className="mt-24 mb-8 inline-flex items-center gap-3 bg-linear-to-r from-orange-100 to-teal-50 px-10 py-4 rounded-full"
      >
        <span className="text-lg text-gray-500">
          <span className="font-semibold after:content-['_']">
            Mau operasional logistikmu lebih ringan?
          </span>
          Dapetin ongkir lebih murah dan RTS lebih rendah di Everpro. Dapatkan
          promonya
        </span>
        <ArrowDown
          className="p-1 bg-[#004751] rounded-full"
          size={20}
          color="white"
          strokeWidth={3}
        />
      </Link>
      <h1 className="text-7xl text-[#004751] font-bold max-w-5xl leading-20">
        Biar jualanmu makin kenceng, sini Everpro yang atasi masalahmu
      </h1>
      <div id="slider">
        <HeroSlider />
      </div>
      <div id="sign-now" className="ps-78">
        <div id="no-worry" className="flex items-center gap-4">
          <OverlapAvatars />
          <h3 className="text-xl max-w-xl text-left text-gray-800">
            Platform andalan 30.000++ brand owner, marketer, dan online seller
            buat jalanin bisnis online tanpa cemas.
          </h3>
        </div>
      </div>
      <button className="text-2xl bg-[#004751] text-white font-medium px-4 py-2 rounded-xl">
        Daftar Sekarang
      </button>
    </section>
  );
};

export default Hero;
