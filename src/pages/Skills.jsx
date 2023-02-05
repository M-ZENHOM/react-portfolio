import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
// import photoshopIcon from "../assets/images/photoshop.png";
import tailWindIcon from "../assets/SVG/tailwind-css.svg";
import styeldIcon from "../assets/SVG/styled-components.svg";
import {
  FaReact,
  FaSass,
  FaJsSquare,
  FaHtml5,
  FaGitAlt,
  FaBootstrap,
} from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { ResponsiveContainer } from "../components/ResponsiveContainer";

const Section = styled(motion.section)`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const Title = styled.h2`
  position: relative;
  color: ${({ theme }) => theme.colors.white};
  font-size: 40px;
  font-weight: normal;
  margin-bottom: 30px;
  &::before {
    content: "";
    position: absolute;
    top: 110%;
    left: 50%;
    width: 200px;
    transform: translateX(-50%);
    height: 2px;
    background-color: ${({ theme }) => theme.colors.white};
  }
`;
const Desciption = styled.p`
  font-size: 20px;
  color: ${({ theme }) => theme.colors.heading};
  width: 700px;
  text-align: center;
  @media (max-width: 640px) {
    & {
      width: 320px;
      font-size: 16px;
    }
  }
`;

const IconWrapper = styled.div`
  max-width: 900px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 30px;
  margin-top: 50px;
`;

const Iconbox = styled(motion.a)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 155px;
  height: 139px;
  text-transform: uppercase;
  background-color: ${(props) => props.color};
  color: #fff;
  border-radius: 30px;
  transition: 0.5s;
  img {
    width: 80px;
    margin-bottom: 5px;
  }
  svg {
    font-size: 90px;
  }
  &:hover {
    svg,
    img {
      transform: rotateZ(360deg);
      transition: 0.9s;
    }
  }
  @media (max-width: 640px) {
    width: 90px;
    height: 70px;
    border-radius: 5px;
    font-size: 14px;
    img {
      width: 45px;
    }
    svg {
      font-size: 35px;
    }
    transition: 0.5s;
  }
`;

const Icon = (props) => {
  return (
    <Iconbox
      target="_blank"
      initial={{
        x: 200,
        opacity: 0,
        transition: {
          duration: 0.75,
          delay: props.dealy,
        },
      }}
      animate={{
        x: 0,
        opacity: 1,
        transition: {
          duration: 0.75,
          delay: props.dealy,
        },
      }}
      {...props}
    >
      {props.children}
    </Iconbox>
  );
};

export const Skills = () => {
  return (
    <ResponsiveContainer>
      <Section
        initial={{
          x: "-100%",
        }}
        animate={{ x: "0%" }}
        exit={{
          x: "180%",
        }}
        transition={{ duration: 0.5 }}
      >
        <Title>WHAT I DO!</Title>
        <Desciption>
          Develop highly interactive and responsive Front end / User Interfaces
          for your web and mobile applications
        </Desciption>
        <IconWrapper>
          <Icon dealy="0.1" color="#1e88e5">
            <FaReact />
            Reactjs
          </Icon>
          <Icon dealy="0.2" color="#cc6699">
            <FaSass />
            SASS
          </Icon>
          <Icon dealy="0.3" color="#f39304">
            <FaJsSquare />
            JS
          </Icon>
          <Icon dealy="0.3" color="#7046b2">
            <SiRedux />
            Redux
          </Icon>
          <Icon dealy="0.4" color="#e56027">
            <FaHtml5 />
            html5
          </Icon>
          <Icon dealy="0.4" color="#5e3b7f">
            <FaBootstrap />
            bootstrap
          </Icon>
          <Icon dealy="0.4" color="#f15233">
            <FaGitAlt />
            git
          </Icon>
          {/* <Icon dealy="0.4" color="#5438DC">
            <img src={photoshopIcon} alt="photoshopIcon" />
          </Icon> */}
          <Icon dealy="0.4" color="#333745">
            <img src={tailWindIcon} alt="tailwindIcon" />
            tailwind
          </Icon>
          <Icon dealy="0.4" color="#bd3f9e">
            <img src={styeldIcon} alt="tailwindIcon" />
            StyledComp
          </Icon>
          {/* <Icon dealy="0.4" color="#254bdd">
            <FaCss3Alt />
            CSS3
          </Icon> */}
        </IconWrapper>
      </Section>
    </ResponsiveContainer>
  );
};
