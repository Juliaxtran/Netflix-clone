import React from "react";
import "./featured.scss";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

export const Featured = () => {
  return (
    <div className="featured">
      <img
        src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/84c20033850498.56ba69ac290ea.png"
        alt="avatar"
      />
      <div className="info">
        <img src="https://bloody-disgusting.com/wp-content/uploads/2022/05/stranger-t-22.png" alt="" />
        <span className="desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        </span>
        <div className="buttons">
          <button className="play">
            <PlayArrowIcon />
            <span>Play</span>
          </button>
          <button className="more">
            <InfoOutlinedIcon />
            <span> Info </span>
          </button>
        </div>
      </div>
    </div>
  );
};
