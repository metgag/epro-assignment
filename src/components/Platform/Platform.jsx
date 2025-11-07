import { SquarePlay } from "lucide-react";

import Testimony from "./Testimony";
import Advantages from "./Advantages";
import BusinessScale from "./BusinessScale";

const Platform = () => {
  const anchorItems = [
    { content: "Kirim multi ekspedisi" },
    { content: "Sewa akun whitelist" },
    { content: "Pakai WA official" },
    { content: "Bikin web page" },
    { content: "Optimasi marketplace" },
    { content: "Konsultasi dan edukasi", isDot: true },
  ];

  return (
    <section className="rounded-[3rem] py-20 bg-[#f5fdfd] px-32 flex flex-col gap-6">
      <h3 className="text-4xl text-teal-950 font-semibold">
        Platform jualan online serba bisa, mulai dari
      </h3>
      <div className="flex flex-wrap text-4xl">
        {anchorItems.map((e, i) => (
          <AnchorItem key={i} content={e.content} isDot={e.isDot} />
        ))}
      </div>
      <div className="flex flex-col gap-3 items-start mb-8">
        <div className="flex gap-5 flex-wrap px-3" id="lr-images">
          <img
            className="w-full h-auto object-contain flex-1"
            src="/pform-l.webp"
            alt=""
          />
          <img
            className="w-full h-auto object-contain flex-1"
            src="/pform-r.webp"
            alt=""
          />
        </div>
        <button className="inline-flex items-center gap-1 border px-4 py-1 rounded-xl text-xl text-teal-900 border-teal-950 hover:opacity-80 cursor-pointer">
          <SquarePlay fill="#0a4f49" stroke="white" size={32} />
          Cari tau selengkapnya
        </button>
      </div>
      <div id="sub-page" className="flex flex-col gap-26">
        <Testimony />
        <Advantages />
        <BusinessScale />
      </div>
    </section>
  );
};

const AnchorItem = ({ content, isDot }) => {
  return (
    <>
      <a href="" className="text-gray-400 hover:text-teal-900 transition-all">
        {content}
      </a>
      <span className="me-2 text-gray-400">{!isDot ? "," : "."}</span>
    </>
  );
};

export default Platform;
