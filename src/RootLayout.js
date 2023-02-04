import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { MonileNav, Nav } from "./components/Nav";
import { Socials } from "./components/Socials";
import GlobalStyle from "./StyledComponents/GlobalStyle";
import { Loader } from "./SubComponents/Loader";

export const RootLayout = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [isLoading, setIsLoading] = useState(true);
  const Loaded = () => {
    window.addEventListener("load", () => {
      setIsLoading(false);
    });
  };
  const Resize = () => {
    window.addEventListener("resize", () => {
      setScreenWidth(window.innerWidth);
    });
  };
  useEffect(() => {
    Loaded();
    Resize();
    return () => {
      Loaded();
      Resize();
    };
  }, []);
  return (
    <>
      {isLoading && <Loader />}
      <GlobalStyle />
      <Socials />
      {screenWidth < 640 ? <MonileNav /> : <Nav />}
      <Outlet />
    </>
  );
};
