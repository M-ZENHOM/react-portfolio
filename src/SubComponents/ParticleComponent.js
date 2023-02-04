import styled from "styled-components";
import JsonConfig from "./particlesjs-config.json";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { motion } from "framer-motion";

const Box = styled(motion.div)`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 0;
`;

const ParticlesComponent = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };
  const particlesLoaded = (Container) => {};

  return (
    <Box
      initial={{
        x: "-100%",
      }}
      animate={{ x: "0%" }}
      exit={{
        x: "180%",
      }}
      transition={{ duration: 0.5 }}
    >
      <Particles
        id="tsparticles"
        style={{ position: "absolute", top: 0 }}
        params={JsonConfig}
        loaded={particlesLoaded}
        init={particlesInit}
      />
    </Box>
  );
};

export default ParticlesComponent;
