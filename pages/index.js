import React from "react";
import { Box, Grid } from "@mui/material";
import BasicSelect from "../components/Select/Select";
import Video from "../components/Video/Video";
import { useTheme } from "@mui/styles";

const options = ["Now", "Since published"];
const Home = () => {
  const doSomething = () => {};
  const { palette, shape,customShadows } = useTheme();
  const { gradients } = palette;

  return (
    <Box>
      <Box sx={{ my: 3, typography: "subtitle1" }}>
        <Grid container>
          <Grid item xs={8}>
            Dashboard
          </Grid>
          <Grid item xs={3} ml="auto">
            <BasicSelect
              placeholder="select any"
              options={options}
              onClick={doSomething}
            />
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          py: 5,
          px: 4,
          backgroundColor: "primary.main",
          borderRadius:shape.borderRadius,
          boxShadow: customShadows.z12,
        }}
      >
        <Grid container spacing={2} textAlign="center">
          <Grid item xs={12} md={6} lg={4} sx={{ borderRight: "1px solid" }}>
            Latest Video performance
            <Video src="/video1.mp4" />
          </Grid>
          <Grid item xs={12} md={6} lg={4} sx={{ borderRight: "1px solid" }}>
            Analytics
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            Most Viewed Video
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Home;
