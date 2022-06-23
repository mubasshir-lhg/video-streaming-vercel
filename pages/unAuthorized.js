import React from "react";
import { Typography, Box, Button } from "@mui/material";
import Link from "next/link";

const NotAuthorize = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height: "600px",
      }}
    >
      <Typography variant="h2">Sorry you are not Authorized</Typography>
      <Box sx={{ display: "flex", gap: 2, alignItems: "center", mt: 2 }}>
        <Button variant="contained" color="purple" sx={{ width: "170px" }}>
          <Link href="./auth/login">Login</Link>
        </Button>
        <Button variant="contained" color="warning" sx={{ width: "170px" }}>
          <Link href="/">Go To Home Page</Link>
        </Button>
      </Box>
    </Box>
  );
};

export default NotAuthorize;
