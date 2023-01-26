import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";

const NavContainer = styled.nav`
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
  @media (max-width: 1000px) {
    & {
      width: calc(100% - 40px);
    }
  }
`;

const MainNavStyle = styled(NavLink)`
  color: ${({ theme }) => theme.colors.white};
  #light & {
    color: ${({ theme }) => theme.colors.lightTwo};
  }
  &.active {
    h2 {
      border-bottom: 2px solid ${({ theme }) => theme.colors.white};
      #light & {
        border-bottom: 2px solid ${({ theme }) => theme.colors.lightTwo};
      }
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
  #light & {
    background-color: ${({ theme }) => theme.colors.lightTwo};
  }
  a {
    font-size: 30px;
    line-height: 20px;
    color: ${({ theme }) => theme.colors.white};

    &.active {
      color: ${({ theme }) => theme.colors.white};
      border-bottom: 2px solid ${({ theme }) => theme.colors.white};
    }
  }

  @media (max-width: 1000px) {
    & {
      width: calc(100% - 40px);
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
const Container = styled.div`
  margin: 0 auto;
  padding: 0 15px;
  @media (min-width: 768px) {
    & {
      width: 750px;
    }
  }
  @media (min-width: 992px) {
    & {
      width: 970px;
    }
  }
  @media (min-width: 1200px) {
    & {
      width: 1170px;
    }
  }
  @media (min-width: 1700px) {
    & {
      width: 1600px;
    }
  }
`;

export const MainContainer = (props) => {
  return <Container {...props}>{props.children}</Container>;
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
