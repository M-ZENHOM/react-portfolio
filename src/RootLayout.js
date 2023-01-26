import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { MonileNav, Nav } from "./components/Nav";
import { Socials } from "./components/Socials";
import GlobalStyle from "./StyledComponents/GlobalStyle";

export const RootLayout = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);
  return (
    <>
      <GlobalStyle />
      <Socials />
      {screenWidth < 640 ? <MonileNav /> : <Nav />}
      <Outlet />
    </>
  );
};
