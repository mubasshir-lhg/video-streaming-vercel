import React, { useState,useEffect } from "react";
import { Box, Grid, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/styles";
import {channelLikes,channelSubscribers,channelViews} from "../../services/analytics-sevices"
import BoxContainer from "../../components/BoxContainer/BoxContainer";
import InfoContainer from "../../components/InfoContainer/InfoContainer";
import { styled } from "@mui/system";
import withAuth from "../../HOC/ProtectedRoutes";
import millify from "millify";
import {toast,ToastContainer} from "react-toastify";
//icons
import VisibilityIcon from "@mui/icons-material/Visibility";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import PageHeader from "../../components/PageHeader/PageHeader";
import LineChart from "../../components/Chart/LineChart";
import { makeStyles } from "@mui/styles";
import MuiTable from "../../components/Table/Table";
//data
import { datasets } from "../../components/Chart/data";
import { rows, coloms, rows2, coloms2 } from "../../_mockup/Table";
import MuiTable2 from "../../components/Table/Table2";
const useStyles = makeStyles({
  box: {
    "& canvas": {
      width: "98% !important",
    },
  },
});

const LinksWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  gap: "50px",
  marginBottom: "20px",
  [theme.breakpoints.down("sm")]: {
    gap: "16px",
    flexWrap: "wrap",
  },
}));

const subLinks = ["Overview", "Subscribers", "Views", "Most viewed Video"];
const Analytics = () => {
  const styles = useStyles();
  const { palette, breakpoints } = useTheme();
  const { gradients } = palette;
  const [activeIndex, setActiveIndex] = useState(0);
  const [chartData, setChartData] = useState(datasets);
  const isMdDown = useMediaQuery(breakpoints.down("md"));
  const isSmDown = useMediaQuery(breakpoints.down("sm"));
  const[subscribers,setSubscribers] = useState(0)
  const[totalLikes,setTotalLikes] = useState(0)
  const[totalViews,setTotalViews] = useState(0)
  const fetchAnalyticsDetail=()=>{
    channelSubscribers()
      .then((res)=>setSubscribers(res?.data))
      .catch((err)=>toast.error(err))
    
      channelLikes()
      .then((res) => setTotalLikes(res?.data?.totalLikes))
      .catch((err) =>toast.error(err))
    
      channelViews()
      .then((res) => setTotalViews(res?.data?.totalViews))
      .catch((err) => toast.error(err))
  }
  useEffect(()=>{
    fetchAnalyticsDetail()
  },[])
  const handleClick = (ind) => {
    setActiveIndex(ind);
  };

  const compToShow = () => {
    switch (activeIndex) {
      case 0:
        return (
          <BoxContainer>
            <Box sx={{ typography: "subtitle1" }}>
              <Typography variant="subtitle1">
                Your Channel has gotten {totalViews} views so for
              </Typography>
            </Box>
            <Grid container spacing={2}>
              <Grid item xs={12} md={4} lg={3} xl={2}>
                <InfoContainer
                  background={gradients.purple}
                  icon={<VisibilityIcon />}
                  tag="Views"
                  number={millify(totalViews)}
                  shape={isSmDown ? "" : isMdDown ? "horizontal" : "vertical"}
                />
              </Grid>
              <Grid item xs={12} md={4} lg={3} xl={2}>
                <InfoContainer
                  background={gradients.warning}
                  icon={<ThumbUpAltIcon />}
                  tag="Likes"
                  number={millify(totalLikes)}
                  shape={isSmDown ? "" : isMdDown ? "horizontal" : "vertical"}
                />
              </Grid>
              <Grid item xs={12} md={4} lg={3} xl={2}>
                <InfoContainer
                  icon={<SubscriptionsIcon />}
                  tag="Subscribers"
                  number={millify(subscribers)}
                  shape={isSmDown ? "" : isMdDown ? "horizontal" : "vertical"}
                />
              </Grid>
              <Grid item xs={12}>
                <Box className={styles.box}>
                  <LineChart chartData={chartData} />
                </Box>
              </Grid>
            </Grid>
          </BoxContainer>
        );
      case 1:
        return (
          <BoxContainer>
            <Box sx={{ typography: "subtitle1" }}>View All subscribers</Box>
              <MuiTable rows={rows} coloms={coloms} />
          </BoxContainer>
        );
      case 2:
        return (
          <BoxContainer>
            <Box sx={{ typography: "subtitle1" }}>
              Your Channel got 153k views in the last 28 days
            </Box>
            <Grid container spacing={2} sx={{ flexWrap: "wrap" }}>
              <Grid item xs={12} md={7} lg={5}>
                <InfoContainer
                  background={gradients.purple}
                  tag="Views"
                  number="153K"
                  shape={isSmDown ? "" : "horizontal"}
                />
              </Grid>
              <Grid item xs={12}>
                <Box className={styles.box}>
                  <LineChart chartData={chartData} />
                </Box>
              </Grid>
            </Grid>
          </BoxContainer>
        );
      case 3:
        return (
          <BoxContainer>
            <Box sx={{ typography: "subtitle1" }}>Most View Video</Box>
            <MuiTable2 rows={rows2} coloms={coloms2} />
          </BoxContainer>
        );
      default:
        break;
    }
  };
  return (
    <Box>
      <PageHeader title="Channel States" />
      <LinksWrapper>
        {subLinks?.map((item, index) => (
          <Box
            key={index}
            sx={{
              cursor: "pointer",
              borderBottom: activeIndex === index && "1px solid #fff",
            }}
            onClick={() => handleClick(index)}
          >
           <Typography variant="subtitle1"> {item}</Typography>
          </Box>
        ))}
      </LinksWrapper>
      {compToShow()}
      <ToastContainer/>
    </Box>
  );
};

export default withAuth(Analytics);
