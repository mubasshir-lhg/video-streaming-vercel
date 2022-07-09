import React,{useState} from "react";
import { Box, Grid, Typography, Divider } from "@mui/material";
import Video from "../../components/Video/Video";
import { useTheme } from "@mui/styles";
import { styled } from "@mui/system";
import InfoContainer from "../../components/InfoContainer/InfoContainer";
import BoxContainer from "../../components/BoxContainer/BoxContainer";
//icon
import VisibilityIcon from "@mui/icons-material/Visibility";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import PageHeader from "../../components/PageHeader/PageHeader";
import withAuth from "../../HOC/ProtectedRoutes";

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
      px: { xs: 0.5, sm: 1, lg: 2 },
      pb: 2,
    }}
  >
    {props.children}
  </Grid>
);

const Dashboard = () => {
  const { palette } = useTheme();
  const { gradients } = palette;
  const[subscribers,setSubscribers]=useState(0)
 
  return (
    <Box>
      <PageHeader title="Dashboard" />
      <BoxContainer>
        <Grid
          container
          spacing={2}
          textAlign="left"
          sx={{ typography: "subtitle1" }}
        >
          <StyledGrid>
            <Typography variant="h6">Latest Video performance</Typography>
            <Box sx={{ width: { xs: "100%", lg: "280px" } }}>
              <Video src='/video1.mp4' width="100%" controls={true} />
            </Box>
            <Typography variant="body1">
              Anim in nostrud aute ea exercitation.
            </Typography>
            <Grid
              container
              sx={{ typography: { xs: "body1", sm: "body2" }, mt: 2 }}
            >
              <Grid item xs={6}>
                <StyledBox>Views</StyledBox>
                <StyledBox>Likes</StyledBox>
                <StyledBox>Created At</StyledBox>
              </Grid>
              <Grid item xs={6} textAlign="center">
                <StyledBox>123k</StyledBox>
                <StyledBox>10M</StyledBox>
                <StyledBox>12-07-22</StyledBox>
              </Grid>
            </Grid>
          </StyledGrid>
          <StyledGrid>
            <Typography variant="h6">Analytics</Typography>
            <Box sx={{ mt: 2, typography: { xs: "body1", sm: "body2" } }}>
              Current Subcriber
            </Box>
            <Typography variant="h3">152</Typography>
            <Divider sx={{ my: 3 }} />
            <Typography variant="body1">Summary</Typography>
            <Box sx={{ typography: { xs: "body1", sm: "body2" } }}>
              last 30 Days
            </Box>
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
              number="152"
            />
          </StyledGrid>
          <Grid item xs={12} lg={4} pr={{ xs: 0, lg: 2 }}>
            <Typography variant="h6"> Most Viewed Video</Typography>
            <Box sx={{ width: { xs: "100%", lg: "280px" } }}>
              <Video src='/video3.mp4' controls={true}  width="100%" />
            </Box>
            <Typography variant="body1">Sint amet ad ut adipisicing aliqua eu incididunt</Typography>
            <Grid
              container
              sx={{ typography: { xs: "body1", sm: "body2" }, mt: 2 }}
            >
              <Grid item xs={6}>
                250k
              </Grid>
              <Grid item xs={6}>
                3 months ago
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </BoxContainer>
    </Box>
  );
};

export default withAuth(Dashboard);
