import React from "react";
import Avatar from "@material-ui/core/Avatar";
import "./VideoCard.css";

function truncate(str, n) {
  return str?.length > n ? str.substr(0, n - 1) + "..." : str;
}

function VideoCard({
  image,
  channelAvatar,
  title,
  channel,
  views,
  timestamp,
  link,
}) {
  return (
    <div className="videoCard">
      <a href={link}>
        <img className="videoCard_thumbnail" src={image} alt="" />

        <div className="videoCard_info">
          <Avatar
            className="videoCard_avatar"
            alt={channel}
            src={channelAvatar}
          />
          <div className="videoCard_text">
            <h4>{truncate(title, 60)}</h4>
            <p>{channel}</p>
            <p>
              {views} • {timestamp}
            </p>
          </div>
        </div>
      </a>
    </div>
  );
}

export default VideoCard;
