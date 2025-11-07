import React from "react";

const BusinessScale = () => {
  return (
    <div className="bg-[#e6fffe] flex flex-col gap-6 px-8 py-22 rounded-[3rem]">
      <div id="business-wrapper" className="flex gap-16">
        <img src="/bness-scale-l.webp" alt="" className="w-full h-auto object-contain flex-1" />
        <div id="r-items" className="flex-1 inline-flex flex-col justify-between py-4">
          <h3 className="text-4xl text-teal-950 font-semibold">
            Punya bisnis skala besar?
          </h3>
          <p className="text-2xl text-gray-800">
            Brand besar dan komunitas marketer yang punya kebutuhan khusus kayak
            integrasi API pernah kolaborasi bareng kami. Mau juga? Yuk, ngobrol
            lewat jalur khusus!
          </p>
          <button className="text-2xl text-[#004751] border border-[#004751] font-semibold px-6 py-3 rounded-2xl w-max hover:bg-[#004751] hover:text-white cursor-pointer">
            Daftar jalur khusus
          </button>
        </div>
      </div>
    </div>
  );
};

export default BusinessScale;
