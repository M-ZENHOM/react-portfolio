import { motion as m } from "framer-motion";
import styled from "styled-components";
import { ResponsiveContainer } from "../components/ResponsiveContainer";
import ParticlesComponent from "../SubComponents/ParticleComponent";

const Section = styled(m.section)`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  margin-bottom: 50px;
`;

const Point = styled.li`
  position: relative;
  text-align: start;
  letter-spacing: 1px;
  width: 800px;
  height: 150px;
  padding: 30px;
  font-size: 20px;
  z-index: 1;
  transition: 0.5s;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.text};
  border: 3px solid ${({ theme }) => theme.colors.heading};
  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    width: 5px;
    height: 50px;
    background-color: ${({ theme }) => theme.colors.heading};
    transform: translateY(-50%);
    z-index: -1;
  }
  &:hover {
    transform: scale(1.1) translateX(-10px);
    font-weight: bold;
  }
  &:hover::before {
    transition: 0.75s;
    width: 100%;
    height: 100%;
  }
  @media (max-width: 991px) {
    width: auto;
    height: 150px;
    padding: 15px;
    font-size: 20px;
  }
  @media (max-width: 768px) {
    width: auto;
    padding: 15px;
    font-size: 14px;
  }
`;

export const About = () => {
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
        <Point>
          I'm a Front end developer based out of Egypt, I love combining the
          worlds of logic and creative design to make eye-catching, accessible,
          and user-friendly websites and applications.
        </Point>
        <Point>
          Technology leads, society follows. The move towards increasing
          inclusivity and diversity in the industry through representation is of
          importance to me.
        </Point>
        <Point>
          I'm excited to make the leap and continue refining my skills with the
          right company.
        </Point>
      </Section>
      <ParticlesComponent />
    </ResponsiveContainer>
  );
};
