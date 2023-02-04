import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";
import { ResponsiveContainer } from "../components/ResponsiveContainer";

const NavContainer = styled.nav`
  width: clamp(20%, 1200px, 85%);
  border-radius: 6px;
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-53%);
  display: flex;
  justify-content: space-around;
  align-items: center;
  z-index: 1;
  margin: 0 auto;
`;

const MainNavStyle = styled(NavLink)`
  color: ${({ theme }) => theme.colors.white};
  &.active {
    h2 {
      border-top: 2px solid ${({ theme }) => theme.colors.white};
    }
  }
`;
const MobileContainer = styled(motion.ul)`
  width: clamp(50%, 700px, 90%);
  border-radius: 6px;
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: space-around;
  align-items: center;
  z-index: 1;
  height: 6vh;
  background-color: #778da938;
  a {
    font-size: 30px;
    line-height: 20px;
    color: ${({ theme }) => theme.colors.white};
    &.active {
      color: ${({ theme }) => theme.colors.white};
      border-bottom: 2px solid ${({ theme }) => theme.colors.white};
    }
  }
`;
const HeadingMotion = styled(motion.h2)`
  color: ${({ theme }) => theme.colors.Txt};
  font-size: 20px;
  text-transform: uppercase;
  i {
    position: fixed;
    top: 50px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 50px;
    z-index: 999;
  }
`;

export const MainContainer = (props) => {
  return <ResponsiveContainer {...props}>{props.children}</ResponsiveContainer>;
};
export const MobileNavbar = (props) => {
  return (
    <MobileContainer
      initial={{
        x: "-50%",
        y: 200,
        transition: {
          type: "spring",
          duration: 1.5,
        },
      }}
      animate={{
        y: 0,
        transition: {
          type: "spring",
          duration: 1.5,
        },
      }}
      {...props}
    >
      {props.children}
    </MobileContainer>
  );
};
export const NavLinks = (props) => {
  return <MainNavStyle {...props}>{props.children}</MainNavStyle>;
};
export const NavStyle = (props) => {
  return <NavContainer {...props}>{props.children}</NavContainer>;
};
export const MotionHeading = (props) => {
  return (
    <HeadingMotion
      initial={{
        y: props.y,
        transition: {
          type: props.type,
          duration: props.duration,
          delay: props.dealy,
        },
      }}
      animate={{
        y: 0,
        transition: {
          type: props.type,
          duration: props.duration,
          delay: props.dealy,
        },
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      {props.children}
    </HeadingMotion>
  );
};
