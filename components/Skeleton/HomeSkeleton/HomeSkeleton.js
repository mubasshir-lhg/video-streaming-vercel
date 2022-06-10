import React from "react";
import { Skeleton, Box } from "@mui/material";

const HomeSkeleton = () => {
  return (
    <Box sx={{ width: "100%" }}>
      <Skeleton sx={{ height: 190 }} animation="wave" variant="rectangular" />
      <Box sx={{ display: "flex", alignItems: "center", gap: 5 }}>
        <Skeleton animation="wave" variant="circular" width={40} height={40} />
        <Box sx={{flexGrow:1,mt:2}}>
          <Skeleton animation="wave" height={20} width="80%" />
          <Skeleton animation="wave" height={20} width="40%" sx={{ mt: 2 }} />
        </Box>
      </Box>
    </Box>
  );
};

export default HomeSkeleton;
