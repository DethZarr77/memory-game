import React from "react";
import { Outlet } from "react-router";
import NavBar from "./components/NavBar";
import MainLayout from "./components/MainLayout";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <MainLayout>
        <Outlet />
      </MainLayout>
    </React.Fragment>
  );
}

export default App;
