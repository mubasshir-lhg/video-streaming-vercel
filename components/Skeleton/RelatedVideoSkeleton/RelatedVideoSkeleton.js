import React from "react";
import { Skeleton, Box } from "@mui/material";

const RelatedVideosSkeleton = () => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        gap: 5,
        mt: 1,
      }}
    >
      <Skeleton
        sx={{ height: 100, width: 150 }}
        animation="wave"
        variant="rectangular"
      />
      <Box sx={{ flexGrow: 1 }}>
        <Skeleton animation="wave" height={20} width="80%" />
        <Skeleton animation="wave" height={20} width="50%" sx={{ mt: 1 }} />
        <Skeleton animation="wave" height={20} width="40%" sx={{ mt: 1 }} />
      </Box>
    </Box>
  );
};

export default RelatedVideosSkeleton;
