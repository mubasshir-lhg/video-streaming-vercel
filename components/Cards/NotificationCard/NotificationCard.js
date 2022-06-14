import { Avatar, Box, Typography } from "@mui/material";
import React from "react";

const NotificationCard = ({ item }) => {
  const { senderImg, senderName, rectime, senderText } = item;
  return (
    <>
      <Avatar src={senderImg} alt="img" sizes="small" sx={{ mr: 1 }} />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Typography variant="body2">
          {senderName} . {rectime}
        </Typography>
        <Typography
          variant="body2"
          sx={{ maxWidth: "200px", overflowWrap: "break-word" }}
          noWrap
        >
          {senderText}
        </Typography>
      </Box>
    </>
  );
};

export default NotificationCard;
