import React from "react";
import styled from "styled-components";
import { FaExternalLinkAlt, FaCode } from "react-icons/fa";

const Box = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  @media (max-width: 911px) {
    flex-direction: column;
    text-align: center;
  }
`;
const Title = styled.h2`
  font-size: 26px;
  color: ${({ theme }) => theme.colors.heading};
  @media (max-width: 768px) {
    width: 250px;
  }
`;

const Description = styled.h2`
  font-size: calc(0.8em + 0.3vw);
  font-family: "Karla", sans-serif;
  font-weight: 500;
  width: 300px;
  color: ${({ theme }) => theme.colors.text};
  @media screen and (max-width: 768px) {
    font-size: 16px;
    text-align: center;
  }
`;
const Tags = styled.div`
  padding-top:555rem;
  display: flex;
  flex-wrap: wrap;
  color: ${({ theme }) => theme.colors.text};
  width: 300px;
  @media screen and (max-width: 768px) {
    font-size: 16px;
    text-align: center;
    width: calc(auto - 10px);
  }
`;
const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  width: 220px;
  margin-top: 20px;
  margin-left: 10px;
`;
const ImgHolder = styled.img`
  width: 900px;
  @media (max-width: 1170px) {
    width: 600px;
  }
  @media (max-width: 1024px) {
    width: 550px;
  }
  @media (max-width: 425px) {
    width: 400px;
  }
`;

const Details = styled.div`
  display: flex;
  justify-content: start;
  align-items: start;
  flex-direction: column;
  @media (max-width: 911px) {
    align-items: center;
    margin-bottom: 80px;
  }
`;

const Link = styled.a`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.heading};
  border: 1px solid ${({ theme }) => theme.colors.heading};
  padding: 6px 16px;
  svg {
    margin-left: 8px;
    margin-bottom: 3px;
  }
  &::before {
    content: "";
    position: absolute;
    width: 0;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.heading};
    top: 0;
    left: 0;
    z-index: -1;
    transition: 0.7s;
  }
  &:hover {
    color: ${({ theme }) => theme.colors.white};
  }
  &:hover::before {
    width: 100%;
  }
`;

const Card = (props) => {
  const { id, name, description, tech, demo, code, img } = props.data;

  return (
    <Box key={id}>
      <ImgHolder src={img} alt={name} />
      <Details>
        <Title>{name}</Title>
        <Description>{description}</Description>
        <Tags>{tech}</Tags>
        <Footer>
          <Link href={demo} target="_blank">
            Demo {<FaExternalLinkAlt />}
          </Link>
          <Link href={code} target="_blank">
            Code {<FaCode />}
          </Link>
        </Footer>
      </Details>
    </Box>
  );
};

export default Card;
