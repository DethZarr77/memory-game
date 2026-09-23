import React from "react";

type MainLayoutProps = {
  children: React.ReactNode;
};
const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="flex-1 bg-slate-300 text-black w-full mx-auto max-w-3xl py-2 px-4">
      {children}
    </div>
  );
};

export default MainLayout;
