import React,{useState,useEffect} from "react";
import { Box, Grid, Typography, Divider } from "@mui/material";
import Video from "../../components/Video/Video";
import { useTheme } from "@mui/styles";
import { styled } from "@mui/system";
import millify from "millify";
import moment from "moment";
import {toast,ToastContainer} from "react-toastify";
import {channelSubscribers} from "../../services/analytics-sevices"
import InfoContainer from "../../components/InfoContainer/InfoContainer";
import {latestVideoPerformance,mostViewedVideo,last30Likes,last30Subscribe,last30Views} from "../../services/dashboard-services"
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
  const[latestVideo,setLatestVideo]=useState({})
  const[mostViewed,setMostViewed]=useState({})
  const[subscribers,setSubscribers]=useState(0)
  const[LastThirtyDayViews,set30DayViews]=useState(0)
  const[LastThirtyDayLikes,set30DayLikes]=useState(0)
  const[LastThirtyDaySubscribes,set30DaySubscribes]=useState(0)
  const fetchDasboardData=()=>{
    latestVideoPerformance()
      .then((res)=>setLatestVideo(res?.data))
      .catch((err)=>toast.error(err))

    mostViewedVideo()
      .then((res)=>setMostViewed(res?.data))
      .catch((err)=>toast.error(err))

    channelSubscribers()
    .then((res)=>setSubscribers(res?.data))
    .catch((err)=>toast.error(err))

    last30Views()
      .then((res)=>console.log(res?.last30dayviews))
      .catch((err)=>toast.error(err))
  }
  useEffect(()=>{
    fetchDasboardData()
  },[])
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
              <Video src={latestVideo?.videoLink} width="100%" controls={true} />
            </Box>
            <Typography variant="body1">
              {latestVideo?.description}
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
                <StyledBox>{millify(latestVideo?.views || 0)}</StyledBox>
                <StyledBox>{millify(latestVideo?.likes || 0)}</StyledBox>
                <StyledBox>{moment(latestVideo?.createdAt).format("Do MMM YYYY")}</StyledBox>
              </Grid>
            </Grid>
          </StyledGrid>
          <StyledGrid>
            <Typography variant="h6">Analytics</Typography>
            <Box sx={{ mt: 2, typography: { xs: "body1", sm: "body2" } }}>
              Current Subcriber
            </Box>
            <Typography variant="h3">{subscribers}</Typography>
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
              number="112"
            />
          </StyledGrid>
          <Grid item xs={12} lg={4} pr={{ xs: 0, lg: 2 }}>
            <Typography variant="h6"> Most Viewed Video</Typography>
            <Box sx={{ width: { xs: "100%", lg: "280px" } }}>
              <Video src={mostViewed?.videoLink} controls={true}  width="100%" />
            </Box>
            <Typography variant="body1">{mostViewed?.description}</Typography>
            <Grid
              container
              sx={{ typography: { xs: "body1", sm: "body2" }, mt: 2 }}
            >
              <Grid item xs={6}>
                {millify(mostViewed?.likes || 0)}
              </Grid>
              <Grid item xs={6}>
                {moment(mostViewed?.createdAt).format("Do MMM YYYY")}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </BoxContainer>
      <ToastContainer/>
    </Box>
  );
};

export default withAuth(Dashboard);
