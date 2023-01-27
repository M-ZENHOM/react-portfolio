import React from "react";
import myName from "../assets/images/MYNAMEW.png";
import myImg from "../assets/images/MyPicThree.png";
import styled, { keyframes } from "styled-components";
import { motion as m } from "framer-motion";
import pattern from "../assets/images/patternW.png";
import { Typewriter } from "react-simple-typewriter";

const Container = styled(m.section)`
  postion: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
`;

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
`;

const Intro = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: column;
  font-size: 30px;
  img {
    width: 400px;
  }
  p {
    width: 600px;
    margin-top: 15px;
    color: ${({ theme }) => theme.colors.text};
  }
  span {
    color: ${({ theme }) => theme.colors.heading};
    #light & {
      color: ${({ theme }) => theme.colors.lightTwo};
    }
  }
  @media (max-width: 1200px) {
    font-size: 20px;
    img {
      width: 300px;
    }
    p {
      width: 350px;
    }
  }
  @media (max-width: 747px) {
    font-size: 20px;
    order: 2;
    padding-bottom: 150px;
    align-items: center;
    p {
      text-align: center;
    }
  }
`;

const MyImage = styled.img`
  width: 600px;
  @media (max-width: 1200px) {
    & {
      width: 400px;
    }
  }
  @media (max-width: 640px) {
    & {
      padding-top: 100px;
    }
  }
`;
const floatX = keyframes`
0% { transform: translateX(-10px) }
50% { transform: translateX(10px) }
100% { transform: translateX(-10px) }
`;
const Pattern = styled.img`
  position: absolute;
  top: 40%;
  left: -50px;
  width: 150px;
  animation: ${floatX} 2s ease infinite;
  z-index: -1;
  @media (max-width: 1300px) {
    opacity: 0.5;
  }
`;

export const Home = () => {
  return (
    <Container
      initial={{
        x: "-100%",
      }}
      animate={{ x: "0%" }}
      exit={{
        x: "100%",
      }}
      transition={{ duration: 0.5 }}
    >
      <Box>
        <Intro>
          <span>Hi, my name is</span>
          <img src={myName} alt="Mahmoud M Zenhom" />

          <p>
            <Typewriter
              words={[
                "I'm a Front End Developer ReactJs passionate about creating interactive applications and experiences on the web.",
              ]}
              typeSpeed={20}
            />
          </p>
        </Intro>
        <MyImage src={myImg} alt="Myimage" />
      </Box>
      <Pattern src={pattern} alt="Pattern" />
    </Container>
  );
};
