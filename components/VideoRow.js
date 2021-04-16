import React from "react";
import "./VideoRow.css";
import { Avatar } from "@material-ui/core";

function VideoRow({
  image,
  avatarImage,
  title,
  views,
  timestamp,
  channel,
  description,
}) {
  return (
    <div className="videoRow">
      <img src={image} alt="" />
      <div className="videoRow_text">
        <h3>{title}</h3>
        <p>
          {views} views • {timestamp}
        </p>
        <div className="videoRow_channel">
          <Avatar className="channelRow_logo" alt={channel} src={avatarImage} />
          <p>{channel}</p>
        </div>
        <div className="videoRow_description">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default VideoRow;
