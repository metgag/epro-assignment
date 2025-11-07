import { Link } from "react-router-dom";

const LeftMenu = () => {
  return (
    <Link to="/" className="cursor-pointer hover:opacity-80">
      <img className="w-42" src="/epro-logo.png" alt="brand-logo" />
    </Link>
  );
};

export default LeftMenu;
