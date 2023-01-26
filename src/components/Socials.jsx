import React from "react";
import {
  Line,
  LineRight,
  SocialBtns,
  SocialIcons,
} from "../StyledComponents/SocialBtns";
import { FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";

export const Socials = () => {
  return (
    <>
      <LineRight />
      <SocialBtns>
        <SocialIcons place="https://github.com/M-ZENHOM" dealy="1">
          <FaGithub />
        </SocialIcons>
        {/* <SocialIcons place="https://twitter.com/MAD_ZENHOM   " dealy="1.2">
          <FaTwitter />
        </SocialIcons>
        <SocialIcons
          place="https://www.instagram.com/mahmouud_zenhom/"
          dealy="1.4"
        >
          <FaInstagram />
        </SocialIcons> */}
      </SocialBtns>
      <Line />
    </>
  );
};
