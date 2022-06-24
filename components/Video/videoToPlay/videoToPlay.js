import React from "react";
import { Typography, Box, Grid, Button } from "@mui/material";
import Link from "next/link";
import Video from "../Video";
import Image from "next/image";

const VideoToPlay = ({ item }) => {
  const { videoSrc, title } = item;
  return (
    <>
      <Box sx={{ borderBottom: "1px solid #fff" }}>
        <Video src={videoSrc} width="100%" height="100%" controls={true} />
        <Typography variant="body1">Chapter 02</Typography>
        <Typography variant="subtitle1" my={1}>
          {title}
        </Typography>
        <Typography variant="caption" component="div">
          2757057 views . Nov 4,
        </Typography>
        <Typography variant="caption" component="div">
          2021
        </Typography>
      </Box>

      <Grid container mt={2} spacing={1}>
        <Grid item xs={2} sm={1}>
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
        <Grid item xs={7} sm={9} md={8} lg={9} sx={{ cursor: "pointer" }}>
          <Typography variant="subtitle1">
            <Link href="/home/channelProfile">John Doe</Link>
          </Typography>
          <Typography variant="caption" component="div">
            267k views
          </Typography>
          <Typography variant="caption" component="div">
            3 months
          </Typography>
        </Grid>
        <Grid item xs={12} sm={2} md={3} lg={2}>
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
          <Typography variant="caption" component="div">
            Link http://
          </Typography>
          <Typography variant="caption" component="div">
            Link http://
          </Typography>
          <Typography variant="caption" component="div">
            Link http://
          </Typography>
          <Typography variant="caption" component="div">
            Link http://
          </Typography>
          <Typography variant="caption" component="div">
            Link http://
          </Typography>
          <Typography variant="caption" component="div">
            Link http://
          </Typography>
          <Typography variant="caption" component="div">
            Link http://
          </Typography>
          <Typography variant="caption" component="div">
            Link http://
          </Typography>
          <Typography variant="caption" component="div">
            Link http://
          </Typography>
          <Typography variant="caption" component="div">
            Link http://
          </Typography>
          <Typography variant="caption" component="div">
            Link http://
          </Typography>
          <Typography variant="caption" component="div">
            Link http://
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default VideoToPlay;
