import React from "react";
import { NavLink } from "react-router-dom";
import {
  MotionHeading,
  NavLinks,
  NavStyle,
  MainContainer,
  MobileNavbar,
} from "../StyledComponents/NavStyle";
import {
  BiHomeHeart,
  BiStore,
  BiUserCircle,
  BiMailSend,
  BiCodeBlock,
} from "react-icons/bi";

export const Nav = () => {
  return (
    <MainContainer>
      <NavStyle>
        <NavLinks to="/">
          <MotionHeading y="200" type="spring" duration="1.5" dealy="0.5">
            Home
          </MotionHeading>
        </NavLinks>

        <NavLinks to="about">
          <MotionHeading y="200" type="spring" duration="1.5" dealy="0.6">
            About
          </MotionHeading>
        </NavLinks>
        <NavLinks to="skills">
          <MotionHeading y="200" type="spring" duration="1.5" dealy="0.7">
            Skills
          </MotionHeading>
        </NavLinks>
        <NavLinks to="projects">
          <MotionHeading y="200" type="spring" duration="1.5" dealy="0.8">
            projects
          </MotionHeading>
        </NavLinks>
        <NavLinks to="contact">
          <MotionHeading y="200" type="spring" duration="1.5" dealy="0.7">
            Contact
          </MotionHeading>
        </NavLinks>
      </NavStyle>
    </MainContainer>
  );
};

export const MonileNav = () => {
  return (
    <MobileNavbar>
      <NavLink to="/">
        <BiHomeHeart />
      </NavLink>
      <NavLink to="about">
        <BiUserCircle />
      </NavLink>
      <NavLink to="skills">
        <BiCodeBlock />
      </NavLink>
      <NavLink to="projects">
        <BiStore />
      </NavLink>
      <NavLink to="contact">
        <BiMailSend />
      </NavLink>
    </MobileNavbar>
  );
};
