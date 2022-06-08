import React from "react";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import { Typography, Box, IconButton, Grid } from "@mui/material";
import Image from "next/image";

const RequestCard = ({ item }) => {
  return (
    <Box py={2} px={4} sx={{ "&:hover": { backgroundColor: "primary.light" } }}>
      <Grid container spacing={2}>
        <Grid item xs={3}  md={2} lg={1}>
          <Image
            src={item.img}
            width={80}
            height={80}
            objectFit="cover"
            quality={100}
            alt="img"
            className="bar-img"
          />
        </Grid>
        <Grid item xs={12} sm={7}  md={8} order={{xs:2,sm:1}}>
          <Box sx={{ pb: 1, display: "flex", gap: { xs: "10px", md: "30px" } }}>
            <Typography>{item.userName}</Typography>
            <Typography variant="body2">{item.time}</Typography>
            <Typography variant="body2">{item.tag}</Typography>
          </Box>
          {item.comment}
        </Grid>
        <Grid item xs={2} md={2} lg={3} textAlign="right" order={{xs:1,sm:2}}>
          <IconButton>
            <VideoCallIcon />
          </IconButton>
        </Grid>
      </Grid>
    </Box>
  );
};

export default RequestCard;
