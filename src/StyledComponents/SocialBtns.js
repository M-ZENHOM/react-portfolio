import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

const SocialsContainer = styled.div`
  position: absolute;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  z-index: 1;
`;

const Icons = styled(motion.a)`
  color: ${({ theme }) => theme.colors.white};
  #light & {
    color: ${({ theme }) => theme.colors.lightTwo};
  }
  font-size: 40px;
  margin-left: 15px;
  @media (max-width: 767px) {
    font-size: 28px;
    margin-left: 10px;
  }
`;

const Socialline = styled(motion.span)`
  position: absolute;
  top: 40px;
  left: 0;
  width: 45%;
  height: 2px;
  background-color: ${({ theme }) => theme.colors.white};
  z-index: 1;
  #light & {
    background-color: ${({ theme }) => theme.colors.lightTwo};
  }
`;
const SociallineRight = styled(motion.span)`
  position: absolute;
  top: 40px;
  right: 0;
  width: 45%;
  height: 2px;
  background-color: ${({ theme }) => theme.colors.white};
  z-index: 1;
  #light & {
    background-color: ${({ theme }) => theme.colors.lightTwo};
  }
`;
export const SocialBtns = (props) => {
  return <SocialsContainer {...props}>{props.children}</SocialsContainer>;
};

export const Line = (props) => {
  return (
    <Socialline
      initial={{
        width: 0,
      }}
      animate={{
        width: "35%",
      }}
      transition={{
        type: "spring",
        duration: 1,
        delay: 0.8,
      }}
    >
      {props.children}
    </Socialline>
  );
};
export const LineRight = (props) => {
  return (
    <SociallineRight
      initial={{
        width: 0,
      }}
      animate={{
        width: "35%",
      }}
      transition={{
        type: "spring",
        duration: 1,
        delay: 0.8,
      }}
    >
      {props.children}
    </SociallineRight>
  );
};
export const SocialIcons = (props) => {
  return (
    <Icons
      initial={{ scale: 0 }}
      animate={{ scale: [0, 1, 1.5, 1] }}
      transition={{ type: "spring", duration: 1, delay: props.dealy }}
      href={props.place}
      target="_blank"
    >
      {props.children}
    </Icons>
  );
};
