import { Box, Button, Divider, Grid } from "@mui/material";
import React from "react";
import BoxContainer from "../components/BoxContainer/BoxContainer";
import PageHeader from "../components/PageHeader/PageHeader";
import Video from "../components/Video/Video";

const Subtitles = () => {
  return (
    <Box>
      <PageHeader title="Dashboard" />
      <BoxContainer>
        <Grid container textAlign={{ xs: "center", md: "left" }}>
          <Grid xs={12} md={8}>
            <Video
              src="/video1.mp4"
              width="90%"
              height="100%"
              borderRadius="24px"
            />
          </Grid>
          <Grid xs={12} md={4}>
            <Button
              variant="contained"
              color="warning"
              fullWidth
              size="large"
              sx={{ my: 2 }}
            >
              Add New Subtitle or CC
            </Button>
            <Box sx={{ borderTop: "1px solid #fff", my: 4 }}></Box>
            <Box>PUBLISHED</Box>
            <Button
              variant="contained"
              color="secondary"
              fullWidth
              size="large"
              sx={{ mt: 2 }}
            >
              Add New Subtitle or CC
            </Button>
          </Grid>
        </Grid>
      </BoxContainer>
    </Box>
  );
};

export default Subtitles;
