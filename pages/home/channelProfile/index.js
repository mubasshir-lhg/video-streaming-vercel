import { Grid, Box, Button, Typography } from "@mui/material";
import { styled } from "@mui/system";
import React,{useState} from "react";
import banner from "../../../assets/Images/banner.jpg";
import Image from "next/image";
import ChannelProfileCard from "../../../components/Cards/ChannelProfileCard/ChannelProfileCard";

const tabs = ["HOME,VIDEOS,PLAYLIST,ABOUT"];
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
const ChannelProfile = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Grid container>
      <Grid xs={12}>
        <Image
          src={banner}
          alt="banner"
          className="w-100"
          width={1800}
          height={300}
        />
      </Grid>
      <Grid xs={12}>
        <Box
          sx={{
            bgcolor: "secondary.dark",
            px: 4,
            py: 3,
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <ChannelProfileCard />
            <Button variant="contained" color="warning">
              SUBSCRIBE
            </Button>
          </Box>
          <Box sx={{ mt: 2 }}>
            <LinksWrapper>
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
            </LinksWrapper>
          </Box>
        </Box>
      </Grid>
      <Grid xs={12}>Recent video</Grid>
      <Grid xs={12}>Upload Video</Grid>
      <Grid xs={12}>Popular Video</Grid>
    </Grid>
  );
};

export default ChannelProfile;
