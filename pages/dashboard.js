import React from "react";
import { Box, Grid, Typography, Divider } from "@mui/material";
import Video from "../components/Video/Video";
import { useTheme } from "@mui/styles";
import { styled } from "@mui/system";
import InfoContainer from "../components/InfoContainer/InfoContainer";
import BoxContainer from "../components/BoxContainer/BoxContainer";
//icon
import VisibilityIcon from "@mui/icons-material/Visibility";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import PageHeader from "../components/PageHeader/PageHeader";

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
      pb:2,
    }}
  >
    {props.children}
  </Grid>
);

const Home = () => {
  const { palette } = useTheme();
  const { gradients } = palette;

  return (
    <Box>
      <PageHeader title='Dashboard'/>
      <BoxContainer>
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
              icon={<SubscriptionsIcon />}
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
      </BoxContainer>
    </Box>
  );
};

export default Home;
