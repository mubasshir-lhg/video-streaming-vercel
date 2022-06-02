import React from "react";
import { withRouter } from "next/router";
import { Grid } from "@mui/material";
import VideoToPlay from "../../components/Video/videoToPlay/videoToPlay";

const SingleVideo = ({ router }) => {
  console.log(router.query.videoDetail);
  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <VideoToPlay />
      </Grid>
      <Grid item xs={5}>
        chapters
      </Grid>
    </Grid>
  );
};

export default withRouter(SingleVideo);
