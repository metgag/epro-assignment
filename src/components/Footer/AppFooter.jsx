import TopComponent from "./TopComponent";
import BottomComponent from "./BottomComponent";

const AppFooter = () => {
  return (
    <footer className="flex flex-col gap-24 bg-[#004751] px-28 pt-16 pb-24 border-t border-[#5DF0AD]">
      <TopComponent />
      <BottomComponent />
    </footer>
  );
};

export default AppFooter;
