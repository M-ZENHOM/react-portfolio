import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import { Typewriter } from "react-simple-typewriter";

const Container = styled(motion.div)`
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
`;

const Num = styled(motion.div)`
  position: absolute;
  left: ${(props) => props.left};
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 150px;
  height: 100%;
  #light & {
    color: ${({ theme }) => theme.colors.lightTwo};
  }
  @media (max-width: 640px) {
  }
`;
const Text = styled(motion.h2)`
  position: absolute;
  left: 50%;
  top: ${(props) => props.top};
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.heading};
  font-size: ${(props) => props.fontSize};
  #light & {
    color: ${({ theme }) => theme.colors.lightTwo};
  }
  height: 100%;
`;
const NumContainer = (props) => {
  return <Num {...props}>{props.children}</Num>;
};

const Description = (props) => {
  return <Text {...props}>{props.children}</Text>;
};

export const NotFound = () => {
  return (
    <Container>
      <Description top="-200px" fontSize="50px">
        Oops!
      </Description>
      <NumContainer
        left="45%"
        initial={{
          left: "-100%",
        }}
        animate={{ left: "45%", transition: { type: "spring", duration: 1 } }}
        exit={{
          left: "-100%",
        }}
        transition={{ duration: 0.75 }}
      >
        4
      </NumContainer>
      <NumContainer
        left="50%"
        initial={{
          top: "-100%",
        }}
        animate={{ top: 0, transition: { type: "spring", duration: 1 } }}
        exit={{
          top: "-100%",
        }}
        transition={{ duration: 0.75 }}
      >
        0
      </NumContainer>
      <NumContainer
        left="55%"
        initial={{
          left: "100%",
        }}
        animate={{ left: "55%", transition: { type: "spring", duration: 1 } }}
        exit={{
          left: "120%",
        }}
        transition={{ duration: 0.75 }}
      >
        4
      </NumContainer>
      <Description top="150px" fontSize="30px">
        <Typewriter
          words={["We can't find the page you 're lookin for."]}
          typeSpeed={20}
        />
      </Description>
    </Container>
  );
};
