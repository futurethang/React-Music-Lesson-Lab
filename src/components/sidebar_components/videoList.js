import React, { Component } from "react";
import VideoListItem from "./videoListItem";

const style = {
  wrapper: {
    overflow: "scroll"
    // maxHeight: "100%",
    // minHeight:
  }
};

function VideoList(props) {
  return (
    <div className="POST-CONTROL component" style={style.wrapper}>
      {props.videos.map(video => {
        return <VideoListItem video={video} {...props} />;
        // passing in loadFromList, listViewState, queueVideo, removeVideo
      })}
    </div>
  );
}

export default VideoList;
