import { motion as m } from "framer-motion";
import styled from "styled-components";
import ParticlesComponent from "../SubComponents/ParticleComponent";

const Container = styled(m.section)`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
`;

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const Point = styled.li`
  position: relative;
  text-align: start;
  letter-spacing: 1px;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.text};
  #light & {
    background-color: ${({ theme }) => theme.colors.lightTwo};
  }
  width: 800px;
  height: 150px;
  padding: 30px;
  font-size: 20px;
  z-index: 1;
  transition: 0.5s;
  margin-bottom: 10px;
  border: 3px solid ${({ theme }) => theme.colors.heading};
  #light & {
    border: 3px solid ${({ theme }) => theme.colors.lightThree};
  }
  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    width: 5px;
    height: 50px;
    background-color: ${({ theme }) => theme.colors.heading};
    #light & {
      background-color: ${({ theme }) => theme.colors.lightThree};
    }
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

  @media (max-width: 768px) {
    width: 700px;
    height: 160px;
    padding: 15px;
  }
  @media (max-width: 640px) {
    width: 370px;
    height: 160px;
    font-size: 16px;
    padding: 15px;
  }
`;

export const About = () => {
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
        {/* <ParticlesComponent /> */}
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
      </Box>
    </Container>
  );
};
