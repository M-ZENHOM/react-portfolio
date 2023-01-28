import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import { FiMail, FiInstagram, FiTwitter } from "react-icons/fi";
import { GrLinkedinOption } from "react-icons/gr";

const Container = styled(motion.section)`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
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
    width: 300px;
    transform: translateX(-50%);
    height: 2px;
    background-color: ${({ theme }) => theme.colors.white};
  }
`;
const Desciption = styled.p`
  font-size: 20px;
  color: ${({ theme }) => theme.colors.heading};
  width: 470px;
  text-align: center;
  @media (max-width: 640px) {
    & {
      width: 300px;
    }
  }
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 30px;
  margin-top: 50px;
`;

const Iconbox = styled(motion.a)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 155px;
  height: 139px;
  background-color: ${(props) => props.color};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 30px;
  transition: 0.5s;
  svg {
    font-size: 90px;
  }
  &:hover {
    background-color: ${({ theme }) => theme.colors.black};
    transition: 0.5s;
  }
`;

export const Icon = (props) => {
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

export const Contact = () => {
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
      <Wrapper>
        <Title>REACH ME TO OUT!</Title>
        <Desciption>
          DISCUSS A PROJECT OR JUST WANT TO SAY HI? MY INBOX IS OPEN FOR ALL.
        </Desciption>
        <IconWrapper>
          <Icon dealy="0.1" href="mailto:zenhom@gmail.com" color="#EA4335">
            <FiMail />
          </Icon>
          <Icon
            dealy="0.2"
            href="https://www.linkedin.com/in/mahmoud-zenhom/"
            color="#0E76A8"
          >
            <GrLinkedinOption />
          </Icon>
          <Icon
            dealy="0.3"
            href="https://www.instagram.com/mahmouud_zenhom/"
            color="#B632A2"
          >
            <FiInstagram />
          </Icon>
          <Icon
            dealy="0.4"
            href="https://twitter.com/MAD_ZENHOM"
            color="#1D9BF0"
          >
            <FiTwitter />
          </Icon>
        </IconWrapper>
      </Wrapper>
    </Container>
  );
};
