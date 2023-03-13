import React, { useEffect, useState } from "react";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { MonileNav, Nav } from "./components/Nav";
import { Socials } from "./components/Socials";
import GlobalStyle from "./StyledComponents/GlobalStyle";

export const RootLayout = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const Resize = () => {
    window.addEventListener("resize", () => {
      setScreenWidth(window.innerWidth);
    });
  };
  useEffect(() => {
    Resize();
    return () => {
      Resize();
    };
  }, []);
  return (
    <Suspense fallback={"Loading.."}>
      <GlobalStyle />
      <Socials />
      {screenWidth < 640 ? <MonileNav /> : <Nav />}
      <Outlet />
    </Suspense>
  );
};
