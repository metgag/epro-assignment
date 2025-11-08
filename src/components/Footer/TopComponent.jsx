import React from "react";

const TopComponent = () => {
  const skItems = [
    { child: "Everpro Shipping" },
    { child: "Everpro Ads" },
    { child: "Everpro Ads" },
    { child: "Everpro Chat" },
    { child: "Everpro Web Builder" },
    { child: "Everpro CRM" },
    { child: "Everpro MPEnabler" },
    { child: "Marketplace Management" },
    { child: "TikTok Management" },
    { child: "Everpro Academy" },
  ];

  const tkItems = [
    { child: "Tentang Everpro" },
    { child: "Promo" },
    { child: "Panduan" },
    { child: "Syarat & Ketentuan" },
    { child: "Kebijakan Privasi" },
    { child: "Peringatan Penipuan" },
    { child: "Program Afiliasi" },
    { child: "Peta Blog" },
  ];

  const hkItems = [
    { child: "PT. Setiap Hari Dipakai", isClickAble: false },
    { child: "Jl. Ir. H. Juanda No.95, ", isClickAble: false },
    { child: "Lb. Siliwangi,", isClickAble: false },
    { child: "Kecamatan Coblong,", isClickAble: false },
    { child: "Kota Bandung,", isClickAble: false },
    { child: "Jawa Barat 40132", isClickAble: false },
  ];

  const csItems = [
    { child: "Senin-Minggu,", isClickAble: false },
    { child: "08.00 - 20.00 WIB", isClickAble: false },
    { child: "Whatsapp:", isClickAble: false },
    { child: "0877-1614-4758", isClickAble: false },
  ];

  return (
    <div className="grid grid-cols-4 gap-12" id="top-items">
      <div className="flex flex-col gap-4">
        <h5 className="font-semibold text-[#5DF0AD]">Solusi Kami</h5>
        <div className="flex flex-col gap-1">
          {skItems.map((e, i) => (
            <ColChild key={i} child={e.child} />
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <h5 className="font-semibold text-[#5DF0AD]">Tentang Kami</h5>
        <div className="flex flex-col gap-1">
          {tkItems.map((e, i) => (
            <ColChild key={i} child={e.child} />
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <h5 className="font-semibold text-[#5DF0AD]">Sertifikasi</h5>
        <img src="/sertification.webp" alt="" className="max-w-48" />
      </div>
      <div className="flex flex-col gap-4">
        <h5 className="font-semibold text-[#5DF0AD]">Tersedia juga di</h5>
        <div className="flex flex-col gap-4">
          <img className="max-h-12 w-min" src="/gplay.png" alt="" />
          <img className="max-h-12 w-min" src="/appstore.png" alt="" />
          <img className="max-h-12 w-min" src="/api.png" alt="" />
          <img className="max-h-12 w-min" src="/shopify.png" alt="" />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <h5 className="font-semibold text-[#5DF0AD]">Hubungi Kami</h5>
        <div className="flex flex-col">
          {hkItems.map((e, i) => (
            <ColChild key={i} child={e.child} isClickAble={e.isClickAble} />
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <h5 className="font-semibold text-[#5DF0AD]">Customer Support</h5>
        <div className="flex flex-col">
          {csItems.map((e, i) => (
            <ColChild key={i} child={e.child} isClickAble={e.isClickAble} />
          ))}
        </div>
      </div>
    </div>
  );
};

const ColChild = ({ child, isClickAble = true }) => {
  return (
    <>
      {isClickAble ? (
        <a href="" className="text-white font-light">
          {child}
        </a>
      ) : (
        <p className="text-white font-light">{child}</p>
      )}
    </>
  );
};

export default TopComponent;
