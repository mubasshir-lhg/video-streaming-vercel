import { Grid, Box, Button, Typography } from "@mui/material";
import { styled } from "@mui/system";
import React, { useState } from "react";
import banner from "../../../assets/Images/banner.jpg";
import Image from "next/image";
import ChannelProfileCard from "../../../components/Cards/ChannelProfileCard/ChannelProfileCard";

const tabs = ["All", "Recent", "Popular"];
const TabsWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  marginTop:"8px",
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
        xs={12}
        sx={{
          "& span": { height: "100% !important", width: "100% !important" },
        }}
      >
        <Image src={banner} alt="banner" height={220} />
      </Grid>
      <Grid xs={12}>
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
      <Grid xs={12}>Recent video</Grid>
    </Grid>
  );
};

export default ChannelProfile;
