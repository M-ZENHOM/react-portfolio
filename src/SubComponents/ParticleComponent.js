import styled from "styled-components";
import JsonConfig from "./particlesjs-config.json";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const Box = styled.div`
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

  return (
    <Box>
      <Particles
        id="tsparticles"
        style={{ position: "absolute", top: 0 }}
        params={JsonConfig}
        init={particlesInit}
      />
    </Box>
  );
};

export default ParticlesComponent;
