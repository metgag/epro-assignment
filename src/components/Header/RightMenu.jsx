const baseStyle =
  "h-min font-medium rounded-xl text-sm px-5 py-2 cursor-pointer hover:opacity-90";

const RightMenu = () => {
  return (
    <div className="flex gap-5">
      <button
        className={`${baseStyle} border border-[#004751] text-[#004751] bg-white hover:bg-gray-100`}
      >
        Masuk
      </button>
      <button className={`${baseStyle} bg-[#004751] text-white`}>Daftar</button>
    </div>
  );
};

export default RightMenu;
