import { Button, Grid } from "@mui/material";
import React from "react";
import SplitChapterCard from "../components/Cards/SplitChapterCard/SplitChapterCard";
import Video from "../components/Video/Video";

const SplitChapters = () => {
  return (
    <Grid container spacing={4} justifyContent="center">
      <Grid item xs={8}>
        <Video src="video1.mp4" width="100%" height="100%" />
      </Grid>
      <Grid item xs={8} container spacing={1} justifyContent="center">
        <Grid item xs={12} md={6} xl={3}>
          <SplitChapterCard header="Intro" startTime="00:00" endTime="01:00" />
        </Grid>
        <Grid item xs={12} md={6} xl={3}>
          <SplitChapterCard header="Specs" startTime="01:00" endTime="03:00" />
        </Grid>
        <Grid item xs={12} md={6} xl={3}>
          <SplitChapterCard header="Review" startTime="03:00" endTime="04:00" />
        </Grid>
        <Grid item xs={12} md={6} xl={3}>
          <SplitChapterCard
            header="Pricing"
            startTime="04:00"
            endTime="05:00"
          />
        </Grid>
      </Grid>
      <Grid item xs={8} container spacing={1} justifyContent="center">
          <Grid item xs={12} md={6} lg={3}><Button variant="outlined" color='purple' fullWidth>Cancel</Button> </Grid>
          <Grid item xs={12} md={6} lg={3}><Button variant="contained" color='purple' fullWidth>Split Chapters</Button> </Grid>
      </Grid>
    </Grid>
  );
};

export default SplitChapters;
