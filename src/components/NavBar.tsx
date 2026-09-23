import NavLinkItem from "./NavLinkItem";

const NavBar = () => {
  return (
    <header>
      <nav className="w-full flex justify-center items-center p-4 bg-blue-500 gap-6">
        <NavLinkItem to={"/"} label="Home" />
        <NavLinkItem to={"/new-game"} label="New game" />
      </nav>
    </header>
  );
};

export default NavBar;
