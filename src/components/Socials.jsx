import React from "react";
import {
  Line,
  LineRight,
  SocialBtns,
  SocialIcons,
} from "../StyledComponents/SocialBtns";
import { FaGithub } from "react-icons/fa";

export const Socials = () => {
  return (
    <>
      <LineRight />
      <SocialBtns>
        <SocialIcons place="https://github.com/M-ZENHOM" dealy="1">
          <FaGithub />
        </SocialIcons>
      </SocialBtns>
      <Line />
    </>
  );
};
