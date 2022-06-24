import { Avatar, Box, Typography } from "@mui/material";
import React from "react";

const ChannelProfileCard = () => {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Avatar
        src="/user1.jpg"
        alt="img"
        size="large"
        sx={{ mr: 2, width: 76, height: 76 }}
      />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Typography variant="h5">John Doe</Typography>
        <Typography variant="body1">76k subscribers</Typography>
      </Box>
    </Box>
  );
};

export default ChannelProfileCard;
