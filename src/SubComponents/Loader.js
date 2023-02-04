import React from "react";
import styled, { keyframes } from "styled-components";

const chomp1 = keyframes`
0% {transform: rotate(0deg)}
50% {  transform: rotate(45deg)}
100% {  transform: rotate(0deg)}
`;
const chomp2 = keyframes`
0% {transform: rotate(0deg)}
50% {  transform: rotate(-45deg)}
100% {  transform: rotate(0deg)}
`;
const move = keyframes`
0%, 100% { left: -100px}
0%, 48%  { transform: rotateY(0deg)}
50%, 100% {   transform: rotateY(180deg)}
50% {  left: 100%}
`;
const dot1 = keyframes`
0%,4% {
    background: #1E88E5;
    opacity: 1;
  }

  5%,94% {
    background: #F44336;
    opacity: 0;
  }

  95%,100% {
    background: #1E88E5;
    opacity: 1;
  }
`;
const dot2 = keyframes`
  0%,4% {
    background: #F44336;
    opacity: 1;
  }

  5%,94% {
    opacity: 0;
  }

  95%,100% {
    background: #F44336;
    opacity: 1;
  }
`;

const LoaderComponent = styled.div``;

const Circle = styled.div`
  position: relative;
  left: -100px;
  width: 0;
  height: 0;
  border: 50px solid #fdd835;
  border-radius: 50%;
  border-right-color: transparent;
  animation: ${move} 5s linear 0s infinite normal forwards;
  &:before {
    content: "";
    position: absolute;
    top: -50px;
    left: -50px;
    width: 0;
    height: 0;
    border: 50px solid #fdd835;
    border-radius: 50%;
    border-right-color: transparent;
    animation: ${chomp1} 0.25s ease-in-out 0s infinite normal forwards;
  }
  &:after {
    content: "";
    position: absolute;
    top: -50px;
    left: -50px;
    width: 0;
    height: 0;
    border: 50px solid #fdd835;
    border-radius: 50%;
    border-right-color: transparent;
    animation: ${chomp2} 0.25s ease-in-out 0s infinite normal forwards;
  }
`;

const Dots = styled.div`
  position: relative;
  top: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Dot = styled.div`
  position: relative;
  width: 10px;
  height: 10px;
  margin: 0 10px;
  border-radius: 50%;
  background: #1e88e5;
  animation: ${dot1} 5s linear 0s infinite none normal;
  &:nth-child(1) {
    animation-delay: 0s;
  }
  &:nth-child(2) {
    animation-delay: 0.25s;
  }

  &:nth-child(3) {
    animation-delay: 0.5s;
  }

  &:nth-child(4) {
    animation-delay: 0.75s;
  }

  &:nth-child(5) {
    animation-delay: 1s;
  }

  &:nth-child(6) {
    animation-delay: 1.25s;
  }

  &:nth-child(7) {
    animation-delay: 1.5s;
  }

  &:nth-child(8) {
    animation-delay: 1.75s;
  }

  &:nth-child(9) {
    animation-delay: 1.9s;
  }

  &:nth-child(10) {
    animation-delay: 2.1s;
  }
`;

const DotsTwo = styled.div`
  position: relative;
  top: 50px;
  left: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const DotTwo = styled.div`
  position: relative;
  left: -10px;
  width: 10px;
  height: 10px;
  margin: 0 10px;
  border-radius: 50%;
  background: #f44336;
  opacity: 0;
  animation: ${dot2} 5s linear 0s infinite none normal;
  &:nth-child(10) {
    animation-delay: 2.5s;
  }

  &:nth-child(9) {
    animation-delay: 2.75s;
  }

  &:nth-child(8) {
    animation-delay: 3s;
  }

  &:nth-child(7) {
    animation-delay: 3.25s;
  }

  &:nth-child(6) {
    animation-delay: 3.5s;
  }

  &:nth-child(5) {
    animation-delay: 3.75s;
  }

  &:nth-child(4) {
    animation-delay: 4s;
  }

  &:nth-child(3) {
    animation-delay: 4.25s;
  }

  &:nth-child(2) {
    animation-delay: 4.5s;
  }

  &:nth-child(1) {
    animation-delay: 4.6s;
  }
`;
const Container = styled.section`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 5;
  background-color: ${({ theme }) => theme.colors.Main};
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Loader = () => {
  return (
    <Container>
      <LoaderComponent>
        <Dots>
          <Dot />
          <Dot />
          <Dot />
          <Dot />
          <Dot />
          <Dot />
          <Dot />
          <Dot />
          <Dot />
          <Dot />
        </Dots>
        <DotsTwo>
          <DotTwo />
          <DotTwo />
          <DotTwo />
          <DotTwo />
          <DotTwo />
          <DotTwo />
          <DotTwo />
          <DotTwo />
          <DotTwo />
          <DotTwo />
        </DotsTwo>
        <Circle />
      </LoaderComponent>
    </Container>
  );
};
