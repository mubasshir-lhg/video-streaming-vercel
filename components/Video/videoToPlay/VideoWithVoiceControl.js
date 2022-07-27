import React from "react";
import { Box } from "@mui/material";
import ReactPlayer from "react-player";
const VideoWithVoiceControl = ({ src, width, mx, my, isPlaying }) => {
  console.log("isPlaying", isPlaying);
  return (
    <Box sx={{ width: width || 240, my: my || 2, mx: mx || 0 }}>
      <ReactPlayer
        url={src}
        muted
        controls
        playing={isPlaying}
        width="100%"
        height="100%"
        loop
        className="react-player"
      />
    </Box>
  );
};

export default VideoWithVoiceControl;
