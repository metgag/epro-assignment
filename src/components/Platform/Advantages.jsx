import {
  CircleArrowRight,
  Focus,
  Megaphone,
  PackageCheck,
  Rocket,
  ShieldUser,
  Wallet,
} from "lucide-react";

const Advantages = () => {
  const marketingAdvantages = [
    {
      icon: <ShieldUser fill="#6dd6e1" stroke="#1e5b64" strokeWidth={1.4} size={36} />,
      content: "98% iklan bebas restrict",
    },
    { icon: <Focus fill="#6dd6e1" stroke="#1e5b64" strokeWidth={1.4} size={36}/>, content: "CPR iklan LPWA turun 60%" },
    {
      icon: <Megaphone fill="#6dd6e1" stroke="#1e5b64" strokeWidth={1.4} size={36}/>,
      content: "ROI broadcast WA 13x lipat",
    },
    { icon: <Rocket fill="#6dd6e1" stroke="#1e5b64" strokeWidth={1.4} size={36}/>, content: "GMV marketplace naik 30%" },
  ];

  return (
    <div className="bg-[#ABFFD9] flex flex-col gap-6 p-12 rounded-[3rem]">
      <h4 className="text-teal-900 text-3xl font-bold">
        Bisnis terbukti makin mantap!
      </h4>
      <div id="shipping" className="flex flex-col gap-8">
        <SubHeader header="Mulai dari pengiriman yang lancar" />
        <div id="btn-shipping-wrapper" className="grid grid-cols-2 gap-4">
          <AdvantageItem
            content="RTS turun 50%"
            icon={<PackageCheck fill="#6dd6e1" stroke="#1e5b64" strokeWidth={1.4} size={36}/>}
          />
          <AdvantageItem
            content="Saldo cair <1 menit"
            icon={<Wallet fill="#6dd6e1" stroke="#1e5b64" strokeWidth={1.4} size={36}/>}
          />
        </div>
      </div>
      <div id="marketing" className="flex flex-col gap-8">
        <SubHeader header="Sampai marketing yang makin cuan" />
        <div id="btn-marketing-wrapper" className="grid grid-cols-2 gap-4">
          {marketingAdvantages.map((e, i) => (
            <AdvantageItem key={i} icon={e.icon} content={e.content} />
          ))}
        </div>
      </div>
      <button className="text-2xl bg-[#004751] text-white font-medium px-6 py-3 rounded-2xl w-max">
        Coba Sekarang
      </button>
    </div>
  );
};

const SubHeader = ({ header }) => (
  <h5 className="text-xl font-medium text-gray-900">{header}</h5>
);

const AdvantageItem = ({ icon, content }) => (
  <div className="flex items-center justify-between p-6 bg-white rounded-2xl border border-gray-400">
    <div className="flex items-center gap-4 text-xl text-teal-950 font-medium">
      {icon}
      {content}
    </div>
    <CircleArrowRight color="#1c78c8" strokeWidth={1.225} size={28} />
  </div>
);

export default Advantages;
