import React, { useState } from "react";
import { styled } from "@mui/system";
import { homedata } from "../../../_mockup/Home";
import { Grid, Box, Button, Typography } from "@mui/material";
import { RequestModal } from "../../../components/Modal/RequestAVideo/RequestAVideo";
import Image from "next/image";
import Video from "../../../components/Video/Video";
import banner from "../../../assets/Images/banner.jpg";
import HomeCard from "../../../components/Cards/HomeCard/HomeCard";
import VideoCallOutlinedIcon from "@mui/icons-material/VideoCallOutlined";
import ChannelProfileCard from "../../../components/Cards/ChannelProfileCard/ChannelProfileCard";
import { useRouter } from "next/router";

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
  const router=useRouter()
  const [activeIndex, setActiveIndex] = useState(0);
  const [openRequestModal, setOpenRequestModal] = useState(false);

  const handleClick = (index) => {
    setActiveIndex(index);
  };
  const handleCloseModal = () => {
    setOpenRequestModal(false);
  };
  const goToPage=()=>{
    router.push('/home/playVideo')
  }
  const compToShow = () => {
    switch (activeIndex) {
      case 1: //recent video
        return homedata?.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={index}>
            <HomeCard channelProfile={true} item={item} onClick={goToPage}/>
          </Grid>
        ));
      case 2: // popula videos
        return homedata?.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={index}>
            <HomeCard channelProfile={true} item={item} onClick={goToPage}/>
          </Grid>
        ));

      default: // all videos
        return (
          <>
            <Grid item xs={12} container gap={4} mb={2}>
              <Grid item xs={12} md={5} xl={4}>
                <Video src="/video1.mp4" width="100%" my="0" />
              </Grid>
              <Grid item xs={12} md={6} xl={5}>
                <Typography variant="h5">Most View Video</Typography>
                <Typography variant="caption">
                  234k views . 3 months ago
                </Typography>
                <Typography variant="subtitle2" my={2}>
                  Laborum mollit in aliqua reprehenderit irure nulla ut
                  aute.Veniam consequat non ad officia ut ut minim cupidatat
                  nostrud non non tempor voluptate.
                </Typography>
                <Typography variant="body2">
                  Veniam consequat non ad officia ut ut minim cupidatat nostrud
                  non non tempor voluptate.
                </Typography>
              </Grid>
            </Grid>
            {homedata?.map((item, index) => (
              <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={index}>
                <HomeCard channelProfile={true} item={item} onClick={goToPage}/>
              </Grid>
            ))}
          </>
        );
    }
  };
  return (
    <>
      <Grid container>
        <Grid
          item
          xs={12}
          sx={{
            "& span": {
              height: "100% !important",
              width: "100% !important",
            },
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
              <Button
                variant="contained"
                color="info"
                onClick={() => setOpenRequestModal(true)}
                sx={{ ml: "auto" }}
              >
                <VideoCallOutlinedIcon />
              </Button>
              <Button variant="contained" color="warning" sx={{ ml: 1 }}>
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
        <Grid item xs={12} container spacing={1} mt={2}>
          {compToShow()}
        </Grid>
      </Grid>
      <RequestModal open={openRequestModal} handleClose={handleCloseModal} />
    </>
  );
};

export default ChannelProfile;
