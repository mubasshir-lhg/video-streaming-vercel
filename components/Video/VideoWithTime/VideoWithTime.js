import { styled } from "@mui/system";
import { Box } from "@mui/material";

const VideoWrapper = styled(Box)({
  position: "relative !important",
  cursor: "pointer",
  "&:hover": {
    transform: "scale(1.02)",
  },
});

const VideoTime = styled(Box)(({ theme }) => ({
  position: "absolute !important",
  bottom: 20,
  right: 0,
  padding: "5px 20px",
  borderRadius: "30px",
  backgroundColor: theme.palette.primary.main,
}));

import React from "react";
import Video from "../Video";

const VideoWithTime = ({ src, duration }) => {
  return (
    <VideoWrapper>
      <Video src={src} width="100%" height="100%" controls={false} />
      <VideoTime>{duration}</VideoTime>
    </VideoWrapper>
  );
};

export default VideoWithTime;
