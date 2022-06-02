import React from "react";
import { Typography, Box, Grid, Button } from "@mui/material";
import Video from "../Video";
import Image from "next/image";

const VideoToPlay = () => {
  return (
    <>
      <Box sx={{ borderBottom: "1px solid #fff" }}>
        <Video src="/video1.mp4" width="90%" height="100%" controls={true} />
        <Typography variant="body1">Chapter 02</Typography>
        <Typography variant="subtitle1" my={1}>
          M1 Max MacBook Pro Review: Truly Next Level!
        </Typography>
        <Typography variant="caption" component="div">
          2757057 views . Nov 4,
        </Typography>
        <Typography variant="caption" component="div">
          2021
        </Typography>
      </Box>

      <Grid container mt={2} spacing={1}>
        <Grid item xs={1}>
          <Image
            src="/user1.jpg"
            alt="img"
            width={40}
            height={40}
            quality={100}
            objectFit="cover"
            className="bar-img"
          />
        </Grid>
        <Grid item xs={9}>
          <Typography variant="subtitle1">Heading Here</Typography>
          <Typography variant="caption" component="div">
            267k views
          </Typography>
          <Typography variant="caption" component="div">
            3 months
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Button variant="contained" color="warning" fullWidth>
            Subscribe
          </Button>
        </Grid>
      </Grid>

      <Grid container mt={2} spacing={1}>
        <Grid item xs={1}></Grid>
        <Grid item xs={11}>
          <Typography variant="subtitle2" mb={2}>
            The 14 and 16 MacBook Pros are incredible. I can finallly retire the
            travel iMac
          </Typography>
          <Typography variant="caption" component="div"> Link http://</Typography>
          <Typography variant="caption" component="div"> Link http://</Typography>
          <Typography variant="caption" component="div"> Link http://</Typography>
          <Typography variant="caption" component="div"> Link http://</Typography>
          <Typography variant="caption" component="div"> Link http://</Typography>
          <Typography variant="caption" component="div"> Link http://</Typography>
          <Typography variant="caption" component="div"> Link http://</Typography>
          <Typography variant="caption" component="div"> Link http://</Typography>
          <Typography variant="caption" component="div"> Link http://</Typography>
          <Typography variant="caption" component="div"> Link http://</Typography>
          <Typography variant="caption" component="div"> Link http://</Typography>
          <Typography variant="caption" component="div"> Link http://</Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default VideoToPlay;