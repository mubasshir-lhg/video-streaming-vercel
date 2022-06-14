import { Avatar, Box, Typography } from "@mui/material";
import React from "react";

const NotificationCard = () => {
  return (
    <>
      <Avatar src="/user1.jpg" alt="img" sizes="small" sx={{ mr: 1 }} />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Typography variant="body2">John Doe . 2 minutes ago</Typography>
        <Typography
          variant="body2"
          sx={{ maxWidth: "200px", overflowWrap: "break-word" }}
          noWrap
        >
          this is your notification Ex sint proident culpa in ipsum in tempor
          sint excepteur adipisicing.
        </Typography>
      </Box>
    </>
  );
};

export default NotificationCard;
