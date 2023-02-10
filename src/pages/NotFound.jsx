import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import { Typewriter } from "react-simple-typewriter";
import { useNavigate } from "react-router-dom";

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
  @media (max-width: 1100px) {
    margin-left: ${(props) => props.margin};
  }
`;
const Text = styled(motion.h2)`
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 50%;
  top: ${(props) => props.top};
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.heading};
  font-size: ${(props) => props.fontSize};
  height: 100%;
  width: auto;
`;
const Btn = styled.button`
  padding: 10px 30px;
  outline: none;
  border: none;
  background-color: ${({ theme }) => theme.colors.heading};
  color: #fff;
  border-radius: 10px;
  margin-top: 15px;
  font-size: 19px;
  cursor: pointer;
  transition: 0.5s;
  &:hover {
    background-color: ${({ theme }) => theme.colors.black};
    transition: 0.5s;
  }
`;
const NumContainer = (props) => {
  return <Num {...props}>{props.children}</Num>;
};

const Description = (props) => {
  return <Text {...props}>{props.children}</Text>;
};

export const NotFound = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Description top="-200px" fontSize="50px">
        Oops!
      </Description>
      <NumContainer
        left="50%"
        initial={{
          left: "-100%",
        }}
        animate={{
          left: "42%",
          transition: { type: "spring", duration: 1 },
        }}
        exit={{
          left: "-100%",
        }}
        transition={{ duration: 0.75 }}
        margin="-50px"
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
        left="50%"
        initial={{
          left: "100%",
        }}
        animate={{ left: "58%", transition: { type: "spring", duration: 1 } }}
        exit={{
          left: "120%",
        }}
        transition={{ duration: 0.75 }}
        margin="50px"
      >
        4
      </NumContainer>
      <Description top="150px" fontSize="30px">
        <Typewriter
          words={["We can't find the page you 're lookin for."]}
          typeSpeed={20}
        />
        <Btn onClick={() => navigate("/", { replace: true })}>GO TO HOME</Btn>
      </Description>
    </Container>
  );
};
