import { IoEyeSharp } from "react-icons/io5";

import React from "react";
import "./styles.scss";

const WebsiteLogo = ({ hasClosed }) => {
  return (
    <div className="website-logo-container">
      <IoEyeSharp />

      {!hasClosed && " Nonton"}
    </div>
  );
};

export { WebsiteLogo };
