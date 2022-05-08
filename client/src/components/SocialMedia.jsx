import React from "react";
import { BsTwitter, BsInstagram } from "react-icons/bs";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a href="https://twitter.com/riotgames" target="_blank">
          <BsTwitter />
        </a>
      </div>
      <div>
        <a href="https://www.instagram.com/riotgames/" target="_blank">
          <BsInstagram />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
