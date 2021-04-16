import React from "react";
import TuneIcon from "@material-ui/icons/Tune";
import VideoRow from "./VideoRow";
import "./SearchPage.css";

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="filter">
        <TuneIcon className="tuneIcon" />
        <h4>FILTER</h4>
      </div>
      <hr />
      <VideoRow
        image="https://i.ytimg.com/vi/zHQ__bVC2yU/maxresdefault.jpg"
        avatarImage="https://yt3.ggpht.com/ytc/AAUvwnj3vaX_flWoDtangE-GbsoPgu4TudEmqSBH_5Li=s68-c-k-c0x00ffffff-no-rj"
        title="AirPods! 20 Amazing Things You Can Do With Them"
        views="3.2M"
        timestamp="11 months ago"
        channel="HotshotTek"
        description="The hidden airpods features everyone needs to know to unlock the airpods full potential on all its useful tips and tricks."
      />
      <VideoRow
        image="https://i.ytimg.com/vi/GzaDWMeg02A/maxresdefault.jpg"
        avatarImage="https://yt3.ggpht.com/ytc/AAUvwng-PqQkmc1xSWJtuxFdyqkG2p6Xpox8iH7jrhDP9g=s68-c-k-c0x00ffffff-no-rj"
        title="5 AirPod Tips and Features You Might Not Know"
        views="6.8M"
        timestamp="1 year ago"
        channel="zollotech"
        description="Airpods have a lot of features you may not be aware of that work on iOS 12 and Iphone, iPad, MacBook and even Apple Tv."
      />
      <VideoRow
        image="https://i.ytimg.com/vi/Z6UzkcSDUys/maxresdefault.jpg"
        avatarImage="https://yt3.ggpht.com/ytc/AAUvwnhA5urOkfbyHJmM6ekqBZlqjakqAB34CiiO1k57jA=s68-c-k-c0x00ffffff-no-rj"
        title="NEW AirPods 2 with Wireless Charging Unboxing!"
        views="2.3M"
        timestamp="1 year ago"
        channel="iJustine"
        description="Unboxing and testing out Apple's new AirPods 2!"
      />
    </div>
  );
}

export default SearchPage;
