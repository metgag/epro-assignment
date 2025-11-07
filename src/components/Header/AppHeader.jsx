import LeftMenu from "./LeftMenu";
import MidMenu from "./MidMenu";
import RightMenu from "./RightMenu";

const AppHeader = () => {
  return (
    <header>
      <nav className="fixed top-0 z-999 flex items-center justify-between w-full py-4 px-32 bg-[#f5fdfd]">
        <LeftMenu />
        <MidMenu />
        <RightMenu />
      </nav>
    </header>
  );
};

export default AppHeader;
