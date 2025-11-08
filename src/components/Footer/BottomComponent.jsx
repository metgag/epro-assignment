import { Instagram, Facebook, Youtube, Send } from "lucide-react";

const BottomComponent = () => {
  const socialItems = [
    <Instagram size={32} />,
    <Facebook size={32} />,
    <Youtube size={32} />,
    <Send size={32} />,
  ];

  return (
    <div className="flex flex-col gap-3 text-white">
      <div className="flex justify-between items-center">
        <a href="">
          <img className="max-w-48 h-auto" src="/epro-white.png" alt="" />
        </a>
        <div className="flex gap-6 items-center">
          {socialItems.map((e, i) => (
            <SocialLink key={i} icon={e} />
          ))}
        </div>
      </div>
      <p className="self-end text-sm">&copy; 2025 Everpro by Evermos.</p>
    </div>
  );
};

const SocialLink = ({ icon }) => <a href="">{icon}</a>;

export default BottomComponent;
