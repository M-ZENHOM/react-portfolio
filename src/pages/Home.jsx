import React from "react";
import myName from "../assets/images/MYNAMEW.png";
import myImg from "../assets/images/MyPicThree.png";
import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";
import pattern from "../assets/images/patternW.png";
import { Typewriter } from "react-simple-typewriter";
import { ResponsiveContainer } from "../components/ResponsiveContainer";

const Section = styled(motion.section)`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  flex-wrap: wrap;
  overflow: hidden;
  @media screen and (max-width: 768px) {
    padding-bottom: 20px;
  }
`;
const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  span {
    color: ${({ theme }) => theme.colors.heading};
    font-size: 25px;
    width: 500px;
    margin: 5px 0;
  }
  @media (max-width: 1200px) {
    span {
      width: 420px;
      font-size: 25px;
    }
  }
  @media (max-width: 991px) {
    align-items: center;
    text-align: center;
    order: 2;
    padding-bottom: 25px;
    span {
      font-size: 20px;
    }
  }

  @media (max-width: 450px) {
    span {
      width: auto;
      font-size: 16px;
    }
  }
`;
const ImgLogo = styled.img`
  width: 400px;
  @media (max-width: 991px) {
    width: 300px;
  }
  @media (max-width: 768px) {
    width: 250px;
  }
`;
const MainImg = styled.img`
  width: 550px;
  @media (max-width: 1200px) {
    width: 450px;
  }
  @media (max-width: 991px) {
    order: 1;
  }
  @media (max-width: 768px) {
    width: 300px;
  }
`;
const floatX = keyframes`
0% { margin-left: -10px }
50% {  margin-left:10px }
100% {  margin-left: -10px }
`;
const Pattern = styled.img`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translate(-50%, -50%);
  width: 150px;
  animation: ${floatX} 2s ease infinite;
  @media (max-width: 991px) {
    opacity: 0.3;
    z-index: -1;
  }
`;

export const Home = () => {
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
        <TextBox>
          <span>Hi, my name is</span>
          <ImgLogo
            src={myName}
            alt="Mahmoud M Zenhom"
            width="auto"
            height="auto"
          />
          <Typewriter
            words={[
              "A passionate Front End Developer having an experience of building Web with JavaScript / Reactjs / Redux/toolkit and some other cool libraries and frameworks.",
            ]}
            typeSpeed={20}
          />
        </TextBox>
        <MainImg src={myImg} alt="Zenhom Img" width="auto" height="auto" />
      </Section>
      <Pattern src={pattern} alt="Pattern" width="auto" height="auto" />
    </ResponsiveContainer>
  );
};
