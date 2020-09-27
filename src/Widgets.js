import React from "react";
import "./Widgets.css";
import SearchIcon from "@material-ui/icons/Search";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";

function Widgets() {
  return (
    <div className="widgets">
      <h2>Widgets</h2>
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>

      <div className="widgets__widgetContainer">
        <h2>What's happening?</h2>

        <TwitterTweetEmbed tweetId={"1309891775352516608"} />

        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="Mace69768964"
          options={{ height: 400 }}
        />

        <TwitterShareButton
          url={"https://facebook-clone-9dc4c.web.app/"}
          options={{ text: "#reactjs is awesome", via: "cleverqazi" }}
        />
      </div>
    </div>
  );
}

export default Widgets;
