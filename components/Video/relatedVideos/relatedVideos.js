import { Grid, Typography } from "@mui/material";
import React from "react";
import VideoWithTime from "../VideoWithTime/VideoWithTime";

const RelatedVideos = ({ item ,onClick}) => {
  const {
    videoSrc,
    title,
    authorName,
    authorImg,
    views,
    uploadTime,
    duration,
    description,
  } = item;
  return (
    <Grid container spacing={2} mt={1} alignItems="center" onClick={onClick}>
      <Grid item xs={6}  lg={5}>
        <VideoWithTime src={videoSrc} duration={duration} />
      </Grid>
      <Grid item xs={6}  lg={7}>
        <Typography variant="subtitle1">{title}</Typography>
        <Typography variant="caption" component="div">
          {authorName}
        </Typography>
        <Typography variant="caption" component="div">
          {views} views . {uploadTime}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default RelatedVideos;
