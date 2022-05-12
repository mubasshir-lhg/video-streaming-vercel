import React from "react";
import { Box, Grid, Typography, Divider } from "@mui/material";
import BasicSelect from "../components/Select/Select";
import Video from "../components/Video/Video";
import { useTheme, styled } from "@mui/styles";
import InfoContainer from "../components/InfoContainer/InfoContainer";
//iccon
import VisibilityIcon from "@mui/icons-material/Visibility";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";

const StyledBox = styled(Box)({
  marginBottom: "10px",
});

const StyledGrid = (props) => (
  <Grid
    item
    xs={12}
    md={6}
    lg={4}
    sx={{
      borderBottom: { xs: "1px solid", md: "none" },
      borderRight: { md: "1px solid" },
      px: 2,
    }}
  >
    {props.children}
  </Grid>
);

const options = ["Now", "Since published"];
const Home = () => {
  const doSomething = () => {};
  const { palette, shape, customShadows } = useTheme();
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
          borderRadius: shape.borderRadius,
          boxShadow: customShadows.z12,
        }}
      >
        <Grid
          container
          spacing={2}
          textAlign="left"
          sx={{ typography: "subtitle1" }}
        >
          <StyledGrid>
            Latest Video performance
            <Video src="/video1.mp4" />
            <Typography variant="body1">
              Top 10 travel tips for biggeners travel thailand, bail, Phuket,
            </Typography>
            <Grid container sx={{ typography: "body2", mt: 2 }}>
              <Grid item xs={6}>
                <StyledBox>Views</StyledBox>
                <StyledBox>Views</StyledBox>
                <StyledBox>Views</StyledBox>
              </Grid>
              <Grid item xs={6} textAlign="center">
                <StyledBox>245 k</StyledBox>
                <StyledBox>15 k</StyledBox>
                <StyledBox>5:00</StyledBox>
              </Grid>
            </Grid>
          </StyledGrid>
          <StyledGrid>
            Analytics
            <Typography variant="body2" sx={{ mt: 2 }}>
              Current Subcriber
            </Typography>
            <Typography variant="h3">152</Typography>
            <Divider sx={{ my: 3 }} />
            <Typography variant="body1">Summary</Typography>
            <Typography variant="body2">last 30 Days</Typography>
            <InfoContainer
              background={gradients.purple}
              icon={<VisibilityIcon />}
              tag="Views"
              number="15K"
            />
            <InfoContainer
              background={gradients.warning}
              icon={<ThumbUpAltIcon />}
              tag="Likes"
              number="10K"
            />
            <InfoContainer
              icon={<ThumbUpAltIcon />}
              tag="Subscriber"
              number="112"
            />
          </StyledGrid>
          <Grid item xs={12} md={6} lg={4} pr={2}>
            Most Viewed Video
            <Video src="/video1.mp4" />
            <Typography variant="body1">M1 Max macBook pro Review</Typography>
            <Grid container sx={{ typography: "body2", mt: 2 }}>
              <Grid item xs={6}>
                153k
              </Grid>
              <Grid item xs={6}>
                10 Mar 2022-Now
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Home;
