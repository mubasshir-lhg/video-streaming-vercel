import React from "react";
import { Box } from "@mui/material";
import { useTheme } from "@mui/styles";
const Video = ({ src }) => {
  const { shape, customShadows } = useTheme();
  return (
    <Box sx={{ width: 240, height: 170, my: 2, mx: "auto" }}>
      <video
        width="100%"
        controls
        style={{
          borderRadius: shape.borderRadiusMd,
          boxShadow: customShadows.z1,
        }}
      >
        <source src={src} type="video/mp4" />
      </video>
    </Box>
  );
};

export default Video;
