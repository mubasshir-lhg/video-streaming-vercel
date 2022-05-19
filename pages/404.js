import React from "react";
import { Typography, Box, Button } from "@mui/material";
import Link from "next/link";

const PageNotFound = () => {
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
      <Typography variant="h1">Page Not Found</Typography>
      <Button variant="contained" color="warning">
          <Link href='/'>Go To Home Page</Link>
      </Button>
    </Box>
  );
};

export default PageNotFound;
