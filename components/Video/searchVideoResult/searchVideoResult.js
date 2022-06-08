import React from "react";
import VideoWithTime from "../VideoWithTime/VideoWithTime";
import { Avatar, Grid, Typography, Box, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const SearchVideoResult = ({ item, onClick }) => {
  const { breakpoints } = useTheme();
  const isSmDown = useMediaQuery(breakpoints.down("sm"));

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
    <Grid
      container
      spacing={{ xs: 0.5, sm: 1, lg: 2, xl: 4 }}
      onClick={onClick}
    >
      <Grid item xs={6} lg={3}>
        <VideoWithTime src={videoSrc} duration={duration} />
      </Grid>
      <Grid item xs={6} lg={9}>
        <Typography variant="subtitle1" mb={{xs:0.1,sm:1}}>
          {isSmDown ? title.substring(0, 15) + "..." : title}
        </Typography>
        <Typography variant="caption">
          {views} views . {uploadTime}
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            typography: "subtile2",
            gap: 1,
            my: {xs:0.2,sm:1},
          }}
        >
          <Avatar
            src={authorImg}
            alt="img"
            sx={{ width: { xs: 24, sm: 48 }, height: { xs: 24, sm: 48 } }}
          />
          {authorName}
        </Box>
        <Typography variant="body2">
          {isSmDown ? description.substring(0, 15) + "..." : description}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default SearchVideoResult;
