import AppHeader from "../../components/Header/AppHeader";
import { Outlet } from "react-router-dom";

const PageLayout = () => {
  return (
    <>
      <AppHeader />
      <div className="bg-linear-to-r from-orange-50 to-teal-100">
        <Outlet />
      </div>
    </>
  );
};

export default PageLayout;
