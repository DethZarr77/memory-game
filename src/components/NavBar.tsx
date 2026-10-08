import NavLinkItem from "./NavLinkItem";
import { routes } from "../config/router";

const NavBar = () => {
  return (
    <header>
      <nav className="w-full flex justify-center items-center p-4 bg-blue-500 gap-6">
        {routes.map(({ path, label }) => (
          <NavLinkItem key={path} to={path} label={label} />
        ))}
      </nav>
    </header>
  );
};

export default NavBar;
