import { Avatar, Button } from "@material-ui/core";
import React, { useState } from "react";
import db from "./firebase";
import "./TweetBox.css";

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      displayName: "mace",
      username: "mace",
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar:
        "https://lh3.googleusercontent.com/ogw/ADGmqu8Nr813rCbSDC_jkRiSTK7J122rszn0FkfHOwuN=s83-c-mo",
    });

    setTweetMessage("");
    setTweetImage("");
  };

  return (
    <div className="tweetBox">
      <form type="submit">
        <div className="tweetBox__input">
          <Avatar src="https://lh3.googleusercontent.com/ogw/ADGmqu8Nr813rCbSDC_jkRiSTK7J122rszn0FkfHOwuN=s83-c-mo" />
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            placeholder="What's hapening?"
            value={tweetMessage}
            type="text"
          />
        </div>
        <input
          onChange={(e) => setTweetImage(e.target.value)}
          value={tweetImage}
          placeholder="Optional: Enter Image URL"
          type="text"
          className="tweetBox__imageInput"
        />
        <Button onClick={sendTweet} className="tweetBox__tweetButton">
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;
