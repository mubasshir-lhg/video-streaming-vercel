import React, { useState } from "react";
import { styled } from "@mui/system";
import { homedata } from "../../../_mockup/Home";
import { Grid, Box, Button, Typography } from "@mui/material";
import banner from "../../../assets/Images/banner.jpg";
import Image from "next/image";
import Video from "../../../components/Video/Video";
import ChannelProfileCard from "../../../components/Cards/ChannelProfileCard/ChannelProfileCard";
import HomeCard from "../../../components/Cards/HomeCard/HomeCard";

const tabs = ["All", "Recent", "Popular"];
const TabsWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  marginTop: "8px",
  gap: "50px",
  [theme.breakpoints.down("sm")]: {
    gap: "16px",
    flexWrap: "wrap",
  },
}));
const FlexBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});
const ChannelProfile = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index) => {
    setActiveIndex(index);
  };
  return (
    <Grid container>
      <Grid
        item
        xs={12}
        sx={{
          "& span": { height: "100% !important", width: "100% !important" },
        }}
      >
        <Image src={banner} alt="banner" height={220} />
      </Grid>
      <Grid item xs={12}>
        <Box
          sx={{
            bgcolor: "secondary.dark",
            px: 4,
            py: 3,
          }}
        >
          <FlexBox>
            <ChannelProfileCard />
            <Button variant="contained" color="warning">
              SUBSCRIBE
            </Button>
          </FlexBox>
          <TabsWrapper>
            {tabs?.map((item, index) => (
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
          </TabsWrapper>
        </Box>
      </Grid>
      <Grid item xs={12} container gap={4} my={4}>
        <Grid item xs={4}>
          <Video src="/video1.mp4" width="100%" my="0" />
        </Grid>
        <Grid item xs={5}>
          <Typography variant="h5">Most View Video</Typography>
          <Typography variant="caption">234k views . 3 months ago</Typography>
          <Typography variant="subtitle2" my={2}>
            Laborum mollit in aliqua reprehenderit irure nulla ut aute.Veniam
            consequat non ad officia ut ut minim cupidatat nostrud non non
            tempor voluptate.
          </Typography>
          <Typography variant="body2">
            Veniam consequat non ad officia ut ut minim cupidatat nostrud non
            non tempor voluptate.
          </Typography>
        </Grid>
      </Grid>
      <Grid item xs={12} container spacing={2}>
        {homedata?.map((item, index) => (
          <Grid item xs={2} key={index}>
            <HomeCard channelProfile={true} item={item} />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default ChannelProfile;
