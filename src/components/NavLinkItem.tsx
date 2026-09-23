import React from "react";
import { NavLink } from "react-router";

type NavLinkItemProps = {
  to: string;
  label: string;
};

const NavLinkItem = ({ to, label }: NavLinkItemProps) => {
  return (
    <NavLink
      to={to}
      className={({ isActive, isPending, isTransitioning }) =>
        [
          isPending ? "pending" : "",
          isActive ? "bg-blue-200 text-blue-800 rounded-lg " : "",
          isTransitioning ? "transitioning" : "",
          "text-black font-bold py-2 px-3"
        ].join(" ")
      }
    >
      {label}
    </NavLink>
  );
};

export default NavLinkItem;
