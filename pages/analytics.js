import React, { useState } from "react";
import { Box, Grid } from "@mui/material";
import { useTheme } from "@mui/styles";
import BoxContainer from "../components/BoxContainer/BoxContainer";
import InfoContainer from "../components/InfoContainer/InfoContainer";
import { styled } from "@mui/system";
//icons
import VisibilityIcon from "@mui/icons-material/Visibility";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import PageHeader from "../components/PageHeader/PageHeader";
//chart data
import { userData } from "../components/Chart/data";
import LineChart from "../components/Chart/LineChart";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  box: {
   "& canvas":{
     width:'98% !important'
   }
  },
});

const LinksWrapper = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  gap: "50px",
  marginBottom: "20px",
});

const subLinks = ["Overview", "Subscribers", "Views", "Most viewed Video"];
const Analytics = () => {
  const styles=useStyles()
  const { palette } = useTheme();
  const { gradients } = palette;
  const [activeIndex, setActiveIndex] = useState(0);
  const [chartData, setChartData] = useState({
    labels: userData.map((data) => data.date),
    datasets: [
      {
        label: "views",
        data: userData.map((data) => data.views),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "#fff",
        borderWidth: 1,
        tension: 0.5,
        title: {
          display: false,
        },
      },
    ],
  });

  const handleClick = (ind) => {
    setActiveIndex(ind);
  };

  const compToShow = () => {
    switch (activeIndex) {
      case 0:
        return (
          <BoxContainer>
            <Box sx={{ typography: "subtitle1" }}>
              Your Channel has gotten 3,492,332 views so for
            </Box>
            <Grid container spacing={2} sx={{ flexWrap: "wrap" }}>
              <Grid item xs={6} md={4} lg={2}>
                <InfoContainer
                  background={gradients.purple}
                  icon={<VisibilityIcon />}
                  tag="Views"
                  number="15K"
                  shape="vertical"
                />
              </Grid>
              <Grid item xs={6} md={4} lg={2}>
                <InfoContainer
                  background={gradients.warning}
                  icon={<ThumbUpAltIcon />}
                  tag="Likes"
                  number="15K"
                  shape="vertical"
                />
              </Grid>
              <Grid item xs={6} md={4} lg={2}>
                <InfoContainer
                  icon={<SubscriptionsIcon />}
                  tag="Subscribers"
                  number="15K"
                  shape="vertical"
                />
              </Grid>
              <Grid item xs={12}>
                <Box className={styles.box}>
                  <LineChart chartData={chartData}  />
                </Box>
              </Grid>
            </Grid>
          </BoxContainer>
        );
      case 1:
        return <BoxContainer>subscriber</BoxContainer>;
      case 2:
        return <BoxContainer>views</BoxContainer>;
      case 3:
        return <BoxContainer>most viewed videos</BoxContainer>;
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
            {item}
          </Box>
        ))}
      </LinksWrapper>
      {compToShow()}
    </Box>
  );
};

export default Analytics;
